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
    <Link 
      href={data.href} 
      className={cn('group block', className)}
    >
      <div className="relative w-full h-[222px] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
        {/* Image Background */}
        <div className="absolute inset-0">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          />
        </div>
        
        {/* Content using Flexbox */}
        <div className="relative flex flex-col flex-1 min-h-0">
          {/* Top Section - Rating Badge */}
          <div className="flex justify-start items-start p-4 md:p-6 pb-0 flex-shrink-0">
            {data.rating && (
              <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md">
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
          </div>
          
          {/* Bottom Section - Title and Explore */}
          <div className="flex flex-col justify-end flex-1 p-4 md:p-6 pt-2">
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
      </div>
    </Link>
  );
};

