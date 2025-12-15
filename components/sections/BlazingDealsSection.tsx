'use client';

import React, { useState, useEffect } from 'react';
import { DealCardData, CountdownData } from '@/lib/types/home';
import { cn } from '@/lib/utils/cn';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
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


  return (
    <section className={cn('py-8 md:py-16', className)}>
      <div className="relative w-full">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap relative">

            <div className="w-full md:w-[35%]">
              <div className="mb-6">
                <h2 className="text-lg font-montserrat font-semibold text-primary-200 mb-2">
                  {title}
                </h2>
                {description && (
                  <p className="text-xs font-normal font-montserrat text-[ #8A8A8A] w-[70%] leading-[15px]">{description}</p>
                )}
              </div>

               {/* CTA Button */}
               <div className="mb-6">
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-inter text-sm font-normal"
                >
                  {ctaText}
                </Link>
              </div>
               
              {/* Countdown Timer */}
              {mounted && (
                <div className="mb-8">
                  <p className="text-xs font-montserrat font-medium text-error-100 mb-4">Offer ends in...</p>
                  <div className="flex items-start gap-5">
                    <div className="flex flex-col items-center">
                      <div className="bg-white rounded-lg w-[70px] h-[70px] shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)] flex items-center justify-center">
                        <div className="text-[24px] font-montserrat font-extrabold text-gray-900">
                          {String(countdown.days).padStart(2, '0')}
                        </div>
                      </div>
                      <div className="text-xs font-montserrat text-primary-200 mt-2">Days</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-white rounded-lg w-[70px] h-[70px] shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)] flex items-center justify-center">
                        <div className="text-[24px] font-montserrat font-extrabold text-gray-900">
                          {String(countdown.hours).padStart(2, '0')}
                        </div>
                      </div>
                      <div className="text-xs font-montserrat text-primary-200 mt-2">Hr</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-white rounded-lg w-[70px] h-[70px] shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)] flex items-center justify-center">
                        <div className="text-[24px] font-montserrat font-extrabold text-gray-900">
                          {String(countdown.minutes).padStart(2, '0')}
                        </div>
                      </div>
                      <div className="text-xs font-montserrat text-primary-200 mt-2">Mins</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-white rounded-lg w-[70px] h-[70px] shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)] flex items-center justify-center">
                        <div className="text-[24px] font-montserrat font-extrabold text-gray-900">
                          {String(countdown.seconds).padStart(2, '0')}
                        </div>
                      </div>
                      <div className="text-xs font-montserrat text-primary-200 mt-2">Sec</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: 65% - Extends to edge */}
            <div className="w-full md:w-[65%] md:absolute md:right-0 md:top-0 md:h-full pr-0">
              <div className="h-full pl-4 md:pl-8 pr-0">
                {deals && deals.length > 0 && (
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                      nextEl: '.swiper-button-next-deals',
                      prevEl: '.swiper-button-prev-deals',
                    }}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    spaceBetween={16}
                    slidesPerView="auto"
                    className=" eals-swiper"
                  >
                    {deals.map((deal) => (
                      <SwiperSlide key={deal.id} className="!w-auto">
                        <Link
                          href={deal.href || '#'}
                          className="group block h-full"
                        >
                          <div className={cn(
                            'relative p-6 md:p-8 h-[381px] flex flex-col justify-between min-w-[280px] md:min-w-[354px]',
                            'border-4 rounded-2xl border-transparent hover:border-secondary-200 active-slide-card'
                          )}>
                            {/* Background Image */}
                            <div className="absolute inset-0 rounded-xl overflow-hidden">
                              <Image
                                src={deal.background}
                                alt={deal.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 280px, 354px"
                              />
                            </div>
                            
                            {/* Content */}
                            <div className="relative z-10 flex align-center items-center justify-center h-full text-center">
                              <div>
                                <h3 className="text-3xl font-inter font-extrabold text-primary-200 mb-1">
                                  {deal.title}
                                </h3>
                                <div className="text-2xl font-inter font-semibold text-primary-200 mb-1">
                                  {deal.subtitle}
                                </div>
                                <div className="text-sm font-bold font-inter text-primary-200 mt-3 my-4">
                                  UP TO
                                </div>
                              <div className="text-3xl font-inter font-bold text-primary-200">
                                {deal.discount}
                                <span className="text-sm font-semibold font-inter text-primary-200 ml-2">OFF</span>
                              </div>
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

