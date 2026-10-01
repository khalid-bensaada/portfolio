import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-4xl font-extrabold md:text-6xl">
          Experience
        </h2>

        <ol className="mt-14 border-l-2 border-lantern/60 pl-8">
          {experience.map((e) => (
            <li key={e.company} className="relative">
              <span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full bg-lantern" />
              <p className="font-mono text-sm text-dust">{e.period}</p>
              <h3 className="mt-1 font-display text-2xl font-extrabold md:text-3xl">
                {e.role}, <span className="text-lantern">{e.company}</span>
              </h3>
              <ul className="mt-5 max-w-3xl list-disc space-y-3 pl-5 text-dust marker:text-lantern">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-dust/30 px-3 py-1 font-mono text-xs"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
