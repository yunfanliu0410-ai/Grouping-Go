# [7] CP-SAT route constraints and a proposed fairness objective / CP-SAT约束求解与公平性目标

**PPT location:** slide 4, citation [7].  
**Final deck:** `Grouping-go_Final.pptx`; SHA-256 `b36882241cca4a3808f9dd88ad061d4e796239829e6dd585c98a9c98230ce82c`.  
**Reference checked:** 2026-11-07.

## Claim linked to this reference

OR-Tools CP-SAT with max-min fairness: reject routes over budget or time and account for the member whose needs are hardest to meet.

## Sources read

1. [CP-SAT Solver](https://developers.google.com/optimization/cp/cp_solver/) — Google OR-Tools documentation. Accessed: 2026-11-07. Checked: Integer constraint requirements and solver result statuses.

## What the source supports

Google’s documentation describes an integer constraint solver with statuses that distinguish optimal, feasible, infeasible, invalid and unresolved models. This supports explicitly modelling and solving feasibility constraints.

## Our application or calculation

The proposed model would encode route choice, each member’s budget, travel and dwell times, opening hours and return deadlines. Max-min fairness is our modelling choice: define a comparable utility for each member, constrain a variable to be no larger than each utility, then maximize that minimum. Secondary objectives could reduce travel time or improve average utility.

## Scope and current project status

Max-min group satisfaction is not a ready-made CP-SAT feature. Utility definitions and weights require testing. A timeout or UNKNOWN result is not proof of infeasibility. Integer scaling and accurate input data are required; the solver does not ensure real-world prices or times are correct.

**Status:** Proposed solver architecture. The existing offline prototype checks candidate routes in JavaScript; it does not use OR-Tools.

**Reading note:** The citation supports the solver family, not a validated claim that our fairness objective improves group satisfaction.
