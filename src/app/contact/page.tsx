import { assetPath } from "@/lib/site";

export default function Contact() {
  const links = [
    {
      label: "GitHub",
      value: "github.com/marblehub",
      href: "https://github.com/marblehub",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/goodfriendwhyte",
      href: "https://www.linkedin.com/in/goodfriendwhyte/",
    },
    {
      label: "ResearchGate",
      value: "researchgate.net/profile/goodfriendwhyte",
      href: "https://www.researchgate.net/profile/goodfriendwhyte",
    },
  ];

  return (
    <section className="space-y-8">
      <div className="max-w-3xl">
        <p className="section-kicker">Contact</p>
        <h1 className="mt-3 text-3xl font-bold text-foreground">
          Let&apos;s talk about PV systems, anomaly detection, or applied data
          science.
        </h1>
      </div>

      <p className="max-w-2xl text-muted">
        Feel free to reach out for collaborations in PV systems,
        anomaly detection, or data science projects.
      </p>

      <a
        href={assetPath("/whyte-goodfriend-cv.pdf")}
        className="btn-primary"
        target="_blank"
        rel="noreferrer"
      >
        Download CV
      </a>

      <div className="grid gap-4 md:grid-cols-2">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="card block hover:border-accent"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-sm font-medium text-muted">{link.label}</span>
            <span className="mt-1 block font-semibold text-foreground">
              {link.value}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
