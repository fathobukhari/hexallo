import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CategoryCard } from '@/components/shared/CategoryCard';
import { CategoryCardData } from '@/lib/types/home';
import { cn } from '@/lib/utils/cn';

export interface ExploreGhanaSectionProps {
  title: string;
  data: CategoryCardData[];
  className?: string;
}

export const ExploreGhanaSection: React.FC<ExploreGhanaSectionProps> = ({
  title,
  data,
  className,
}) => {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section className={cn('py-8 md:py-12 lg:py-16', className)}>
      <Container size="xl" paddingSize="medium">
        <SectionHeader title={title} />
        {/* 
          Simple flexbox approach - cards auto-adjust to container width
          - Mobile: 1 column (w-full)
          - Tablet: 2 columns (flex-1 with min-width)
          - Desktop: 3 columns (flex-1 with min-width)
          - Cards maintain same height, width adjusts automatically based on container
        */}
        <div className="flex flex-wrap gap-4">
          {data.map((category) => (
            <CategoryCard 
              key={category.id} 
              data={category}
              className="w-full sm:flex-1 sm:min-w-[calc(50%-8px)] md:min-w-[calc(33.333%-11px)]"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

