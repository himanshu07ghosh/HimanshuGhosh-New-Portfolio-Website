"use client";

import { Linkedin, Github, Mail } from "lucide-react";

const SOCIALS = [
  { icon: Linkedin, href: "https://linkedin.com/in/himanshu-ghosh", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/himanshu07ghosh", label: "GitHub" },
  { icon: Mail, href: "mailto:himanshu07ghosh@gmail.com", label: "Email" },
];

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      {SOCIALS.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label={label}
          data-cursor-hover
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/[0.03] text-haze transition-all duration-300 hover:-translate-y-1 hover:border-signal/50 hover:text-paper hover:shadow-glow"
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
}
