import { useEffect, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "@/components/reveal";

const GITHUB_USERNAME = "linuka7";

interface ContributionDay {
  level: number;
}

interface GithubStatsData {
  repos: number;
  stars: number;
  totalContributions: number;
  cells: ContributionDay[];
}

async function fetchGithubStats(): Promise<GithubStatsData> {
  const [userRes, reposRes, contribRes] = await Promise.all([
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`
    ),
    fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
    ),
  ]);

  const user = userRes.ok ? await userRes.json() : null;

  const repos: Array<{ stargazers_count?: number }> = reposRes.ok
    ? await reposRes.json()
    : [];

  const contribJson = contribRes.ok ? await contribRes.json() : null;

  const stars = Array.isArray(repos)
    ? repos.reduce(
        (sum, repo) => sum + (repo.stargazers_count ?? 0),
        0
      )
    : 0;

  const rawDays: Array<{
    date: string;
    count: number;
    level: number;
  }> = Array.isArray(contribJson?.contributions)
    ? contribJson.contributions
    : [];

  const sorted = [...rawDays].sort((a, b) =>
    a.date.localeCompare(b.date)
  );

  const recent = sorted.slice(-154);

  const cells: ContributionDay[] = recent.map((day) => ({
    level: Number.isFinite(day.level) ? day.level : 0,
  }));

  const totalContributions = sorted.reduce(
    (sum, day) => sum + (day.count ?? 0),
    0
  );

  return {
    repos:
      typeof user?.public_repos === "number"
        ? user.public_repos
        : Array.isArray(repos)
          ? repos.length
          : 0,
    stars,
    totalContributions,
    cells,
  };
}

export function GithubStats() {
  const [data, setData] = useState<GithubStatsData | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;

    fetchGithubStats()
      .then((result) => {
        if (active) {
          setData(result);
        }
      })
      .catch(() => {
        if (active) {
          setFailed(true);
        }
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

                  <p className="text-xs text-zinc-600">
                    GitHub profile
                  </p>
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
                  <ArrowUpRight
                    className="mt-1 text-zinc-600"
                    size={18}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="mb-3 flex justify-between font-mono text-[8px] uppercase tracking-[0.12em] text-zinc-700">
                <span>Contribution graph</span>
                <span>{statusLabel}</span>
              </div>

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
        </Reveal>
      </div>
    </section>
  );
}