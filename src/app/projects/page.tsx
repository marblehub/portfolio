import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Research Portfolio",
    desc: "A Next.js, TypeScript, and Tailwind CSS portfolio for presenting PV research, data science work, and contact links.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://portfolio-silk-two-18.vercel.app/",
    repo: "https://github.com/marblehub/portfolio",
  },
  {
    title: "Trustworthy Energy RAG Chatbot",
    desc: "A document-grounded chatbot for solar and energy technical-support manuals, including provenance, citations, OCR support, and fault-code lookup.",
    tags: ["FastAPI", "Streamlit", "ChromaDB", "RAG"],
    repo: "https://github.com/s26-redi-ml-ai/provenance-energy-rag-chatbot",
  },
  {
    title: "SolarGraph AI",
    desc: "LLM-powered knowledge graph exploration for PV solar energy and materials-science research.",
    tags: ["LLM", "Knowledge graph", "PV research"],
    repo: "https://github.com/marblehub/solargraph-ai",
  },
  {
    title: "PV Power Predictor",
    desc: "Machine-learning workflow for predicting photovoltaic power output from energy-system data.",
    tags: ["Python", "Machine learning", "Forecasting"],
    repo: "https://github.com/marblehub/PV-Power-Predictor",
  },
  {
    title: "PV Data Quality Pipeline",
    desc: "Preprocessing and quality-control concepts for improving downstream PV analysis and model reliability.",
    tags: ["Data quality", "PV analytics", "Python"],
  },
  {
    title: "Bible Reading Plan App",
    desc: "A desktop reading-plan application showing applied Python GUI development beyond research tooling.",
    tags: ["Python", "PyQt6", "Desktop app"],
    repo: "https://github.com/marblehub/Bible-Reading-Plan-App",
  },
];

export default function Projects() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl">
        <p className="section-kicker">Selected work</p>
        <h1 className="mt-3 text-3xl font-bold text-foreground">Projects</h1>
        <p className="mt-3 text-muted">
          A curated set of research and software projects across solar PV,
          machine learning, trustworthy AI, and applied data workflows.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
