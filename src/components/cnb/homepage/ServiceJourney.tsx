'use client';

import { partnershipPhases } from '@/lib/data';
import { Check, ChevronRight } from 'lucide-react';
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from '@/components/cnb/AnimatedSection';
import { useRouter } from '@/lib/router-store';
import { Button } from '@/components/ui/button';

export default function ServiceJourney() {
  const { navigate } = useRouter();

  return (
    <section className="py-20 md:py-28 bg-[#0D1754]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="mb-12 md:mb-16 text-center">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#5EB6F0] mb-3">
            THE PARTNERSHIP MODEL
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F0F4F8] mb-4 tracking-tight">
            Phased ROI Growth. Proven Before You Pay.
          </h2>
          <p className="text-[#B0C4DE] text-lg max-w-2xl mx-auto leading-relaxed">
            We don&apos;t ask for blind trust. We prove the system works before
            you commit.
          </p>
        </AnimatedSection>

        {/* Phase Cards */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14"
          staggerDelay={0.12}
        >
          {partnershipPhases.map((phase, index) => (
            <StaggerItem key={phase.phase}>
              <div className="bg-[#16253D] rounded-2xl border border-[rgba(94,182,240,0.1)] p-8 h-full shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
                {/* Phase Badge */}
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#5EB6F0] text-[#0F1A2E] text-xs font-bold tracking-wider mb-6">
                  PHASE {phase.phase}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#F0F4F8] mb-4">
                  {phase.name}
                </h3>

                {/* Description */}
                <p className="text-[#B0C4DE] leading-relaxed mb-6">
                  {phase.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-3">
                  {phase.highlights.map((highlight, hi) => (
                    <li key={hi} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[rgba(94,182,240,0.08)] flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-3 h-3 text-[#5EB6F0]" />
                      </div>
                      <span className="text-sm text-[#B0C4DE]">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Visual Divider Arrow */}
        <div className="hidden md:flex justify-center -mt-10 mb-10 relative z-10">
          <div className="w-12 h-12 rounded-full bg-[#5EB6F0] flex items-center justify-center shadow-md">
            <ChevronRight className="w-6 h-6 text-[#0F1A2E]" />
          </div>
        </div>

        {/* Mobile Arrow */}
        <div className="flex md:hidden justify-center mb-10">
          <div className="w-10 h-10 rounded-full bg-[#5EB6F0] flex items-center justify-center shadow-md rotate-90">
            <ChevronRight className="w-5 h-5 text-[#0F1A2E]" />
          </div>
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.25} className="text-center">
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
