import { useEffect, useState } from 'react';

export interface UseTypewriterOptions {
  words: string[];
  typingSpeed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
  loop?: boolean;
}

export default function useTypewriter({
  words,
  typingSpeed = 70,
  deleteSpeed = 50,
  delayBetween = 1600,
  loop = true,
}: UseTypewriterOptions) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: NodeJS.Timeout;

    if (deleting) {
      if (text) {
        timeout = setTimeout(
          () => setText(current.slice(0, text.length - 1)),
          deleteSpeed,
        );
      } else {
        setDeleting(false);
        setIndex((i) => (loop ? (i + 1) % words.length : Math.min(i + 1, words.length - 1)));
      }
    } else {
      if (text !== current) {
        timeout = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          typingSpeed,
        );
      } else if (loop) {
        timeout = setTimeout(() => setDeleting(true), delayBetween);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typingSpeed, deleteSpeed, delayBetween, loop]);

  return text;
}
