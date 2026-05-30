export default function Footer() {
  return (
    <footer className="mt-10 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>Whyte Goodfriend M. - Solar PV, machine learning, and data science.</p>
        <a
          href="https://github.com/marblehub"
          className="font-medium text-foreground hover:text-accent"
          target="_blank"
          rel="noreferrer"
        >
          github.com/marblehub
        </a>
      </div>
    </footer>
  );
}
