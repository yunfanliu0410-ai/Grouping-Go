# Slide 5 — business model assumptions and reproducible calculation

Updated: **7 November 2026**. This document follows the final deck, `Grouping-go_Final.pptx`, slide 5. The final deck SHA-256 is `b36882241cca4a3808f9dd88ad061d4e796239829e6dd585c98a9c98230ce82c`.

## Current model in the final deck

Groups use the planning tool free of charge. The proposed payers are dining, café and leisure businesses. Slide 5 now separates **display advertising** and **labelled sponsored listings**. These are business-model proposals, not evidence of paying customers, completed contracts or realised revenue.

| Input or result | Final-deck value | Status |
|---|---:|---|
| Valid display-ad views per month | 200,000 | Scenario volume; not observed traffic |
| Display-ad price per valid view | ¥0.30 | Unvalidated scenario price |
| Display-ad revenue | ¥60,000/month | `200,000 × 0.30` |
| Sponsored listings | 10/month | Scenario quantity; not contracted inventory |
| Fee per sponsored listing | ¥500/month | Unvalidated scenario price |
| Sponsored-listing revenue | ¥5,000/month | `10 × 500` |
| Total revenue | ¥65,000/month | `60,000 + 5,000` |
| Technical staff | 2 | Scenario staffing |
| Work per staff member | 50 hours/month | Scenario workload |
| Hourly rate | ¥50/hour | Scenario rate, not payroll evidence |
| Stated technical-operations cost | ¥5,000/month | `2 × 50 × 50` |
| Remainder after that stated cost | ¥60,000/month | `65,000 − 5,000` |

The arithmetic is correct. **The ¥60,000 is the remainder after the stated technical-labour cost only. It is not established net profit or a full-cost operating surplus.** Slide 5 says other costs are calculated separately. No complete separate cost schedule or measured cost evidence was supplied with this update.

The accompanying `Business_Model_Assumptions.csv` exposes each input, calculation, unit and evidence status. It is a calculation record, not a quotation or forecast.

## Price-unit reconciliation with the prototype

The local JavaScript prototype shows a different *illustrative* display-ad price:

- Source: `顺路APP_JavaScript离线版/顺路APP_离线版.js`, lines 98–99.
- Prototype: **¥30 per 1,000 valid impressions**, equivalent to **¥0.03 per impression**.
- Final slide 5: **¥0.30 per valid view**, equivalent to **¥300 per 1,000 views**.

Thus the final-deck price is **ten times** the earlier prototype example. At 200,000 valid views, the prototype's example would produce ¥6,000, while the final-deck assumption produces ¥60,000. The source code has not been changed to make the two prices appear identical. The deck is treated as the latest proposed scenario; it does not prove a validated price increase. The team should confirm the intended unit and price with merchants.

The words “valid views” in the final deck are treated as eligible, billable ad impressions for this calculation. They are not unique users, visits to a venue, clicks or purchases. Deduplication, viewability, invalid-traffic rules and billing terms still need definition and implementation.

## Sponsored listings and the earlier coupon example

The final second revenue stream is **sponsored listing fees**. This supersedes the earlier coupon-commission scenario for this final presentation.

The current prototype still contains a fictional dining coupon with a proposed **5% commission on redeemed paid value**, illustrated as `¥118 × 5% = ¥5.90` per redemption (source lines 107–109). It does not implement sponsored-listing sales or real redemption. This historical coupon example is not counted as another revenue stream in the final slide-5 total.

Final slide 4 says sponsored placements are labelled “Ad”, must fit the route and cannot override members' limits. This is a proposed advertising rule. The prototype shows labelled, fixed ads independently of its natural route ranking; it does not implement algorithmic ad eligibility screening, LinUCB ranking or paid-listing settlement.

## Costs and tests still required

Before interpreting the scenario as a profitability case, separately estimate or measure model/API calls, map and venue-data access, cloud hosting and storage, merchant sales, creative review, ad measurement and invalid-traffic checking, customer acquisition, support, taxes and initial development. Do not set unknown costs to zero merely because they are outside the displayed staff calculation.

If those additional monthly costs total `C`, the remainder after all such costs is **`¥60,000 − C`**, before any further excluded costs. No numerical value of `C` is asserted here.

The next commercial tests are merchant willingness to pay, achievable valid impressions, effective display-ad price, listing demand, delivery cost and user retention. The survey's willingness-to-try answers do not validate the advertising price or merchant willingness to pay.

## Reading boundary / 阅读边界

本文件按最终PPT复算，并保留与原型的差异。最终页的广告单价0.30元/次，相当于CPM 300元，是原型CPM 30元的10倍。60,000元为扣除所列技术人员工时成本后的情景余额，不能直接表述为净利润。所有商家价格、流量、销售数量及人员成本均需验证。
