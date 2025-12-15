import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { ExclusiveCardData } from '@/lib/types/home';

export interface ExclusiveCardProps {
  data: ExclusiveCardData;
  className?: string;
  variant?: 'default' | 'compact' | 'large';
  showIcon?: boolean;
}

export const ExclusiveCard: React.FC<ExclusiveCardProps> = ({
  data,
  className,
  variant = 'default',
  showIcon = true,
}) => {
  const heightClasses = {
    default: 'h-[316px]',
    compact: 'h-[361px]',
    large: 'h-[387px]',
  };

  const paddingClasses = {
    default: 'p-6',
    compact: 'px-4 pt-4 pb-6',
    large: 'px-4 pt-4 pb-8',
  };

  const titleClasses = {
    default: 'text-base font-bold',
    compact: 'text-sm font-bold',
    large: 'text-xs font-semibold',
  };

  const descriptionClasses = {
    default: 'text-xs font-medium mb-1.5',
    compact: 'text-xs font-medium',
    large: 'text-xs font-bold',
  };

  const exploreTextClasses = {
    default: 'text-xs font-semibold',
    compact: '',
    large: 'text-[9.5px] font-medium',
  };

  return (
    <Link href={data.href} className={cn('group block', className)}>
      <div className={cn('relative w-full overflow-hidden rounded-2xl', heightClasses[variant])}>
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Content */}
        <div className={cn('absolute bottom-0 left-0 right-0 bg-black/50', paddingClasses[variant])}>
          <h3 className={cn('font-montserrat text-white mb-1.5', titleClasses[variant])}>
            {data.title}
          </h3>
          
          <p
          className={cn('font-montserrat text-white', descriptionClasses[variant])}>
            {data.description}
          </p>
          {data.ctaText && (
            <span 
            className={cn(
              showIcon ? 'inline-flex items-center' : 'inline-block',
              'font-montserrat text-white bg-transparent',
              exploreTextClasses[variant],
              showIcon && 'gap-1'
            )}>
              {data.ctaText}
              {showIcon && (
                <Image
                  src="/icons/arrow-right-white.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              )}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

