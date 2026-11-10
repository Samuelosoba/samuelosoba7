import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { RESUME_URL } from "../data/links";

const links = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Solid background once the page is scrolled
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu on outside click or Escape
  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-white/90 shadow-sm backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 font-mono"
      >
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-bold tracking-wide text-zinc-900 transition-colors hover:text-accent md:text-2xl"
        >
          SAMUEL.exe
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 text-sm text-zinc-700 md:flex">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-zinc-900 px-5 py-2 text-white transition-colors hover:bg-accent"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Hamburger (mobile) */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="-mr-2 p-2 text-zinc-900 md:hidden"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mb-4 rounded-2xl border border-zinc-200 bg-white p-2 font-mono shadow-lg md:hidden"
          >
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block rounded-xl px-4 py-3 text-zinc-800 transition-colors hover:bg-zinc-100 hover:text-accent"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="p-2">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="block rounded-full bg-zinc-900 px-4 py-3 text-center text-white transition-colors hover:bg-accent"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
