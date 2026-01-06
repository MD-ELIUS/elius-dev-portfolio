import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code,
    Layout,
    Server,
    Smartphone,
    Bug,
    Globe,
    ArrowRight,
    X,
    CheckCircle2
} from 'lucide-react';
import SectionTitle from './SectionTitle';

const ServiceModal = ({ service, onClose }) => {
    if (!service) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-md"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-slate-900 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative border border-white/20 dark:border-slate-800"
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors z-10"
                >
                    <X size={20} />
                </button>

                <div className="p-8 md:p-12">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} p-5 text-white shadow-xl mb-8 flex items-center justify-center`}>
                        {service.icon}
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        {service.title}
                    </h2>

                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                        {service.details.description}
                    </p>

                    <div className="space-y-6">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <CheckCircle2 className="text-primary" size={24} />
                            What I Offer:
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {service.details.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                                    <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-12 p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                        <p className="text-slate-700 dark:text-slate-300 font-semibold text-center italic">
                            "{service.details.cta}"
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            icon: <Server className="w-8 h-8" />,
            title: "Full-Stack Web Development",
            description: "Fast, scalable, and secure web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
            gradient: "from-blue-500 to-cyan-500",
            details: {
                description: "I provide end-to-end web development solutions, handling everything from database architecture to frontend user interfaces. My goal is to build applications that are not just functional, but also robust and scalable using the MERN stack.",
                features: [
                    "Custom MERN Stack Apps",
                    "Next.js SPA & SSR",
                    "Third-party API Integration",
                    "MongoDB Database Design",
                    "Deployment (Vercel/Netlify)",
                    "Scalable Architecture"
                ],
                cta: "Let's build a powerful web application that grows with your business."
            }
        },
        {
            icon: <Layout className="w-8 h-8" />,
            title: "Frontend Development",
            description: "Responsive, user-friendly interfaces using React, Next.js, and Tailwind CSS. Modern UI libraries for smooth experiences.",
            gradient: "from-purple-500 to-pink-500",
            details: {
                description: "Focusing on the user journey, I create interfaces that are intuitive and visually stunning. I leverage modern libraries like Framer Motion and GSAP for high-end animations.",
                features: [
                    "Next.js & React Expertise",
                    "Tailwind CSS & Shadcn UI",
                    "Framer Motion & GSAP",
                    "Daisy UI Styling",
                    "Responsive Design",
                    "State Management"
                ],
                cta: "Elevate your brand with a visually stunning and highly interactive frontend."
            }
        },
        {
            icon: <Code className="w-8 h-8" />,
            title: "Backend & API Development",
            description: "Robust REST APIs, JWT authentication, and server-side logic with Node.js & Express.",
            gradient: "from-orange-500 to-red-500",
            details: {
                description: "The engine behind your application. I build secure and high-performance backend systems focusing on security and efficient data handling.",
                features: [
                    "RESTful API Design",
                    "JWT & Firebase Auth",
                    "MongoDB (Advanced)",
                    "SQL Database (Basic-Mid)",
                    "Node.js & Express logic",
                    "Clean Code Structure"
                ],
                cta: "Power your platform with a secured and high-performance backend system."
            }
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Responsive & Performance Optimization",
            description: "Optimized websites for speed, accessibility, and SEO. Clean code and fast load times on all screen sizes.",
            gradient: "from-green-500 to-emerald-500",
            details: {
                description: "Speed is crucial for user retention. I optimize your website to load instantly and rank higher on search engines using modern coding standards.",
                features: [
                    "Page Speed Optimization",
                    "SEO Best Practices",
                    "Core Web Vitals",
                    "Mobile-First Design",
                    "Image Optimization",
                    "Accessibility (a11y)"
                ],
                cta: "Make your website lightning fast and accessible to everyone, everywhere."
            }
        },
        {
            icon: <Bug className="w-8 h-8" />,
            title: "Bug Fixing & Code Improvement",
            description: "Improving existing projects by fixing bugs, refactoring code, and enhancing UI/UX while keeping original structure.",
            gradient: "from-indigo-500 to-blue-500",
            details: {
                description: "Have an existing project that needs some love? I can help clean up the codebase, fix those nagging bugs, and add new features without breaking what's already working.",
                features: [
                    "Code Refactoring",
                    "Debugging Expert",
                    "JavaScript Logic Fixes",
                    "UI/UX Tweaks",
                    "Feature Enhancements",
                    "Refining Original Code"
                ],
                cta: "Let's turn your existing codebase into a clean, modern, and bug-free machine."
            }
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Portfolio & Business Websites",
            description: "Professional portfolio and business websites that reflect your brand identity and help you stand out online.",
            gradient: "from-pink-500 to-rose-500",
            details: {
                description: "Your digital storefront. I design and build websites that tell your story, showcase your work, and convert visitors into clients through effective design.",
                features: [
                    "Personal Portfolios",
                    "Business Landing Pages",
                    "Brand Storytelling",
                    "Contact Forms",
                    "Modern Animations",
                    "Vercel Deployment"
                ],
                cta: "Launch a professional online presence that represents you or your business perfectly."
            }
        }
    ];

    return (
        <section id="services" className="relative py-20 overflow-hidden scroll-mt-20">
            {/* Background patterns similar to About section */}
            <div className="absolute inset-0 opacity-5 animated-grid-pattern pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <SectionTitle title="Core" highlight="Services" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative h-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:-translate-y-2"></div>

                            <div className="relative p-8 h-full flex flex-col">
                                <motion.div
                                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 text-white shadow-lg mb-6 flex items-center justify-center`}
                                    whileHover={{
                                        rotate: 360,
                                        scale: 1.1,
                                    }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                >
                                    {service.icon}
                                </motion.div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
                                    {service.description}
                                </p>

                                <div
                                    onClick={() => setSelectedService(service)}
                                    className="flex items-center gap-2 text-primary font-bold text-sm cursor-pointer group/link"
                                >
                                    <span>Learn More</span>
                                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedService && (
                    <ServiceModal
                        service={selectedService}
                        onClose={() => setSelectedService(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Services;
