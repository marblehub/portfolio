import { assetPath } from "@/lib/site";

const publications = [
  {
    year: "2026",
    title: "Anomaly detection, filtering and visualization for outdoor photovoltaic data",
    authors: "Whyte, G. M., Gerber, A., Rau, U., and Pieters, B. E.",
    venue: "Solar Energy, 307, 114351",
    publisher: "Elsevier",
    focus:
      "UMAP-HDBSCAN and LOF filtering for unsupervised classification, visualization, and application-specific cleaning of outdoor PV data.",
  },
  {
    year: "2024",
    title:
      "Development and improvement of a transient temperature model of PV modules: Concept of trailing data",
    authors:
      "Whyte Goodfriend, Pieters, E. B., Merdzhanova, T., Agbo, S., Ezema, F., and Rau, U.",
    venue: "Progress in Photovoltaics: Research and Applications, 32(6), 399-405",
    publisher: "Wiley",
    focus:
      "A transient extension of the Faiman thermal model using thermal mass and dynamic parametrization for improved PV module temperature prediction.",
  },
  {
    year: "2023",
    title:
      "Temperature-modulated nanostructures of ytterbium-doped cobalt selenide for photovoltaic applications",
    authors: "Ikhioya, I. L., Whyte, G. M., and Nkele, A. C.",
    venue: "Journal of the Indian Chemical Society, 100(1), 100848",
    publisher: "Elsevier",
    focus:
      "Electrodeposited Yb-CoSe thin films with nano-clustered morphology, strong absorbance, and low band-gap values for solar and optical devices.",
  },
  {
    year: "2022",
    title:
      "The effects of doping and temperature on properties of electrochemically deposited Er3+ doped ZnSe thin films",
    authors:
      "Obitte, B. C. N., Ikhioya, I. L., Whyte, G. M., Chime, U. K., Ezekoye, B. A., Ekwealor, A. B. C., Maaza, M., and Ezema, F. I.",
    venue: "Optical Materials, 124, 111979",
    publisher: "Elsevier",
    focus:
      "Band-gap tuning of doped crystalline chalcogenide thin films for solar-cell buffer layers and absorber applications.",
  },
  {
    year: "2021",
    title:
      "Experimental and theoretical studies of the solid-state performance of electrodeposited Yb2O3/As2Se3 nanocomposite films",
    authors:
      "Whyte, G. M., Awada, C., Offor, P. O., Whyte, F. U., Kanoun, M. B., Goumri-Said, S., Alshoaibi, A., Ekwealor, A. B. C., Maaza, M., and Ezema, F. I.",
    venue: "Journal of Alloys and Compounds, 855, 157324",
    publisher: "Elsevier",
    focus:
      "Low-cost electrodeposition and DFT analysis of chalcogenide nanocomposite films for phase-change and solar-cell applications.",
  },
];

export default function Publications() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl">
        <p className="section-kicker">Publications</p>
        <h1 className="mt-3 text-3xl font-bold text-foreground">
          Selected recent research outputs
        </h1>
        <p className="mt-3 text-muted">
          A curated list of recent peer-reviewed publications from my CV,
          covering outdoor PV analytics, PV module thermal modeling, and
          photovoltaic materials research.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={assetPath("/whyte-goodfriend-cv.pdf")}
          className="btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Download full CV
        </a>
        <a
          href="https://www.researchgate.net/profile/goodfriendwhyte"
          className="btn-secondary"
          target="_blank"
          rel="noreferrer"
        >
          ResearchGate
        </a>
      </div>

      <div className="grid gap-4">
        {publications.map((publication) => (
          <article key={publication.title} className="card">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="section-kicker">{publication.year}</p>
                <h2 className="mt-2 text-xl font-semibold text-foreground">
                  {publication.title}
                </h2>
              </div>
              <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted">
                {publication.publisher}
              </span>
            </div>

            <p className="mt-4 text-sm text-muted">{publication.authors}</p>
            <p className="mt-2 font-medium text-foreground">{publication.venue}</p>
            <p className="mt-3 text-sm text-muted">{publication.focus}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
