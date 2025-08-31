---
title: "Advanced Pandas tips"
pubDate: 2025-05-29
description: "Now it’s time to explore advanced Pandas techniques that will make your code more efficient, expressive, and Pythonic."
author: "coins5"
image:
  url: "/src/assets/images/series/pandas/advanced-pandas-tips.png"
  alt: "Advanced Pandas tips"
tags: ["python", "pandas", "analytics"]
serie: "learn-pandas"
seriesPartNumber: 10
---

# 🚀 Part 10: Advanced Pandas Tips and Tricks

Congratulations! You’ve reached the final part of this Pandas series.  
So far, we’ve covered everything from loading data to cleaning, grouping, and visualizing it.

Now it’s time to explore **advanced Pandas techniques** that will make your code more efficient, expressive, and Pythonic.

---

## 🧩 1. Using `apply()` for Custom Functions

`apply()` lets you run custom functions on columns or rows.

```python
import pandas as pd

df = pd.read_csv("prices_with_missing_data.csv")

# Example: calculate discounted price
df["discounted_price"] = df["price"].apply(lambda x: x * 0.9)
```

You can also apply a function across rows:

```python
def revenue(row):
    return row["price"] * row["quantity_sold"]

df["revenue"] = df.apply(revenue, axis=1)
```

---

## 🔄 2. Using `map()` for Element-wise Operations

`map()` is simpler than `apply()` when working with a single Series.

```python
df["brand_upper"] = df["brand"].map(str.upper)
```

You can also map dictionaries for replacements:

```python
brand_map = {"Brand A": "Premium A", "Brand B": "Budget B"}
df["brand"] = df["brand"].map(brand_map).fillna(df["brand"])
```

---

## 🔎 3. Using `query()` for Cleaner Filtering

Instead of complex boolean indexing, you can use SQL-like queries.

```python
# Products in stock and cheaper than 5
cheap_stock = df.query("in_stock == True and price < 5")
```

This makes your filters more readable.

---

## ⚡ 4. Vectorization vs Loops

Avoid using Python `for` loops with Pandas. Vectorized operations are much faster.

```python
# Bad (slow)
df["revenue_loop"] = [p*q for p,q in zip(df["price"], df["quantity_sold"])]

# Good (fast, vectorized)
df["revenue_vec"] = df["price"] * df["quantity_sold"]
```

---

## 🧠 5. Chaining Methods for Cleaner Code

Instead of creating temporary variables, you can chain methods:

```python
summary = (
    df.dropna()
      .query("price > 2")
      .groupby("brand")["revenue"]
      .sum()
      .sort_values(ascending=False)
)
```

This style (called _method chaining_) is concise and easier to read.

---

## 📌 Extra Tips

- Use `.astype("category")` for categorical columns → saves memory.
- Use `.copy()` when creating new DataFrames to avoid warnings.
- Learn `.merge()` and `.join()` to combine datasets efficiently.
- Explore **polars** (a Pandas alternative) for massive datasets.

---

## ✅ Wrap-up

In this final part, you learned how to:

- Use `apply()` and `map()` for flexible transformations
- Filter data more clearly with `query()`
- Speed up your code with vectorization
- Write cleaner code with method chaining

---

🎉 Congratulations — you’ve completed the **10-part Pandas series**!  
You now have a solid foundation to work confidently with data in Python.

Keep practicing, explore more datasets, and share your insights with others.  
Data is powerful when you know how to use it. 🚀

---
