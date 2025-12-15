import { HeroSection } from '@/app/(home)/components/hero-section';
import { siteConfig } from '@/config';
import { EventCardGridSection } from '@/components/sections/EventCardGridSection';
import { ExclusiveCardSection } from '@/components/sections/ExclusiveCardSection';
import { ExploreGhanaSection } from '@/components/sections/ExploreGhanaSection';
import { BlazingDealsSection } from '@/components/sections/BlazingDealsSection';

export default function Home() {
  const { home } = siteConfig;
  
  return (
    <main className="w-full">
      {/* Hero Section */}
      <HeroSection data={home.hero} />

      {/* Tonight's Spotlight Section */}
      {home.spotlight.length > 0 && (
        <EventCardGridSection
          title="Tonight's Spotlight"
          data={home.spotlight}
          columns={4}
        />
      )}

      {/* Hot This Week Section */}
      {home.hotThisWeek.length > 0 && (
        <EventCardGridSection
          title="Hot This Week"
          data={home.hotThisWeek}
          columns={4}
        />
      )}

      {/* Unmissable Section */}
      {home.unmissable.length > 0 && (
        <EventCardGridSection
          title="Unmissable"
          data={home.unmissable}
          columns={4}
        />
      )}

      {/* Exclusives Section */}
      {home.exclusives.length > 0 && (
        <ExclusiveCardSection
          title="Exclusives"
          data={home.exclusives}
          columns={2}
          cardVariant="default"
        />
      )}

      {/* For You Section */}
      {home.forYou.length > 0 && (
        <EventCardGridSection
          title="For you"
          data={home.forYou}
          columns={4}
          showRatingWithTitle={true}
          removeBackground={true}
        />
      )}

      {/* Buzzing Destinations Section */}
      {home.buzzingDestinations && home.buzzingDestinations.length > 0 && (
        <EventCardGridSection
          title="Buzzing Destinations"
          data={home.buzzingDestinations}
          columns={4}
        />
      )}

      {/* Blazing Deals Section */}
      <BlazingDealsSection
        title={home.blazingDeals.title}
        description={home.blazingDeals.description}
        deals={home.blazingDeals.deals || []}
        countdown={home.blazingDeals.countdown}
        ctaText={home.blazingDeals.ctaText}
        ctaHref={home.blazingDeals.ctaHref}
      />

      {/* Discover Hidden Gems Section */}
      {home.hiddenGems.length > 0 && (
        <ExclusiveCardSection
          title="Discover Hidden Gems"
          data={home.hiddenGems}
          columns={4}
          cardVariant="compact"
          showIcon={false}
        />
      )}

      <div className="bg-secondary-500">
       {/* Explore Ghana Section */}
       {home.exploreGhana.length > 0 && (
        <ExploreGhanaSection
          title="Explore Ghana"
          data={home.exploreGhana}
        />
      )}
      
      {/* Ghana's Top 10s Section */}
      {home.ghanasTop10s.length > 0 && (
        <EventCardGridSection
          title="Ghana's Top 10s"
          data={home.ghanasTop10s}
          columns={4}
          showRatingWithTitle={true}
        />
      )}
      </div>

      {/* Global Highlights Section */}
      {home.globalHighlights.length > 0 && (
        <ExclusiveCardSection
          title="Global Highlights"
          data={home.globalHighlights}
          columns={4}
          cardVariant="large"
        />
      )}

    </main>
  );
}
