import type { Metadata } from "next";
import Link from "next/link";
import { assetPath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "CV highlights for Whyte Goodfriend M.: PV research, teaching, education, conferences, technical skills, and community work.",
};

const experience = [
  {
    period: "2021-2025",
    role: "Scientific Researcher",
    organization: "Forschungszentrum Juelich GmbH",
    location: "Juelich, Germany",
    points: [
      "Collected, processed, and analyzed outdoor photovoltaic module datasets.",
      "Modeled and simulated PV module performance for data-driven research.",
      "Built machine-learning workflows for analysis, prediction, and anomaly detection.",
      "Published peer-reviewed research and presented at national and international events.",
      "Mentored junior researchers and students.",
    ],
  },
  {
    period: "2016-2021",
    role: "University Physics Lecturer",
    organization: "University of Nigeria Nsukka",
    location: "Nsukka, Nigeria",
    points: [
      "Supervised undergraduate research projects through successful thesis completion.",
      "Mentored students and junior researchers in experimental methods and data analysis.",
      "Delivered tutorials that strengthened physics problem-solving skills.",
      "Managed laboratory instruments and supported experimental design.",
      "Contributed to peer-reviewed publications with the Nano Research Group.",
    ],
  },
  {
    period: "2014-2016",
    role: "Science and Computer Instructor",
    organization: "Secondary education and foundation-school roles",
    location: "Nigeria",
    points: [
      "Taught physics, mathematics, computer fundamentals, and digital-literacy skills.",
      "Designed practical exercises, assessments, and laboratory demonstrations.",
      "Supported computer lab maintenance and hands-on software training.",
    ],
  },
];

const education = [
  {
    period: "2021-current",
    degree: "Doctorate",
    institution: "RWTH Aachen University",
    detail: "Physics, electricity, and energy.",
  },
  {
    period: "2016-2019",
    degree: "Master's in Solid-state/Materials Science",
    institution: "University of Nigeria Nsukka",
    detail: "Materials research with strong experimental and analytical grounding.",
  },
  {
    period: "2009-2013",
    degree: "Bachelor's in Physics",
    institution: "University of Nigeria Nsukka",
    detail: "Physics foundation for later PV, materials, and modeling work.",
  },
];

const capabilities = [
  {
    title: "Data and ML",
    items: [
      "Python",
      "Machine learning",
      "Data processing",
      "Visualization",
      "SQL",
      "R",
    ],
  },
  {
    title: "Energy modeling",
    items: [
      "PV module analysis",
      "Thermal modeling",
      "MATLAB",
      "Simulink",
      "Forecasting",
      "Anomaly detection",
    ],
  },
  {
    title: "Research delivery",
    items: [
      "Scientific writing",
      "LaTeX",
      "Conference talks",
      "Mentoring",
      "Peer-reviewed publication",
      "Git",
    ],
  },
];

const conferences = [
  {
    year: "2024",
    title: "41st European Photovoltaic Solar Energy Conference and Exhibition",
    location: "Vienna, Austria",
  },
  {
    year: "2023",
    title: "40th European Photovoltaic Solar Energy Conference and Exhibition",
    location: "Lisbon, Portugal",
  },
  {
    year: "2021",
    title:
      "4th African Nano Conference/Workshop on Nanotechnology Applications",
    location: "University of Nigeria Nsukka",
  },
  {
    year: "2019",
    title: "42nd Annual National Conference of the Nigerian Institute of Physics",
    location: "Federal University of Technology Owerri, Nigeria",
  },
];

const community = [
  {
    title: "Diaspora Narrative Initiative e.V",
    text: "Community engagement, integration support, counselling, participation, and empowerment work connected to sustainable-development goals.",
  },
  {
    title: "Professional networks",
    text: "Member of the Nigerian Institute of Physics and Horizon Resource Network.",
  },
];

export default function Experience() {
  return (
    <section className="space-y-10">
      <div className="max-w-3xl">
        <p className="section-kicker">Experience</p>
        <h1 className="mt-3 text-3xl font-bold text-foreground">
          CV highlights across PV research, teaching, materials science, and
          community work.
        </h1>
        <p className="mt-3 text-muted">
          A focused public version of my CV: enough detail to show research
          credibility, technical range, and leadership without publishing
          private personal information.
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
        <Link href="/publications" className="btn-secondary">
          View publications
        </Link>
      </div>

      <section className="space-y-4 py-0">
        <div>
          <p className="section-kicker">Work history</p>
          <h2 className="mt-2 text-2xl font-semibold text-foreground">
            Research, teaching, and technical instruction
          </h2>
        </div>

        <div className="grid gap-4">
          {experience.map((item) => (
            <article key={`${item.role}-${item.period}`} className="card">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="section-kicker">{item.period}</p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">
                    {item.role}
                  </h3>
                  <p className="mt-1 font-medium text-foreground">
                    {item.organization}
                  </p>
                </div>
                <span className="text-sm text-muted">{item.location}</span>
              </div>

              <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm text-muted sm:grid-cols-2">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 py-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-4">
          <div>
            <p className="section-kicker">Education</p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">
              Physics, energy, and materials science
            </h2>
          </div>

          <div className="grid gap-4">
            {education.map((item) => (
              <article key={item.degree} className="card">
                <p className="section-kicker">{item.period}</p>
                <h3 className="mt-2 font-semibold text-foreground">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {item.institution}
                </p>
                <p className="mt-2 text-sm text-muted">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="section-kicker">Capabilities</p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">
              Tools and strengths from the CV
            </h2>
          </div>

          <div className="grid gap-4">
            {capabilities.map((group) => (
              <article key={group.title} className="card">
                <h3 className="font-semibold text-foreground">{group.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 py-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <div>
            <p className="section-kicker">Conferences</p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">
              Selected academic events
            </h2>
          </div>

          <div className="grid gap-4">
            {conferences.map((event) => (
              <article key={`${event.year}-${event.title}`} className="card">
                <p className="section-kicker">{event.year}</p>
                <h3 className="mt-2 font-semibold text-foreground">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{event.location}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="section-kicker">Community</p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">
              Service and professional networks
            </h2>
          </div>

          <div className="grid gap-4">
            {community.map((item) => (
              <article key={item.title} className="card">
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
