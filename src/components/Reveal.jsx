import { motion } from 'framer-motion';

const variants = {
  up: { hidden: { opacity: 0, y: 34 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: 34 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 } },
};

export default function Reveal({ children, direction = 'up', className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={variants[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
