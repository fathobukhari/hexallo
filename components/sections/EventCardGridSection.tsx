import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { EventCard } from '@/components/shared/EventCard';
import { EventCardData } from '@/lib/types/home';
import { cn } from '@/lib/utils/cn';

export interface EventCardGridSectionProps {
  title: string;
  data: EventCardData[];
  className?: string;
  columns?: 1 | 2 | 3 | 4;
  showRatingWithTitle?: boolean;
  removeBackground?: boolean;
  buzzingDestination?: boolean;
}

export const EventCardGridSection: React.FC<EventCardGridSectionProps> = ({
  title,
  data,
  className,
  columns = 4,
  showRatingWithTitle = false,
  removeBackground = false,
  buzzingDestination = false,
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section className={cn('py-8 md:py-10', className)}>
      <Container size="xl" paddingSize="medium">
        <SectionHeader title={title} />
               <div className={cn('grid gap-3', gridCols[columns])} style={{ gridAutoRows: '1fr' }}>
                 {data.map((event) => (
                   <EventCard key={event.id} data={event} showRatingWithTitle={showRatingWithTitle} removeBackground={removeBackground} buzzingDestination={buzzingDestination} />
                 ))}
               </div>
      </Container>
    </section>
  );
};

