export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <div className="mx-auto w-full max-w-6xl px-6 pt-20">
        <p className="mb-6 flex items-center gap-2 text-sm text-dust">
          <span className="h-2 w-2 rounded-full bg-lantern" />
          Open to freelance work and internships
        </p>
        <h1 className="font-display text-[clamp(3.5rem,12vw,10rem)] font-extrabold leading-[0.9] tracking-tight">
          Khalid
          <br />
          Bensaada
        </h1>
        <p className="mt-8 max-w-xl text-lg text-dust">
          Full-stack developer building web apps with Laravel and React. Move
          your cursor: the code is already here.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-lantern px-6 py-3 font-medium text-ink transition-opacity hover:opacity-90"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-dust/40 px-6 py-3 transition-colors hover:border-lantern"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
