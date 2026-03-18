import { Mail, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative z-20 bg-black pt-24 pb-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter text-center mb-8">
          Let&apos;s work together.
        </h2>
        
        {/* Eye Catchy Email Display */}
        <a 
          href="mailto:anirbanbanerjee481@gmail.com" 
          className="group flex flex-col sm:flex-row items-center gap-3 px-8 py-4 mb-14 rounded-full bg-[#1a1a1a] border border-white/10 hover:bg-[#222] hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] cursor-pointer"
        >
           <span className="text-blue-400 group-hover:text-blue-300 font-bold tracking-widest uppercase text-xs sm:text-sm transition-colors">
              Drop a line at
           </span>
           <span className="text-xl sm:text-2xl font-medium tracking-wide text-white/90 group-hover:text-white transition-colors">
              anirbanbanerjee481@gmail.com
           </span>
        </a>

        {/* Call To Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-24 z-10 w-full sm:w-auto items-center justify-center">
          <a
            href="mailto:anirbanbanerjee481@gmail.com"
            className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 border border-blue-500/50 text-white rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-[1.03] shadow-[0_0_40px_rgba(79,70,229,0.4)] hover:shadow-[0_0_60px_rgba(79,70,229,0.7)]"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              <Mail size={22} />
              Send Message
            </span>
          </a>

          <a
            href="https://drive.google.com/file/d/1RiRih9lLfNDpzjB0pL9EOfSpy--F9YBD/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-[#1a1a1a] border border-white/10 text-white rounded-full font-bold text-lg transition-all duration-300 hover:bg-[#252525] hover:border-white/30 hover:scale-[1.03]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FileText size={22} className="text-emerald-400 group-hover:text-emerald-300 transition-colors" />
              Download CV
            </span>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-[#ededed]/50 text-xs md:text-sm">
          <p>© {new Date().getFullYear()} Anirban Banerjee. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0 font-medium">
            <span className="hover:text-white transition-colors cursor-pointer">Built with Next.js & Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
