import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="stack" className="scroll-mt-nav border-b border-line py-section">
      <div className="mx-auto w-content">
        <p className="mb-7 font-mono text-micro uppercase tracking-widest text-faint">
          03 — Stack
        </p>
        <h2 className="text-balance font-display text-display font-semibold tracking-display text-fg">
          Tools I
          <br />
          <span className="text-muted">work with.</span>
        </h2>
        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="mb-4 font-mono text-micro uppercase tracking-widest text-faint">
                {group.label}
              </p>
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-line py-2 font-display text-lg tracking-tight text-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
