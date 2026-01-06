import { motion } from 'framer-motion';

const AnimatedCircle = () => {
  return (
    <div className="relative inline-block mr-4">
      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 dark:from-purple-500 dark:via-pink-500 dark:to-blue-500 shadow-lg shadow-purple-400/50 dark:shadow-purple-500/50"></div>
    </div>
  );
};

export default AnimatedCircle;

