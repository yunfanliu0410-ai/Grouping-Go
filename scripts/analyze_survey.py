from pathlib import Path
import csv,json,re,statistics
ROOT=Path(__file__).resolve().parents[1]
DATA=ROOT/'evidence/research/survey/小组半日出游规划经历调查_updated_脱敏.csv'
def num(v):
    m=re.fullmatch(r'\s*(\d+(?:\.\d+)?)\s*(?:小时)?\s*',v)
    return float(m[1]) if m else None
with DATA.open(encoding='utf-8-sig',newline='') as f: rows=list(csv.DictReader(f))
def analyze(rs):
    minutes=[num(r['q15_minutes']) for r in rs if num(r['q15_minutes']) is not None]
    missed=[r for r in rs if r['q21_missed_shared_stop']=='是']
    return dict(responses=len(rs),preference_conflict=sum(r['q19_preference_conflict']=='是' for r in rs),missed_shared_stop=len(missed),difficulty_3_or_4=sum(r['q30_difficulty'].startswith(('3','4')) for r in rs),numeric_minutes=len(minutes),median_minutes=statistics.median(minutes) if minutes else None,coordination_attributed_missed=sum(r['q23_main_cause']=='难以达成一致或协调耗时' for r in missed),trial_interest=sum(r['q32_trial_intention'] in ['可能会','肯定会'] for r in rs))
selected=[r for r in rows if (h:=num(r['q10_available_hours'])) is not None and 3<=h<=5 and r['q6_same_group']!='有']
assert all((r['deck_subset']=='yes')==(r in selected) for r in rows)
result={'main':analyze(rows),'deck_subset':analyze(selected),'subset_same_group_unsure':sum(r['q6_same_group']=='不确定' for r in selected)}
assert result['main']['responses']==132
assert result['deck_subset']['responses']==38
assert result['deck_subset']['preference_conflict']==27
assert result['deck_subset']['missed_shared_stop']==16
assert result['deck_subset']['difficulty_3_or_4']==17
assert result['deck_subset']['numeric_minutes']==31
assert result['deck_subset']['median_minutes']==30
print(json.dumps(result,ensure_ascii=False,indent=2))
