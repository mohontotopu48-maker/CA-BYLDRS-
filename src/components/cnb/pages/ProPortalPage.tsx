'use client';

import { useState } from 'react';
import { useRouter } from '@/lib/router-store';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/cnb/AnimatedSection';
import { auditTickerData, guardianPathPhases } from '@/lib/data';
import {
  Activity,
  MapPin,
  Calendar,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Cpu,
  Target,
  AlertTriangle,
  DollarSign,
} from 'lucide-react';

export default function ProPortalPage() {
  const { navigate } = useRouter();
  const [avgProjectValue, setAvgProjectValue] = useState(10000);
  const missedCalls = 2;
  const monthlyLoss = missedCalls * avgProjectValue;

  return (
    <div className="min-h-screen bg-[#0F1A2E]">
      {/* ── Section 1: Live Audit Ticker Bar ── */}
      <div className="w-full bg-[#16253D] border-b border-[rgba(94,182,240,0.1)] overflow-hidden sticky top-[64px] z-40" style={{ height: '48px' }}>
        <div className="relative h-full">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#16253D] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#16253D] to-transparent z-10 pointer-events-none" />
          {/* Marquee track */}
          <div className="ticker-marquee flex items-center whitespace-nowrap h-full px-4">
            <span className="inline-flex items-center gap-6 text-sm font-medium text-[#5EB6F0] mx-8">
              <span className="inline-flex items-center gap-1.5">
                <Activity className="h-3.5 w-3.5" />
                <span>Current Ecosystem Status: <strong className="text-[#F0F4F8]">{auditTickerData.auditsInProgress} Audits in Progress</strong></span>
              </span>
              <span className="text-[rgba(94,182,240,0.3)]">|</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                <span><strong className="text-[#F0F4F8]">{auditTickerData.spotsCount} Spots Remaining</strong> in {auditTickerData.spotsRemaining}</span>
              </span>
              <span className="text-[rgba(94,182,240,0.3)]">|</span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                <span>Next Guardian Induction: <strong className="text-[#F0F4F8]">{auditTickerData.nextInduction}</strong></span>
              </span>
            </span>
            {/* Duplicate for seamless loop */}
            <span className="inline-flex items-center gap-6 text-sm font-medium text-[#5EB6F0] mx-8">
              <span className="inline-flex items-center gap-1.5">
                <Activity className="h-3.5 w-3.5" />
                <span>Current Ecosystem Status: <strong className="text-[#F0F4F8]">{auditTickerData.auditsInProgress} Audits in Progress</strong></span>
              </span>
              <span className="text-[rgba(94,182,240,0.3)]">|</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                <span><strong className="text-[#F0F4F8]">{auditTickerData.spotsCount} Spots Remaining</strong> in {auditTickerData.spotsRemaining}</span>
              </span>
              <span className="text-[rgba(94,182,240,0.3)]">|</span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                <span>Next Guardian Induction: <strong className="text-[#F0F4F8]">{auditTickerData.nextInduction}</strong></span>
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* ── Section 2: Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0D1754] to-[#16253D] pt-20 pb-24 md:pt-28 md:pb-32">
        {/* Subtle decorative gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#5EB6F0]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#5EB6F0]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#5EB6F0]/60 mb-6">
              Pro-Portal
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F0F4F8] leading-tight tracking-tight mb-6">
              The Authorized Monopoly<br className="hidden sm:block" /> of Trust in Your City
            </h1>
            <p className="text-base sm:text-lg text-[#B0C4DE] max-w-2xl mx-auto leading-relaxed mb-10">
              We don&apos;t sell leads. We build the Authorized Monopoly of Trust in your city. To join CA BYLDRS, every contractor must first pass the Phase 1 Performance Audit.
            </p>
            <button
              onClick={() => navigate('apply')}
              className="bg-[#5EB6F0] text-[#0F1A2E] hover:bg-[#4AA3E0] font-semibold px-8 py-4 text-base sm:text-lg rounded-full transition-all duration-300 shadow-lg shadow-[#5EB6F0]/20 cursor-pointer"
            >
              <span className="inline-flex items-center gap-2">
                Start Your $500 Audit
                <ArrowRight className="h-5 w-5" />
              </span>
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Section 3: Guardian Path Roadmap ── */}
      <section className="py-20 md:py-28 bg-[#0F1A2E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#5EB6F0] mb-3">
              The Guardian Path
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F0F4F8] tracking-tight">
              Your Journey from Audit to Alliance
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical dashed line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-[#5EB6F0] opacity-20 hidden sm:block" />

            <StaggerContainer className="space-y-8 md:space-y-10">
              {guardianPathPhases.map((phase, index) => (
                <StaggerItem key={phase.phase}>
                  <div className="flex gap-6 md:gap-8">
                    {/* Phase circle */}
                    <div className="relative flex-shrink-0 hidden sm:flex">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#5EB6F0] flex items-center justify-center text-[#0F1A2E] font-bold text-sm md:text-lg z-10">
                        {phase.phase}
                      </div>
                    </div>

                    {/* Phase card */}
                    <div className="flex-1 bg-[#16253D] rounded-2xl border border-[rgba(94,182,240,0.1)] shadow-sm p-6 md:p-8">
                      {/* Mobile phase badge */}
                      <div className="sm:hidden flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-full bg-[#5EB6F0] flex items-center justify-center text-[#0F1A2E] font-bold text-xs">
                          {phase.phase}
                        </div>
                        <span className="text-xs font-semibold tracking-widest uppercase text-[#5EB6F0]">Phase {phase.phase}</span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-[#F0F4F8] mb-2">
                        {phase.name}
                      </h3>
                      <p className="text-sm md:text-base italic text-[#5EB6F0] mb-3">
                        {phase.tagline}
                      </p>

                      {/* Price badges */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#5EB6F0]/15 text-[#5EB6F0] text-xs font-semibold">
                          {phase.price}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[rgba(94,182,240,0.08)] text-[#B0C4DE] text-xs font-medium">
                          {phase.priceBreakdown}
                        </span>
                      </div>

                      <p className="text-sm text-[#B0C4DE] leading-relaxed mb-4">
                        {phase.description}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2">
                        {phase.deliverables.map((item) => (
                          <div key={item} className="flex items-start gap-2.5">
                            <div className="w-5 h-5 rounded-full bg-[#5EB6F0]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle2 className="w-3 h-3 text-[#5EB6F0]" />
                            </div>
                            <span className="text-sm text-[#B0C4DE]">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Connecting arrow between phase 1 and 2 */}
                  {index === 0 && (
                    <div className="flex items-center gap-3 pl-0 sm:pl-10 md:pl-12 mt-4 mb-2">
                      <div className="h-px flex-1 bg-[#5EB6F0] opacity-20 hidden sm:block" />
                      <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#5EB6F0]/15 text-[#5EB6F0] text-xs font-semibold whitespace-nowrap">
                        ROI Proven
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                      <div className="h-px flex-1 bg-[#5EB6F0] opacity-20 hidden sm:block" />
                    </div>
                  )}
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ── Section 4: Lead Loss Calculator ── */}
      <section className="py-20 md:py-28 bg-[#0D1754]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#5EB6F0] mb-3">
              Lead Loss Calculator
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F0F4F8] tracking-tight mb-4">
              How Much Are You Losing Right Now?
            </h2>
            <p className="text-[#B0C4DE] text-base sm:text-lg max-w-xl mx-auto">
              Move the slider to see what missed calls are costing your business.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="bg-[#16253D] rounded-2xl border border-[rgba(94,182,240,0.1)] shadow-sm p-6 sm:p-8 md:p-10">
              {/* Slider: Average Project Value */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-[#F0F4F8]">
                    Your Average Project Value
                  </label>
                  <span className="text-2xl font-bold text-[#5EB6F0]">
                    ${avgProjectValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={5000}
                  max={100000}
                  step={5000}
                  value={avgProjectValue}
                  onChange={(e) => setAvgProjectValue(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #5EB6F0 0%, #5EB6F0 ${((avgProjectValue - 5000) / 95000) * 100}%, #2A3A52 ${((avgProjectValue - 5000) / 95000) * 100}%, #2A3A52 100%)`,
                  }}
                />
                <div className="flex justify-between mt-2 text-xs text-[#B0C4DE]">
                  <span>$5,000</span>
                  <span>$100,000</span>
                </div>
              </div>

              {/* Missed Calls Metric */}
              <div className="flex items-center gap-3 mb-8 p-4 bg-[rgba(94,182,240,0.06)] rounded-xl">
                <div className="w-10 h-10 rounded-full bg-[#FF3B30]/10 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-[#FF3B30]" />
                </div>
                <div>
                  <span className="text-sm font-medium text-[#F0F4F8]">Missed Calls Per Month</span>
                  <span className="ml-2 text-lg font-bold text-[#FF3B30]">{missedCalls}</span>
                </div>
              </div>

              {/* Output Card */}
              <div className="bg-[#0D1754] rounded-2xl p-6 sm:p-8 text-center mb-6 border border-[rgba(94,182,240,0.1)]">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#B0C4DE] mb-2">
                  Estimated Monthly Revenue Loss
                </p>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FF3B30] mb-4">
                  ${monthlyLoss.toLocaleString()}
                  <span className="text-lg sm:text-xl font-medium text-[#B0C4DE]">/mo</span>
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(94,182,240,0.1)] text-[#B0C4DE] text-sm">
                  <DollarSign className="h-4 w-4" />
                  <span>
                    {missedCalls} missed calls × ${avgProjectValue.toLocaleString()} avg = ${monthlyLoss.toLocaleString()}/mo
                  </span>
                </div>
                <p className="text-sm text-[#B0C4DE] mt-3">
                  Phase 1 proves the volume; Phase 2 saves the revenue.
                </p>
              </div>

              {/* CTA */}
              <div className="text-center">
                <button
                  onClick={() => navigate('apply')}
                  className="bg-[#5EB6F0] text-[#0F1A2E] hover:bg-[#4AA3E0] font-semibold px-8 py-3.5 text-base rounded-full transition-all duration-300 shadow-sm cursor-pointer"
                >
                  <span className="inline-flex items-center gap-2">
                    Start Your $500 Audit
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Section 5: Phase 1 Investment Breakdown ── */}
      <section className="py-20 md:py-28 bg-[#0F1A2E]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#5EB6F0] mb-3">
              The Ask
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F0F4F8] tracking-tight">
              What Your $1,000 Gets You
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
            {/* Card 1: Setup & Audit Fee */}
            <StaggerItem>
              <div className="bg-[#16253D] rounded-2xl border border-[rgba(94,182,240,0.1)] shadow-sm p-6 sm:p-8 h-full border-l-4 border-l-[#5EB6F0]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#5EB6F0]/15 flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-5 h-5 text-[#5EB6F0]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#F0F4F8]">$500 Setup & Audit Fee</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'High-end Personal Brand Portfolio',
                    'NXLBYLDR™ tracking engine integration',
                    'Response time & lead-handling audit',
                    'Truth Dashboard access',
                    '15-day growth & ROI reports',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#5EB6F0] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[#B0C4DE]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            {/* Card 2: Direct Ad Spend */}
            <StaggerItem>
              <div className="bg-[#16253D] rounded-2xl border border-[rgba(94,182,240,0.1)] shadow-sm p-6 sm:p-8 h-full border-l-4 border-l-emerald-500">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-[#F0F4F8]">$500 Direct Ad Spend</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    '100% goes to market — zero to us',
                    'Live projects generated from day one',
                    'Real-time performance tracking',
                    'ROI verification before commitment',
                    'Every dollar tracked in Truth Dashboard',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[#B0C4DE]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Bottom callout */}
          <AnimatedSection delay={0.2}>
            <div className="bg-[rgba(94,182,240,0.08)] rounded-xl p-5 sm:p-6 text-center mb-8 border border-[rgba(94,182,240,0.1)]">
              <p className="text-sm sm:text-base text-[#B0C4DE] leading-relaxed">
                <span className="text-lg mr-1">&#128161;</span>
                This isn&apos;t a marketing retainer. It&apos;s a business qualification. We prove your ROI before you ever commit to the full Alliance.
              </p>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection delay={0.3} className="text-center">
            <button
              onClick={() => navigate('apply')}
              className="bg-[#5EB6F0] text-[#0F1A2E] hover:bg-[#4AA3E0] font-semibold px-8 py-4 text-base sm:text-lg rounded-full transition-all duration-300 shadow-sm cursor-pointer"
            >
              <span className="inline-flex items-center gap-2">
                Start Your $500 Audit
                <ChevronRight className="h-5 w-5" />
              </span>
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Section 6: Final CTA ── */}
      <section className="relative overflow-hidden bg-[#0D1754] py-20 md:py-28">
        {/* Subtle decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5EB6F0]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#F0F4F8] leading-tight tracking-tight mb-6">
              There Are Only {auditTickerData.spotsCount} Spots Left in Your City.
            </h2>
            <p className="text-base sm:text-lg text-[#B0C4DE] max-w-2xl mx-auto leading-relaxed mb-10">
              The Authorized Monopoly of Trust doesn&apos;t wait. Start your Phase 1 Performance Audit today and begin your journey toward Guardian Certification.
            </p>
            <button
              onClick={() => navigate('apply')}
              className="bg-[#5EB6F0] text-[#0F1A2E] hover:bg-[#4AA3E0] font-semibold px-8 py-4 text-base sm:text-lg rounded-full transition-all duration-300 shadow-lg shadow-[#5EB6F0]/20 cursor-pointer"
            >
              <span className="inline-flex items-center gap-2">
                Start Your $500 Audit
                <ArrowRight className="h-5 w-5" />
              </span>
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
