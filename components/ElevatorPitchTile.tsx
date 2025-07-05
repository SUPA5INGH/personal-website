import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import useTypewriter from './useTypewriter';

  
export default function ElevatorPitchTile() {
  const words = ['Med-student \u2794 Tech-forward Bio-security thinker'];
  const text = useTypewriter({ words });

  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });
  const reduce = useReducedMotion();

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: reduce ? 0 : 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
      aria-label="Personal introduction: Hi I'm Rohan, Med student turned tech-forward biosecurity thinker."
      className="col-span-full sm:col-span-2 md:col-span-3 row-span-1 rounded-2xl bg-gradient-to-r from-sage-700/90 via-sage-500/60 to-sage-700/90 bg-cover shadow-lg hover:shadow-xl p-6"
    >
      <h1 className="font-poppins font-bold text-2xl leading-10 text-white">
        Hi, I'm Uzma.
      </h1>
      <p className="font-poppins font-medium text-xl leading-8 text-white">
        <span>{text}</span>
        <span className="ml-1 font-mono border-r-2 border-current animate-pulse" />
      </p>
    </motion.section>
  );
}

