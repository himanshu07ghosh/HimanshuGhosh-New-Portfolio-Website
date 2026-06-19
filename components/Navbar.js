"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
          scrolled ? "glass-strong shadow-card" : "bg-transparent"
        }`}
      >
        <button
          onClick={() => scrollTo("home")}
          data-cursor-hover
          className="font-mono text-sm tracking-tight text-paper"
        >
          <span className="text-signal">~/</span>himanshu<span className="text-haze">.dev</span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                data-cursor-hover
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  active === link.id ? "text-paper" : "text-haze hover:text-paper"
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.06] border border-white/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo("contact")}
          data-cursor-hover
          className="hidden md:inline-flex glow-btn rounded-full bg-white/[0.06] border border-white/10 px-4 py-2 text-sm text-paper hover:border-signal/40 transition-colors"
        >
          Let&apos;s talk
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-paper"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-4 right-4 glass-strong rounded-2xl p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="w-full rounded-xl px-4 py-3 text-left text-sm text-haze hover:bg-white/5 hover:text-paper transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
