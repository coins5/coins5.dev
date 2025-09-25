export type RepoLang = { name: string; bytes: number; pct: number };

export async function fetchRepoLanguages(
  owner: string,
  repo: string,
  token?: string,
  retries = 5, // cantidad de reintentos
  delay = 500 // ms de espera inicial
): Promise<RepoLang[]> {
  const url = `https://api.github.com/repos/${owner}/${repo}/languages`;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });

      if (!res.ok) {
        throw new Error(
          `[GitHub] ${owner}/${repo} -> ${res.status} ${res.statusText}`
        );
      }

      const data = (await res.json()) as Record<string, number>;
      const total = Object.values(data).reduce((a, b) => a + b, 0) || 1;

      return Object.entries(data)
        .map(([name, bytes]) => ({
          name,
          bytes,
          pct: Math.round((bytes / total) * 100),
        }))
        .sort((a, b) => b.bytes - a.bytes);
    } catch (err) {
      if (attempt < retries) {
        const wait = delay * 2 ** attempt;
        console.warn(
          `Retry ${attempt + 1}/${retries} for ${owner}/${repo} after ${wait}ms`
        );
        await new Promise((r) => setTimeout(r, wait));
      } else {
        console.error(
          `Failed fetching ${owner}/${repo} after ${retries} retries`,
          err
        );
        return [];
      }
    }
  }

  return [];
}
