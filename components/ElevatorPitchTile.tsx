import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import useRotatingText from './useRotatingText';


export default function ElevatorPitchTile({
  className = '',
}: {
  className?: string;
}) {

  const words = [
    'Medical student exploring how global health, policy, and emerging tech can work together—building tools, writing ideas, and pushing systems that need it.',
    'Open to collaborations that harness research and tech for real-world impact.',
    'Always eager to learn from policy, engineering, and the communities served.',
  ];
  const text = useRotatingText({ words, delay: 4000 });

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
      className={`relative flex flex-col justify-end rounded-2xl bg-white shadow-elev hover:shadow-xl p-6 h-full overflow-hidden ${className}`}
    >
      <Image
        src="/images/foundation_1.png"
        alt="Foundation"
        width={150}
        height={150}
        className="absolute top-10 left-10 w-25 h-25 object-contain"
      />
      <h1 className="font-mono font-bold text-2xl leading-10 text-black">
        Hi, I&apos;m Rohan.
      </h1>
      <p className="font-mono font-medium text-xl leading-8 text-black">
        {text}
      </p>
    </motion.section>
  );
}
