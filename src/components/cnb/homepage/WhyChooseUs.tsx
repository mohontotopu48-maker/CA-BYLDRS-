'use client';

import { contractorJourney } from '@/lib/data';
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from '@/components/cnb/AnimatedSection';
import { useRouter } from '@/lib/router-store';
import { Button } from '@/components/ui/button';

export default function WhyChooseUs() {
  const { navigate } = useRouter();

  return (
    <section className="py-20 md:py-28 bg-[#0F1A2E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="mb-12 md:mb-16 text-center">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#5EB6F0] mb-3">
            YOUR JOURNEY
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F0F4F8] mb-4 tracking-tight">
            From Application to Market Dominance.
          </h2>
          <p className="text-[#B0C4DE] text-lg max-w-2xl mx-auto leading-relaxed">
            A proven 4-step onboarding process that transforms your business into
            an automated revenue machine.
          </p>
        </AnimatedSection>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden md:block">
          <StaggerContainer
            className="relative grid grid-cols-4 gap-0"
            staggerDelay={0.12}
          >
            {/* Connecting Dashed Line */}
            <div className="absolute top-6 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-[rgba(94,182,240,0.3)] -z-10" />

            {contractorJourney.map((step) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.step}>
                  <div className="flex flex-col items-center text-center px-4">
                    {/* Step Number Circle */}
                    <div className="w-12 h-12 rounded-full bg-[#5EB6F0] text-[#0F1A2E] font-bold text-lg flex items-center justify-center mb-6 relative z-10">
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-[rgba(94,182,240,0.08)] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#5EB6F0]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#F0F4F8] mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#B0C4DE] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="md:hidden">
          <div className="relative pl-12">
            {/* Vertical Dashed Line */}
            <div className="absolute left-[22px] top-6 bottom-6 border-l-2 border-dashed border-[rgba(94,182,240,0.3)]" />

            <StaggerContainer className="space-y-8" staggerDelay={0.08}>
              {contractorJourney.map((step) => {
                const Icon = step.icon;
                return (
                  <StaggerItem key={step.step}>
                    <div className="relative">
                      {/* Step Number Circle */}
                      <div className="absolute -left-12 top-0 w-12 h-12 rounded-full bg-[#5EB6F0] text-[#0F1A2E] font-bold text-lg flex items-center justify-center">
                        {step.step}
                      </div>

                      {/* Content Card */}
                      <div className="bg-[#16253D] rounded-2xl p-6 border border-[rgba(94,182,240,0.1)]">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-[rgba(94,182,240,0.08)] flex items-center justify-center">
                            <Icon className="w-5 h-5 text-[#5EB6F0]" />
                          </div>
                          <h3 className="text-lg font-bold text-[#F0F4F8]">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-sm text-[#B0C4DE] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.3} className="text-center mt-14 md:mt-16">
          <Button
            onClick={() => navigate('apply')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#5EB6F0] hover:bg-[#4AA3E0] text-[#0F1A2E] font-semibold transition-all duration-300 shadow-sm hover:shadow-md text-base"
          >
            Start Your $500 Audit
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
