"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

export default function Resume() {
  return (
    <section className="relative px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 rounded-3xl glass-strong px-8 py-10 text-center sm:flex-row sm:text-left"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-signal-gradient">
            <FileText size={24} className="text-ink" />
          </div>
          <div>
            <h3 className="font-display text-lg text-paper">Want the full picture?</h3>
            <p className="mt-1 text-sm text-haze">
              Grab my one-page resume — experience, projects and skills, in PDF.
            </p>
          </div>
        </div>

        <a
          href="/resume/Himanshu_Ghosh_Resume.pdf"
          download
          data-cursor-hover
          className="glow-btn inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-signal-gradient px-6 py-3 text-sm font-medium text-ink shadow-glow transition-transform hover:-translate-y-0.5"
        >
          <Download size={16} />
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
