"use client";

import { motion } from "framer-motion";

const RESPONSIBILITIES = [
  "Built 3+ responsive web applications using HTML, CSS, and JavaScript",
  "Improved UI performance and load efficiency by ~30%",
  "Used Git and GitHub workflows for collaborative development",
  "Focused on performance optimization and front-end UI efficiency",
];

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-signal">Experience</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-paper sm:text-4xl">
            Real internship conditions.
          </h2>
        </motion.div>

        <div className="relative border-l border-line pl-8">
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute -left-px top-0 h-full w-px bg-signal-gradient"
          />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <span className="absolute -left-[2.55rem] top-1.5 h-3 w-3 rounded-full bg-signal shadow-glow" />

            <div className="rounded-2xl glass p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-xl text-paper">Software Engineer Intern</h3>
                <span className="font-mono text-xs text-haze">Oct 2024 – Nov 2024</span>
              </div>
              <p className="mt-1 text-sm text-signal">CodeAlpha IT Services Pvt. Ltd.</p>
              <p className="mt-1 inline-flex items-center gap-1.5 font-mono text-xs text-amber">
                ★ Received Best Intern Award
              </p>

              <ul className="mt-5 space-y-2.5">
                {RESPONSIBILITIES.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-haze">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-cyan" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {["HTML5", "CSS3", "JavaScript", "Git", "GitHub", "Kafka"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-xs text-haze"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
