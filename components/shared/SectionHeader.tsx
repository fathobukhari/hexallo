import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';

export interface SectionHeaderProps {
  title: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  className,
}) => {
  return (
    <div className={cn('mb-6 flex items-center gap-3', className)}>
      
      <h2 className="text-lg font-montserrat font-bold text-primary-200">
        {title}
      </h2>
      <div>
        <Image
          src="/images/heading-arrow.svg"
          alt="arrow"
          width={8}
          height={7}
        />
        </div>
    </div>
  );
};

