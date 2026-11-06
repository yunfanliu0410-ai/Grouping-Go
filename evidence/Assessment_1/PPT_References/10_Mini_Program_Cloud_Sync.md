# [10] Mini-program cloud functions and change listeners / 小程序云函数与数据变更监听

**PPT location:** slide 4, citation [10].  
**Final deck:** `Grouping-go_Final.pptx`; SHA-256 `b36882241cca4a3808f9dd88ad061d4e796239829e6dd585c98a9c98230ce82c`.  
**Reference checked:** 2026-11-07.

## Claim linked to this reference

Mini program, cloud functions and database listeners: keep everyone’s limits, route version and each person’s confirmation in sync.

## Sources read

1. [小程序端 SDK](https://cloud.tencent.com/document/product/876/19385) — Tencent Cloud CloudBase documentation. Published/updated: 2026-10-28. Accessed: 2026-11-07. Checked: WeChat mini-program SDK service access.
2. [云函数](https://cloud.tencent.com/document/product/876/46899) — Tencent Cloud CloudBase documentation. Published/updated: 2026-04-21. Accessed: 2026-11-07. Checked: Cloud function overview, SDK invocation and service integration.
3. [实时推送](https://docs.cloudbase.net/database/realtime) — CloudBase documentation. Accessed: 2026-11-07. Checked: Document-database watch/onChange usage and database-mode distinction.

## What the source supports

Official documentation supports access to CloudBase services from WeChat mini programs, execution of server-side logic through cloud functions, and notification of document changes through database listeners. In traditional document-database mode, watch() provides change callbacks; the current documentation distinguishes PostgreSQL mode, which uses app.realtime().

## Our application or calculation

The proposed group document would store member limits, a route version and per-member confirmations. Cloud functions would validate authorized updates and reject stale versions; listeners would refresh each member’s view. Editing a route would clear confirmations and require approval of the new version.

## Scope and current project status

Listeners notify clients of changes; they do not themselves implement access control, atomic consensus or conflict handling. The database mode and matching API must be selected deliberately. No cross-device synchronization test has yet been completed for Grouping-go.

**Status:** Proposed mini-program/cloud deployment. The current offline demo stores state in one browser’s localStorage and simulates members locally.

**Reading note:** The source verifies platform capabilities, not an existing cloud backend for the project.
