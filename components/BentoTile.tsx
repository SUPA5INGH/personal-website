import React from 'react';
import Image from 'next/image';

export interface BentoTileProps {
  title: string;
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
export default function BentoTile({
  title,
  imgSrc,
  className = '',
  animationClass = 'hover:scale-105 transition-transform animate-fall',
  children,
}: BentoTileProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl shadow-lg ${animationClass} ${className}`}
    >
      {imgSrc && (
        <Image src={imgSrc} alt={title} fill className="object-cover" />
      )}
      <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>
      {children}
    </div>
  );
}

export function PolaroidTile(props: BentoTileProps) {
  return (
    <BentoTile
      {...props}
      className={`bg-white p-4 ${props.className ?? ''}`.trim()}
      animationClass={
        props.animationClass || 'hover:rotate-2 hover:scale-105 transition-transform animate-fall'
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
