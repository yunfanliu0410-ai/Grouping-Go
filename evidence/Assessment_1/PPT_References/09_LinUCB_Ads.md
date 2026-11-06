# [9] LinUCB for proposed contextual ad ranking / 使用LinUCB进行情境广告排序的设想

**PPT location:** slide 4, citation [9].  
**Final deck:** `Grouping-go_Final.pptx`; SHA-256 `b36882241cca4a3808f9dd88ad061d4e796239829e6dd585c98a9c98230ce82c`.  
**Reference checked:** 2026-11-07.

## Claim linked to this reference

Contextual multi-armed bandit (LinUCB): screen businesses, then rank them by route fit, group interests and price.

## Sources read

1. [A Contextual-Bandit Approach to Personalized News Article Recommendation](https://www.schapire.net/papers/www10.pdf) — L. Li, W. Chu, J. Langford and R. E. Schapire; WWW 2010. Published/updated: 2010. Accessed: 2026-11-07. Checked: Original research paper.

## What the source supports

The paper presents LinUCB as a contextual-bandit method that selects recommendations using contextual features and learns from observed feedback while balancing exploration and exploitation. Its evaluated application is news recommendation.

## Our application or calculation

Grouping-go proposes applying this ranking method to eligible paid placements. First apply hard route, budget, timing and distance rules; then rank remaining businesses using group/route features and feedback from valid ad exposures. Paid content would carry an Ad label.

## Scope and current project status

The paper does not prove improved advertising revenue or route quality for this project. Survey responses are not the impression-and-response logs required for online learning. A rules-based cold start, appropriate consent, exposure logging and offline/online evaluation would be needed before adaptive ranking.

**Status:** Proposed ad-ranking method. Current ad placements are static demonstrations; no bandit model is trained or deployed.

**Reading note:** LinUCB would rank already-eligible ads. It must not be described as the component that enforces all route limits or as an implemented revenue engine.
