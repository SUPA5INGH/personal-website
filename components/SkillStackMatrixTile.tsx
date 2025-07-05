import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ChartBarIcon } from '@heroicons/react/24/solid';

const skills = [
  { name: 'Python', src: '/icons/python.svg' },
  { name: 'R', src: '/icons/r.svg' },
  { name: 'Git', src: '/icons/git.svg' },
  { name: 'SQL', src: '/icons/sql.svg' },
  { name: 'Tableau', src: null },
];

export default function SkillStackMatrixTile() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });
  const reduce = useReducedMotion();

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduce ? 0 : 8 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      aria-label="Skill stack – Python, R, Git, SQL, Tableau"
      className="col-span-full sm:col-span-3 md:col-span-2 row-span-1 bg-white shadow-md rounded-xl p-4"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      <div
        className="grid grid-cols-5 gap-4 items-center justify-center"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(40px,1fr))' }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{ scale: 1.15 }}
            className="flex flex-col items-center text-[#2f2f2f] hover:text-black"
          >
            {skill.src ? (
              <img
                src={skill.src}
                alt={`${skill.name} logo`}
                className="w-10 h-10 transition-colors"
              />
            ) : (
              <ChartBarIcon className="w-10 h-10" />
            )}
            <span className="sr-only">{skill.name} logo</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
