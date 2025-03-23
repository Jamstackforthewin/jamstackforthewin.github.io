
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "./ui-components/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-white/90 backdrop-blur-md shadow-sm"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold text-jam-900 tracking-tight transition-opacity duration-300">
              Jamstack<span className="text-primary">forthewin</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#templates"
              className="text-jam-700 hover:text-jam-900 font-medium link-underline"
            >
              Templates
            </a>
            <a
              href="#services"
              className="text-jam-700 hover:text-jam-900 font-medium link-underline"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="text-jam-700 hover:text-jam-900 font-medium link-underline"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-jam-700 hover:text-jam-900 font-medium link-underline"
            >
              Contact
            </a>
            <Button size="sm">Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-jam-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 z-40 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a
                href="#templates"
                className="text-jam-700 hover:text-jam-900 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Templates
              </a>
              <a
                href="#services"
                className="text-jam-700 hover:text-jam-900 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="#pricing"
                className="text-jam-700 hover:text-jam-900 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-jam-700 hover:text-jam-900 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <Button className="w-full justify-center mt-2">Get Started</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
