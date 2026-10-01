import { about } from "../data/about";

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-4xl font-extrabold md:text-6xl">
          About me
        </h2>

        <div className="mt-14 grid gap-16 md:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="max-w-xl space-y-5 text-lg text-dust">
              {about.bio.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>

            <h3 className="mt-12 font-display text-xl font-extrabold text-lantern">
              Languages
            </h3>
            <ul className="mt-4 space-y-1">
              {about.languages.map((l) => (
                <li key={l.name}>
                  {l.name}
                  <span className="text-dust"> / {l.level}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-xl font-extrabold text-lantern">
              Interests
            </h3>
            <p className="mt-4">{about.interests.join(", ")}</p>
          </div>

          <div>
            <h3 className="font-display text-xl font-extrabold text-lantern">
              Education
            </h3>
            <ol className="mt-6 border-l-2 border-lantern/60 pl-6">
              {about.education.map((e) => (
                <li key={e.school} className="relative pb-8 last:pb-0">
                  <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-lantern" />
                  <p className="font-mono text-sm text-dust">{e.period}</p>
                  <p className="mt-1 font-display text-lg font-extrabold">
                    {e.school}
                  </p>
                  <p className="text-dust">{e.field}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
