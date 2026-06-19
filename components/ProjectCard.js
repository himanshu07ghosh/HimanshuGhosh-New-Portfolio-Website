"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="group relative rounded-3xl glass p-2 shadow-card transition-colors hover:border-signal/30"
    >
      <div
        className={`relative flex h-44 items-center justify-center overflow-hidden rounded-[1.4rem] bg-gradient-to-br ${project.gradient}`}
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <project.Icon size={56} className="relative z-10 text-white/90" strokeWidth={1.4} />
        <span className="absolute bottom-3 right-4 font-mono text-xs text-white/60">
          {project.accuracy}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg text-paper">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-haze">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-haze"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-line px-4 py-2.5 text-xs font-medium text-paper transition-colors hover:border-signal/40 hover:bg-white/5"
          >
            <Github size={14} />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="glow-btn inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-signal-gradient px-4 py-2.5 text-xs font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
