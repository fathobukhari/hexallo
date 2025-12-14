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
          Approach: Flexbox with flex-wrap
          - Mobile: 100% width (w-full)
          - Desktop: Cards can have different widths naturally
          - All cards maintain same height (280px) via CategoryCard component
          - No need to specify individual image widths - flexbox handles it automatically
        */}
        <div className="flex flex-wrap gap-4 md:gap-6">
          {data.map((category) => (
            <CategoryCard 
              key={category.id} 
              data={category}
              className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-auto lg:flex-1 lg:min-w-[250px] lg:max-w-[400px]"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

