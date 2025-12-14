/**
 * Reusable Container Component
 * System-wide container with standardized sizes
 * Responsive design: 375px to 2200px+
 * 
 * @example
 * <Container size="lg">Content</Container>
 * <Container size="md" padding={false}>No padding</Container>
 */

import React from 'react';
import { cn } from '@/lib/utils/cn';
import { BaseComponentProps } from '@/lib/types';
import { 
  containerSizes, 
  paddingSizes, 
  type ContainerSize,
  type PaddingSize 
} from '@/lib/constants/containers';

export interface ContainerProps extends BaseComponentProps {
  /**
   * Container size from system-wide sizes
   * @default 'lg'
   */
  size?: ContainerSize;
  /**
   * Padding size preset
   * - small: Minimal spacing (12px-64px)
   * - medium: Standard spacing (16px-128px) - default
   * - large: Generous spacing (20px-160px)
   * - xlarge: Maximum spacing (24px-192px)
   * @default 'medium'
   */
  paddingSize?: PaddingSize | false;
}

export const Container: React.FC<ContainerProps> = ({
  size = 'lg',
  paddingSize = 'medium',
  className,
  children,
}) => {
  const sizeConfig = containerSizes[size];
  const padding = paddingSize ? paddingSizes[paddingSize] : '';

  return (
    <div
      className={cn(
        'mx-auto w-full',
        sizeConfig.maxWidth,
        padding,
        className
      )}
    >
      {children}
    </div>
  );
};

