import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-4xl font-extrabold md:text-6xl">
          Selected work
        </h2>
        <p className="mt-4 max-w-xl text-dust">
          Three projects I built with Laravel, Vue and React. More on my GitHub.
        </p>

        <ul className="mt-14 divide-y divide-dust/20 border-y border-dust/20">
          {projects.map((p) => (
            <li key={p.title} className="group">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="grid gap-4 py-10 transition-colors md:grid-cols-[1fr_1.4fr] md:gap-12"
              >
                <div>
                  <span className="text-3xl" aria-hidden="true">
                    {p.icon}
                  </span>
                  <h3 className="mt-3 font-display text-3xl font-extrabold transition-colors group-hover:text-lantern md:text-4xl">
                    {p.title}
                  </h3>
                </div>
                <div>
                  <p className="text-dust">{p.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-dust/30 px-3 py-1 font-mono text-xs text-paper"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-block text-lantern">
                    View on GitHub
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
