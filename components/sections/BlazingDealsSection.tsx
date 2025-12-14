'use client';

import React, { useState, useEffect } from 'react';
import { DealCardData, CountdownData } from '@/lib/types/home';
import { cn } from '@/lib/utils/cn';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export interface BlazingDealsSectionProps {
  title: string;
  description?: string;
  deals: DealCardData[];
  countdown: CountdownData;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export const BlazingDealsSection: React.FC<BlazingDealsSectionProps> = ({
  title,
  description,
  deals,
  countdown: initialCountdown,
  ctaText = 'Explore Offers Now',
  ctaHref = '#',
  className,
}) => {
  const [countdown, setCountdown] = useState(initialCountdown);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const endDate = new Date(initialCountdown.endDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0, endDate: initialCountdown.endDate });
        return;
      }

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
        endDate: initialCountdown.endDate,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [initialCountdown.endDate]);

  // Temporarily removed early return to show layout
  // if (!deals || deals.length === 0) {
  //   return null;
  // }

  return (
    <section className={cn('py-8 md:py-12 lg:py-16 bg-primary-100', className)}>
      <div className="relative w-full">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap relative">
            {/* Left Column: 35% - Aligns with container */}
            <div className="w-full md:w-[35%]">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-inter font-bold text-gray-900 mb-2">
                  {title}
                </h2>
                {description && (
                  <p className="text-base text-gray-600 font-inter">{description}</p>
                )}
              </div>
               
              {/* Countdown Timer */}
              {mounted && (
                <div className="mb-8">
                  <p className="text-sm font-inter font-medium text-red-600 mb-4">Offer ends in...</p>
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="bg-white rounded-lg px-4 py-3 shadow-sm text-center">
                      <div className="text-2xl md:text-3xl font-inter font-bold text-gray-900">
                        {String(countdown.days).padStart(2, '0')}
                      </div>
                      <div className="text-xs font-inter text-gray-600">Days</div>
                    </div>
                    <div className="bg-white rounded-lg px-4 py-3 shadow-sm text-center">
                      <div className="text-2xl md:text-3xl font-inter font-bold text-gray-900">
                        {String(countdown.hours).padStart(2, '0')}
                      </div>
                      <div className="text-xs font-inter text-gray-600">Hr</div>
                    </div>
                    <div className="bg-white rounded-lg px-4 py-3 shadow-sm text-center">
                      <div className="text-2xl md:text-3xl font-inter font-bold text-gray-900">
                        {String(countdown.minutes).padStart(2, '0')}
                      </div>
                      <div className="text-xs font-inter text-gray-600">Mins</div>
                    </div>
                    <div className="bg-white rounded-lg px-4 py-3 shadow-sm text-center">
                      <div className="text-2xl md:text-3xl font-inter font-bold text-gray-900">
                        {String(countdown.seconds).padStart(2, '0')}
                      </div>
                      <div className="text-xs font-inter text-gray-600">Sec</div>
                    </div>
                  </div>
                </div>
              )}

              {/* CTA Button */}
              <div>
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-inter font-semibold transition-colors"
                >
                  {ctaText}
                </Link>
              </div>
            </div>

            {/* Right Column: 65% - Extends to edge */}
            <div className="w-full md:w-[65%] md:absolute md:right-0 md:top-0 md:h-full pr-0">
              <div className="h-full pl-4 md:pl-8 pr-0">
                {deals && deals.length > 0 && (
                  <Swiper
                    modules={[Navigation]}
                    navigation={{
                      nextEl: '.swiper-button-next-deals',
                      prevEl: '.swiper-button-prev-deals',
                    }}
                    spaceBetween={16}
                    slidesPerView="auto"
                    className="h-full deals-swiper"
                  >
                    {deals.map((deal) => (
                      <SwiperSlide key={deal.id} className="!w-auto">
                        <Link
                          href={deal.href || '#'}
                          className="group block h-full"
                        >
                          <div className={cn(
                            'relative rounded-lg p-6 md:p-8 h-[381px] flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300 min-w-[280px] md:min-w-[354px]',
                            'border-2 border-transparent hover:border-yellow-400'
                          )}>
                            {/* Background Image */}
                            <div className="absolute inset-0 rounded-lg overflow-hidden">
                              <Image
                                src={deal.background}
                                alt={deal.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 280px, 354px"
                              />
                            </div>
                            
                            {/* Content */}
                            <div className="relative z-10 flex flex-col justify-between h-full">
                              <div>
                                <div className="text-sm font-inter font-medium text-gray-800 mb-1">
                                  {deal.subtitle}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-inter font-bold text-gray-900 mb-2">
                                  {deal.title}
                                </h3>
                                <div className="text-xs font-inter text-gray-600 mb-1">
                                  UP TO
                                </div>
                              </div>
                              <div className="text-3xl md:text-4xl font-inter font-bold text-gray-900">
                                {deal.discount}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))}
                    
                    {/* Navigation Buttons */}
                    <button className="swiper-button-prev-deals absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button className="swiper-button-next-deals absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </Swiper>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

