import Link from "next/link";
export default function Home() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-bold">
        Data-Driven Energy Researcher
      </h1>

      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        Specializing in solar PV systems, unsupervised anomaly detection,
        and machine learning for real-world energy intelligence.
      </p>
      
      <div className="mt-8 flex justify-center gap-4">
  
		  <Link
			href="/projects"
			className="px-5 py-2 bg-slate-900 text-white rounded-xl">
			View Projects
		  </Link>

		  <a
			href="/cv.pdf"
			className="px-5 py-2 border rounded-xl"
			target="_blank"
		  >
			Download CV
		  </a>

		</div>
    </section>
  );
}
