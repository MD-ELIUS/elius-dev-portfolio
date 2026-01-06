import React from "react";
import { Hand } from "lucide-react";

const HeroTitle = ({ greeting = "Hello, I'm" }) => {
  return (
    <div className="mb-4 sm:mb-6 md:mb-8">
      <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 
                      rounded-full 
                      bg-white/80 dark:bg-slate-800/80 
                      backdrop-blur-xl 
                      border border-blue-200/50 dark:border-blue-700/50 
                      shadow-lg">

        {/* Animated Gradient Circle */}
        <div className="relative">
          <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-500 dark:to-purple-500 rounded-full animate-pulse shadow-lg"></div>
          <div className="absolute inset-0 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-500 dark:to-purple-500 rounded-full animate-ping opacity-75"></div>
        </div>

        {/* Lucide Hand Icon */}
        <Hand className="text-blue-600 dark:text-blue-400 text-base sm:text-lg" />

        {/* Greeting Text */}
        <span className="text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium tracking-wide">
          {greeting}
        </span>
      </div>
    </div>
  );
};

export default HeroTitle;
