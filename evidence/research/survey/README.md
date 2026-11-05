# Survey evidence / 问卷证据

Source: 用户提供的《小组半日出游规划经历调查_updated.xlsx》.
Source SHA-256: `b7123e37c85cc89788139f11eba7a0e04449b62123207e4cfe74dec266269cff`. Snapshot packaged on 2026-11-05.

## Complete questionnaire publication copy

[Full questionnaire Excel](小组半日出游规划经历调查_updated_完整问卷公开版.xlsx) preserves all 34 questions and all 156 original response rows. It includes group codes, place/month entries and open answers, as requested by the owner. Only the five submission-metadata columns (exact time, duration, source, source details and IP) are removed. The introductory contact email is masked. The original workbook remains unchanged locally.

The first sheet uses Q1–Q34 headers; the second sheet contains the full question text. Declined-consent rows are administrative screening records only, not research observations.

## Minimised analytic data included

[Descriptive response data](小组半日出游规划经历调查_updated_脱敏.csv) contains the **132 consented, self-screened main-questionnaire responses** and only the categorical/numeric fields needed to reproduce the slides. `response_id` is an opaque export-row identifier, not a verified group ID. Original substantive values are retained; this export does not repair or improve answers.

Excluded from the minimised CSV: IP addresses, exact submission times, completion durations, recruitment-source details, group codes, location/month entries and all open text. The five non-consenting submissions are not published. The other 19 screened-out records are excluded from the analytic file.

## Reproducible scope

| Stage | Count | Meaning |
|---|---:|---|
| Source submissions | 156 | Includes administrative screened-out records |
| No consent | 5 | Not research data |
| Q3 no eligible experience | 8 | Screened out |
| Q5 no route-decision involvement | 11 | Screened out |
| Main self-screened responses | 132 | Respondents, not verified independent groups |
| Reported 3–5 usable hours | 40 | Time-compatible subset |
| Exclude explicit same-group answers | 2 | Avoid additional group counting |
| Deck descriptive subset | 38 | **19 unsure** whether another group member responded |

The 38-response subset contains 24 local residents and 14 domestic non-local visitors across mixed cities. It does not establish Shanghai-specific market prevalence. In the full 132, identities are 81 local residents, 50 domestic non-local visitors and one unclear overseas visitor.

`(空)` means blank and `(跳过)` means skipped. Neither is zero. The 31 numeric coordination estimates in the deck subset have median 30 minutes. Run `python scripts/analyze_survey.py` to reproduce every displayed survey statistic.

## Evidence limitations

The original export remains outside this public repository. Some Q10 and Q23 values changed across supplied versions without attached participant-clarification records. Only two missed-stop reporters supply the original open shared-interest explanation. Causal attribution and group independence therefore remain provisional. The current deck's 12/16 self-attribution is retained in the statistics for traceability, but is not causal proof.

Teachers requiring raw-data spot checks should contact the project owner for controlled access. A restricted shared-folder link has not yet been supplied; no public raw-data link is invented.
