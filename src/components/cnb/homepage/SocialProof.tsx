'use client';

import {
  BarChart3,
  TrendingUp,
  Target,
  type LucideIcon,
} from 'lucide-react';
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from '@/components/cnb/AnimatedSection';
import { ceoInvolvement } from '@/lib/data';

export default function SocialProof() {
  return (
    <section className="bg-[#0D1754] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-14 md:mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#5EB6F0] mb-3">
            Mandatory CEO Involvement
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F0F4F8] mb-4 tracking-tight">
            The Monthly Strategy Deep-Dive
          </h2>
          <p className="text-lg text-[#B0C4DE] max-w-2xl mx-auto leading-relaxed">
            We are a Done-For-You service that requires Partner Leadership. Every member must commit to a 30-60 minute Monthly Strategy Sync to review the NXLBYLDR™ Task Log and ROI Calibration Report.
          </p>
        </AnimatedSection>

        {/* Center Quote Block */}
        <AnimatedSection delay={0.1} className="mb-14 md:mb-16">
          <div className="max-w-3xl mx-auto bg-[#16253D] rounded-2xl p-8 md:p-10 shadow-sm border-l-4 border-[#5EB6F0]">
            <p className="text-xl md:text-2xl text-[#F0F4F8] leading-relaxed italic">
              &ldquo;Top-tier results require a seat at the table. If you aren&apos;t ready to spend 60 minutes a month to lead your growth, we aren&apos;t the right fit. We build the engine; you steer the ship.&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold text-[#5EB6F0]">
              — The CEO Partnership Standard
            </p>
          </div>
        </AnimatedSection>

        {/* Sync Detail Cards */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 md:mb-16"
          staggerDelay={0.12}
        >
          {ceoInvolvement.syncDetails.map((detail, idx) => {
            const Icon = detail.icon as LucideIcon;
            return (
              <StaggerItem key={idx}>
                <div className="bg-[#16253D] rounded-2xl p-6 shadow-sm hover:shadow-[0_4px_24px_rgba(94,182,240,0.08)] transition-shadow duration-300 h-full">
                  <div className="w-12 h-12 rounded-full bg-[#5EB6F0] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#0F1A2E]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#F0F4F8] mb-2">
                    {detail.title}
                  </h3>
                  <p className="text-sm text-[#B0C4DE] leading-relaxed">
                    {detail.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* The Requirement Sub-section */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-[#F0F4F8] mb-3">The Monthly Strategy Sync</h3>
            <p className="text-[#B0C4DE] leading-relaxed">
              Every partner must commit to a 30 to 60-minute Monthly Strategy Deep-Dive with our CSO and Tech Team. During this session, we review the NXLBYLDR™ Task Log, analyze Speed-to-Lead data, and provide a comprehensive ROI Calibration Report. Top-tier results require a seat at the table.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
