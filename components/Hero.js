"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, Mail } from "lucide-react";

const ROLES = ["AI Engineer", "Full Stack Developer", "Software Engineer", "Problem Solver"];

function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = deleting ? 45 : 75;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <span className="text-gradient font-display">
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-signal ml-1 align-middle animate-blink" />
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid pt-28 pb-16 md:pt-0"
    >
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
      <div className="absolute -top-40 right-0 h-[28rem] w-[28rem] rounded-full bg-signal2/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[22rem] w-[22rem] rounded-full bg-cyan/10 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-[1.4fr_1fr]">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs text-haze">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            Open to SWE &amp; AI/ML internships
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.08] text-paper sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-gradient">Himanshu Ghosh</span>
          </h1>

          <p className="mt-4 font-mono text-base text-haze sm:text-lg">
            <span className="text-signal">$</span> whoami{" "}
            <span className="text-paper/80">→</span> <TypingRole />
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-haze sm:text-lg">
            Award-winning B.Tech CSE student with hands-on experience building
            machine learning systems, scalable web applications, and software
            solutions. Passionate about AI, backend engineering, and creating
            impactful products.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              data-cursor-hover
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="glow-btn group inline-flex items-center gap-2 rounded-full bg-signal-gradient px-6 py-3 text-sm font-medium text-ink shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              data-cursor-hover
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-signal/40"
            >
              <Mail size={16} />
              Contact Me
            </a>

            <a
              href="/resume/Himanshu_Ghosh_Resume.pdf"
              download
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-haze transition-colors hover:text-paper"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs text-haze">
            <span>45+ DSA problems solved</span>
            <span className="hidden sm:inline text-line">/</span>
            <span>5+ web apps deployed</span>
            <span className="hidden sm:inline text-line">/</span>
            <span>8.55 CGPA</span>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-[2rem] glass-strong p-2 shadow-glow-violet"
          >
            <div className="relative overflow-hidden rounded-[1.6rem]">
              <Image
                src="/images/himanshu-portrait.jpg"
                alt="Himanshu Ghosh"
                width={522}
                height={928}
                priority
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 70vw, 380px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-5 -left-5 glass rounded-2xl px-4 py-3 font-mono text-xs text-paper shadow-card">
              <p className="text-cyan">● available</p>
              <p className="text-haze">Dehradun, IN</p>
            </div>

            <div className="absolute -top-5 -right-5 glass rounded-2xl px-4 py-3 font-mono text-xs text-paper shadow-card">
              CSE &apos;28
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
