import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiFirebase,
  SiJavascript, SiTailwindcss, SiCss3, SiHtml5, SiGit, SiVercel,
  SiNetlify, SiFramer, SiGreensock, SiGithub, SiPostman, SiFigma
} from 'react-icons/si';
import { FaDatabase, FaCode } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const getSkillIcon = (name) => {
    const iconMap = {
      'JavaScript': SiJavascript,
      'React': SiReact,
      'Next.js': SiNextdotjs,
      'HTML5': SiHtml5,
      'CSS3': SiCss3,
      'Tailwind CSS': SiTailwindcss,
      'daisyUI': SiTailwindcss,
      'Node.js': SiNodedotjs,
      'Express.js': SiExpress,
      'Firebase': SiFirebase,
      'MongoDB': SiMongodb,
      'Git': SiGit,
      'GitHub': SiGithub,
      'VS Code': FaCode,
      'Postman': SiPostman,
      'Figma': SiFigma,
    };
    return iconMap[name] || FaDatabase;
  };

  const getSkillColor = (name) => {
    const colorMap = {
      'JavaScript': 'text-yellow-400',
      'React': 'text-blue-400',
      'Next.js': 'text-gray-800 dark:text-gray-200',
      'HTML5': 'text-orange-500',
      'CSS3': 'text-blue-500',
      'Tailwind CSS': 'text-cyan-500',
      'daisyUI': 'text-purple-500',
      'Node.js': 'text-green-500',
      'Express.js': 'text-gray-800 dark:text-gray-200',
      'Firebase': 'text-orange-500',
      'MongoDB': 'text-green-600',
      'Git': 'text-red-500',
      'GitHub': 'text-gray-800 dark:text-gray-200',
      'VS Code': 'text-blue-500',
      'Postman': 'text-orange-500',
      'Figma': 'text-purple-500',
    };
    return colorMap[name] || 'text-primary';
  };

  const allSkills = [
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'React', level: 95, category: 'Frontend' },
    { name: 'Next.js', level: 85, category: 'Frontend' },
    { name: 'HTML5', level: 95, category: 'Frontend' },
    { name: 'CSS3', level: 90, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
    { name: 'daisyUI', level: 90, category: 'Frontend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Express.js', level: 80, category: 'Backend' },
    { name: 'Firebase', level: 85, category: 'Backend' },
    { name: 'MongoDB', level: 85, category: 'Database' },
    { name: 'Git', level: 85, category: 'Tools' },
    { name: 'GitHub', level: 90, category: 'Tools' },
    { name: 'VS Code', level: 95, category: 'Tools' },
    { name: 'Postman', level: 80, category: 'Tools' },
    { name: 'Figma', level: 75, category: 'Tools' },
  ];

  const filters = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

  const filteredSkills = activeFilter === 'All'
    ? allSkills
    : allSkills.filter(skill => skill.category === activeFilter);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <section id="skills" className="py-20 overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="My" highlight="Skills" />

        <div className="text-center mb-16 sm:mb-20 -mt-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-base-content/70 max-w-3xl mx-auto leading-relaxed"
          >
            The technologies and tools I use to build seamless digital experiences.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setVisibleCount(6);
              }}
              className={`relative px-6 py-2 rounded-full font-semibold transition-all duration-300 overflow-hidden ${activeFilter === filter
                ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-white shadow-md shadow-purple-400/30'
                : 'bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-slate-100/80 dark:hover:bg-slate-700/80'
                }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.slice(0, visibleCount).map((skill, index) => {
              const SkillIcon = getSkillIcon(skill.name);
              const iconColor = getSkillColor(skill.name);

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
                  className="relative bg-white/50 dark:bg-slate-800/20 backdrop-blur-xl rounded-xl p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:border-primary/30 transition-all duration-300 group overflow-hidden"
                >
                  <div className="relative z-10 flex items-center gap-3">
                    <motion.div
                      className={`${iconColor} p-1.5 rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-300`}
                      whileHover={{
                        rotate: 360,
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <SkillIcon className="w-6 h-6" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-base-content mb-1.5">{skill.name}</h3>
                      <div className="w-full bg-slate-200 dark:bg-slate-700/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: false }}
                          transition={{ duration: 1.2, delay: index * 0.05, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full relative"
                        >

                        </motion.div>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs font-medium text-base-content/50 uppercase tracking-tighter">{skill.category}</span>
                        <span className="text-xs font-bold text-primary">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* See More / Show Less Button */}
        {(visibleCount < filteredSkills.length || visibleCount > 6) && (
          <div className="mt-12 flex justify-center gap-4">
            {visibleCount < filteredSkills.length && (
              <button
                onClick={handleLoadMore}
                className="btn btn-primary rounded-full px-8 py-3 font-semibold shadow-lg hover:shadow-purple-400/30 transition-all active:scale-95 flex items-center gap-3"
              >
                See More Skills
                <span>↓</span>
              </button>
            )}

            {visibleCount > 6 && (
              <button
                onClick={() => setVisibleCount(prev => Math.max(prev - 6, 6))}
                className="btn btn-outline border-2 border-purple-400 text-purple-400 font-semibold hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 hover:text-white hover:border-transparent rounded-full px-8 py-3 shadow-lg transition-all active:scale-95 flex items-center gap-3"
              >
                Show Less
                <span>↑</span>
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
