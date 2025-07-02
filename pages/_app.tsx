import React from 'react';

import type { AppProps } from 'next/app';
import '../styles/globals.css';
import BentoPageTransition from '../components/BentoPageTransition';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BentoPageTransition>
      <Component {...pageProps} />
    </BentoPageTransition>
  );
}
