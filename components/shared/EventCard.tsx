import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { EventCardData } from '@/lib/types/home';

export interface EventCardProps {
  data: EventCardData;
  className?: string;
  showRatingWithTitle?: boolean;
  removeBackground?: boolean;
  buzzingDestination?: boolean;
}

export const EventCard: React.FC<EventCardProps> = ({ data, className, showRatingWithTitle = false, removeBackground = false, buzzingDestination = false }) => {
  return (
    <Link href={data.href} className={cn('group block h-full', className)}>
      <div className={cn(
        'rounded-2xl overflow-hidden border-3 border-white flex flex-col h-full',
        !buzzingDestination && 'transition-all duration-300 hover:bg-secondary-400',
        !removeBackground && !buzzingDestination && 'bg-secondary-500',
        buzzingDestination && 'bg-white border-0'
      )} style={{ boxShadow: '0px 24px 90px 0px #C0BCA138' }}>
        <div className={cn('relative w-full overflow-hidden flex-shrink-0', buzzingDestination ? 'h-[247px]' : 'h-[222px] rounded-[14px]')} >
          <Image
            src={data.image}
            alt={data.title}
            fill
            className={cn(
              'object-cover',
              !buzzingDestination && 'group-hover:scale-105 transition-transform duration-300'
            )}
            style={buzzingDestination ? { borderRadius: '1.125rem 1.125rem 0.375rem 0.375rem' } : { borderRadius: '14px' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 318px"
          />
        </div>

        {/* Content */}
        <div className="pt-4 pb-2 px-3 flex-1 flex flex-col min-h-[140px]">
          {!buzzingDestination && (
            <div className="mb-3">
              {data.category && (
                <span className={cn(
                  'bg-secondary-400 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-montserrat font-normal text-black',
                  !buzzingDestination && 'group-hover:bg-secondary-200 transition-colors duration-300'
                )}>
                  {data.category}
                </span>
              )}
            </div>
          )}
          <div className="flex items-center gap-2 mb-2 justify-between">
            <h3 className="text-xs font-montserrat font-semibold text-primary-500">
              {data.title}
            </h3>
            {/* Rating Badge - Show next to title for specific sections */}
            {showRatingWithTitle && data.rating !== undefined && (
              <div className="flex items-center gap-1">
                <Image
                  src="/icons/star.svg"
                  alt="Rating"
                  width={12}
                  height={12}
                  className="w-3 h-3"
                />
                <span className="text-xs font-montserrat font-medium text-primary-400">
                  {data.rating}
                </span>
              </div>
            )}
          </div>
          
          {buzzingDestination ? (
            <>
              {data.checkIns && (
                <div className="text-sm font-montserrat font-normal text-primary-400 mb-1.5">
                  <span className="font-inter">{data.checkIns}</span>
                </div>
              )}
              {data.description && (
                <div className={cn(
                  'font-montserrat text-primary-400',
                  buzzingDestination ? 'text-xs font-medium' : 'text-xs font-normal'
                )}>
                  <span>{data.description}</span>
                </div>
              )}
            </>
          ) : (
            <>
              <div>
                {data.date && (
                  <div className="text-xs font-montserrat font-normal text-primary-400 mb-1.5">
                    <span className="font-inter">{data.date}</span>
                  </div>
                )}
                
                <div className="text-xs font-montserrat font-normal text-primary-400 mb-1.5">
                  <span className="font-inter">{data.time}</span>
                </div>
                
                <div className="text-xs font-montserrat font-normal text-primary-400 mb-1.5">
                  <span className="font-inter">{data.location}</span>
                </div>
              </div>
              <div className="text-xs font-montserrat font-normal text-primary-400 mb-1.5">
               From  <span className="font-bold text-primary-500">{data.price}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

