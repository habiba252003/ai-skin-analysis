import { Link, useLocation } from "wouter";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/analysis", label: "Skin Analysis" },
    { href: "/products", label: "Products" },
    { href: "/routine", label: "Routine" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Sparkles className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
          <span className="font-serif text-2xl font-medium tracking-wide">Scanly </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild variant="default" className="rounded-full px-6">
            <Link href="/analysis">Start Analysis</Link>
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b shadow-lg py-4 px-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg font-medium p-2 transition-colors ${
                location === link.href ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild variant="default" className="rounded-full w-full mt-4" onClick={() => setIsOpen(false)}>
            <Link href="/analysis">Start Analysis</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
