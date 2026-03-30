import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
    const [loadingText, setLoadingText] = useState("INITIALIZING");

    useEffect(() => {
        const texts = ["INITIALIZING", "LOADING ASSETS", "CONFIGURING CORE", "SYSTEM READY"];
        let i = 0;
        const interval = setInterval(() => {
            setLoadingText(texts[i]);
            i = (i + 1) % texts.length;
        }, 600);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[1000] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center">
                {/* Main Logo / Spinner Area */}
                <div className="relative w-32 h-32 mb-12">
                    <motion.span
                        className="absolute inset-0 border-t-2 border-r-2 border-transparent border-t-blue-500 border-r-cyan-400 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.span
                        className="absolute inset-2 border-b-2 border-l-2 border-transparent border-b-blue-600 border-l-cyan-500 rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            aria-label="Loading"
                            className="text-4xl font-bold font-heading bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
                        >
                            ME
                        </motion.div>
                    </div>
                </div>

                {/* Loading Bar & Text */}
                <div className="w-[300px] flex flex-col items-center gap-4">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                        className="h-1 w-full bg-slate-800 rounded-full overflow-hidden relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 animate-shimmer" style={{ backgroundSize: "200% 100%" }}></div>
                    </motion.div>

                    <div className="flex justify-between w-full text-xs font-mono text-slate-400">
                        <span className="typing-effect">{loadingText}...</span>
                        <span>100%</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;

// Accessibility documentation enhanced
