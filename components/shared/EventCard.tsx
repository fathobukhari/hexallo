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
}

export const EventCard: React.FC<EventCardProps> = ({ data, className, showRatingWithTitle = false, removeBackground = false }) => {
  return (
    <Link href={data.href} className={cn('group block h-full', className)}>
      <div className={cn('rounded-2xl overflow-hidden transition-all duration-300 border-3 border-white p-1 hover:bg-secondary-400 flex flex-col h-full', !removeBackground && 'bg-secondary-500')} style={{ boxShadow: '0px 24px 90px 0px #C0BCA138' }}>
        <div className="relative w-full h-[222px] overflow-hidden rounded-[14px] flex-shrink-0" style={{ backgroundColor: '#2D3134' }}>
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            style={{ borderRadius: '14px' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 318px"
          />
        </div>

        {/* Content */}
        <div className="pt-4 pb-2 px-3 flex-1 flex flex-col min-h-[140px]">
          <div className="mb-3">
            {data.category && (
              <span className=" bg-secondary-400 group-hover:bg-secondary-200 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-montserrat font-normal text-black transition-colors duration-300">
                {data.category}
              </span>
            )}
          </div>
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
          
          <div className="space-y-2 flex-1 flex flex-col justify-between">
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
          </div>
        </div>
      </div>
    </Link>
  );
};

