'use client';

import { threePillars } from '@/lib/data';
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from '@/components/cnb/AnimatedSection';

const psychologicalQuotes = [
  '"I have to pass an audit to get in? This must be the real deal."',
  '"They aren\'t guessing — they\'re tracking every dollar."',
  '"They\'re giving me a Seal that lets me charge 20% more."',
];

export default function ThreePillars() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="mb-12 md:mb-16 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#1A237E] mb-3">
            THE 3 PILLARS OF THE ALLIANCE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D1D1F] tracking-tight mb-4">
            Why Members Pay More to Stay.
          </h2>
          <p className="text-lg text-[#6E6E73] max-w-2xl mx-auto leading-relaxed">
            Most contractors buy leads. CA BYLDRS members own the market.
          </p>
        </AnimatedSection>

        {/* Pillar Cards Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          staggerDelay={0.1}
        >
          {threePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <StaggerItem key={pillar.title}>
                <div className="h-full bg-white rounded-2xl border border-black/[0.08] shadow-sm p-6 sm:p-8 flex flex-col">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#E8EAF6] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#1A237E]" />
                  </div>

                  {/* Stat */}
                  <div className="mb-1">
                    <span className="text-3xl font-bold text-[#1A237E]">
                      {pillar.stat}
                    </span>
                  </div>

                  {/* Stat Label */}
                  <span className="text-sm text-[#86868B] mb-4 block">
                    {pillar.statLabel}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[#1D1D1F] mt-3">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#6E6E73] leading-relaxed mt-2">
                    {pillar.description}
                  </p>

                  {/* Spacer to push divider to bottom */}
                  <div className="flex-1" />

                  {/* Bottom Divider + Psychological Quote */}
                  <div className="mt-6 pt-5 border-t border-black/[0.06]">
                    <p className="text-sm italic text-[#86868B] leading-relaxed">
                      {psychologicalQuotes[index]}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
