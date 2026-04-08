import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Shop Yachts", href: "/shop" },
  { label: "New Inventory", href: "/shop" },
  { label: "Pearl Yachts", href: "/pearl-yachts" },
  { label: "Cruisers", href: "/cruisers" },
  { label: "Fairline", href: "/fairline" },
  { label: "Dockage", href: "https://strongsmarine.com/yacht-sales-center", external: true },
  { label: "Service & Repair", href: "https://strongsmarine.com/boat-service-repair-ny", external: true },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm flex justify-between items-center px-6 md:px-12 py-5">
      <Link to="/" className="text-2xl font-bold tracking-tighter text-slate-950 uppercase font-headline">
        STRONG'S MARINE
      </Link>

      <div className="hidden lg:flex items-center space-x-8">
        {navLinks.map((link) =>
          link.external ? (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-red-700 transition-colors duration-300 font-headline tracking-tight text-sm font-semibold uppercase"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.label}
              to={link.href}
              className={`font-headline tracking-tight text-sm font-semibold uppercase transition-colors duration-300 ${
                location.pathname === link.href
                  ? "text-slate-950 border-b-2 border-red-700 pb-1"
                  : "text-slate-500 hover:text-red-700"
              }`}
            >
              {link.label}
            </Link>
          )
        )}
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-on-surface">
          <Search className="w-5 h-5" />
        </button>
        <Button className="hidden md:inline-flex bg-on-primary-fixed text-white px-6 py-2.5 rounded-lg text-xs tracking-widest font-headline uppercase hover:bg-secondary transition-all duration-300">
          Request Quote
        </Button>
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-lg lg:hidden">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 font-headline text-sm font-semibold uppercase py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-slate-700 font-headline text-sm font-semibold uppercase py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
