import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, X, Laptop, Calendar, Share2, ArrowRight, Check } from 'lucide-react';
import SectionTitle from './SectionTitle';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white dark:bg-slate-900 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="grid lg:grid-cols-2 gap-8 p-5 md:p-8">
          {/* Image Section */}
          <div className="space-y-6">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${project.isLive ? 'bg-green-600' : 'bg-orange-600'} backdrop-blur-sm`}>
                  <div className={`w-1.5 h-1.5 rounded-full bg-white ${project.isLive ? 'animate-pulse' : ''}`}></div>
                  {project.isLive ? 'Live' : 'Progress'}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.highlights && (
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">Highlights</h4>
                <ul className="grid grid-cols-1 gap-3">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-slate-600 dark:text-slate-400">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="flex flex-col">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white bg-blue-600 shadow-lg backdrop-blur-sm uppercase tracking-wider">
                  <Laptop size={12} className="w-3 h-3" /> {project.platform === 'MERN Stack' || project.platform === 'Full Stack' ? 'Web App' : project.platform}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white bg-slate-900 shadow-lg backdrop-blur-sm">
                  <Calendar size={12} className="w-3 h-3" /> {project.year}
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">{project.title}</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-sm md:text-base">
                {project.description}
              </p>
            </div>

            {project.features && (
              <div className="mb-8">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">Core Features</h4>
                <ul className="grid grid-cols-1 gap-2.5">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-auto flex flex-wrap gap-3 pt-5 border-t border-slate-100 dark:border-slate-800">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-blue-600 transition-all shadow-md shadow-blue-500/20 active:scale-95"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-95"
              >
                <Github size={16} />
                Source
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({ project, onOpenModal }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = async (e) => {
    e.stopPropagation();
    const shareData = {
      title: project.title,
      text: project.description,
      url: project.liveLink,
    };

    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(project.liveLink);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full border border-slate-200 dark:border-slate-700/50"
    >
      <div className="relative h-40 sm:h-48 overflow-hidden flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Badges */}
        <div className="absolute top-4 left-4 z-10">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${project.isLive ? 'bg-green-500' : 'bg-orange-500'} backdrop-blur-sm`}>
            <div className={`w-1.5 h-1.5 rounded-full bg-white ${project.isLive ? 'animate-pulse' : ''}`}></div>
            {project.isLive ? 'Live' : 'Progress'}
          </span>
        </div>

        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg backdrop-blur-sm">
            <Laptop size={12} className="w-3 h-3" /> {project.platform === 'MERN Stack' || project.platform === 'Full Stack' ? 'Web App' : project.platform}
          </span>
        </div>

        {/* Hover Overlay Buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-[2px]">
          <button
            onClick={() => onOpenModal(project)}
            className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white rounded-full text-sm font-bold shadow-lg hover:shadow-blue-500/40 hover:scale-105 transition-all"
          >
            <Eye size={16} />
            <span>Preview</span>
          </button>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 rounded-full text-sm font-bold shadow-lg hover:bg-slate-50 hover:scale-105 transition-all"
          >
            <ExternalLink size={16} className="text-blue-500 group-hover/btn:rotate-12 transition-transform" />
            <span>Live</span>
          </a>
        </div>

        <div className="absolute bottom-4 right-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white bg-black/60 backdrop-blur-md shadow-lg">
            <Calendar size={12} className="w-3 h-3" /> {project.year.split(' ').pop()}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 min-h-[3rem] flex items-center duration-300">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2 min-h-[2.2rem] text-sm">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {(project.skills || project.techStack.slice(0, 3)).map((skill, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700/50 mt-auto">
          <button
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-300"
          >
            <span>Details</span>
            <ArrowRight size={14} />
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className={`w-8 h-8 flex items-center justify-center rounded-xl transition-all hover:scale-110 ${isCopied
                ? 'bg-green-500/10 text-green-500'
                : 'bg-slate-50 dark:bg-slate-700/30 text-slate-400 hover:text-blue-500 dark:hover:text-blue-400'
                }`}
            >
              {isCopied ? <Check size={16} /> : <Share2 size={16} />}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'ScholarHub – Scholarship Management Platform',
      description: 'ScholarHub is a modern full-stack MERN scholarship management platform that connects students with global scholarship opportunities.',
      highlights: [
        'Fully responsive dashboard for all roles',
        'Secure private routes with JWT & Firebase token',
        'Real-time application status & moderator feedback',
        'Admin analytics with charts & platform insights',
        'Clean, recruiter-friendly UI with smooth UX'
      ],
      features: [
        'Secure Authentication (Firebase Email/Password + Google Login)',
        'Scholarship Browsing with server-side search, filter & pagination',
        'Application & Payment System (Stripe Integration)',
        'Role-Based Dashboard (Student, Moderator, Admin)',
        'Review & Rating System for completed applications',
        'Responsive UI with Tailwind CSS & DaisyUI'
      ],
      techStack: [
        'React.js', 'React Router', 'Tailwind CSS', 'DaisyUI',
        'Firebase Authentication', 'TanStack Query', 'Axios',
        'Node.js', 'Express.js', 'MongoDB (Atlas)', 'JWT', 'Stripe Payment API'
      ],
      skills: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'JWT', 'Firebase'],
      liveLink: 'https://scholar-hub-client.web.app/',
      githubLink: 'https://github.com/MD-ELIUS/scholar-hub-client',
      year: 'Dec 2025',
      platform: 'MERN Stack',
      isLive: true,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    },
    {
      title: 'HomeNest – Real Estate Listing Platform',
      description: 'HomeNest is a modern full-stack real estate listing platform that allows users to explore, search, review, and manage properties seamlessly.',
      highlights: [
        'Fully responsive (mobile, tablet, desktop)',
        'Private routes with Firebase token protection',
        'Backend sorting + CRUD operations',
        'Context API for authentication state',
        'Clean UI with interactive alerts'
      ],
      features: [
        'Secure Authentication (Firebase Email/Password + Google Login)',
        'Property Management (Add, Edit, Delete, Update)',
        'All Properties page with sorting & search',
        'Ratings & Reviews for authenticated users',
        'Responsive UI with Tailwind CSS + Dark/Light Mode',
        'User Dashboard (My Properties, My Ratings, Add Property)'
      ],
      techStack: [
        'React.js', 'React Router', 'Tailwind CSS',
        'Firebase Authentication', 'Node.js', 'Express.js',
        'MongoDB (Atlas)', 'Firebase Token Verification'
      ],
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
      liveLink: 'https://home-nest-5d146.web.app/',
      githubLink: 'https://github.com/MD-ELIUS/home-nest-client',
      year: 'Nov 2025',
      platform: 'Full Stack',
      isLive: true,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    },
    {
      title: 'MegaMart – Furniture E-Commerce Platform',
      description: 'MegaMart is a modern, fully responsive furniture e-commerce web application where users can explore and manage products.',
      highlights: [
        'Fully responsive (Mobile, Tablet, Desktop)',
        'Private routes with authentication protection',
        'Modern UI/UX focused design',
        'Organized project structure',
        'Scalable and production-ready'
      ],
      features: [
        'Modern Landing Page with 7 beautifully designed sections',
        'Responsive Navbar with sticky behavior',
        'Product Listing & Details Page',
        'Search & Category Filters (UI)',
        'Secure Authentication (Firebase Email/Password + Google Login)',
        'Protected Routes (Add Product, Manage Products)',
        'CRUD Operations (MongoDB)',
        'User Dropdown (Profile, Add Product, Manage Products, Sign Out)'
      ],
      techStack: [
        'Next.js (App Router)', 'React.js', 'Tailwind CSS',
        'Firebase Authentication', 'Context API',
        'Node.js', 'Express.js', 'MongoDB & Mongoose'
      ],
      skills: ['Next.js', 'React.js', 'Express.js', 'Firebase', 'MongoDB'],
      liveLink: 'https://mega-mart-client-gilt.vercel.app/',
      githubLink: 'https://github.com/MD-ELIUS/mega-mart-client',
      year: 'Nov 2025',
      platform: 'Next.js App',
      isLive: true,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    },
  ];

  return (
    <section id="projects" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title="Featured" highlight="Projects" />

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onOpenModal={setSelectedProject}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
