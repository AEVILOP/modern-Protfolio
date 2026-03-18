import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Apna Dukan",
      category: "E-Commerce Website",
      image: "/projects/apna-dukan.png",
      github: "https://github.com/AEVILOP/apna-dukan-reactApp",
      live: "https://apna-dukan-react-app.vercel.app/"
    },
    {
      title: "Netflix Clone",
      category: "Landing Page Clone",
      image: "/projects/netflix.png",
      github: "https://github.com/AEVILOP/my-netflix-clone",
      live: "https://my-netflix-clone.netlify.app/"
    },
    {
      title: "Fossil Tune",
      category: "Web Music Player",
      image: "/projects/fossil-tune.png",
      github: "https://github.com/AEVILOP/Fossil-Tune",
      live: "https://fossil-tune.netlify.app/"
    },
    {
      title: "Start Your Day",
      category: "Task Management App",
      image: "/projects/task-app.png",
      github: "https://github.com/AEVILOP/task-app",
      live: "https://abstodoapp.netlify.app/"
    }
  ];

  return (
    <section id="work" className="relative z-20 bg-[#121212] py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="w-full flex justify-between items-end mb-16 md:mb-24">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#ededed]/50 uppercase mb-2">
              Selected Work
            </p>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white/90">
              Featured <span className="font-bold text-white">Projects</span>
            </h2>
          </div>
        </div>

        {/* Projects Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 w-full">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group block relative overflow-visible"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 mb-6">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transform group-hover:scale-105 group-hover:blur-[2px] transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]"
                />
                
                {/* Floating Meta Details / Buttons revealed on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-transform" title="View Source on GitHub">
                    <Github size={18} /> GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#111] text-white border border-white/20 rounded-full font-bold text-sm hover:scale-105 transition-transform hover:bg-[#222]" title="View Live Site">
                    Live <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>

              {/* Detail Section Below Image */}
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-[#ededed]/50 tracking-wide uppercase">
                    {project.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
