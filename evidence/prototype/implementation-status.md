# Offline prototype implementation status

Source: the user's `顺路APP_JavaScript离线版` folder. Its three original files are copied byte-for-byte into `app/`; `index.html` is an additional launcher alias. Original source comments identify offline v0.2. Packaging date is not the original development date.

## Visible in the inspected source

- Six views: create group, invite members, express preferences, compare routes, confirm together, adjust during the outing.
- Per-member must/yes/no preferences, budget, walking time, rest and accessibility inputs.
- Local route selection and fictional place data. `invalidate()` clears the selected route, lock and confirmations when inputs change.
- Browser-local persistence with a clear-data action and JSON demo export.
- Fictional advertising and sample coupon interfaces. No real settlement or transactions.

## Current boundaries

- The default scene is Shanghai Super Brand Mall (正大广场); places, times, floors and costs are demonstration inputs.
- The UI simulates different members in one browser. Group codes do not synchronise devices.
- No backend, account service, real POI/navigation feed or external AI service is implemented in this offline copy.
- Coverage is a rule-based ranking score, not measured user satisfaction.
- No real-user acceptance, live navigation accuracy, security audit, paid adoption or operator partnership is established by code inspection.

## Verification performed for this migration

`node --check app/顺路APP_离线版.js` passed on 2026-11-05. This is a syntax check only. Full browser interaction and real-world route validation were not performed during repository packaging.
