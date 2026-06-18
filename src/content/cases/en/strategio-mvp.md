---
title: "Scaling Strategio: Award-Winning Architecture"
description: "How we architected the MVP that won the Startup Perú grant."
clientName: "Strategio"
impactMetric: "Startup Perú Winner"
pubDate: 2026-06-18
lang: "en"
technologies: ["Node.js", "FastAPI", "PostgreSQL", "AWS"]
---

# The Challenge

To secure funding and validate the market, Strategio required a robust Business Intelligence platform capable of processing diverse commercial datasets and generating custom analytical reports. The goal was to build a secure, highly scalable Minimum Viable Product (MVP) in under 12 weeks while maintaining top-tier architectural standards.

## Architectural Approach

We adopted a **Clean Architecture** framework with a modular design to segregate domain logic from external interfaces. This isolated the core data analytics engine from database and API delivery layers.

1. **Domain Centric Design**: Kept the business logic pure, facilitating rapid feature iterations without breaking existing features.
2. **Hybrid Backend Pipeline**: Combined **Node.js** (for handling user authentication, session management, and dashboard orchestration) with **FastAPI** (optimized for mathematical computations, product classification algorithms, and report generation).
3. **Optimized Data Layer**: Utilized **PostgreSQL** with indexes designed for high-frequency queries and multi-tenant isolation, ensuring data boundaries between different client organizations.

## Key Outcomes

- **Award-Winning Performance**: The resulting MVP proved so stable and feature-rich that it won the **Startup Perú** grant.
- **Cost-Efficiency**: Minimized AWS infrastructure overhead by implementing serverless worker patterns and caching strategies, keeping monthly run costs under $50 during the initial traction phase.
