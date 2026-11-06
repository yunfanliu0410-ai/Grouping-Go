# Survey statistics / 问卷统计

This folder preserves the supplied questionnaire answers and explains the final slide-2 statistics. It is an evidence publication, not a new survey wave or a product test.

| File | Purpose |
|---|---|
| [Full questionnaire Excel](Full_Questionnaire_Public.xlsx) | All 156 response rows and 34 questions, with identifying submission metadata removed; full question text is in the workbook's second sheet |
| [Full public CSV](Full_Responses_Public.csv) | Same answer content under `ID,Q1,...,Q34`, used by the reproducible analysis |
| [Main 132-response extract](Survey_Main_Responses_132.csv) | Compact analytic columns, retaining the earlier extraction convention |
| [Method and findings](Survey_Method_and_Findings.md) | Screening, denominators, results, qualitative examples and interpretation limits |
| [Saved statistics](statistics.json) | Counts, IDs, category totals and numeric coordination-time inputs |
| [Response index](Response_Index.csv) | Public response ID to original source row and screening status |
| [Claim-to-cell crosswalk](Claim_Cell_Crosswalk.csv) | Slide claim, question, source cell and input IDs |
| [Question codebook](Survey_Questions.json) | All 34 original bilingual questions, contact email masked |
| [Traceability record](Survey_Traceability.json) | Additional answer/cell mappings and source-error locations |
| [Analysis script](analyze_survey.py) | Python standard-library script; reads the full CSV in this folder and does not modify it |

## Reproduce

With Python 3.8 or later, no third-party packages are required:

```sh
python analyze_survey.py
```

Or write a separate recalculation output:

```sh
python analyze_survey.py --output statistics_recalculated.json
```

The source workbook is unchanged. Blank/skip markers and the original error strings remain as supplied. The **156 / 132 / 38** counts refer to different stages, not interchangeable denominators. The 38-response subset contains 19 uncertain same-group responses and no Shanghai-specific validation. See the method record before interpreting a percentage.

[Return to the Assessment 1 homepage](../README.md)
