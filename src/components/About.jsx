import { motion } from 'framer-motion';
import {
  User,
  Rocket,
  Code,
  Trophy,
  GitBranch,
  Users,
  Star,
  Send,
  Eye,
  Settings,
  Circle,
  Hexagon,
  FileText,
  Diamond,
  TrendingUp
} from 'lucide-react';

const About = () => {


  const topSkills = [
    "Next.js",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Shadcn UI",
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative py-16 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-10 animated-grid-pattern"></div>

        {/* Floating Shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [45, 55, 45] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-4 w-24 h-24 bg-secondary/5 rounded-lg blur-3xl"
        />

      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">


          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-base-content mb-6"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-base-content/70 max-w-4xl mx-auto leading-relaxed"
          >
            I'm a passionate full-stack developer dedicated to creating exceptional digital experiences using modern web technologies.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* My Story Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative bg-white/50 dark:bg-slate-800/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-200 dark:border-slate-700/30 shadow-xl overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-primary/20 transition-colors duration-500" />

            <div className="relative z-10 container mx-auto px-4">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                  <User className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">My Story</h3>
                  <p className="text-sm text-base-content/60">Full-Stack Developer & Digital Creator</p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p className="text-base sm:text-lg">
                  I am a lifelong tech enthusiast, fascinated by how technology turns ideas into reality. Highly self-motivated, I continuously learn and develop my skills. Coming from a <span className="text-purple-400 font-semibold">Food Science and Technology</span> background, I successfully adapted to the field of web development.
                </p>
                <p className="text-base sm:text-lg lg:text-xl">
                  With <span className="text-blue-400 font-semibold">1+ years of hands-on experience</span>, I specialize in building responsive, scalable, and modern web applications using <span className="text-blue-400 font-semibold">Next.js and the MERN stack</span>. I enjoy transforming complex ideas into elegant interfaces using libraries like <span className="text-pink-400 font-semibold">Framer Motion, GSAP, and Shadcn UI</span>.
                </p>
                <p className="text-base sm:text-lg">
                  Beyond coding, I'm passionate about building clean, maintainable, and efficient code that solves real-world problems. I aspire to become a versatile full-stack developer with expertise in both web and mobile applications, always eager to collaborate with innovative tech teams.
                </p>
              </div>


            </div>
          </motion.div>

          {/* Top Skills Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/50 dark:bg-slate-800/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-200 dark:border-slate-700/30 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Top Skills</h3>
            </div>

            <div className="space-y-4">
              {topSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/80 dark:bg-slate-700/30 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="relative flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(var(--p),0.5)]" />
                    <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-primary animate-ping opacity-75" />
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-200">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>



        {/* Ready to Start CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] p-10 md:p-16 border border-white/20 dark:border-slate-700/30 shadow-2xl overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -ml-32 -mb-32" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center shadow-xl mb-6">
              <Rocket className="text-white" size={32} />
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 whitespace-nowrap">
              Ready to Start Your <span className="text-gradient">Project?</span>
            </h3>

            <p className="text-base md:text-lg text-base-content/70 max-w-xl mx-auto mb-10">
              Let's create something amazing together. I'm always excited to work on new challenges and help bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-primary rounded-full px-8 py-3 flex items-center gap-3 transition-all duration-300"
              >
                <Rocket size={20} /> Start a Project
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="btn btn-secondary rounded-full px-8 py-3 flex items-center gap-3 transition-all duration-300"
              >
                <Settings size={20} /> View Services
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
