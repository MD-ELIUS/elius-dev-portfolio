import { motion } from 'framer-motion';

const SectionTitle = ({ title, highlight, subtitle }) => {
  return (
    <div className="text-center mb-16 sm:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-base-content mb-6">
          {title} <span className="text-gradient">{highlight}</span>
        </h2>
        {subtitle && (
          <p className="text-sm sm:text-base text-base-content/70 max-w-xl mx-auto font-body">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default SectionTitle;
