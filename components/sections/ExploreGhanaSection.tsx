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
    <section className={cn('py-8 md:py-10', className)}>
      <Container size="xl" paddingSize="medium">
        <SectionHeader title={title} />
        <div className="flex flex-wrap gap-4">
          {data.map((category) => (
            <CategoryCard 
              key={category.id} 
              data={category}
              className="flex-none"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

