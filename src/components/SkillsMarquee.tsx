/* eslint-disable @next/next/no-img-element */

export default function SkillsMarquee() {
  const skills = [
    { name: "JavaScript", src: "https://cdn.simpleicons.org/javascript" },
    { name: "React", src: "https://cdn.simpleicons.org/react" },
    { name: "Node.js", src: "https://cdn.simpleicons.org/nodedotjs" },
    { name: "Express.js", src: "https://cdn.simpleicons.org/express/white" },
    { name: "MongoDB", src: "https://cdn.simpleicons.org/mongodb" },
    { name: "Tailwind CSS", src: "https://cdn.simpleicons.org/tailwindcss" },
    { name: "Framer Motion", src: "https://cdn.simpleicons.org/framer" },
    { name: "GSAP", src: "https://cdn.simpleicons.org/greensock" },
    { name: "HTML5", src: "https://cdn.simpleicons.org/html5" },
    { name: "CSS3", src: "https://cdn.simpleicons.org/css" },
    { name: "Postman", src: "https://cdn.simpleicons.org/postman" },
    { name: "Git", src: "https://cdn.simpleicons.org/git" }
  ];

  return (
    <section className="relative z-20 bg-[#0a0f12] py-24 overflow-hidden border-t border-white/5">
      <div className="flex flex-col items-center mb-16">
        <p className="text-xs font-bold tracking-[0.2em] text-[#ededed]/50 uppercase mb-2">
          Technologies & Tools
        </p>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white/90">
          My <span className="font-bold text-white">Arsenal</span>
        </h2>
      </div>

      {/* Infinite Looping Marquee */}
      <div className="flex whitespace-nowrap overflow-hidden relative w-full">
        {/* Absolute Gradients for fade effect on edges */}
        <div className="absolute left-0 top-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#121212] to-transparent z-10" />
        <div className="absolute right-0 top-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#121212] to-transparent z-10" />

        {/* Double wrappers for seamless loop */}
        <div className="animate-marquee inline-flex space-x-6 shrink-0 pr-6 items-center">
          {skills.map((skill, i) => (
            <div key={i} className="flex items-center gap-4 px-6 py-4 rounded-full bg-[#1a1a1a] border border-white/5 text-white/90 font-bold tracking-wide shadow-lg">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <img src={skill.src} alt={skill.name} className="w-full h-full object-contain" />
              </div>
              <span className="mt-0.5">{skill.name}</span>
            </div>
          ))}
        </div>
        <div className="animate-marquee inline-flex space-x-6 shrink-0 pr-6 items-center">
          {skills.map((skill, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-4 px-6 py-4 rounded-full bg-[#1a1a1a] border border-white/5 text-white/90 font-bold tracking-wide shadow-lg">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <img src={skill.src} alt={skill.name} className="w-full h-full object-contain" />
              </div>
              <span className="mt-0.5">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
