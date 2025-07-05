import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import React from 'react';

export default function PolaroidSelfieTile({
  className = '',
}: {
  className?: string;
}) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 150, damping: 10 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 10 });

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 4;
    const midY = rect.height / 4;
    rotateY.set(((x - midX) / midX) * 6);
    rotateX.set(-((y - midY) / midY) * 6);
  }

  function resetTilt() {
    rotateX.set(0);
    rotateY.set(0);
  }

  const captionVariants = {
    initial: { opacity: 0, y: 16 },
    hover: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      role="img"
      aria-label="Photograph of Rohan"
      className={`relative aspect-[3/4] w-full h-full ${className}`}
      style={{
        perspective: 800,
        rotateX: springX,
        rotateY: springY,
        transformStyle: 'preserve-3d',
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      initial="initial"
      whileHover="hover"
    >
      <div className="relative bg-black shadow-elev rounded-2xl p-2 w-full h-full">
        <Image
          src="/images/IMG_8264.jpeg"
          alt="Rohan"
          fill
          className="rounded-lg object-cover border-[10px] border-white pb-4"
        />
        <motion.figcaption
          variants={captionVariants}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-medium tracking-wide text-neutral-700 font-sans"
          aria-live="polite"
        >
          Rohan • Med→Tech
        </motion.figcaption>
      </div>
    </motion.div>
  );
}
