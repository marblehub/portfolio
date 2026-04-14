export default function About() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">About Me</h1>

      <div className="space-y-4 text-slate-700 leading-relaxed">
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

      {/* Skills section */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border rounded-2xl">
          <h2 className="font-semibold">Technical Skills</h2>
          <p className="text-sm text-slate-600">
            Python, ML, PV analysis, Data science, Power BI
          </p>
        </div>

        <div className="p-4 border rounded-2xl">
          <h2 className="font-semibold">Research Focus</h2>
          <p className="text-sm text-slate-600">
            Anomaly detection, PV systems, photonics
          </p>
        </div>
      </div>
    </section>
  );
}
