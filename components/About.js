"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, GraduationCap, Trophy, Code2 } from "lucide-react";

const ACHIEVEMENTS = [
  {
    icon: Award,
    title: "Best FrontEnd DeveloperIntern Award",
    detail: "CodeAlpha IT Services, Nov 2024",
  },
  {
    icon: Trophy,
    title: "Multiple SDE Internship Offers",
    detail: "HCL TechBee, Zoho, AcmeGrade",
  },
  {
    icon: Code2,
    title: "IEEE Hackathon Lead",
    detail: "Led team through multiple hackathons",
  },
  {
    icon: GraduationCap,
    title: "85+ DSA Problems",
    detail: "Solved on LeetCode & GFG",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-14 flex items-end justify-between gap-6"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-signal">About</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-paper sm:text-4xl">
              Engineer in training,
              <br /> builder by habit.
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl glass-strong p-2 shadow-card">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem]">
                <Image
                  src="/images/himanshu-landscape.jpg"
                  alt="Himanshu Ghosh in the university library"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              </div>
            </div>
            <div className="absolute -bottom-6 right-4 glass rounded-2xl px-5 py-3 font-mono text-xs text-paper shadow-card">
              <p className="text-signal">CGPA</p>
              <p className="text-2xl font-display text-paper">8.55</p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="rounded-2xl glass p-6"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-haze">Education</p>
              <h3 className="mt-2 font-display text-lg text-paper">
                B.Tech, Computer Science Engineering
              </h3>
              <p className="mt-1 text-sm text-haze">
                Dev Bhoomi Uttarakhand University, Dehradun · 2024 – 2028
              </p>
              <p className="mt-3 text-sm leading-relaxed text-haze">
                Aggregate 8.55 CGPA across the first three semesters, with a
                focus on Software Engineering, AI/ML, Full Stack Development,
                and Data Structures &amp; Algorithms. Participated in multiple
                hackathons and led the university&apos;s IEEE chapter team.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {ACHIEVEMENTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    data-cursor-hover
                    className="group rounded-2xl glass p-5 transition-colors hover:border-signal/30"
                  >
                    <Icon size={20} className="text-signal" />
                    <p className="mt-3 font-display text-sm text-paper">{item.title}</p>
                    <p className="mt-1 text-xs text-haze">{item.detail}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
