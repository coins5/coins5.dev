---
title: "Structured Logging with Loguru: JSON for Observability Tools"
author: Marlon Colca
description: "When you're sending logs to ELK, Datadog, or any log aggregator, plain text isn't enough. "
image:
  url: "https://docs.astro.build/assets/rays.webp"
  alt: "The Astro logo on a dark background with rainbow rays."
pubDate: 2025-05-03
tags: ["python", "logging", "loguru"]
---

When you're sending logs to ELK, Datadog, or any log aggregator, plain text isn't enough.  
You need **structured logs** — usually in **JSON** — so systems can index and search them properly.

In this post, you'll learn how to output JSON logs using Loguru and make them production-ready.

---

## 🔧 Why Structured Logging?

Structured logs make it easy to:

- Search logs by fields (e.g. user_id, request_id).
- Visualize errors by service or severity.
- Connect logs to metrics and traces.

Here’s a classic unstructured log:

```text
2025-05-08 10:22:43 | INFO | User created successfully: Marlon
```

Now in JSON:

```json
{
  "time": "2025-05-08T10:22:43",
  "level": "INFO",
  "message": "User created successfully",
  "user": "Marlon"
}
```

Much more powerful.

## 🛠️ Custom JSON Formatter in Loguru

You can define your own log format using a function:

```python
import json
from loguru import logger
from datetime import datetime

def json_formatter(record):
    log = {
        "time": record["time"].strftime("%Y-%m-%dT%H:%M:%S"),
        "level": record["level"].name,
        "message": record["message"],
        "module": record["module"],
        "function": record["function"],
        "line": record["line"],
    }
    return json.dumps(log) + "\n"

logger.remove()
logger.add("logs.json", format=json_formatter)

```

This will output structured logs that are ready for ingestion.

## 🔗 Add Custom Fields

You can pass extra fields with `extra={}`:

```python
logger.bind(user="marlon", action="create").info("User created")

```

And update the formatter:

```python
def json_formatter(record):
    log = {
        "time": record["time"].strftime("%Y-%m-%dT%H:%M:%S"),
        "level": record["level"].name,
        "message": record["message"],
        "module": record["module"],
        "function": record["function"],
        "line": record["line"],
        **record["extra"]
    }
    return json.dumps(log) + "\n"
```

Output:

```json
{
  "time": "2025-05-08T10:22:43",
  "level": "INFO",
  "message": "User created",
  "user": "marlon",
  "action": "create"
}
```

## 🚀 Stream to Console + File in JSON

```python
logger.add(sys.stdout, format=json_formatter)
logger.add("structured.json", format=json_formatter)

```

## 🧪 Example: FastAPI with Structured Logs

```python
@app.get("/")
async def hello():
    logger.bind(request_id="abc123", user_id=42).info("Hello endpoint hit")
    return {"message": "hi"}

```

## ✅ Final Thoughts

With just a few lines, you’ve turned your logs into machine-readable, structured data — ready for search, filtering, and dashboards.

- Use this setup to integrate seamlessly with:
- ELK / OpenSearch
- Datadog
- Grafana Loki
- Any system that speaks JSON

## 🔜 Coming up next

👉 _Async Logging with Loguru: Handling concurrency without losing logs_
