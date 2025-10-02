// -------- Fuzzy search con debounce (100 ms) ----------
(function () {
  const $q = document.getElementById("tagSearch");
  const $clear = document.getElementById("clearBtn");
  const $wrap = document.getElementById("tagCloud");
  const $empty = document.getElementById("emptyState");
  const $matchCount = document.getElementById("matchCount");

  if (!$q || !$wrap) return;
  const items = Array.from($wrap.querySelectorAll("a[data-name]"));

  // Guardamos posiciones originales para poder reordenar
  const originalOrder = items.map((el) =>
    Number(el.getAttribute("data-idx") || "0")
  );

  // Fuzzy score: subsequence con bonus por letras consecutivas y comienzo de palabra
  // Devuelve un número > 0 si matchea; 0 si no.
  function fuzzyScore(text, pattern) {
    if (!pattern) return 1; // sin query, todo matchea
    let score = 0,
      ti = 0,
      consec = 0;
    const t = text.toLowerCase();
    const p = pattern.toLowerCase();
    for (let i = 0; i < p.length; i++) {
      const ch = p[i];
      const found = t.indexOf(ch, ti);
      if (found === -1) return 0;
      // base
      let s = 1;
      // bonus por consecutivo
      if (found === ti) {
        consec++;
        s += Math.min(2, consec * 0.5); // limita el bonus
      } else {
        consec = 0;
      }
      // bonus por inicio de palabra
      const prev = found > 0 ? t[found - 1] : " ";
      if (prev === " " || prev === "-" || prev === "_" || prev === "#")
        s += 0.6;
      score += s;
      ti = found + 1;
    }
    // normaliza con longitud (palabras más cortas un poco favorecidas)
    return score / Math.log2(t.length + 3);
  }

  // Debounce genérico
  function debounce(fn, wait) {
    let t = null;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(null, args), wait);
    };
  }

  function applyFilter(q) {
    const query = (q || "").trim();
    // Calcular puntajes
    const scored = items.map((el, i) => {
      const name = el.getAttribute("data-name") || "";
      const s = fuzzyScore(name, query);
      return { el, score: s, i };
    });

    // Filtrar y ordenar por score desc; si score=0, ocultamos
    const visible = scored.filter((x) => x.score > 0);
    const hidden = scored.filter((x) => x.score === 0);

    // Orden: si hay query, ordenar por score desc; si no, restaurar orden original
    if (query) {
      visible.sort((a, b) => b.score - a.score || a.i - b.i);
      // Reordenar DOM con fragment
      const frag = document.createDocumentFragment();
      visible.forEach((x) => frag.appendChild(x.el));
      $wrap.appendChild(frag);
    } else {
      // restaurar orden inicial
      const frag = document.createDocumentFragment();
      // items según originalOrder
      const pairs = items.map((el, idx) => ({ el, pos: originalOrder[idx] }));
      pairs
        .sort((a, b) => a.pos - b.pos)
        .forEach((p) => frag.appendChild(p.el));
      $wrap.appendChild(frag);
    }

    // Mostrar / ocultar
    visible.forEach((x) => {
      x.el.style.display = "";
    });
    hidden.forEach((x) => {
      x.el.style.display = "none";
    });

    // Empty state + contador
    const count = visible.length;
    if ($matchCount) $matchCount.textContent = String(count);
    if ($empty) $empty.classList.toggle("hidden", count !== 0);
  }

  const run = debounce(() => applyFilter($q.value), 100);

  $q.addEventListener("input", run);
  $q.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      // focus primer resultado visible
      const first = items.find((el) => el.style.display !== "none");
      if (first) first.focus();
    }
  });

  $clear?.addEventListener("click", () => {
    $q.value = "";
    applyFilter("");
    $q.focus();
  });

  // Estado inicial
  applyFilter("");
})();
