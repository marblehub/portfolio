const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Whyte Goodfriend M.",
  url: "https://marblehub.github.io/portfolio/",
  sameAs: [
    "https://github.com/marblehub",
    "https://www.linkedin.com/in/goodfriendwhyte/",
    "https://www.researchgate.net/profile/goodfriendwhyte",
  ],
  jobTitle: "Doctoral Researcher",
  knowsAbout: [
    "Solar photovoltaics",
    "Machine learning",
    "PV anomaly detection",
    "Energy analytics",
    "Data science",
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
