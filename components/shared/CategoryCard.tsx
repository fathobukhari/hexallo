import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { CategoryCardData } from '@/lib/types/home';

export interface CategoryCardProps {
  data: CategoryCardData;
  className?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ data, className }) => {
  return (
    <Link href={data.href} className={cn('group block w-full', className)}>
      <div className="relative w-full h-[280px] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Rating Badge - Top Left */}
        {data.rating && (
          <div className="absolute top-4 left-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md">
            <Image
              src="/icons/star.svg"
              alt="Rating"
              width={12}
              height={12}
              className="w-3 h-3"
            />
            <span className="text-xs font-inter font-medium text-white">{data.rating}</span>
          </div>
        )}
        
        {/* Content - Bottom */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-inter font-bold text-white mb-2 group-hover:text-secondary-200 transition-colors">
            {data.title}
          </h3>
          <span className="inline-flex items-center gap-1 text-sm font-inter font-semibold text-secondary-200 group-hover:text-secondary-300 transition-colors">
            Explore
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

