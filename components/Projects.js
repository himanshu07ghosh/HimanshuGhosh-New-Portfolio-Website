"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Wallet, AppWindow } from "lucide-react";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    name: "Emotion Detection System",
    description:
      "End-to-end ML pipeline trained on the FER2013 dataset (35,000+ images) for real-time facial emotion classification across 4+ emotions.",
    tech: ["Python", "TensorFlow", "NumPy", "Pandas", "Scikit-learn"],
    accuracy: "~85–90% accuracy",
    Icon: BrainCircuit,
    gradient: "from-signal/40 to-signal2/30",
    github: "https://github.com/himanshu07ghosh",
    demo: "https://github.com/himanshu07ghosh",
  },
  {
    name: "Expense Tracker Web App",
    description:
      "Responsive expense management application used by 30+ users to track daily spending, with add/delete functionality and an intuitive UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    accuracy: "+45% tracking efficiency",
    Icon: Wallet,
    gradient: "from-cyan/35 to-signal/25",
    github: "https://github.com/himanshu07ghosh",
    demo: "https://github.com/himanshu07ghosh",
  },
  {
    name: "Java GUI Application",
    description:
      "Desktop application built on core Java OOP principles — inheritance, encapsulation, and interfaces — with Python scripts for backend logic.",
    tech: ["Java", "Swing", "Python"],
    accuracy: "OOP architecture",
    Icon: AppWindow,
    gradient: "from-signal2/35 to-amber/20",
    github: "https://github.com/himanshu07ghosh",
    demo: "https://github.com/himanshu07ghosh",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-signal">Projects</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-paper sm:text-4xl">
            Things I&apos;ve shipped.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
