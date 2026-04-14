import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>

      <ProjectCard
        title="Unsupervised PV Anomaly Detection"
        desc="Detected abnormal PV behavior using ML methods on high-quality real-world datasets."
      />

      <ProjectCard
        title="PV Data Quality Pipeline"
        desc="Developed preprocessing pipeline ensuring reliable downstream analysis."
      />

      <ProjectCard
        title="Solar PV Performance Analytics"
        desc="Statistical and ML-based analysis for energy system monitoring."
      />
    </section>
  );
}
