import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle scroll for background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/90 shadow-md" : "bg-transparent"
      }`}
    >
      {/* Nav content wrapper */}
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center w-full">
        {/* Logo */}
        <a
          href="#about"
          className="text-2xl md:text-3xl font-bold hover:text-white tracking-wide text-blue-400 transition-colors"
        >
          Osoba Samuel
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-white font-medium items-center">
          {links.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleLinkClick(link.href)}
                className="hover:text-blue-400 transition-colors"
              >
                {link.name}
              </button>
            </li>
          ))}
          <li>
            <a
              href="/resum.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-400 text-black rounded-full font-medium hover:bg-blue-500 transition"
            >
              View Resume
            </a>
          </li>
        </ul>

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 right-0 left-0 mx-auto w-[90%] max-w-xs md:hidden bg-black/95 backdrop-blur-lg flex flex-col gap-4 text-white text-lg z-40 rounded-lg p-4 shadow-lg"
          >
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="hover:text-blue-400 transition-colors text-left"
              >
                {link.name}
              </button>
            ))}
            <a
              href="/resume.pdf"
              download
              className="px-4 py-2 rounded-full bg-blue-400 text-black font-medium hover:bg-blue-500 transition-colors text-center"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Nav;
