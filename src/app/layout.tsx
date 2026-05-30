import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-silk-two-18.vercel.app"),
  title: {
    default: "Whyte Goodfriend M. | Solar PV & Data Science",
    template: "%s | Whyte Goodfriend M.",
  },
  description:
    "Research portfolio for solar photovoltaics, machine learning, anomaly detection, and data-driven energy analytics.",
  openGraph: {
    title: "Whyte Goodfriend M. | Solar PV & Data Science",
    description:
      "Solar PV researcher building reliable machine-learning and analytics workflows for energy systems.",
    url: "https://portfolio-silk-two-18.vercel.app",
    siteName: "Whyte Goodfriend M. Research Portfolio",
    type: "website",
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
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
