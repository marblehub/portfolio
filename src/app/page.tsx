import Link from "next/link";

const highlights = [
  {
    value: "PV + ML",
    label: "Research focus",
  },
  {
    value: "Anomaly detection",
    label: "Core method area",
  },
  {
    value: "FastAPI + Python",
    label: "Applied software stack",
  },
];

const featuredProjects = [
  {
    title: "Trustworthy Energy RAG Chatbot",
    text: "Document-grounded technical-support assistant with citations, OCR support, provenance, and fault-code lookup.",
  },
  {
    title: "SolarGraph AI",
    text: "LLM-powered knowledge graph exploration for PV solar energy and materials-science research.",
  },
  {
    title: "PV Power Predictor",
    text: "Machine-learning workflow for predicting photovoltaic power output from energy-system data.",
  },
];

export default function Home() {
  return (
    <>
      <section className="py-14 sm:py-20">
        <p className="section-kicker">Solar photovoltaics + machine learning</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold text-foreground sm:text-6xl">
          Whyte Goodfriend M.
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-muted sm:text-xl">
          I build data-driven tools for PV system monitoring, anomaly detection,
          forecasting, and trustworthy energy analytics.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/projects" className="btn-primary">
            View projects
          </Link>
          <a
            href="whyte-goodfriend-cv.pdf"
            className="btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
          <a
            href="https://www.linkedin.com/in/goodfriendwhyte/"
            className="btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.value} className="card">
              <p className="text-xl font-semibold text-foreground">{item.value}</p>
              <p className="mt-1 text-sm text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 py-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="section-kicker">Research identity</p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground">
            Practical AI for cleaner, more explainable energy systems.
          </h2>
          <p className="mt-4 text-muted">
            My work connects experimental solar PV knowledge with machine
            learning, data quality engineering, and software that researchers
            and operators can actually use.
          </p>
        </div>

        <div className="grid gap-4">
          {featuredProjects.map((project) => (
            <article key={project.title} className="card">
              <h3 className="font-semibold text-foreground">{project.title}</h3>
              <p className="mt-2 text-sm text-muted">{project.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
