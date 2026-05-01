'use client';

import {
  Video,
  Award,
  Users,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from '@/components/cnb/AnimatedSection';
import { unfairAdvantage } from '@/lib/data';

export default function CountyCoverage() {
  return (
    <section className="py-20 md:py-28 bg-[#0F1A2E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-14 md:mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#5EB6F0] mb-3">
            The Unfair Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F0F4F8] mb-4 tracking-tight">
            {unfairAdvantage.headline}
          </h2>
          <p className="text-lg text-[#B0C4DE] max-w-2xl mx-auto leading-relaxed">
            NXLBYLDR™ scales businesses using an exclusive 8-channel ecosystem to deliver more Calls, Clicks, and Customers. We don&apos;t just send leads &mdash; we manage your ads, create content, and build your brand so homeowners call you directly.
          </p>
        </AnimatedSection>

        {/* Benefit Cards */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14 md:mb-16"
          staggerDelay={0.12}
        >
          {unfairAdvantage.benefits.map((benefit, idx) => {
            const Icon = benefit.icon as LucideIcon;
            return (
              <StaggerItem key={idx}>
                <div className="bg-[#16253D] rounded-2xl border border-[rgba(94,182,240,0.1)] p-6 hover:shadow-[0_4px_24px_rgba(94,182,240,0.08)] transition-shadow duration-300 h-full">
                  <div className="w-12 h-12 rounded-full bg-[#5EB6F0] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#0F1A2E]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#F0F4F8] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#B0C4DE] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Visual Highlight Callout */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-3xl mx-auto bg-[rgba(94,182,240,0.08)] rounded-2xl p-8 md:p-10">
            <p className="text-xl md:text-2xl text-[#F0F4F8] leading-relaxed text-center font-medium">
              "NXLBYLDR™ scales businesses using an exclusive 8-channel ecosystem. We Brand It. Build It. Sell It. &mdash; so you stop competing on price.&rdquo;
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
