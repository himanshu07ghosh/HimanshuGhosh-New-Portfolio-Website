"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Wallet, AppWindow,ChartCandlestick, Newspaper, Sun } from "lucide-react";
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
    accuracy: "100% tracking efficiency",
    Icon: Wallet,
    gradient: "from-cyan/35 to-signal/25",
    github: "https://github.com/himanshu07ghosh/Expense_Tracker_WebApp",
    demo: "https://expense-tracker-himanshughosh.vercel.app/",
  },
  {
    name: "Global News Hub",
    description:
      "📰 Global News Hub - Real-time news from trusted sources worldwide. Features include live headlines, weather widget, location detection, bookmarks, dark/light theme, and category filtering.",
    tech: ["HTML", "CSS", "JavaScript", "React", "GNews API"],
    accuracy: "100% (GNews API Integration "",
    Icon: Newspaper,
    gradient: "from-cyan/35 to-signal/25",
    github: "https://github.com/himanshu07ghosh/global-news-hub-webapp",
    demo: "https://global-news-hub-webapp-himanshughosh.vercel.app/",
  },
  {
    name: "Skyline Weather App",
    description:
      "A real-time weather dashboard built as an internship project. Search any city, use your current location, and see live conditions plus a 5-day forecast — default home city is Dehradun, Uttarakhand. Fully responsive for phone and laptop.",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    accuracy: "80-90% Accuracy (OpenWeather API)",
    Icon: Sun,
    gradient: "from-amber/35 to-orange/25",
    github: "https://github.com/himanshu07ghosh/Skyline-Weather-Dashboard",
    demo: "https://skyline-weather-app-himanshughosh.vercel.app/",
  },
  {
    name: "Prime Trade Analyser",
    description:
      "Analyses the trades using the historical_data.csv file and generates the average P&L and important market analytics.",
    tech: ["HTML", "CSS", "JavaScript", "CSV Processing"],
    accuracy: "Depends on Sample data attached",
    Icon: ChartCandlestick,
    gradient: "from-green/35 to-cyan/25",
    github: "https://github.com/himanshu07ghosh/prime-trade-dashboard/tree/main",
    demo: "https://prime-trade-dashboard-one.vercel.app/",
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
