'use client';

import React, { useState, useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { DealCardData, CountdownData } from '@/lib/types/home';
import { cn } from '@/lib/utils/cn';
import Link from 'next/link';
import Image from 'next/image';

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

  if (!deals || deals.length === 0) {
    return null;
  }

  return (
    <section className={cn('py-8 md:py-12 lg:py-16 bg-primary-100', className)}>
      <Container size="xl" paddingSize="medium">
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
          <div className="mb-8 flex items-center gap-4 md:gap-6">
            <span className="text-sm font-inter font-medium text-gray-700">Ends in:</span>
            <div className="flex items-center gap-3 md:gap-4">
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                <div className="text-2xl md:text-3xl font-inter font-bold text-gray-900">
                  {String(countdown.days).padStart(2, '0')}
                </div>
                <div className="text-xs font-inter text-gray-600">Days</div>
              </div>
              <span className="text-xl font-inter font-bold text-gray-900">:</span>
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                <div className="text-2xl md:text-3xl font-inter font-bold text-gray-900">
                  {String(countdown.hours).padStart(2, '0')}
                </div>
                <div className="text-xs font-inter text-gray-600">Hours</div>
              </div>
              <span className="text-xl font-inter font-bold text-gray-900">:</span>
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                <div className="text-2xl md:text-3xl font-inter font-bold text-gray-900">
                  {String(countdown.minutes).padStart(2, '0')}
                </div>
                <div className="text-xs font-inter text-gray-600">Minutes</div>
              </div>
              <span className="text-xl font-inter font-bold text-gray-900">:</span>
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                <div className="text-2xl md:text-3xl font-inter font-bold text-gray-900">
                  {String(countdown.seconds).padStart(2, '0')}
                </div>
                <div className="text-xs font-inter text-gray-600">Seconds</div>
              </div>
            </div>
          </div>
        )}

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {deals.map((deal) => (
            <Link
              key={deal.id}
              href={deal.href || '#'}
              className="group block"
            >
              <div className={cn(
                'relative rounded-lg p-6 md:p-8 h-48 md:h-56 flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300',
                deal.background || 'bg-gradient-to-br from-pink-400 to-orange-400'
              )}>
                <div>
                  <div className="text-sm font-inter font-medium text-white/90 mb-1">
                    {deal.subtitle}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-inter font-bold text-white mb-2">
                    {deal.title}
                  </h3>
                </div>
                <div className="text-3xl md:text-4xl font-inter font-bold text-white">
                  {deal.discount}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-secondary-300 hover:bg-secondary-200 text-white px-8 py-3 rounded-lg font-inter font-semibold transition-colors"
          >
            {ctaText}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
};

