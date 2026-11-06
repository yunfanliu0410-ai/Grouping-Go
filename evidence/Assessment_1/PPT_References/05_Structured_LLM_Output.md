# [5] Structured LLM output with JSON Schema / 使用JSON Schema约束大模型输出

**PPT location:** slide 4, citation [5].  
**Final deck:** `Grouping-go_Final.pptx`; SHA-256 `b36882241cca4a3808f9dd88ad061d4e796239829e6dd585c98a9c98230ce82c`.  
**Reference checked:** 2026-11-07.

## Claim linked to this reference

Structured LLM output (JSON Schema): turn each person’s budget, return deadline and interests into rules the planner can check.

## Sources read

1. [Structured model outputs](https://developers.openai.com/api/docs/guides/structured-outputs) — OpenAI API documentation. Accessed: 2026-11-07. Checked: Overview, structured extraction examples, supported-schema and error-handling guidance.

## What the source supports

The documentation explains how a supported JSON Schema constrains the structure of model output and how unstructured input can be converted into typed fields. This supports structured extraction as a technical component.

## Our application or calculation

The proposed schema would contain budget in CNY, latest return time, interests and walking limits for each member. After extraction, the app would show the values for member confirmation and run deterministic checks before route optimization.

## Scope and current project status

Schema conformity does not establish that a budget, time or preference was understood correctly. Units, missing values, refusals and invalid or contradictory inputs require explicit handling. The documentation does not show that this project has integrated or tested an LLM.

**Status:** Proposed integration. The existing offline prototype accepts structured form inputs; it does not call an LLM.

**Reading note:** Slide 4 is a proposed technical architecture. Its present-tense functional descriptions should not be read as evidence of an implemented AI service.
