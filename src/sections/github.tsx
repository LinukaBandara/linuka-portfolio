import { useEffect, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "@/components/reveal";

const GITHUB_USERNAME = "LinukaBandara";

interface ContributionDay {
  level: number;
}

interface GithubStatsData {
  repos: number;
  stars: number;
  totalContributions: number;
  cells: ContributionDay[];
}

async function fetchJson<T>(url: string): Promise<T | null> {
  const response = await fetch(url, { headers: { Accept: "application/json" } });
  if (!response.ok) return null;
  return response.json() as Promise<T>;
}

async function fetchGithubStats(): Promise<GithubStatsData> {
  const [user, repos, contribJson] = await Promise.all([
    fetchJson<{ public_repos?: number }>(
      `https://api.github.com/users/${GITHUB_USERNAME}`
    ).catch(() => null),
    fetchJson<Array<{ stargazers_count?: number }>>(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
    ).catch(() => null),
    fetchJson<{
      contributions?: Array<{ date: string; count: number; level: number }>;
    }>(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
    ).catch(() => null),
  ]);

  const safeRepos = Array.isArray(repos) ? repos : [];
  const rawDays = Array.isArray(contribJson?.contributions)
    ? contribJson.contributions
    : [];

  const sorted = [...rawDays].sort((a, b) => a.date.localeCompare(b.date));
  const recent = sorted.slice(-154);

  return {
    repos:
      typeof user?.public_repos === "number"
        ? user.public_repos
        : safeRepos.length,
    stars: safeRepos.reduce(
      (sum, repo) => sum + (repo.stargazers_count ?? 0),
      0
    ),
    totalContributions: sorted.reduce(
      (sum, day) => sum + (day.count ?? 0),
      0
    ),
    cells: recent.map((day) => ({
      level: Number.isFinite(day.level) ? Math.max(0, Math.min(4, day.level)) : 0,
    })),
  };
}

export function GithubStats() {
  const [data, setData] = useState<GithubStatsData | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;

    fetchGithubStats()
      .then((result) => {
        if (!active) return;
        setData(result);
        setFailed(result.cells.length === 0);
      })
      .catch(() => {
        if (active) setFailed(true);
      });

    return () => {
      active = false;
    };
  }, []);

  const cells =
    data && data.cells.length > 0
      ? data.cells
      : Array.from({ length: 154 }, () => ({ level: 0 }));

  const statusLabel = failed
    ? "Live data unavailable"
    : data
      ? `${data.totalContributions} in the last year`
      : "Loading live data…";

  return (
    <section
      id="github"
      className="section-shell scroll-mt-24 border-t border-white/[0.055]"
    >
      <div className="mx-auto max-w-[1120px]">
        <p className="section-kicker">My GitHub stats</p>

        <h2 className="section-title">
          <span className="block">Commits, projects</span>
          <span className="block">and activity.</span>
        </h2>

        <Reveal
          as="a"
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noreferrer"
          className="github-card mt-12 block"
        >
          <div className="grid gap-8 lg:grid-cols-[.38fr_.62fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <div className="rounded-full border border-white/10 bg-white/[0.04] p-3">
                  <Github size={20} />
                </div>

                <div>
                  <p className="font-display text-lg font-semibold text-white">
                    @{GITHUB_USERNAME}
                  </p>
                  <p className="text-xs text-zinc-600">GitHub profile</p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-6 text-zinc-500">
                Public work across full-stack systems, APIs, client websites
                and experiments.
              </p>

              <div className="mt-6 flex gap-8">
                <div>
                  <strong className="block font-display text-2xl text-white">
                    {data ? data.repos : "—"}
                  </strong>
                  <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-zinc-600">
                    Repos
                  </span>
                </div>

                <div>
                  <strong className="block font-display text-2xl text-white">
                    {data ? data.stars : "—"}
                  </strong>
                  <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-zinc-600">
                    Stars
                  </span>
                </div>

                <div>
                  <ArrowUpRight className="mt-1 text-zinc-600" size={18} />
                </div>
              </div>
            </div>

            <div>
              <div className="mb-3 flex justify-between gap-4 font-mono text-[8px] uppercase tracking-[0.12em] text-zinc-700">
                <span>Contribution graph</span>
                <span className="text-right">{statusLabel}</span>
              </div>

              <div className="contribution-scroll" aria-hidden="true">
                <div
                  className="contribution-grid"
                  aria-label="GitHub contribution activity, most recent 22 weeks"
                >
                  {cells.map((cell, index) => (
                    <span
                      key={index}
                      className={`contribution-cell level-${cell.level}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
