"use client";

import { motion } from "framer-motion";

const CATEGORIES = [
  {
    label: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 80 },
      { name: "C / C++", level: 70 },
      { name: "JavaScript", level: 75 },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "HTML / CSS", level: 85 },
      { name: "React", level: 70 },
    ],
  },
  {
    label: "Backend & Database",
    skills: [
      { name: "Django", level: 60 },
      { name: "Flask", level: 55 },
      { name: "MySQL / SQL", level: 75 },
    ],
  },
  {
    label: "AI / ML",
    skills: [
      { name: "TensorFlow", level: 75 },
      { name: "Scikit-learn", level: 78 },
      { name: "NumPy / Pandas", level: 82 },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "VS Code", level: 90 },
      { name: "Jupyter Notebook", level: 80 },
      { name: "Apache Kafka", level: 45 },
    ],
  },
];

function SkillBar({ name, level, delay }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm text-paper">{name}</span>
        <span className="font-mono text-xs text-haze">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-signal-gradient"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-signal">Skills</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-paper sm:text-4xl">
            The stack behind the work.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: ci * 0.07 }}
              className="rounded-2xl glass p-6"
            >
              <p className="mb-5 font-mono text-xs uppercase tracking-widest text-haze">
                {cat.label}
              </p>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
