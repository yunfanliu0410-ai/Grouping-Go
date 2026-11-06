# Survey method and findings / 问卷口径与统计

This folder supports the survey statements on Slide 2 of `Grouping-go_Final.pptx`. It preserves the supplied questionnaire answers and separates the final deck's reported statements from the statistics that can be reproduced from the supplied workbook. It does not modify the final PPT or the original questionnaire.

## Source and public copy

Source: `小组半日出游规划经历调查_updated.xlsx`, sheet `Sheet1`.

Source SHA-256: `b7123e37c85cc89788139f11eba7a0e04449b62123207e4cfe74dec266269cff`.

- The source contains 156 response rows and 34 questions.
- `Full_Responses_Public.csv` retains every supplied question answer under `ID,Q1,...,Q34`. A public response ID such as `R149` corresponds to original export serial `149`. The mapping to original spreadsheet rows is in `Response_Index.csv`.
- Submission timestamp, completion duration, source, source detail and IP columns are omitted. The question codebook masks the introductory contact email. Response answers, explicit `(跳过)` skips, `(空)` markers and source error strings are preserved.
- Five records declined consent. They contain screening status, are retained only as administrative screening records and are excluded from research analysis.
- `Survey_Main_Responses_132.csv` is the smaller analytic extract used for the earlier descriptive calculations. It excludes open answers and detailed locations. The current script recomputes the results from the full publication CSV so Q17 can also be inspected.
- The public Excel copy is a publication view of the questionnaire, with identifying submission metadata removed. It is not a new round of data collection.

## Screening and the denominator of 38

| Step | Excluded at this step | Remaining |
|---|---:|---:|
| All supplied submissions | — | 156 |
| Q1: agree to participate | 5 | 151 |
| Q2: age 18 or over | 0 | 151 |
| Q3: self-reported eligible outing | 8 | 143 |
| Q4: group chose or discussed a stop | 0 | 143 |
| Q5: respondent participated in route decisions | 11 | 132 |
| Q10: numeric available time between 3 and 5 hours, inclusive | 92 | 40 |
| Q6: remove explicit reports that another member already responded | 2 | 38 |

The 92 Q10 exclusions comprise 62 numeric responses outside 3–5 hours and 30 uncertain/non-numeric responses. This narrows the self-screened 132 to the more relevant half-day descriptive subset; it is not certification of eligibility or data independence.

The 38 retained IDs and all exclusions are listed in `statistics.json` and `Response_Index.csv`. Nineteen of the 38 say no other group member has responded, while 19 are unsure. Therefore **38 responses must not be described as 38 independently verified outing groups**. Q7 group codes do not establish reliable deduplication. The source does not support weighting or representative population inference.

All 38 report adult status and group sizes of 3–6. They describe mixed-city outings, including some outside China; none of the 38 reports a Shanghai outing. Among the wider 132, four report Shanghai. The pilot location is a proposed segment choice, not a local-market validation supplied by these 38 records.

## Reproducible descriptive results

| Measure and actual question | 38-response deck subset | 132-response main set |
|---|---:|---:|
| Budget selected as an important planning constraint, Q17 | 20/38 = 52.6% | 68/132 = 51.5% |
| Available time selected as an important planning constraint, Q17 | 23/38 = 60.5% | 71/132 = 53.8% |
| Different place/activity preferences, Q19 | 27/38 = 71.1% | 96/132 = 72.7% |
| Missed a stop that at least two members wanted, Q21 | 16/38 = 42.1% | 72/132 = 54.5% |
| Coordination named as main cause among missed-stop reports, Q23 | 12/16 = 75.0% | 44/72 = 61.1% |
| Median self-estimated coordination time, numeric Q15 only | 30 minutes, n=31 | 25 minutes, n=121 |
| Definitely would try, Q32 | 18/38 | See exact category counts in JSON |
| Might try, Q32 | 18/38 | See exact category counts in JSON |
| Definitely or might try combined, Q32 | 36/38 = 94.7% | 121/132 = 91.7% |

Q17 is a multiple-choice constraint question. Its percentages are not actual budget-overrun rates or per-stop time-estimation failure rates. Q15 concerns time from the first route discussion until acceptance of a plan. It is not a measure of all browsing, research or preparation time. Numeric zero values are valid inputs; skips are not zeros. Q32 measures stated interest in a described concept, not product use, retention, willingness to pay or a commercial commitment.

## Crosswalk to the final slide

| Final Slide 2 statement | Evidence status and location |
|---|---|
| 52.6% consider budget | Reproduced as 20/38 selecting budget in Q17. Source cells and IDs are in `Claim_Cell_Crosswalk.csv`. |
| Median time to agree was 30 minutes | Reproduced from the 31 numeric Q15 values in the 38-response subset. Their IDs and values are in `statistics.json`. |
| 63.5% struggled to estimate time at each stop | Retained as the team's reported final-deck figure. A calculation crosswalk for this particular figure was not located in the supplied workbook. The separately reproduced Q17 available-time statistic, 23/38 = 60.5%, concerns a different construct and is not substituted for the reported figure. |
| One report concerned actual time differing from expectations, particularly at shopping malls | The related supplied open answer is R149/Q31: “景点游览时长预估不准，实际游玩时间和计划差很多” (original cell `AK150`). It concerns sightseeing duration; the answer does not specify the venue subtype. The final slide's venue-specific wording is retained as the team's interpretation rather than presented as a verbatim response. |
| Of 38, 18 definitely and 18 might try | Reproduced from Q32. Two said definitely would not. |

The archived deck wording is not changed by this evidence publication. The crosswalk allows readers to identify which statements are direct calculations and which require the team's additional calculation record or interpretation.

## Qualitative context and contrary evidence

Examples below retain the supplied wording. Original cell addresses and the other mapped answers are in `Survey_Traceability.json`.

| ID / question | Source answer | What it supports |
|---|---|---|
| R134 / Q31 | 同行人预算不一样，挑选景点和路线很难达成统一沿途休息、补给点很少，需要反复预留缓冲时间 | A budget-difference example; no planned-versus-actual spending comparison. |
| R036 / Q31 | 几个人想法差挺多，路上一直在讨论改路线 | A repeated on-trip route discussion example. |
| R050 / Q31 | 中途有人临时想加景点，后面行程全乱了 | A mid-trip change example. |
| R155 / Q31 | 大家想看的景点分散较远，来回折返浪费不少时间 | A route-dispersion/backtracking example. |
| R149 / Q31 | 景点游览时长预估不准，实际游玩时间和计划差很多 | A stop-duration estimate example, without a mall-specific venue type. |
| R088 / Q33 | 出游主打随性闲逛，不需要严谨的行程规划 | Some users prefer flexibility; this response is in the 38-response subset. |
| R022 / Q33 | 害怕工具给出的方案太死板，失去游玩的随机性 | Concern about rigid plans, retained in the wider data. |
| R026 / Q33 | 习惯自己手动做攻略，不太信任 AI 规划的路线 | Concern about AI-generated routes, retained in the wider data. |
| R071 / Q33 | 更喜欢和同伴一起商量安排，不想由 AI 决定行程 | Preference for human group discussion, retained in the wider data. |

These answers motivate editable suggestions, optional free time and explicit member confirmation. They do not establish that a working product improves experience.

## Data-quality notes

- Q27 contains 10 original `#VALUE!` strings (`AG46`, `AG48`, `AG53`, `AG59`, `AG60`, `AG67`, `AG81`, `AG83`, `AG102`, `AG132`). They remain unchanged and are not used for the principal slide calculations.
- Duplicate export serials were not found. This is distinct from checking whether different people describe the same outing.
- Some answers were changed between earlier source versions. The current archive uses the supplied final workbook snapshot and records its hash; it does not backdate clarification, reconstruct unprovided recruitment records or certify answer authenticity.
- There is no follow-up product trial, timestamped task comparison, actual budget-versus-spend log, per-stop planned-versus-actual time log, or advertiser payment validation in this survey file.

## Reproduce

Python 3.8 or later, no third-party packages required:

```sh
python analyze_survey.py
```

To write a new calculation result without changing the public inputs:

```sh
python analyze_survey.py --output statistics_recalculated.json
```

The script reads `Full_Responses_Public.csv` from the same folder. `statistics.json` is the result saved for this publication. `Response_Index.csv` maps IDs back to original rows, `Claim_Cell_Crosswalk.csv` lists the input cells, and `Survey_Questions.json` contains the 34 original bilingual questions with the contact email masked.
