import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Research Portfolio",
  description: "PV, ML, and Data Science Researcher",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800">
        <Navbar />
        <main className="max-w-5xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
