# [6] Retrieval-augmented generation and venue filtering / 检索增强生成与地点筛选

**PPT location:** slide 4, citation [6].  
**Final deck:** `Grouping-go_Final.pptx`; SHA-256 `b36882241cca4a3808f9dd88ad061d4e796239829e6dd585c98a9c98230ce82c`.  
**Reference checked:** 2026-11-07.

## Claim linked to this reference

RAG and a vector index: filter venues by price, opening hours and distance to find stops that fit the trip.

## Sources read

1. [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://papers.neurips.cc/paper/2020/hash/6b493230205f780e1bc26945df7481e5-Abstract.html) — Lewis et al.; Advances in Neural Information Processing Systems 33. Published/updated: 2020. Accessed: 2026-11-07. Checked: Original conference abstract and bibliographic record.

## What the source supports

The original RAG paper combines a language model with retrieval from an external document index. It supports the idea of grounding generated answers in retrieved information rather than relying only on model parameters.

## Our application or calculation

For Grouping-go, a vector index could retrieve relevant venue descriptions. Price, hours, distance and freshness would be stored as structured attributes and checked separately before retrieved venue information is passed to the planner.

## Scope and current project status

The paper does not establish that semantic vector retrieval enforces numeric budgets, opening-hour intervals or travel-distance limits. Those need explicit filters and route feasibility checks. It also does not validate our venue dataset or guarantee current opening hours and prices.

**Status:** Proposed RAG and vector-index integration. The offline prototype uses a local venue dataset and JavaScript rules.

**Reading note:** The slide compresses retrieval and feasibility checking into one line. RAG supplies relevant context; structured filtering and the constraint solver are the components intended to enforce limits.
