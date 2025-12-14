import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ExclusiveCard } from '@/components/shared/ExclusiveCard';
import { ExclusiveCardData } from '@/lib/types/home';
import { cn } from '@/lib/utils/cn';

export interface ExclusiveCardSectionProps {
  title: string;
  data: ExclusiveCardData[];
  className?: string;
  columns?: 2 | 3 | 4;
}

export const ExclusiveCardSection: React.FC<ExclusiveCardSectionProps> = ({
  title,
  data,
  className,
  columns = 2,
}) => {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section className={cn('py-8 md:py-12 lg:py-16', className)}>
      <Container size="xl" paddingSize="medium">
        <SectionHeader title={title} />
        
        <div className={cn('grid gap-6 md:gap-8', gridCols[columns])}>
          {data.map((exclusive) => (
            <ExclusiveCard key={exclusive.id} data={exclusive} />
          ))}
        </div>
      </Container>
    </section>
  );
};

