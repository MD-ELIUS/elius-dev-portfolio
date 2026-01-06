import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {


  return (
    <footer className="relative pt-20 pb-10 overflow-hidden border-t border-slate-200 dark:border-slate-800/50">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center space-y-8">


          {/* Copyright & Info */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-slate-900 dark:text-white font-bold tracking-tight">
              <span className="text-gradient">PORTFOLIO</span>
              <span className="w-1 h-1 rounded-full bg-slate-400" />
              <span className="text-gradient">MD. ELIUS</span>
            </div>

            <div className="space-y-2">
              <p className="text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5 font-medium">
                &copy; {new Date().getFullYear()} All rights reserved.
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500/70 font-body uppercase tracking-[0.2em]">
                Built with React &bull; Vite &bull; Tailwind
              </p>
            </div>
          </div>

          {/* Navigation Mini-links (Optional but professional) */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
