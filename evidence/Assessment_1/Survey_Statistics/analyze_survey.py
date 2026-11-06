#!/usr/bin/env python3
"""Reproduce descriptive survey counts using only the Python standard library.

Default input: Full_Responses_Public.csv in this folder.
The input retains the supplied answers; skips, blanks and spreadsheet error
strings are not changed to zero. This script never edits the source data.
"""
from pathlib import Path
import argparse
import collections
import csv
import hashlib
import json
import re
import statistics


def choice(value):
    """Read the Chinese option before its bilingual English translation."""
    return str(value or '').split(' / ', 1)[0].strip()


def number(value, allow_hours=False):
    text = str(value or '').strip()
    suffix = r'\s*(?:小时)?' if allow_hours else ''
    match = re.fullmatch(r'(\d+(?:\.\d+)?)' + suffix, text)
    return float(match[1]) if match else None


def multichoices(value):
    return [choice(part) for part in str(value or '').split('┋')
            if part and choice(part) not in ['(空)', '(跳过)']]


def yes(value):
    return choice(value) == '是'


def main_eligible(row):
    return choice(row['Q1']).startswith('同意') and all(yes(row['Q'+str(q)]) for q in [2,3,4,5])


def describe(rows):
    minutes = [(r['ID'], number(r['Q15'])) for r in rows if number(r['Q15']) is not None]
    budget = [r['ID'] for r in rows if '预算' in multichoices(r['Q17'])]
    time = [r['ID'] for r in rows if '可用时间' in multichoices(r['Q17'])]
    missed = [r for r in rows if yes(r['Q21'])]
    willing = [r['ID'] for r in rows if choice(r['Q32']) in ['肯定会', '可能会']]
    return {
        'responses': len(rows),
        'ids': [r['ID'] for r in rows],
        'budget_constraint_q17': {'n':len(budget),'denominator':len(rows),'percent':round(len(budget)/len(rows)*100,1) if rows else None,'ids':budget},
        'available_time_constraint_q17': {'n':len(time),'denominator':len(rows),'percent':round(len(time)/len(rows)*100,1) if rows else None,'ids':time},
        'q17_multiselect_counts': dict(collections.Counter(v for r in rows for v in multichoices(r['Q17']))),
        'preference_conflict_q19': sum(yes(r['Q19']) for r in rows),
        'missed_shared_stop_q21':len(missed),
        'coordination_main_cause_q23':{'n':sum(choice(r['Q23'])=='难以达成一致或协调耗时' for r in missed),'conditional_denominator':len(missed)},
        'coordination_minutes_q15': {'numeric_n':len(minutes),'median':statistics.median(n for _,n in minutes) if minutes else None,'zero_count':sum(n==0 for _,n in minutes),'response_minutes':[{'id':i,'minutes':n} for i,n in minutes]},
        'q32_counts':dict(collections.Counter(choice(r['Q32']) for r in rows)),
        'concept_trial_intention_q32':{'n':len(willing),'denominator':len(rows),'percent':round(len(willing)/len(rows)*100,1) if rows else None,'ids':willing},
        'same_group_status_q6':dict(collections.Counter(choice(r['Q6']) for r in rows)),
        'reported_group_size_q8':dict(collections.Counter(choice(r['Q8']) for r in rows)),
        'visitor_type_q11':dict(collections.Counter(choice(r['Q11']) for r in rows)),
        'shanghai_report_ids_q9':[r['ID'] for r in rows if '上海' in r['Q9']],
        'planning_difficulty_3_or_4_q30':sum(choice(r['Q30']).startswith(('3','4')) for r in rows),
    }


def analyse(path):
    with path.open(encoding='utf-8-sig', newline='') as handle:
        reader=csv.DictReader(handle)
        expected=['ID']+['Q'+str(i) for i in range(1,35)]
        if reader.fieldnames!=expected:
            raise ValueError('Expected the 35 columns ID,Q1,...,Q34 in the full publication CSV.')
        rows=list(reader)
    ids=[r['ID'] for r in rows]
    if len(ids)!=len(set(ids)):
        raise ValueError('Response IDs are not unique.')
    stages=[('consent_q1',lambda r:choice(r['Q1']).startswith('同意')),
            ('adult_q2',lambda r:yes(r['Q2'])),
            ('self_reported_eligible_outing_q3',lambda r:yes(r['Q3'])),
            ('group_chose_a_stop_q4',lambda r:yes(r['Q4'])),
            ('involved_in_route_decision_q5',lambda r:yes(r['Q5']))]
    active=rows;screen=[]
    for label,condition in stages:
        kept=[r for r in active if condition(r)]
        removed=[r['ID'] for r in active if not condition(r)]
        screen.append({'stage':label,'entering':len(active),'excluded':len(removed),'excluded_ids':removed,'remaining':len(kept)})
        active=kept
    main=active
    hours=[r for r in main if (h:=number(r['Q10'],True)) is not None and 3<=h<=5]
    explicit_same_group=[r['ID'] for r in hours if choice(r['Q6'])=='有']
    subset=[r for r in hours if choice(r['Q6'])!='有']
    source_errors=[{'id':r['ID'],'question':'Q'+str(q),'value':r['Q'+str(q)]} for r in rows for q in range(1,35) if re.fullmatch(r'#(?:REF!|DIV/0!|VALUE!|NAME\?|N/A|NUM!|NULL!|SPILL!|CALC!)',r['Q'+str(q)] or '')]
    return {
        'input_file':path.name,
        'input_sha256':hashlib.sha256(path.read_bytes()).hexdigest(),
        'total_submissions':len(rows),
        'screening':screen,
        'main':describe(main),
        'hours_3_to_5_before_explicit_duplicate_filter':len(hours),
        'explicit_same_group_ids_excluded':explicit_same_group,
        'deck_subset':describe(subset),
        'main_q10_unknown_n':sum(number(r['Q10'],True) is None for r in main),
        'main_q10_outside_3_to_5_n':sum((h:=number(r['Q10'],True)) is not None and not 3<=h<=5 for r in main),
        'source_error_strings':source_errors,
        'ppt_reported_claims':[
            {'slide':2,'claim':'52.6% consider budget','team_reported_value':52.6,'reproduced':True,'calculation':'20 / 38 * 100, Q17 budget option','meaning':'Important planning constraint; not an actual overspending rate.'},
            {'slide':2,'claim':'Median time to agree on a plan was 30 minutes','team_reported_value':30,'reproduced':True,'calculation':'Median of 31 numeric Q15 estimates in the 38-response subset','meaning':'Self-reported coordination time, not all preparation time.'},
            {'slide':2,'claim':'63.5% struggled to estimate time at each stop','team_reported_value':63.5,'reproduced':None,'status':'Team-reported final-deck figure; calculation crosswalk not located in supplied workbook','related_reproducible_statistic':'Q17 available-time constraint is 23/38 = 60.5%, a different construct; do not substitute it for the reported figure.'},
            {'slide':2,'claim':'One reported visits taking more or less time than expected, particularly at shopping malls','reproduced':'partial','mapped_response':'R149/Q31','meaning':'Original answer mentions sightseeing-duration estimation and actual versus planned play time; venue subtype is not specified.'},
            {'slide':2,'claim':'18 would definitely try and 18 might, among 38','reproduced':True,'calculation':'Q32 category counts in the 38-response subset','meaning':'Intention about a proposed concept, not tested usage, retention or willingness to pay.'}
        ]
    }


def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--data',type=Path,default=Path(__file__).with_name('Full_Responses_Public.csv'))
    parser.add_argument('--output',type=Path,help='Optional statistics JSON output; otherwise print to standard output.')
    args=parser.parse_args()
    result=analyse(args.data)
    content=json.dumps(result,ensure_ascii=False,indent=2)+'\n'
    if args.output:args.output.write_text(content,encoding='utf-8')
    else:print(content,end='')


if __name__=='__main__':main()
