import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export interface BentoTileProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  /** Optional image source for the background */
  imgSrc?: string;
  /** Additional css classes for the tile */
  className?: string;
  /** Tailwind animation/hover classes */
  animationClass?: string;
  /** Children rendered inside the tile */
  children?: React.ReactNode;
}

/**
 * Basic tile used throughout the bento layout. It renders an optional
 * background image and overlay title text. Animations can be customised via
 * the `animationClass` prop.
 */
const BentoTile = React.forwardRef<HTMLDivElement, BentoTileProps>(
  (
    {
      title,
      imgSrc,
      className = '',


      animationClass = 'motion-safe:animate-fall',

      children,
      ...rest
    }: BentoTileProps,
    ref,
  ) => {
    return (
      <motion.div
        ref={ref}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className={`relative overflow-hidden rounded-3xl shadow-elev transition-transform ${className}`}
        {...rest}
      >
        <div className={`${animationClass} w-full h-full`}> 
          {imgSrc && (
            <Image src={imgSrc} alt={title ?? ''} fill className="object-cover" />
          )}
          {title && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50">
              <h2 className="text-xl font-semibold text-white">{title}</h2>
            </div>
          )}
          {children}
        </div>
      </motion.div>
    );
  },
);

BentoTile.displayName = 'BentoTile';

export default BentoTile;

export function PolaroidTile(props: BentoTileProps) {
  return (
    <BentoTile
      {...props}
      className={`bg-white p-4 ${props.className ?? ''}`.trim()}
      animationClass={
        props.animationClass ||
        'hover:rotate-2 motion-safe:animate-fall'
      }
    />
  );
}

export function MapTile(props: BentoTileProps) {
  return (
    <BentoTile
      {...props}
      className={`bg-blue-100 ${props.className ?? ''}`.trim()}
      animationClass={props.animationClass}
    />
  );
}

export function CarouselTile(props: BentoTileProps) {
  return (
    <BentoTile
      {...props}
      className={`overflow-hidden ${props.className ?? ''}`.trim()}
      animationClass={props.animationClass}
    />
  );
}
