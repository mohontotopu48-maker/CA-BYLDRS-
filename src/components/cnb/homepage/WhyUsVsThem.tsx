'use client';

import { CheckCircle2, XCircle, ChevronRight } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/cnb/AnimatedSection';
import { useRouter } from '@/lib/router-store';
import { Button } from '@/components/ui/button';
import { comparisonData } from '@/lib/data';

const ROWS = [
  { key: 'leadType' as const, label: 'Lead Type' },
  { key: 'costPerLead' as const, label: 'Cost Per Lead' },
  { key: 'personalBrand' as const, label: 'Personal Brand' },
  { key: 'automation' as const, label: 'Automation' },
  { key: 'trustSignal' as const, label: 'Trust Signal' },
];

export default function WhyUsVsThem() {
  const { navigate } = useRouter();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#0F1A2E]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#5EB6F0] mb-4">The Unfair Advantage</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F0F4F8] tracking-tight leading-tight">
            CA BYLDRS vs. The Lead Farms
          </h2>
          <p className="mt-4 text-[#B0C4DE] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            See exactly how we&apos;re different from the platforms that have been draining your budget and reputation.
          </p>
        </AnimatedSection>

        {/* Desktop: Comparison Table */}
        <div className="hidden lg:block">
          <AnimatedSection delay={0.15}>
            <div className="rounded-2xl border border-[rgba(94,182,240,0.1)] overflow-hidden bg-[#16253D] shadow-[0_2px_20px_rgba(0,0,0,0.15)]">
              {/* Table Header */}
              <div className="grid grid-cols-[1fr_repeat(4,1fr)_1.2fr]">
                {/* Row Label Column */}
                <div className="px-5 py-4 bg-[#0D1754] border-b border-[rgba(94,182,240,0.1)]" />

                {/* Competitor Columns */}
                {comparisonData.competitors.map((comp) => (
                  <div
                    key={comp.label}
                    className="px-4 py-4 text-center bg-[#0D1754] border-b border-[rgba(94,182,240,0.1)] border-r border-[rgba(94,182,240,0.1)] last:border-r-0"
                  >
                    <span className="text-sm font-semibold text-[#B0C4DE] uppercase tracking-wider">
                      {comp.label}
                    </span>
                  </div>
                ))}

                {/* CA BYLDRS Column */}
                <div className="px-4 py-4 text-center bg-[#5EB6F0] border-b border-[#5EB6F0]">
                  <span className="text-sm font-bold text-[#0F1A2E] uppercase tracking-wider">
                    CA BYLDRS
                  </span>
                </div>
              </div>

              {/* Table Rows */}
              <StaggerContainer staggerDelay={0.06} className="divide-y divide-[rgba(94,182,240,0.1)]">
                {ROWS.map((row) => (
                  <StaggerItem key={row.key}>
                    <div className="grid grid-cols-[1fr_repeat(4,1fr)_1.2fr] group">
                      {/* Row Label */}
                      <div className="px-5 py-4 flex items-center bg-[#0D1754]/50 border-r border-[rgba(94,182,240,0.1)]">
                        <span className="text-sm font-semibold text-[#F0F4F8]">{row.label}</span>
                      </div>

                      {/* Competitor Values */}
                      {comparisonData.competitors.map((comp) => (
                        <div
                          key={comp.label}
                          className="px-4 py-4 border-r border-[rgba(94,182,240,0.1)] last:border-r-0 bg-[#16253D] group-hover:bg-red-900/10 transition-colors"
                        >
                          <div className="flex items-center justify-start gap-1.5">
                            <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                            <span className="text-sm text-[#B0C4DE] leading-snug">
                              {comp[row.key]}
                            </span>
                          </div>
                        </div>
                      ))}

                      {/* CA BYLDRS Value */}
                      <div className="px-4 py-4 bg-[rgba(94,182,240,0.08)]">
                        <div className="flex items-center justify-start gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-[#5EB6F0] flex-shrink-0" />
                          <span className="text-sm font-semibold text-[#5EB6F0] leading-snug">
                            {comparisonData.cabuilders[row.key]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>
        </div>

        {/* Mobile: Stacked Cards */}
        <div className="lg:hidden">
          <StaggerContainer className="flex flex-col gap-4" staggerDelay={0.1}>
            {comparisonData.competitors.map((comp) => (
              <StaggerItem key={comp.label}>
                <div className="rounded-2xl border border-[rgba(94,182,240,0.1)] bg-[#16253D] shadow-[0_1px_8px_rgba(0,0,0,0.15)] overflow-hidden">
                  {/* Competitor Header */}
                  <div className="px-4 py-3 bg-[#0D1754] border-b border-[rgba(94,182,240,0.1)]">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#B0C4DE]">{comp.label}</span>
                      <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">vs. CA BYLDRS</span>
                    </div>
                  </div>

                  {/* Comparison Rows */}
                  <div className="divide-y divide-[rgba(94,182,240,0.1)]">
                    {ROWS.map((row) => (
                      <div key={row.key} className="px-4 py-3">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-[#B0C4DE] mb-1.5">
                          {row.label}
                        </p>
                        <div className="flex items-start gap-3">
                          {/* Competitor value */}
                          <div className="flex items-start gap-1.5 flex-1">
                            <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[#B0C4DE] leading-snug">{comp[row.key]}</span>
                          </div>
                          {/* Divider */}
                          <div className="w-px bg-[rgba(94,182,240,0.1)] self-stretch my-0.5" />
                          {/* CA BYLDRS value */}
                          <div className="flex items-start gap-1.5 flex-1">
                            <CheckCircle2 className="w-4 h-4 text-[#5EB6F0] flex-shrink-0 mt-0.5" />
                            <span className="text-sm font-semibold text-[#F0F4F8] leading-snug">
                              {comparisonData.cabuilders[row.key]}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.4} className="mt-12 md:mt-16 text-center">
          <Button
            size="lg"
            className="bg-[#5EB6F0] hover:bg-[#4AA3E0] text-[#0F1A2E] font-semibold px-8 py-4 text-base sm:text-lg rounded-full shadow-[0_2px_16px_rgba(94,182,240,0.2)] hover:shadow-[0_4px_24px_rgba(94,182,240,0.3)] transition-all duration-300 cursor-pointer h-auto"
            onClick={() => navigate('apply')}
          >
            Start Your $500 Audit
            <ChevronRight className="size-5 ml-1" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
