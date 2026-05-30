export default function About() {
  return (
    <section className="space-y-10">
      <div className="max-w-3xl">
        <p className="section-kicker">About</p>
        <h1 className="mt-3 text-3xl font-bold text-foreground">
          Researcher at the intersection of solar PV, machine learning, and
          applied data science.
        </h1>
      </div>

      <div className="max-w-4xl space-y-4 leading-relaxed text-muted">
        <p>
          I am a data-driven researcher working at the intersection of
          solar photovoltaic systems, machine learning, and integrated
          energy analysis.
        </p>

        <p>
          My work focuses on unsupervised anomaly detection in real-world
          PV datasets, where the goal is to identify abnormal operational
          patterns without labeled data. A key aspect of my research is
          ensuring high-quality, well-processed datasets to enable reliable
          downstream analysis and robust model performance.
        </p>

        <p>
          Beyond solar energy, I have experience in optical and photonic
          materials research, particularly chalcogenide-based systems,
          where I explore their structural and optical properties for
          infrared applications.
        </p>

        <p>
          I enjoy bridging experimental science with computational methods,
          using data science and machine learning to extract meaningful
          insights from complex systems.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="card">
          <h2 className="font-semibold text-foreground">Technical Skills</h2>
          <p className="mt-2 text-sm text-muted">
            Python, machine learning, PV analysis, data science, SQL, Power BI,
            FastAPI, and Git.
          </p>
        </div>

        <div className="card">
          <h2 className="font-semibold text-foreground">Research Focus</h2>
          <p className="mt-2 text-sm text-muted">
            PV systems, anomaly detection, forecasting, thermal modeling, and
            photonics.
          </p>
        </div>

        <div className="card">
          <h2 className="font-semibold text-foreground">Working Style</h2>
          <p className="mt-2 text-sm text-muted">
            I like research tools that are reproducible, readable, and useful
            beyond a single experiment.
          </p>
        </div>
      </div>
    </section>
  );
}
