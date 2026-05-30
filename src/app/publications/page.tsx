export default function Publications() {
  return (
    <section className="space-y-6">
      <div className="max-w-3xl">
        <p className="section-kicker">Publications</p>
        <h1 className="mt-3 text-3xl font-bold text-foreground">
          Research outputs and writing
        </h1>
        <p className="mt-3 text-muted">
          A curated publications list can live here as papers, preprints, and
          technical notes become ready to share.
        </p>
      </div>

      <div className="card max-w-3xl">
        <h2 className="font-semibold text-foreground">Coming soon</h2>
        <p className="mt-2 text-sm text-muted">
          For now, the best places to follow updates are LinkedIn,
          ResearchGate, and the project repositories linked from this site.
        </p>
      </div>
    </section>
  );
}
