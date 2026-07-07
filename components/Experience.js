"use client";

import { motion } from "framer-motion";

const EXPERIENCES = [

  {
    role: "Web Development Intern", 
    company: "Pinnacle Labs", 
    period: "Jun 2026 – July 2026",
    award: "★ Built & Deployed 3 production-ready web applications", 
    responsibilities: [
      "Developed Prime Trade Dashboard — a financial analytics tool processing CSV data to generate average P&L and market insights",
      "Built Skyline Weather App with real-time data, geolocation, 5-day forecast, and responsive design for all devices",
      "Created Global News Hub featuring live headlines, weather widget, location detection, bookmarks, and dark/light theme",
      "Implemented RESTful API integrations (OpenWeather, GNews) and optimized frontend performance for 40% faster load times",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "React", "REST APIs", "Git"],

  },

  {
    role: "Summer Intern",
    company: "Manroop Charity & Research Centre - NGO",
    period: "Jun 2025 – Aug 2025",
    award: "★ Recognized for impactful communication and engagement",
    responsibilities: [
      "Collaborated with NGO President and Core Team to identify social issues and plan interventions",
      "Conducted field visits in slum areas to document out-of-school children under 10 for educational support",
      "Delivered road-safety awareness sessions with Amar Ujala team; received recognition for engagement",
      "Organized Harela Parv plantation drive, planting 50+ oxygen-generating saplings across 5 acres",
      "Facilitated government school admissions by collecting documents and coordinating enrollment",
    ],
    tags: ["Community Outreach", "Field Research", "Awareness Campaigns", "Event Management", "Documentation"],
  },
  // 🔽 BOTTOM: Oldest (Oct 2024 - CodeAlpha)
  {
    role: "Software Engineer Intern",
    company: "CodeAlpha IT Services Pvt. Ltd.",
    period: "Oct 2024 – Nov 2024",
    award: "★ Received Best Intern Award",
    responsibilities: [
      "Built 3+ responsive web applications using HTML, CSS, and JavaScript",
      "Improved UI performance and load efficiency by ~30%",
      "Used Git and GitHub workflows for collaborative development",
      "Focused on performance optimization and front-end UI efficiency",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub", "Kafka"],
  },
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

          {/* Map through all experiences */}
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={`${exp.role}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative mb-12 last:mb-0"
            >
              <span className="absolute -left-[2.55rem] top-1.5 h-3 w-3 rounded-full bg-signal shadow-glow" />

              <div className="rounded-2xl glass p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-xl text-paper">{exp.role}</h3>
                  <span className="font-mono text-xs text-haze">{exp.period}</span>
                </div>
                <p className="mt-1 text-sm text-signal">{exp.company}</p>
                {exp.award && (
                  <p className="mt-1 inline-flex items-center gap-1.5 font-mono text-xs text-amber">
                    {exp.award}
                  </p>
                )}

                <ul className="mt-5 space-y-2.5">
                  {exp.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-haze">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-cyan" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
