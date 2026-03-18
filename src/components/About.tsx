import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative z-20 bg-[#121212] py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full items-center">
          
          {/* Left: Image Container */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden bg-black/50 border border-white/10 group">
            <Image 
              src="/about_profile.png"
              alt="Anirban Banerjee Profile Image"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 blur-[2px] group-hover:blur-none"
            />
            {/* Interactive Design Badge overlay similar to image */}
            <div className="absolute bottom-8 right-8 w-24 h-24 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center -rotate-90 text-[10px] font-bold tracking-[0.2em] text-white/50 group-hover:text-white transition-colors duration-500">
              DEVELOPER
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white/90 mb-10">
              About <span className="font-bold text-white">Me</span>
            </h2>

            <div className="space-y-6 text-[#ededed]/60 text-base md:text-lg leading-relaxed">
              <p>
                I am a Developer and robust engineer with experience building scalable, high-performance web applications. I bridge the gap between creative design and highly-optimized backend systems.
              </p>
              <p>
                Strong expertise in React, Next.js, TypeScript, and Node.js, with hands-on experience designing REST APIs, integrating AI capabilities, and building end-to-end user interfaces that feel premium and responsive.
              </p>
              <p>
                Currently a B.Tech student in Electronics and Communication Engineering at Narula Institute of Technology (2021-2025), I consistently push boundaries by owning complex features end-to-end, writing maintainable code, and refining architectural architectures.
              </p>
              <p className="text-white">
                Always eager to build products that impact thousands and push my technical boundaries.
              </p>
            </div>

            {/* Stats / Badges */}
            <div className="mt-12 flex gap-12 md:gap-16">
              <div>
                <h4 className="text-4xl md:text-5xl font-bold text-white mb-2">4</h4>
                <p className="text-[10px] uppercase font-bold tracking-[0.15em] text-[#ededed]/50">
                  YEARS B.TECH
                </p>
              </div>
              <div>
                <h4 className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">10+</h4>
                <p className="text-[10px] uppercase font-bold tracking-[0.15em] text-[#ededed]/50">
                  PROJECTS SHIPPED
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
