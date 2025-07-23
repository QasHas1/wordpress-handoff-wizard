
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Tajweed", href: "#tajweed" },
    { name: "Hifth", href: "#hifth" },
    { name: "Qiraat", href: "#qiraat" },
    { name: "Arabic", href: "#arabic" },
    { name: "To Register", href: "#register" },
    { name: "Ijazaat", href: "#ijazaat" },
    { name: "Videos", href: "#videos" },
    { name: "Events", href: "#events" },
    { name: "Contact us", href: "#contact" }
  ];

  return (
    <header className="bg-slate-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-teal-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">IJ</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-teal-300">IBN AL JAZARI</h1>
              <p className="text-xs text-slate-300">INSTITUTE</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm hover:text-teal-300 transition-colors duration-200 hover:underline"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white hover:bg-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-600">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm hover:text-teal-300 transition-colors duration-200 px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
