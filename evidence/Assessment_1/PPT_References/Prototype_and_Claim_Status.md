# Prototype and claim status

Updated: **7 November 2026**. Scope: the supplied local JavaScript prototype and claims on the final six-slide presentation. This record distinguishes a demonstrable interface or rule from a proposed production service.

Source code: `顺路APP_JavaScript离线版/顺路APP_离线版.js` (the repository publishes its supplied copy under `app/`). The source was inspected without editing it. Source line references below refer to that supplied file, not an independently verified development history or named author's contribution.

Inspected source SHA-256: `04aa7741d329a0e88e69b9c6baf7d15dab9b14f5e287c95d06799d9fbe7ce6de`.

## Implemented in the supplied offline demonstration

| Capability | Source location | What can be inspected | Boundary |
|---|---|---|---|
| Member inputs | `createView()` / `prefsView()`; lines 202–217 | Simulate 3–6 members, individual preferences, budget, walking, rest and accessibility; a common outing time | One browser, not independently connected group devices |
| Structured place records | Lines 18–25 | Seven fictional venue/activity objects with cost, duration, floor, opening window and access attributes | Not an authorised live venue database |
| Hard-limit checks | Lines 31–76 | Check required/veto conflicts, per-member estimated cost, walking, rest, accessibility, opening windows and return time | Costs, walking and venue information are demonstration estimates |
| Route comparison | Lines 30, 53–88 | Enumerate combinations and orders, then prioritise the minimum member preference coverage | JavaScript enumeration and ranking, not an OR-Tools CP-SAT implementation; coverage is a rule-based score, not measured satisfaction |
| Group confirmation | Lines 190, 239, 249, 267–275 | Individual confirmation flags; changes clear earlier confirmations | Simulated same-browser confirmation, not cloud authentication or multi-device consensus |
| Manual replanning | Lines 232 and 250–257 | Preserve completed progress and estimated spent cost/time; simulate queues, rain, closure, fatigue or delay; recalculate remaining stops | No automatic location, real-time crowd sensing or venue feed |
| Local storage and export | Lines 183–188 and 262–263 | Save local state, clear it and export a labelled demonstration JSON | No production cloud access controls or database listeners |
| Two advertising placements | `prefsView()` line 211 and `compareView()` line 224 | Fictional coffee ad on the preferences screen and dining coupon ad on the comparison screen | Fixed advertising selection, not AI-based eligibility or personalisation |
| Labelled ad and coupon interface | Lines 92–159 | “Ad / cooperation example” label, fictional offer details and local claimed-coupon state | No real orders, payment, redemption, impression counting, attribution or settlement |

## Proposed technologies in slide 4

| Final PPT label | Technology or architecture | Current status |
|---|---|---|
| [5] | LLM structured output / JSON Schema | Proposed; no external model call in the supplied prototype |
| [6] | RAG and vector index | Proposed; no retrieval pipeline or vector database in the supplied prototype |
| [7] | OR-Tools CP-SAT with max-min fairness | Proposed solver integration; the demonstration implements a related minimum-coverage ranking through its own JavaScript enumeration |
| [8] | Rolling-horizon replanning and route version numbers | Manual remaining-route recalculation and a revision counter can be inspected; a general production rolling-horizon optimiser remains a design proposal |
| [9] | LinUCB contextual-bandit ad matching | Proposed; no policy learning, feedback logs or experiment results were supplied |
| [10] | Mini program, cloud functions and database listeners | Proposed; supplied app is an offline browser prototype |

References [5]–[10] support the feasibility or method, not proof that this team has implemented or tested the full architecture. Source cards retain their exact support boundaries.

## Outcome and commercial status

- The current survey collects self-reported planning experiences and hypothetical trial intention. It is not a usability or product-outcome test.
- No completed same-task timing comparison, verified reduction in preparation time, actual-spending comparison or late-return experiment was supplied for this update.
- No signed venue partnership, paying advertiser, purchased sponsored listing or realised revenue was supplied.
- The advertising prices and listing quantities in final slide 5 are assumptions. Their arithmetic and their difference from the prototype's illustrative rates are recorded in `Business_Model_Assumptions.md`.
- Natural route constraints and advertising selection are separate. Current code checks route constraints but does not prove the proposed claim that every displayed sponsored business has passed an advertising eligibility filter.
- The final pitch's role descriptions establish the team's stated work ownership. They do not independently establish original code authorship or completed member-specific work.

This record does not alter the final deck. It keeps the inspectable demonstration, future architecture and untested outcomes distinguishable.
