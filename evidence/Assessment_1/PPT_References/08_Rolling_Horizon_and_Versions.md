# [8] Rolling-horizon replanning and route versions / 滚动重规划与路线版本

**PPT location:** slide 4, citation [8].  
**Final deck:** `Grouping-go_Final.pptx`; SHA-256 `b36882241cca4a3808f9dd88ad061d4e796239829e6dd585c98a9c98230ce82c`.  
**Reference checked:** 2026-11-07.

## Claim linked to this reference

Rolling-horizon replanning and route version numbers: after a delay, replan only the remaining stops and ask everyone to confirm the new route.

## Sources read

1. [Receding Horizon Control: Automatic Generation of High-Speed Solvers](https://web.stanford.edu/~boyd/papers/code_gen_rhc.html) — J. Mattingley, Y. Wang and S. Boyd; IEEE Control Systems Magazine 31(3), 52–65. Published/updated: 2011-06. Accessed: 2026-11-07. Checked: Original author’s publication page and method summary.
2. [Grouping-go offline prototype: replan handler, revision and confirmation state](Prototype_Source.js) — Grouping-go project source code. Accessed: 2026-11-07. Checked: Local source checked: save/invalidate around lines 188–190 and replan handler around lines 250–258.

## What the source supports

The academic source describes repeatedly solving a constrained optimization over a moving future horizon. This supplies the method background for replanning from the current state rather than planning once at departure. Our source code separately demonstrates completed-stop preservation, route revision increments and clearing previous confirmations after a manual change.

## Our application or calculation

A future online solver would freeze completed stops, update remaining time and available venues, and solve only the remaining trip. Route-version checks and member reconfirmation are project coordination mechanisms; they are not results reported by the control paper.

## Scope and current project status

The cited control method is general, not an evaluated group-tourism system. Our current prototype is event-triggered local JavaScript replanning rather than a continuously running cloud optimization service. The literature source does not establish our route-version or multi-user synchronization behavior.

**Status:** Manual remaining-trip replanning and local revision/reconfirmation logic exist in the offline demo. The proposed rolling solver and cross-device synchronization have not been implemented or tested.

**Reading note:** The earlier vehicle-routing-with-time-windows example was insufficient evidence for rolling-horizon control; it has been replaced here with an original method source.
