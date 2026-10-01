import { useEffect, useMemo } from "react";

const SNIPPETS = [
  "Route::post('/orders', [OrderController::class, 'store']);",
  "const [projects, setProjects] = useState([]);",
  "Schema::create('reservations', function (Blueprint $t) {",
  "await axios.get('/api/products');",
  "$user->assignRole('admin');",
  'git commit -m "ship it"',
  "SELECT * FROM catches ORDER BY weight DESC;",
  "export default function App() { return <Portfolio />; }",
  "docker compose up -d",
  "Auth::guard('api')->attempt($credentials);",
];

export default function Spotlight() {
  const rows = useMemo(
    () =>
      Array.from({ length: 70 }, (_, i) =>
        [0, 3, 6]
          .map((o) => SNIPPETS[(i + o) % SNIPPETS.length])
          .join("      "),
      ).join("\n"),
    [],
  );

  useEffect(() => {
    const move = (e) => {
      const s = document.documentElement.style;
      s.setProperty("--x", e.clientX + "px");
      s.setProperty("--y", e.clientY + "px");
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  const mask =
    "radial-gradient(240px circle at var(--x, 70%) var(--y, 35%), black 0%, transparent 100%)";

  return (
    <pre
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 m-0 select-none overflow-hidden whitespace-pre font-mono text-sm leading-7 text-lantern"
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    >
      {rows}
    </pre>
  );
}
