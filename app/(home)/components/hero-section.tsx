'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { cn } from '@/lib/utils/cn';
import { Container } from '@/components/ui/Container';
import { HeroData } from '@/lib/types/home';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export interface HeroSectionProps {
  data: HeroData;
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data, className }) => {
  const [searchQuery, setSearchQuery] = useState({
    event: '',
    where: '',
    when: '',
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search:', searchQuery);
  };

  return (
    <section className={cn('relative py-8 md:py-12 lg:py-16', className)}>
      <Container size="xl" paddingSize="medium">
        <div className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden rounded-lg">
          {/* Swiper Background Images Carousel */}
          <div className="absolute inset-0 rounded-lg">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              loop={true}
              speed={1000}
              className="h-full w-full hero-swiper"
            >
              {data.backgroundImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={image}
                    alt={`Hero background ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                    priority={index === 0}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 z-10 rounded-lg" />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center z-20">
            {/* Title and Subtitle */}
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-inter font-bold text-white mb-4">
                {data.title}
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
                {data.subtitle}
              </p>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="w-full max-w-4xl">
              <div className="bg-white rounded-lg p-2 flex flex-col md:flex-row gap-2 shadow-xl">
                <input
                  type="text"
                  placeholder={data.searchPlaceholders.event}
                  value={searchQuery.event}
                  onChange={(e) => setSearchQuery({ ...searchQuery, event: e.target.value })}
                  className="flex-1 px-4 py-3 text-sm font-inter font-normal text-gray-900 placeholder-gray-500 border-none outline-none"
                />
                <div className="w-px bg-gray-200 hidden md:block" />
                <input
                  type="text"
                  placeholder={data.searchPlaceholders.where}
                  value={searchQuery.where}
                  onChange={(e) => setSearchQuery({ ...searchQuery, where: e.target.value })}
                  className="flex-1 px-4 py-3 text-sm font-inter font-normal text-gray-900 placeholder-gray-500 border-none outline-none"
                />
                <div className="w-px bg-gray-200 hidden md:block" />
                <input
                  type="text"
                  placeholder={data.searchPlaceholders.when}
                  value={searchQuery.when}
                  onChange={(e) => setSearchQuery({ ...searchQuery, when: e.target.value })}
                  className="flex-1 px-4 py-3 text-sm font-inter font-normal text-gray-900 placeholder-gray-500 border-none outline-none"
                />
                <button
                  type="submit"
                  className="bg-secondary-300 hover:bg-secondary-200 text-white px-6 py-3 rounded-md transition-colors flex items-center justify-center min-w-[60px]"
                  aria-label="Search events"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

