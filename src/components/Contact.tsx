"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText, ArrowUpRight } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    handle: "@AEVILOP",
    href: "https://github.com/AEVILOP",
    icon: Github,
    color: "group-hover:text-white",
    glow: "group-hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]",
  },
  {
    label: "LinkedIn",
    handle: "Anirban Banerjee",
    href: "https://www.linkedin.com/in/anirban-banerjee-7a131224a/",
    icon: Linkedin,
    color: "group-hover:text-blue-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]",
  },
  {
    label: "Resume",
    handle: "Download CV",
    href: "https://drive.google.com/file/d/1RiRih9lLfNDpzjB0pL9EOfSpy--F9YBD/view?usp=drive_link",
    icon: FileText,
    color: "group-hover:text-emerald-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.25)]",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-20 bg-[#121212] py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[400px] rounded-full bg-indigo-700/10 blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center">

        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-xs font-bold tracking-[0.2em] text-[#ededed]/40 uppercase mb-4"
        >
          Get In Touch
        </motion.p>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.95] mb-6"
        >
          Let&apos;s build
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            something great.
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="text-base md:text-lg text-[#ededed]/50 max-w-xl mb-14 leading-relaxed"
        >
          Open to full-time roles, freelance projects, and interesting
          collaborations. Drop me a message and I&apos;ll get back to you.
        </motion.p>

        {/* Primary CTA */}
        <motion.a
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          href="mailto:anirbanbanerjee481@gmail.com"
          className="group inline-flex items-center gap-3 px-10 py-5 mb-16 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-lg shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:shadow-[0_0_60px_rgba(99,102,241,0.7)] hover:scale-[1.04] transition-all duration-300"
        >
          <Mail size={22} />
          anirbanbanerjee481@gmail.com
          <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </motion.a>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          className="w-px h-10 bg-white/10 mb-12"
        />

        {/* Social Links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={5}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          {socials.map(({ label, handle, href, icon: Icon, color, glow }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`group flex items-center gap-4 px-7 py-4 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/10 hover:border-white/15 transition-all duration-300 ${glow}`}
            >
              <Icon size={20} className={`text-white/50 transition-colors duration-300 ${color}`} />
              <div className="text-left">
                <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/30">{label}</p>
                <p className={`text-sm font-semibold text-white/70 transition-colors duration-300 ${color}`}>{handle}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
