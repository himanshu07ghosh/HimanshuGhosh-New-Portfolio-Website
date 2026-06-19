"use client";

import { Linkedin, Github, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";

// Gmail compose URL — opens Gmail directly (web or app) instead of
// whatever the device's default mail client happens to be.
const GMAIL_COMPOSE_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=himanshu07ghosh@gmail.com";

const SOCIALS = [
  { icon: Linkedin, href: "https://linkedin.com/in/himanshu-ghosh", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/himanshu07ghosh", label: "GitHub" },
  { icon: Mail, href: GMAIL_COMPOSE_URL, label: "Email" },
  { icon: Instagram, href: "https://www.instagram.com/himanshu_ghosh_/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100082314949941", label: "Facebook" },
  { icon: MessageCircle, href: "https://wa.me/917906350740", label: "WhatsApp" },
];

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      {SOCIALS.map(({ icon: Icon, href, label }) => (
        
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
