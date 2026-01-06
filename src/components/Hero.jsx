import { motion } from 'framer-motion';
import { Download, ExternalLink, Mail } from 'lucide-react';
import HeroTitle from './HeroTitle';
import { useContext, createContext, useState, useEffect } from 'react';
import heroImg from "../assets/hero.png"
import HeroButtons from './HeroButtons';

const ThemeContext = createContext();

const Hero = ({ theme }) => {


  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = ["MERN Stack Developer", "Full Stack Developer", "Frontend Developer"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTypingSpeed(2000); // Pause at end
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Pause before start
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] animated-grid-pattern"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-purple-500/5 to-transparent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <HeroTitle greeting="Assalamualaikum, I'm" name="a Developer" />
            <h1 className="text-3xl sm:text-5xl font-bold mt-4 text-transparent 
                 bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 uppercase">
              MD. ELIUS
            </h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl md:text-4xl font-semibold mb-4 text-base-content/80 font-heading mt-4"
            >
              {text}<span className="animate-pulse">|</span>
            </motion.h2>




            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-base-content/70 max-w-2xl mb-8 leading-relaxed font-body"
            >
              Building modern, responsive, and efficient web applications using{' '}
              <span className="font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">React</span>,{' '}
              <span className="font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Node.js</span>,{' '}
              <span className="font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Express</span>, and{' '}
              <span className="font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">MongoDB</span>,
              delivering clean and scalable solutions for real-world problems.
            </motion.p>



            <HeroButtons />


          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Enhanced Glow Effects */}


              {/* Image Container with Enhanced Border */}
              {/* Image Container with Enhanced Border */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-400/30 transition-all duration-300 group p-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse-slower">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-base-100">
                  <img
                    src={heroImg}
                    alt="Frontend Developer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'https://ui-avatars.com/api/?name=Developer&size=400&background=c084fc&color=fff&bold=true';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-400/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Floating Decorative Elements */}


            </div>
          </motion.div>
        </div>


        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto mt-12 sm:mt-16">
          <div className="group relative p-px rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse-slower transition-all duration-300 hover:scale-105 shadow-lg">
            <div className="text-center p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm h-full flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">5+</div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider font-medium">Projects</div>
            </div>
          </div>
          <div className="group relative p-px rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse-slower transition-all duration-300 hover:scale-105 shadow-lg">
            <div className="text-center p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm h-full flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">2+</div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider font-medium">Clients</div>
            </div>
          </div>
          <div className="group relative p-px rounded-2xl bg-gradient-to-r from-indigo-400 to-cyan-400 animate-pulse-slower transition-all duration-300 hover:scale-105 shadow-lg">
            <div className="text-center p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm h-full flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-2">1+</div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider font-medium">Years</div>
            </div>
          </div>
          <div className="group relative p-px rounded-2xl bg-gradient-to-r from-green-400 to-emerald-400 animate-pulse-slower transition-all duration-300 hover:scale-105 shadow-lg">
            <div className="text-center p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm h-full flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">10+</div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider font-medium">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Hero;
