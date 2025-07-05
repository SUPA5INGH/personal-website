import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import useTypewriter from './useTypewriter';


export default function ElevatorPitchTile({
  className = '',
}: {
  className?: string;
}) {

  const words = [
    'Medical student exploring how global health, policy, and emerging tech can work together—building tools, writing ideas, and pushing systems that need it.',
  ];
  const text = useTypewriter({ words });

  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });
  const reduce = useReducedMotion();

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: reduce ? 0 : 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.2 }}

      aria-label="Personal introduction: Hi I'm Rohan, Med student turned tech-forward biosecurity thinker."
      className={`rounded-2xl bg-white shadow-elev hover:shadow-xl p-6 h-full ${className}`}

    >
      <h1 className="font-poppins font-bold text-2xl leading-10 text-black">
        Hi, I&apos;m Rohan.
      </h1>
      <p className="font-poppins font-medium text-xl leading-8 text-black">
        <span>{text}</span>
        <span className="ml-1 font-mono border-r-2 border-coral animate-pulse" />
      </p>
    </motion.section>
  );
}
