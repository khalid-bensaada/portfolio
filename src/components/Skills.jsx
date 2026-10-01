import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-4xl font-extrabold md:text-6xl">
          What I work with
        </h2>

        <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.group}>
              <h3 className="font-display text-xl font-extrabold text-lantern">
                {s.group}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-dust/30 px-3 py-1.5 font-mono text-sm transition-colors hover:border-lantern hover:text-lantern"
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
