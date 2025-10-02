import { debounce } from "./utils/debounce";
import { fuzzyScore } from "./utils/fuzzy-search";

// -------- Fuzzy search con debounce (100 ms) ----------
document.addEventListener("astro:page-load", () => {
  const $q = document.getElementById("tagSearch") as HTMLInputElement | null;
  const $clear = document.getElementById("clearBtn");
  const $wrap = document.getElementById("tagCloud");
  const $empty = document.getElementById("emptyState");
  const $matchCount = document.getElementById("matchCount");

  if (!$q || !$wrap) return;
  const wrap = $wrap; // narrow a non-null reference for the rest of the scope
  const items = Array.from(
    wrap.querySelectorAll<HTMLAnchorElement>("a[data-name]")
  );

  // Guardamos posiciones originales para poder reordenar
  const originalOrder = items.map((el) => Number(el.dataset.idx ?? "0"));

  interface ScoredItem {
    el: HTMLAnchorElement;
    score: number;
    i: number;
  }

  function applyFilter(q: string): void {
    const query = (q || "").trim();
    // Calcular puntajes
    const scored: ScoredItem[] = items.map((el, i) => {
      const name = el.getAttribute("data-name") ?? "";
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
      wrap.appendChild(frag);
    } else {
      // restaurar orden inicial
      const frag = document.createDocumentFragment();
      const pairs = items.map((el, idx) => ({ el, pos: originalOrder[idx] }));
      pairs
        .sort((a, b) => a.pos - b.pos)
        .forEach((p) => frag.appendChild(p.el));
      wrap.appendChild(frag);
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
      first?.focus();
    }
  });

  $clear?.addEventListener("click", () => {
    $q.value = "";
    applyFilter("");
    $q.focus();
  });

  // Estado inicial
  applyFilter("");
});
// (() => {

// })();
