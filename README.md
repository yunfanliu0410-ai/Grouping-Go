# Grouping-Go / 顺路APP

**ENT303TC Group 11 — shared planning for half-day group outings in Shanghai.**

Each member expresses preferences and practical limits. The proposed workflow compares feasible routes, explains trade-offs and asks the group to confirm a shared plan. The supplied offline v0.2 simulates the workflow in one browser using fictional Shanghai Super Brand Mall data.

## Teacher / supervisor navigation

| Inspect | Link |
|---|---|
| Shared evidence hub | [Evidence homepage](evidence/README.md) |
| Current claim–evidence map | [Evidence Map](evidence/registers/Evidence_Map.md) |
| Contributions and assigned roles | [Contribution Record](evidence/registers/Contribution_Record.md) |
| Version history | [Version History](evidence/registers/Version_History.md) |
| Questionnaire data and reproducible results | [Survey evidence](evidence/research/survey/README.md) |
| Six-slide assessment review copy | [PowerPoint](assessment1/Grouping-go_Assessment1_Public_Review.pptx) |
| Prototype capabilities and boundaries | [Implementation status](evidence/prototype/implementation-status.md) |
| Decisions, gaps and next actions | [Decision / Action Log](evidence/registers/Decision_Action_Log.md) |

## Run the offline app

1. Download this repository as ZIP and extract it.
2. Open [`app/index.html`](app/index.html) in a desktop browser. GitHub's file view displays source; it does not run the app.
3. Keep the HTML launcher and `顺路APP_离线版.js` together. No server, package installation or network connection is required.

The original Chinese launcher and instructions are also retained in `app/`. This repository does not enable GitHub Pages or publish a live service.

## Reproduce the survey figures

With Python 3.8+ installed, run:

```sh
python scripts/analyze_survey.py
```

The script uses only Python's standard library and checks the deck's 38-response descriptive subset, including 27 preference-conflict reports and a 30-minute median among 31 numeric estimates. These are not 38 certified independent groups. The source contains 156 submissions and 132 main self-screened responses. Full denominators and limitations are in the evidence hub.

## Current status

- Supplied local JavaScript prototype, fictional places and single-browser member simulation.
- No implemented external AI service, live place feed, real multi-device collaboration or commercial settlement.
- Advertising/coupon screens and operator-service fees are proposals requiring reconciliation and testing.
- Team approval, individual authorship confirmation, approved AI declaration and submission receipts remain to be recorded.

## Public data policy

This repository is public at the owner's request. It publishes a minimised analytic survey extract, not the original questionnaire export. IPs, exact timestamps, completion durations, recruitment channels, detailed locations, group codes and open answers are not included. Original files remain in the team's restricted local archive for controlled verification.

Initial repository preparation: **1 November 2026**. This is a migration date, not the date all project work occurred. See the contribution and AI-use records for what is established and what remains unverified.
