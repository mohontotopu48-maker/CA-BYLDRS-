'use client';

import { trustStats } from '@/lib/data';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/cnb/AnimatedSection';

export default function TrustBar() {
  return (
    <section className="bg-[#0D1754] py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <p className="section-label mb-4">The BYLDRS Standard</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            The Numbers That Separate Us
          </h2>
        </AnimatedSection>

        {/* Stats Grid */}
        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          staggerDelay={0.12}
        >
          {trustStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-[#5EB6F0]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm md:text-base text-[#B0C4DE] font-medium">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
