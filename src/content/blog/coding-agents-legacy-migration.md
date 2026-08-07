---
title: "Cutting ~1,000 Hours of Migration Work by Mining Site Data with AI Coding Agents"
description: "How we leveraged LLM coding agents to extract deterministic XML transformation rules from millions of lines of legacy site data at UCLA."
pubDate: 2026-08-04
tags: ["AI Agents", "Python", "Automation", "CI/CD", "Infrastructure"]
featured: true
author: "Antti Hiltunen"
---

When replacing 20 legacy university websites—each built over a decade with custom plugins, inconsistent HTML formatting, and unindexed database structures—the standard approach is manual content migration.

For 20 sites containing tens of thousands of pages, manual copy-pasting and reformatting was estimated to require over **1,000 hours of developer and administrative labor**.

Instead of assigning engineers to manual data entry, we built a pipeline powered by **LLM coding agents** to mine millions of lines of legacy data into deterministic XML transformation rules.

---

## 1. The Challenge: Unstructured Legacy Noise

Legacy sites often accumulate layers of technical debt:

- Embedded inline styles and broken markup.
- Inconsistent custom post types created by different maintainers across 10+ years.
- Invisible media blobs and unlinked assets cluttering storage.

Attempting to write static regex scripts failed because the edge cases across 20 distinct codebases were too varied.

---

## 2. The Solution: AI Agents as Pattern Miners

Instead of asking LLMs to generate final production pages directly (which introduces hallucination risk), we used coding agents to **mine the data patterns and generate deterministic transformation schemas**.

```
+---------------------+      LLM Coding Agents      +----------------------------+
| Millions of Lines   |  =======================>  | Deterministic XML          |
| of Legacy Site Data |    Extract Pattern Rules    | Transformation Pipeline    |
+---------------------+                             +----------------------------+
                                                                 |
                                                                 v
                                                    +----------------------------+
                                                    | Consolidated Multi-Tenant  |
                                                    | Platform (Terraform / CI)  |
                                                    +----------------------------+
```

### The Workflow:

1. **Automated Content Audit:** Built a Python content inventory tool that cataloged media volume, page age, and structural hierarchy.
2. **Agent Schema Mining:** Passed chunks of raw legacy payloads to LLM agents with structured JSON schema outputs instructing them to map legacy markup patterns to clean target block primitives.
3. **Deterministic Execution:** Ran the generated XML transformation rules through automated CI/CD pipelines to populate the target multi-tenant platform.

---

## 3. Results & Takeaways

- **Time Saved:** Reduced estimated manual migration time from ~1,000 hours to automated pipeline runs executed in minutes.
- **Data Fidelity:** 100% deterministic execution ensured zero hallucinated text or dropped metadata.
- **Maintainability:** Consolidated 20 independently maintained repositories into a single multi-tenant platform managed with Terraform and Ansible.

Using AI as a pattern-mining assistant rather than an unconstrained text generator is one of the most effective strategies for high-volume enterprise migrations.
