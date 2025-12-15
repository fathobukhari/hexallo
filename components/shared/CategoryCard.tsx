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
      className={cn('group block w-full', className)}
      style={data.width ? { 
        '--card-width': `${data.width}px`,
      } as React.CSSProperties & { '--card-width': string } : undefined}
      data-width={data.width}
    >
      <div className="relative w-full h-[222px] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
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
          <div className="flex justify-start items-start px-4 pt-6 flex-shrink-0">
            {data.rating && (
              <div className={cn(
                'flex items-center gap-1 backdrop-blur-sm px-2 py-1 rounded-xl',
                ['ghana-events', 'ghana-tours', 'ghana-destinations', 'ghana-places'].includes(data.id)
                  ? 'bg-white'
                  : 'bg-black/50'
              )}>
                <Image
                  src="/icons/star.svg"
                  alt="Rating"
                  width={12}
                  height={12}
                  className="w-3 h-3"
                />
                <span className={cn(
                  'text-xs font-inter font-medium',
                  ['ghana-events', 'ghana-tours', 'ghana-destinations', 'ghana-places'].includes(data.id)
                    ? 'text-black'
                    : 'text-white'
                )}>{data.rating}</span>
              </div>
            )}
          </div>
          
          {/* Bottom Section - Title and Explore */}
          <div className="flex flex-col justify-end flex-1 px-4 pb-6">
            <h3 className="text-xs font-montserrat font-semibold text-white mb-1">
              {data.title}
            </h3>
            <span className="text-[10.33px] font-montserrat font-normal text-white">
              Explore
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

