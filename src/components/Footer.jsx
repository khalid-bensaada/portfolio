export default function Footer() {
  return (
    <footer className="border-t border-dust/20 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-6 text-sm text-dust">
        <p>Khalid Bensaada</p>
        <p>
          Built with React, Vite and Tailwind CSS, {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
