import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { ExclusiveCardData } from '@/lib/types/home';

export interface ExclusiveCardProps {
  data: ExclusiveCardData;
  className?: string;
}

export const ExclusiveCard: React.FC<ExclusiveCardProps> = ({
  data,
  className,
}) => {
  return (
    <Link href={data.href} className={cn('group block', className)}>
      <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-inter font-bold text-white mb-3 group-hover:text-secondary-200 transition-colors">
            {data.title}
          </h3>
          <p className="text-base md:text-lg text-white/90 mb-4 line-clamp-2">
            {data.description}
          </p>
          <span className="inline-flex items-center gap-2 text-base font-inter font-semibold text-secondary-200 group-hover:text-secondary-300 transition-colors">
            {data.ctaText}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

