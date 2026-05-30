import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StructuredData from "../components/StructuredData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://marblehub.github.io"),
  title: {
    default: "Whyte Goodfriend M. | Solar PV & Data Science",
    template: "%s | Whyte Goodfriend M.",
  },
  description:
    "Research portfolio for solar photovoltaics, machine learning, anomaly detection, and data-driven energy analytics.",
  alternates: {
    canonical: "/portfolio/",
  },
  openGraph: {
    title: "Whyte Goodfriend M. | Solar PV & Data Science",
    description:
      "Solar PV researcher building reliable machine-learning and analytics workflows for energy systems.",
    url: "https://marblehub.github.io/portfolio/",
    siteName: "Whyte Goodfriend M. Research Portfolio",
    images: [
      {
        url: "/portfolio/og-image.png",
        width: 1200,
        height: 675,
        alt: "Whyte Goodfriend M. research portfolio social preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whyte Goodfriend M. | Solar PV & Data Science",
    description:
      "Solar PV researcher building reliable machine-learning and analytics workflows for energy systems.",
    images: ["/portfolio/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <StructuredData />
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
