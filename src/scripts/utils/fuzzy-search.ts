/**
 * Calcula un puntaje fuzzy entre un texto y un patrón.
 * Retorna 0 si no matchea, > 0 mientras más fuerte el match.
 */
export function fuzzyScore(text: string, pattern: string): number {
  if (!pattern) return 1;

  let score = 0;
  let ti = 0;
  let consec = 0;
  const t = text.toLowerCase();
  const p = pattern.toLowerCase();

  for (let i = 0; i < p.length; i += 1) {
    const ch = p[i];
    const found = t.indexOf(ch, ti);
    if (found === -1) return 0;

    let s = 1;
    if (found === ti) {
      consec += 1;
      s += Math.min(2, consec * 0.5);
    } else {
      consec = 0;
    }

    const prev = found > 0 ? t[found - 1] : " ";
    if (prev === " " || prev === "-" || prev === "_" || prev === "#") {
      s += 0.6;
    }

    score += s;
    ti = found + 1;
  }

  return score / Math.log2(t.length + 3);
}
