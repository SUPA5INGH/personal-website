import { useState, useEffect } from 'react';

export interface UseRotatingTextOptions {
  words: string[];
  delay?: number;
  loop?: boolean;
}

export default function useRotatingText({
  words,
  delay = 2000,
  loop = true,
}: UseRotatingTextOptions) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((i) =>
        loop ? (i + 1) % words.length : Math.min(i + 1, words.length - 1)
      );
    }, delay);

    return () => clearTimeout(timeout);
  }, [index, words, delay, loop]);

  return words[index % words.length];
}
