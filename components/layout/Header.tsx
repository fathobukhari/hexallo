'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config';

export interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const { header } = siteConfig;
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>(() =>
    header.topBar.centerSelectors.reduce(
      (acc, selector) => ({ ...acc, [selector.type]: selector.value }),
      {}
    )
  );
  const navRef = useRef<HTMLElement>(null);
  const [showScrollArrow, setShowScrollArrow] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Third navbar scroll state
  const subNavRef = useRef<HTMLElement>(null);
  const [showSubNavArrow, setShowSubNavArrow] = useState(false);
  const [canSubNavScrollLeft, setCanSubNavScrollLeft] = useState(false);
  const [canSubNavScrollRight, setCanSubNavScrollRight] = useState(false);

  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (type: string) => setOpenDropdown(prev => prev === type ? null : type);
  
  const selectOption = (type: string, value: string) => {
    setSelectedValues(prev => ({ ...prev, [type]: value }));
    setOpenDropdown(null);
  };

  const getDisplayValue = (selector: typeof header.topBar.centerSelectors[0]): string => {
    const selected = selector.options?.find(opt => opt.value === selectedValues[selector.type]);
    if (!selected) return selector.label;
    return selector.type === 'language' && 'code' in selected ? (selected as { code: unknown }).code as string : (selected as { label: unknown }).label as string;
  };

  const checkScrollable = () => {
    if (navRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = navRef.current;
      const hasOverflow = scrollWidth > clientWidth;
      setShowScrollArrow(hasOverflow);
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const checkSubNavScrollable = () => {
    if (subNavRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = subNavRef.current;
      const hasOverflow = scrollWidth > clientWidth;
      setShowSubNavArrow(hasOverflow);
      setCanSubNavScrollLeft(scrollLeft > 0);
      setCanSubNavScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollNav = (direction: 'left' | 'right') => {
    if (navRef.current) {
      const scrollAmount = 200;
      navRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollSubNav = (direction: 'left' | 'right') => {
    if (subNavRef.current) {
      const scrollAmount = 200;
      subNavRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    checkScrollable();
    checkSubNavScrollable();
    window.addEventListener('resize', () => {
      checkScrollable();
      checkSubNavScrollable();
    });
    return () => {
      window.removeEventListener('resize', checkScrollable);
      window.removeEventListener('resize', checkSubNavScrollable);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={cn('w-full', className)}>

      {/* Navigation Bar 1 - Hidden on mobile */}
      <div className="hidden lg:block bg-white">
        <Container size="xl" paddingSize="medium">
          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-end gap-4 py-2 md:py-3">
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              {header.topBar.leftLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-inter font-normal text-primary-50 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Center Selectors */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              {header.topBar.centerSelectors.map((selector) => {
                const isOpen = openDropdown === selector.type;
                const isSelected = (value: string) => selectedValues[selector.type] === value;
                
                return (
                  <div key={selector.type} className="relative">
                    <button
                      onClick={() => toggleDropdown(selector.type)}
                      className="flex items-center gap-2 text-xs font-inter font-normal text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                    >
                      {selector.iconPath && (
                        <Image
                          src={selector.iconPath}
                          alt={selector.icon || ''}
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                      )}
                      <span>{getDisplayValue(selector)}</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isOpen && (
                      <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[180px] max-h-60 overflow-y-auto">
                        {selector.options?.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => selectOption(selector.type, option.value)}
                            className={cn(
                              'w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors flex items-center gap-2',
                              isSelected(option.value) && 'bg-gray-50 text-gray-900 font-medium'
                            )}
                          >
                            {'flag' in option && option.flag && <span>{option.flag}</span>}
                            <span>{option.label}</span>
                            {isSelected(option.value) && (
                              <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Links */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              {header.topBar.rightLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-xs font-inter font-normal transition-colors',
                    !link.highlight && !link.bold && 'text-gray-600 hover:text-gray-900',
                    link.highlight && 'font-medium text-[13px] text-secondary-300 hover:text-secondary-300',
                    link.bold && 'font-bold text-[13px] text-black hover:text-gray-800',
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Navigation Bar 2 */}
      <div className="bg-secondary-600">
        <Container size="xl" paddingSize="medium">
          <div className="flex items-center justify-between gap-6 h-[37px]">
            {/* Logo */}
            <Link href={header.mainNav.logo.href} className="flex items-center gap-2">
              <Image
                src={header.mainNav.logo.src}
                alt={header.mainNav.logo.alt}
                width={97}
                height={25}
                className="h-6 w-auto"
              />
            </Link>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center justify-end gap-2 flex-1 relative max-w-[calc(100%-120px)] xl:max-w-none">
              {/* Left Scroll Arrow */}
              {showScrollArrow && canScrollLeft && (
                <button
                  onClick={() => scrollNav('left')}
                  className="scroll-arrow-visible absolute left-0 h-[37px] flex items-center px-3 bg-gradient-to-r from-secondary-600 to-transparent hover:from-secondary-600 transition-all duration-300 group z-10"
                  aria-label="Scroll to see previous links"
                >
                  <Image
                    src="/icons/arrow-right-white.svg"
                    alt="Scroll left"
                    width={16}
                    height={16}
                    className="w-4 h-4 transition-all duration-300 group-hover:-translate-x-1 group-hover:scale-110 rotate-180"
                  />
                </button>
              )}

              <nav
                ref={navRef}
                className={cn(
                  'flex items-center gap-6 overflow-x-auto scrollbar-hide',
                  showScrollArrow && 'pr-2'
                )}
                onScroll={checkScrollable}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {header.mainNav.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'text-xs font-inter text-white whitespace-nowrap transition-all h-[37px] flex items-center group',
                      'border-b-4 border-transparent hover:border-secondary-200'
                    )}
                  >
                    <span className="relative inline-block">
                      <span className="invisible font-bold" aria-hidden="true">{link.label}</span>
                      <span className={cn(
                        'absolute inset-0 flex items-center',
                        link.active ? 'font-bold' : 'font-normal group-hover:font-bold'
                      )}>
                        {link.label}
                      </span>
                    </span>
                  </Link>
                ))}
              </nav>

              {/* Right Scroll Arrow  */}
              {showScrollArrow && canScrollRight && (
                <button
                  onClick={() => scrollNav('right')}
                  className="scroll-arrow-visible absolute right-0 h-[37px] flex items-center px-3 bg-gradient-to-l from-secondary-600 to-transparent hover:from-secondary-600 transition-all duration-300 group z-10"
                  aria-label="Scroll to see more links"
                >
                  <Image
                    src="/icons/arrow-right-white.svg"
                    alt="Scroll right"
                    width={16}
                    height={16}
                    className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110"
                  />
                </button>
              )}
            </div>

            {/* Mobile Menu Button - Single hamburger for all navigation */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-secondary-500 transition-colors rounded"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </Container>

        {/* Unified Mobile Menu Drawer - Contains all 3 navigation bars */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Sidebar Menu */}
            <div className="lg:hidden fixed top-0 left-0 h-full w-[280px] max-w-[85vw] bg-secondary-600 z-50 shadow-2xl overflow-y-auto transform transition-transform duration-300 ease-in-out">
              <div className="flex flex-col h-full">
                {/* Mobile Sidebar Header with Logo and Close Button */}
                <div className="bg-secondary-600 border-b border-secondary-500 flex items-center justify-between px-4 py-3">
                  {/* Logo */}
                  <Link href={header.mainNav.logo.href} className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image
                      src={header.mainNav.logo.src}
                      alt={header.mainNav.logo.alt}
                      width={97}
                      height={25}
                      className="h-6 w-auto"
                    />
                  </Link>
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white p-2 hover:bg-secondary-500 transition-colors rounded"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Top Bar Links Section - Same color as Navigation 2 and 3 */}
                <div className="bg-secondary-600 border-b border-secondary-500">
                  <nav className="flex flex-col">
                    {header.topBar.leftLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-xs font-inter font-normal text-white px-4 py-3"
                      >
                        {link.label}
                      </Link>
                    ))}
                    {header.topBar.rightLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-xs font-inter font-normal text-white px-4 py-3"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Main Navigation Section - Explore */}
                <div className="bg-secondary-600 flex-1">
                  <div className="px-4 py-3 border-b border-secondary-500">
                    <h3 className="text-xs font-inter font-medium text-white uppercase tracking-wide">
                      Explore
                    </h3>
                  </div>
                  <nav className="flex flex-col">
                    {header.subNav.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-xs font-inter font-normal text-white px-4 py-3"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Services Section */}
                <div className="bg-secondary-600 border-t border-secondary-500">
                  <div className="px-4 py-3 border-b border-secondary-500">
                    <h3 className="text-xs font-inter font-medium text-white uppercase tracking-wide">
                      Services
                    </h3>
                  </div>
                  <nav className="flex flex-col pb-4">
                    {header.mainNav.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-xs font-inter font-normal text-white px-4 py-3"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Navigation Bar 3 - Hidden on mobile */}
      <div className="hidden lg:block bg-primary-100">
        <Container size="xl" paddingSize="medium">
          <div className="flex items-center gap-2 relative">
            {/* Left Scroll Arrow - Only visible when scrolled right */}
            {showSubNavArrow && canSubNavScrollLeft && (
              <button
                onClick={() => scrollSubNav('left')}
                className="scroll-arrow-visible absolute left-0 h-[37px] flex items-center px-3 bg-gradient-to-r from-primary-100 to-transparent hover:from-primary-200 transition-all duration-300 group z-10"
                aria-label="Scroll to see previous links"
              >
                <Image
                  src="/icons/arrow-right-black.svg"
                  alt="Scroll left"
                  width={16}
                  height={16}
                  className="w-4 h-4 transition-all duration-300 group-hover:-translate-x-1 group-hover:scale-110 rotate-180"
                />
              </button>
            )}

            <nav
              ref={subNavRef}
              className={cn(
                'flex items-center gap-6 overflow-x-auto scrollbar-hide flex-1',
                showSubNavArrow && 'pr-2'
              )}
              onScroll={checkSubNavScrollable}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {header.subNav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-xs font-inter text-primary-50 whitespace-nowrap transition-all h-[37px] flex items-center group',
                    'border-b-4 border-transparent hover:border-secondary-300'
                  )}
                >
                  <span className="relative inline-block">
                    <span className="invisible font-bold" aria-hidden="true">{link.label}</span>
                    <span className={cn(
                      'absolute inset-0 flex items-center',
                      link.active ? 'font-bold' : 'font-normal group-hover:font-bold'
                    )}>
                      {link.label}
                    </span>
                  </span>
                </Link>
              ))}
            </nav>

            {/* Right Scroll Arrow - Only visible when can scroll right */}
            {showSubNavArrow && canSubNavScrollRight && (
              <button
                onClick={() => scrollSubNav('right')}
                className="scroll-arrow-visible absolute right-0 h-[37px] flex items-center px-3 bg-gradient-to-l from-primary-100 to-transparent hover:from-primary-200 transition-all duration-300 group z-10"
                aria-label="Scroll to see more links"
              >
                <Image
                  src="/icons/arrow-right-black.svg"
                  alt="Scroll right"
                  width={16}
                  height={16}
                  className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110"
                />
              </button>
            )}
          </div>
        </Container>
      </div>

    </header>
  );
};
