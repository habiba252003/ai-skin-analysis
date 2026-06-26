import { Link } from "wouter";
import { Sparkles, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="font-serif text-2xl font-medium tracking-wide">Scanly</span>
          </Link>
          <p className="text-muted-foreground max-w-sm">
            Premium AI-powered skincare analysis platform. Discover your best skin with intelligent, personalized recommendations.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Explore</h4>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/analysis" className="text-muted-foreground hover:text-primary transition-colors">Skin Analysis</Link>
            </li>
            <li>
              <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link>
            </li>
            <li>
              <Link href="/routine" className="text-muted-foreground hover:text-primary transition-colors">Routine</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Legal</h4>
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a>
            </li>
            <li>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </li>
            <li>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          &copy; 2026 Scanly . All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-facebook">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-twitter">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
