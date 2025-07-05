import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowDownTrayIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

async function generatePdf() {
  // placeholder for async PDF generation
  return new Promise<void>((resolve) => setTimeout(resolve, 1200));
}

export default function DownloadCvTile() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [disabled, setDisabled] = useState(false);
  const [announce, setAnnounce] = useState('');
  const reduceMotion = useReducedMotion();

  const circumference = 2 * Math.PI * 36;

  const handleClick = async () => {
    if (disabled) return;
    setDisabled(true);
    setStatus('loading');
    setAnnounce('Generating CV');
    try {
      await generatePdf();
      setStatus('success');
      setAnnounce('Download ready');
    } finally {
      // pointer re-enabled after timeout
      setTimeout(() => setDisabled(false), 4000);
    }
  };

  return (
    <motion.button
      layout
      aria-label="Download my CV (PDF)"
      className="flex flex-col items-center justify-center bg-dark-green text-white rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-dark-green/40 w-full h-full relative col-span-1 row-span-1"
      onClick={handleClick}
      onMouseLeave={() => !disabled && setDisabled(false)}
      style={{ pointerEvents: disabled ? 'none' : 'auto' }}
    >
      <div className="relative flex items-center justify-center">
        <svg width="72" height="72" className="absolute" aria-hidden="true">
          <motion.circle
            cx="36"
            cy="36"
            r="36"
            fill="none"
            stroke="white"
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap="round"
            initial={false}
            animate={
              status === 'loading' && !reduceMotion
                ? { strokeDashoffset: 0 }
                : {
                    strokeDashoffset: circumference,
                    scale: status === 'success' ? 0 : 1,
                  }
            }
            transition={{ duration: 1.2, ease: 'linear' }}
          />
        </svg>
        <AnimatePresence mode="wait" initial={false}>
          {status === 'success' ? (
            <motion.span
              key="check"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CheckCircleIcon className="w-8 h-8 text-green-500" />
            </motion.span>
          ) : (
            <motion.span
              key="arrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ArrowDownTrayIcon className="w-8 h-8" />
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <span className="mt-2 font-semibold text-base">Download CV</span>
      <span className="sr-only" aria-live="polite">
        {announce}
      </span>
    </motion.button>
  );
}
