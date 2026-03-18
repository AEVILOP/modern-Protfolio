"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, FileText } from "lucide-react";

const links = [
  { href: "https://github.com/AEVILOP", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/anirban-banerjee-7a131224a/", icon: Linkedin, label: "LinkedIn" },
  {
    href: "https://drive.google.com/file/d/1RiRih9lLfNDpzjB0pL9EOfSpy--F9YBD/view?usp=drive_link",
    icon: FileText,
    label: "Resume",
  },
];

export default function Footer() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        })
      );
      setDate(
        now.toLocaleDateString("en-IN", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
          timeZone: "Asia/Kolkata",
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative z-20 bg-[#080808] border-t border-white/[0.06]">
      {/* Top strip — live status bar */}
      <div className="border-b border-white/[0.06] px-6 md:px-12 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        {/* Availability pill */}
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-[11px] font-bold tracking-[0.18em] text-emerald-400/80 uppercase">
            Available for opportunities
          </span>
        </div>

        {/* Live clock */}
        <div className="text-right">
          <p className="font-mono text-xs text-white/20 tabular-nums leading-tight">{date}</p>
          <p className="font-mono text-sm font-bold text-white/40 tabular-nums leading-tight tracking-widest">
            {time} <span className="text-white/20 font-normal">IST</span>
          </p>
        </div>
      </div>

      {/* Main footer body */}
      <div className="px-6 md:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        {/* Left — wordmark + tagline */}
        <div>
          <p className="text-2xl font-black tracking-tighter text-white uppercase mb-1">
            ANIRBAN<span className="text-white/20">.</span>
          </p>
          <p className="text-[11px] text-white/30 tracking-[0.15em] uppercase font-medium">
            Full-Stack Developer · Kolkata, India
          </p>
        </div>

        {/* Center — nav links */}
        <nav className="flex gap-6 text-xs font-bold tracking-[0.12em] uppercase text-white/30">
          {["Work", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white/70 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right — socials */}
        <div className="flex items-center gap-4">
          {links.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            >
              <Icon size={15} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] px-6 md:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-white/20 font-medium tracking-[0.1em] uppercase">
        <p>© {new Date().getFullYear()} Anirban Banerjee</p>
        <p>Built with Next.js · Framer Motion · Tailwind CSS</p>
      </div>
    </footer>
  );
}
