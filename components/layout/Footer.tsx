import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config';

export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const { footer } = siteConfig;

  return (
    <footer
      className={cn(
        'bg-secondary-300',
        className
      )}
    >
      <Container size="xl" paddingSize="medium">
        <div className="py-4">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="flex flex-col md:flex-row items-start justify-start gap-4 md:gap-x-12 lg:col-span-8">
              <div>
                <p className="text-base text-info-100 font-normal leading-relaxed font-tt-norms-pro">
                  {footer.brand.copyright}
                </p>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {footer.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-base text-info-100 font-medium leading-relaxed font-tt-norms-pro hover:text-primary-500"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-start justify-start lg:col-span-4 lg:justify-end">
              <div className="flex items-center gap-3">
                {footer.social.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white"
                    aria-label={social.name}
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
