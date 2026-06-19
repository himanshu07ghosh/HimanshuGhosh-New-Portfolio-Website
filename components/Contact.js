"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Send, Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import SocialIcons from "./SocialIcons";

const initialForm = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const emailJsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const sheetsWebhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL;

      const requests = [];

      // 1. EmailJS — sends the message straight to your inbox.
      if (emailJsPublicKey && emailJsServiceId && emailJsTemplateId) {
        requests.push(
          fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              service_id: emailJsServiceId,
              template_id: emailJsTemplateId,
              user_id: emailJsPublicKey,
              template_params: {
                from_name: form.name,
                from_email: form.email,
                phone: form.phone,
                message: form.message,
                to_email: "himanshu07ghosh@gmail.com",
              },
            }),
          })
        );
      }

      // 2. Google Apps Script Web App — logs the submission into a Google Sheet.
      if (sheetsWebhookUrl) {
        requests.push(
          fetch(sheetsWebhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...form, submittedAt: new Date().toISOString() }),
          })
        );
      }

      if (requests.length === 0) {
        // No env vars configured yet — fall back to opening the user's mail client.
        window.location.href = `mailto:himanshu07ghosh@gmail.com?subject=Portfolio contact from ${encodeURIComponent(
          form.name || "a visitor"
        )}&body=${encodeURIComponent(
          `${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}`
        )}`;
        setStatus("sent");
        setForm(initialForm);
        return;
      }

      await Promise.all(requests);
      setStatus("sent");
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-signal">Contact</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-paper sm:text-4xl">
            Let&apos;s build something.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl glass-strong"
          >
            <div className="relative h-48 w-full">
              <Image
                src="/images/himanshu-landscape.jpg"
                alt="Himanshu Ghosh"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
            </div>

            <div className="p-6">
              <h3 className="font-display text-lg text-paper">Himanshu Ghosh</h3>
              <p className="mt-1 text-sm text-haze">B.Tech CSE · Dehradun, Uttarakhand</p>

              <div className="mt-6 space-y-3 text-sm text-haze">
                <a href="mailto:himanshu07ghosh@gmail.com" data-cursor-hover className="flex items-center gap-3 hover:text-paper transition-colors">
                  <Mail size={16} className="text-signal" />
                  himanshu07ghosh@gmail.com
                </a>
                <a href="tel:+917906350740" data-cursor-hover className="flex items-center gap-3 hover:text-paper transition-colors">
                  <Phone size={16} className="text-signal" />
                  +91 79063 50740
                </a>
                <p className="flex items-center gap-3">
                  <MapPin size={16} className="text-signal" />
                  Dehradun, Uttarakhand, India
                </p>
              </div>

              <div className="mt-6 border-t border-line pt-6">
                <SocialIcons />
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-5 rounded-3xl glass p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-mono text-haze">Name</label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-sm text-paper placeholder:text-haze/50 outline-none transition-colors focus:border-signal/50"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-mono text-haze">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-sm text-paper placeholder:text-haze/50 outline-none transition-colors focus:border-signal/50"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-mono text-haze">Phone Number</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 00000 00000"
                className="w-full rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-sm text-paper placeholder:text-haze/50 outline-none transition-colors focus:border-signal/50"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-mono text-haze">Message</label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about the role or project..."
                className="w-full resize-none rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-sm text-paper placeholder:text-haze/50 outline-none transition-colors focus:border-signal/50"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              data-cursor-hover
              className="glow-btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-signal-gradient px-6 py-3.5 text-sm font-medium text-ink shadow-glow transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>

            {status === "sent" && (
              <p className="flex items-center gap-2 text-sm text-cyan">
                <CheckCircle2 size={16} />
                Message sent successfully
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-amber">
                Something went wrong — please email himanshu07ghosh@gmail.com directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
