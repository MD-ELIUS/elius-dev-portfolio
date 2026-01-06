import { Eye, Send, Download } from "lucide-react";

const HeroButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 px-4 lg:px-0">

      <a
        href="#projects"
        className="btn btn-primary rounded-full group touch-manipulation flex items-center justify-center gap-3 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
      >
        <Eye className="group-hover:animate-pulse" />
        <span>View My Work</span>
      </a>

      <a
        href="#contact"
        className="btn btn-secondary rounded-full group touch-manipulation flex items-center justify-center gap-3 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50"
      >
        <Send className="group-hover:animate-pulse" />
        <span>Get In Touch</span>
      </a>

      <a
        href="/resume.pdf"
        className="btn btn-primary rounded-full group touch-manipulation flex items-center justify-center gap-3 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
        download
      >
        <Download className="group-hover:animate-pulse" />
        <span>Download CV</span>
      </a>

    </div>
  );
};

export default HeroButtons;
