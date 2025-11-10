
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import instituteLogo from "@/assets/institute-logo.png";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", isExternal: true },
    { name: "About Us", href: "/about", isExternal: true },
    { name: "Register", href: "/register", isExternal: true },
    { name: "Achievements", href: "/videos", isExternal: true },
    { name: "Events", href: "/events", isExternal: true },
    { name: "Contact Us", href: "/contact-us", isExternal: true },
    { name: "Donations", href: "/donations", isExternal: true }
  ];

  const coursesPosition = 2; // Insert courses after "About Us"
  const registerPosition = 3; // Register comes after Courses dropdown

  const courseItems = [
    { name: "Overview", href: "/courses/overview", isExternal: true },
    { name: "Tajweed", href: "/courses/tajweed", isExternal: true },
    { name: "Hifth", href: "/courses/hifth", isExternal: true },
    { name: "Qiraat", href: "/courses/qiraat", isExternal: true },
    { name: "Arabic", href: "/courses/arabic", isExternal: true },
    { name: "Ijazaat", href: "/courses/ijazaat", isExternal: true }
  ];

  return (
    <header className="bg-slate-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={instituteLogo} alt="Ibn Al-Jazari Institute" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.slice(0, coursesPosition).map((item) => (
              item.isExternal ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm hover:text-teal-300 transition-colors duration-200 hover:underline"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm hover:text-teal-300 transition-colors duration-200 hover:underline"
                >
                  {item.name}
                </a>
              )
            ))}
            
            {/* Courses Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm hover:text-teal-300 transition-colors duration-200 flex items-center gap-1">
                Courses <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {courseItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    {item.isExternal ? (
                      <Link to={item.href} className="cursor-pointer w-full">
                        {item.name}
                      </Link>
                    ) : (
                      <a href={item.href} className="cursor-pointer">
                        {item.name}
                      </a>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Register Link */}
            <Link
              to="/register"
              className="text-sm hover:text-teal-300 transition-colors duration-200 hover:underline"
            >
              Register
            </Link>

            {navItems.slice(registerPosition).map((item) => (
              item.isExternal ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm hover:text-teal-300 transition-colors duration-200 hover:underline"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm hover:text-teal-300 transition-colors duration-200 hover:underline"
                >
                  {item.name}
                </a>
              )
            ))}
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu and Theme Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-600">
            <nav className="flex flex-col space-y-3">
              {navItems.slice(0, coursesPosition).map((item) => (
                item.isExternal ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-sm hover:text-teal-300 transition-colors duration-200 px-2 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm hover:text-teal-300 transition-colors duration-200 px-2 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              
              {/* Mobile Courses Section */}
              <div className="text-sm font-semibold text-teal-300 px-2 pt-2">Courses</div>
              {courseItems.map((item) => (
                item.isExternal ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-sm hover:text-teal-300 transition-colors duration-200 px-4 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm hover:text-teal-300 transition-colors duration-200 px-4 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}

              {/* Mobile Register Link */}
              <Link
                to="/register"
                className="text-sm hover:text-teal-300 transition-colors duration-200 px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>

              {navItems.slice(registerPosition).map((item) => (
                item.isExternal ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-sm hover:text-teal-300 transition-colors duration-200 px-2 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm hover:text-teal-300 transition-colors duration-200 px-2 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
