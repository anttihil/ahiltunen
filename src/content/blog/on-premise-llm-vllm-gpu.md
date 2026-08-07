---
title: "Serving On-Premise LLMs on a Budget: Tuning vLLM for Concurrent Classroom Analysis"
description: "How to host privacy-sensitive AI workloads on university hardware using vLLM, FastAPI, and constrained GPU resources."
pubDate: 2026-08-01
tags: ["vLLM", "AI Systems", "FastAPI", "GPU", "Infrastructure"]
featured: true
author: "Antti Hiltunen, "
---

At universities and enterprise institutions, faculty data and classroom analysis workloads frequently involve sensitive student records or non-public research. Passing this data to external commercial APIs is often prohibited by privacy regulations.

To solve this at UCLA, I architected an **on-premise AI platform** designed to execute entirely on self-hosted university hardware.

The primary constraint? Serving high-concurrency student and faculty requests on a **single, hardware-constrained GPU**.

---

## 1. Why Standard Ollama / HuggingFace Pipelines Stalled

Running standard inference servers with naive batching works well for single-user dev environments, but under concurrent classroom loads, request latency degrades rapidly.

When 30 students submit analysis tasks simultaneously:

- Sequential queueing causes HTTP request timeouts.
- Naive KV-cache memory allocation leads to Out-Of-Memory (OOM) GPU crashes.

---

## 2. Optimizing High Concurrency with vLLM PagedAttention

By migrating our inference layer to **vLLM** paired with a FastAPI orchestration backend, we achieved a 4x increase in concurrent throughput on identical hardware.

```python
# vLLM Engine Configuration for Constrained Hardware
from vllm import AsyncLLMEngine, AsyncEngineArgs

engine_args = AsyncEngineArgs(
    model="Qwen/Qwen2.5-14B-Instruct-AWQ",
    gpu_memory_utilization=0.90,
    max_num_seqs=64, # High concurrency dynamic batching
    quantization="awq", # 4-bit AWQ quantization to fit memory budget
    max_model_len=4096
)

engine = AsyncLLMEngine.from_engine_args(engine_args)
```

### Key Technical Leverages:

1. **PagedAttention:** Dynamic KV-cache allocation prevents memory fragmentation, allowing higher batch density.
2. **4-Bit AWQ Quantization:** Compressed 14B parameter models to fit comfortably within single-GPU VRAM limits without sacrificing task-specific reasoning accuracy.
3. **Async Event Loop:** Integrated FastAPI with vLLM's `AsyncLLMEngine` to stream tokens directly to frontend subscribers over Server-Sent Events (SSE).

---

## 3. WCAG Accessibility & ADA Remediation Tooling

Alongside LLM analysis, the platform includes a self-service WCAG compliance scanner targeting an ADA exposure of ~60,000 public PDF documents.

By integrating automated OCR processing with async background worker queues, a five-person remediation team now triages and remedies document accessibility across the university ecosystem.

Self-hosting AI systems requires balancing hardware economics with software optimization—proving that private, compliant AI capabilities are accessible without massive cloud budgets.
