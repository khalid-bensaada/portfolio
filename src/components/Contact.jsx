import { contact } from "../data/contact";

const rows = [
  { label: "Email", text: contact.email, href: `mailto:${contact.email}` },
  {
    label: "Phone",
    text: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, "")}`,
  },
  { label: "GitHub", text: "github.com/kbensaada953", href: contact.github },
  { label: "LinkedIn", text: "Khalid Bensaada", href: contact.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-4xl font-extrabold md:text-6xl">
          Let's work together
        </h2>
        <p className="mt-4 max-w-xl text-dust">{contact.intro}</p>

        <ul className="mt-14 divide-y divide-dust/20 border-y border-dust/20">
          {rows.map((r) => (
            <li key={r.label}>
              <a
                href={r.href}
                target={r.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:gap-10"
              >
                <span className="w-24 shrink-0 font-mono text-sm text-dust">
                  {r.label}
                </span>
                <span className="break-all font-display text-2xl font-extrabold transition-colors group-hover:text-lantern md:text-3xl">
                  {r.text}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
