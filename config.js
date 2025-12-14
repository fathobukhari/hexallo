export const siteConfig = {
  name: 'Hexallo',
  description: 'Professional Next.js application built with TypeScript and Tailwind CSS',
  url: 'https://hexallo.com',

  // Header configuration

  header: {
    // Navigation Bar 1
    topBar: {
      leftLinks: [
        { label: 'Events Calendar', href: '/events-calendar' },
        { label: 'Blog', href: '/blog' },
        { label: 'Limelight', href: '/limelight' },
      ],
      centerSelectors: [
        {
          type: 'language',
          label: 'EN(US)',
          value: 'en-us',
          icon: 'globe',
          iconPath: '/images/globe.svg',
          options: [
            { label: 'English (US)', value: 'en-us', code: 'EN(US)' },
            { label: 'English (UK)', value: 'en-gb', code: 'EN(GB)' },
            { label: 'Spanish', value: 'es', code: 'ES' },
            { label: 'French', value: 'fr', code: 'FR' },
            { label: 'German', value: 'de', code: 'DE' },
            { label: 'Italian', value: 'it', code: 'IT' },
            { label: 'Portuguese', value: 'pt', code: 'PT' },
            { label: 'Chinese', value: 'zh', code: 'ZH' },
            { label: 'Japanese', value: 'ja', code: 'JA' },
            { label: 'Korean', value: 'ko', code: 'KO' },
            { label: 'Arabic', value: 'ar', code: 'AR' },
            { label: 'Hindi', value: 'hi', code: 'HI' },
          ],
        },
        {
          type: 'country',
          label: 'United States',
          value: 'us',
          icon: 'flag',
          iconPath: '/images/Flags.svg', 
          options: [
            { label: 'United States', value: 'us', flag: '🇺🇸' },
            { label: 'Canada', value: 'ca', flag: '🇨🇦' },
            { label: 'United Kingdom', value: 'gb', flag: '🇬🇧' },
            { label: 'Australia', value: 'au', flag: '🇦🇺' },
          ],
        },
        {
          type: 'state',
          label: 'California',
          value: 'ca',
          options: [
            { label: 'California', value: 'ca' },
            { label: 'New York', value: 'ny' },
            { label: 'Texas', value: 'tx' },
            { label: 'Florida', value: 'fl' },
            { label: 'Illinois', value: 'il' },
            { label: 'Pennsylvania', value: 'pa' },
            { label: 'Ohio', value: 'oh' },
          ],
        },
      ],
      rightLinks: [
        { label: 'Sign In | Up', href: '/sign-in' },
        { label: 'Business', href: '/business', highlight: true },
        { label: 'Create Event', href: '/create-event', bold: true },
      ],
    },
    // Navigation Bar 2
    mainNav: {
      logo: {
        src: '/images/logo.svg',
        alt: 'Hexallo',
        href: '/',
      },
      links: [
        { label: 'Explore', href: '/explore', active: true },
        { label: 'Services', href: '/services' },
        { label: 'Nightlife', href: '/nightlife' },
        { label: 'Travel', href: '/travel' },
        { label: 'Accommodation', href: '/accommodation' },
        { label: 'Spaces', href: '/spaces' },
        { label: 'Subscriptions', href: '/subscriptions' },
        { label: 'Vouchers', href: '/vouchers' },
        { label: 'Rentals', href: '/rentals' },
        { label: 'Voting', href: '/voting' },
        { label: 'Shop', href: '/shop' },
        { label: 'Essentials', href: '/essentials' },
        { label: 'Healthcare', href: '/healthcare' },
        { label: 'Jobs', href: '/jobs' },
        { label: 'Marketplace', href: '/marketplace' },
      ],
    },
    // Navigation Bar 3
    subNav: {
      links: [
        { label: 'Home', href: '/', active: true },
        { label: 'Events', href: '/events' },
        { label: 'Tours', href: '/tours' },
        { label: 'Activities', href: '/activities' },
        { label: 'Indulge', href: '/indulge' },
        { label: 'Places', href: '/places' },
        { label: 'Movies', href: '/movies' },
        { label: 'Sports', href: '/sports' },
        { label: 'Restaurants', href: '/restaurants' },
        { label: 'Find a table', href: '/find-a-table' },
        { label: 'Conferences', href: '/conferences' },
        { label: 'Workshops', href: '/workshops' },
        { label: 'Auditions', href: '/auditions' },
        { label: 'People', href: '/people' },
        { label: 'World Famous', href: '/world-famous' },
        { label: 'Social Buddies', href: '/social-buddies' },
        { label: 'Virtual Experiences', href: '/virtual-experiences' },
      ],
    },
  },
  
  // Footer configuration
  footer: {
    brand: {
      copyright: 'All rights reserved Hexallo LLC 2023',
    },
    links: [
      {
        label: 'Privacy policy',
        href: '/',
      },
      {
        label: 'Terms of service',
        href: '/',
      },
      {
        label: 'Contact us',
        href: '/',
      },
    ],
    social: [
      {
        name: 'X (Twitter)',
        href: 'https://twitter.com/',
        icon: '/icons/x.svg',
      },
      {
        name: 'LinkedIn',
        href: 'https://linkedin.com/',
        icon: '/icons/linkedin.svg',
      },
      {
        name: 'Facebook',
        href: 'https://facebook.com/',
        icon: '/icons/facebook.svg',
      },
      {
        name: 'Instagram',
        href: 'https://instagram.com/',
        icon: '/icons/instagram.svg',
      },
      {
        name: 'WhatsApp',
        href: 'https://wa.me/1234567890',
        icon: '/icons/whatsapp.svg',
      },
    ],
  },
};

