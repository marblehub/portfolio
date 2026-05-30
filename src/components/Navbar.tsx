import Link from "next/link";

export default function Navbar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/publications", label: "Publications" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4 sm:px-8">
        <Link href="/" className="font-semibold text-foreground">
          Whyte Goodfriend M.
        </Link>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
