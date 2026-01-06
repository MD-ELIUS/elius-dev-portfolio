import { motion } from 'framer-motion';
import { GraduationCap, Code, BookOpen } from 'lucide-react';
import { SiReact, SiJavascript, SiNodedotjs, SiHtml5, SiCss3, SiMongodb } from 'react-icons/si';
import SectionTitle from './SectionTitle';

const Experience = () => {
  const codingIcons = [
    { Icon: SiReact, delay: 0, x: '12%', y: '25%' },
    { Icon: SiJavascript, delay: 0.7, x: '88%', y: '18%' },
    { Icon: SiNodedotjs, delay: 1.4, x: '10%', y: '72%' },
    { Icon: SiHtml5, delay: 2.1, x: '85%', y: '78%' },
    { Icon: SiCss3, delay: 2.8, x: '48%', y: '8%' },
    { Icon: SiMongodb, delay: 3.5, x: '92%', y: '62%' },
  ];

  const experiences = [
    {
      icon: GraduationCap,
      title: 'Food Science & Technology',
      subtitle: 'Graduate',
      description: 'Completed undergraduate studies in Food Science & Technology, which provided a strong foundation in analytical thinking and problem-solving.',
      type: 'education',
      year: '2020',
    },
    {
      icon: Code,
      title: 'Web Development Journey',
      subtitle: 'Self-Taught Developer',
      description: 'Transitioned from Food Science to Web Development, learning modern technologies including React, Node.js, Express, and MongoDB through online courses, documentation, and hands-on projects.',
      type: 'experience',
      year: '2021 - Present',
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      subtitle: 'Tech Enthusiast',
      description: 'Constantly learning new technologies and frameworks, building full-stack MERN applications, and focusing on clean code, scalable solutions, and real-world problem solving.',
      type: 'experience',
      year: 'Ongoing',
    },
  ];

  return (
    <section id="experience" className="py-16 relative overflow-hidden scroll-mt-20">


      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title="Experience &" highlight="Education" />

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-secondary/50 to-accent/50 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-gradient-to-r from-primary/80 to-secondary/80 rounded-full border-4 border-base-100 shadow-md transform md:-translate-x-1/2 z-10">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-full h-full rounded-full bg-primary/80"
                  />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative bg-gradient-to-br from-base-200 to-base-300 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700/50 border-l-4 border-l-primary/50 hover:border-l-primary overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-400/5 via-pink-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className={`p-3 rounded-xl shadow-md group-hover:shadow-lg group-hover:shadow-purple-400/20 transition-all duration-300 ${exp.type === 'education'
                              ? 'bg-gradient-to-r from-secondary/80 to-accent/80'
                              : 'bg-gradient-to-r from-primary/80 to-secondary/80'
                              } text-white`}
                          >
                            <exp.icon className="w-6 h-6" />
                          </motion.div>
                          <div>
                            <h3 className="text-lg md:text-xl font-bold text-base-content group-hover:text-primary transition-colors">
                              {exp.role}
                            </h3>          <p className="text-primary font-medium">{exp.subtitle}</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-md transition-all duration-300 ${exp.type === 'education'
                          ? 'bg-gradient-to-r from-secondary/20 to-accent/20 text-secondary border border-secondary/30 group-hover:from-secondary group-hover:to-accent group-hover:text-white'
                          : 'bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/30 group-hover:from-primary group-hover:to-secondary group-hover:text-white'
                          }`}>
                          {exp.type === 'education' ? 'Education' : 'Experience'}
                        </span>
                      </div>

                      <div className="mb-3">
                        <span className="text-sm font-medium text-base-content/60 bg-primary/5 px-3 py-1 rounded-full group-hover:bg-primary/10 transition-all duration-300">
                          {exp.year}
                        </span>
                      </div>

                      <p className="text-sm text-base-content/70 leading-relaxed italic mb-4">
                        {exp.description}
                      </p>    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
