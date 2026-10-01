import { links } from "../data/links";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-display text-2xl font-extrabold">
          KB<span className="text-lantern">.</span>
        </a>
        <ul className="hidden gap-8 text-dust md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-lantern">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="rounded-full border border-lantern px-4 py-1.5 text-sm text-lantern transition-colors hover:bg-lantern hover:text-ink"
        >
          Download CV
        </a>
      </nav>
    </header>
  );
}
