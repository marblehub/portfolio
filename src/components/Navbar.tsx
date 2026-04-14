import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-200">
      <div className="max-w-5xl mx-auto p-4 flex justify-between">
        <h1 className="font-bold">Whyte Goodfriend M. Research</h1>

        <div className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
