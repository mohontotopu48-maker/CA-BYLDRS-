'use client';

import { useRouter } from '@/lib/router-store';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/cnb/AnimatedSection';
import { Button } from '@/components/ui/button';
import {
  Shield,
  ArrowRight,
  CheckCircle2,
  Eye,
  Lock,
  Wrench,
} from 'lucide-react';
import { guardianTenPoints, integrityStandard } from '@/lib/data';

export default function ServicesOverviewPage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero Section ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            {/* Shield Badge */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#1A237E] mb-6 shadow-[0_4px_24px_rgba(26,35,126,0.25)]">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#1A237E] mb-4">
              The Shield
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D1D1F] leading-tight tracking-tight mb-6">
              The BYLDRS Guardian&trade;
              <span className="block mt-2 text-[#1A237E]">
                10-Point Integrity Standard
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-[#1A237E] mb-6">
              We Audit the Professional so You Don&apos;t Have to Gamble on the Project.
            </p>
            <p className="text-base sm:text-lg text-[#6E6E73] max-w-2xl mx-auto leading-relaxed">
              Every Guardian-certified contractor passes our 10-point consumer trust verification — checked every 30 days. No exceptions. No shortcuts. Because your home deserves more than a coin flip.
            </p>
            {/* Quick Stats */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[#1A237E]">30</p>
                <p className="text-xs sm:text-sm text-[#6E6E73] font-medium mt-1">Day Re-Verification</p>
              </div>
              <div className="w-px h-10 bg-[rgba(0,0,0,0.1)]" />
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[#1A237E]">10</p>
                <p className="text-xs sm:text-sm text-[#6E6E73] font-medium mt-1">Consumer Protection Points</p>
              </div>
              <div className="w-px h-10 bg-[rgba(0,0,0,0.1)]" />
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[#1A237E]">0</p>
                <p className="text-xs sm:text-sm text-[#6E6E73] font-medium mt-1">Unverified Contractors</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── The Guardian 10-Point Standard (HERO OF THE PAGE) ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14 md:mb-18">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#1A237E] mb-3">
              Your Protection Charter
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D1D1F] tracking-tight">
              10 Ways We Protect Your Investment
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#6E6E73] max-w-2xl mx-auto leading-relaxed">
              Each checkpoint is designed with one audience in mind: the homeowner who deserves to feel safe, informed, and protected from the first estimate to the final walkthrough.
            </p>
          </AnimatedSection>

          <StaggerContainer
            staggerDelay={0.06}
            className="space-y-5"
          >
            {guardianTenPoints.map((point) => {
              const Icon = point.icon;
              return (
                <StaggerItem key={point.number}>
                  <div className="group relative bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                    {/* Number accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#1A237E] group-hover:bg-[#0D1754] transition-colors duration-300" />

                    <div className="p-5 sm:p-6 pl-6 sm:pl-8">
                      <div className="flex items-start gap-4 sm:gap-5">
                        {/* Number + Icon */}
                        <div className="flex-shrink-0 flex flex-col items-center gap-2">
                          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#1A237E]/[0.06] border border-[#1A237E]/[0.1] flex items-center justify-center group-hover:bg-[#1A237E]/[0.1] transition-colors duration-300">
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#1A237E]" />
                          </div>
                          <span className="text-xs font-bold text-[#1A237E]/60 tracking-wider">
                            {String(point.number).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-semibold text-[#1D1D1F] leading-snug mb-1">
                            {point.title}
                          </h3>
                          {point.subtitle && (
                            <p className="text-xs font-semibold text-[#1A237E]/70 uppercase tracking-wider mb-3">
                              {point.subtitle}
                            </p>
                          )}

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3">
                            <div className="bg-[#F5F5F7] rounded-xl p-3 sm:p-4">
                              <div className="flex items-center gap-2 mb-1.5">
                                <Eye className="w-3.5 h-3.5 text-[#1A237E] flex-shrink-0" />
                                <span className="text-xs font-semibold text-[#1A237E] uppercase tracking-wider">The Check</span>
                              </div>
                              <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
                                {point.theCheck}
                              </p>
                            </div>
                            <div className="bg-[#1A237E]/[0.03] rounded-xl p-3 sm:p-4 border border-[#1A237E]/[0.06]">
                              <div className="flex items-center gap-2 mb-1.5">
                                <Lock className="w-3.5 h-3.5 text-[#1A237E] flex-shrink-0" />
                                <span className="text-xs font-semibold text-[#1A237E] uppercase tracking-wider">The Protection</span>
                              </div>
                              <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
                                {point.theProtection}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Guardian 10 CTA */}
          <AnimatedSection delay={0.3} className="mt-14 md:mt-18 text-center">
            <div className="inline-block bg-[#F5F5F7] rounded-2xl px-8 py-6 sm:px-12 sm:py-8 border border-[rgba(0,0,0,0.06)]">
              <p className="text-[#6E6E73] text-sm mb-5 max-w-md mx-auto leading-relaxed">
                Every Guardian-certified contractor is re-verified every 30 days. If they fall below standard, the Seal is revoked — and you are reassigned to a verified pro.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  onClick={() => navigate('apply')}
                  size="lg"
                  className="bg-[#1A237E] hover:bg-[#0D1754] text-white font-semibold px-8 h-12 text-base rounded-full shadow-[0_2px_16px_rgba(26,35,126,0.2)] hover:shadow-[0_4px_24px_rgba(26,35,126,0.3)] transition-all duration-300 cursor-pointer"
                >
                  Request a Guardian-Vetted Partner
                  <ArrowRight className="size-4 ml-2" />
                </Button>
                <Button
                  onClick={() => navigate('apply')}
                  size="lg"
                  variant="outline"
                  className="border-[#1A237E]/20 text-[#1A237E] hover:bg-[#1A237E]/[0.04] font-semibold px-8 h-12 text-base rounded-full transition-all duration-300 cursor-pointer"
                >
                  Apply for the 10-Point Audit
                  <Wrench className="size-4 ml-2" />
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why It Matters ── */}
      <section className="py-16 md:py-24 bg-[#0D1754]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#C5CAE9] mb-3">
              Why It Matters
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              The Gold Seal Isn&apos;t Just a Badge. It&apos;s a Revenue Multiplier.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 flex-1 max-w-xs w-full">
                <div className="text-4xl sm:text-5xl font-bold text-[#C5CAE9] mb-2">3x</div>
                <p className="text-white/80 text-sm sm:text-base">
                  Higher estimate acceptance rates
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 flex-1 max-w-xs w-full">
                <div className="text-4xl sm:text-5xl font-bold text-[#C5CAE9] mb-2">40%</div>
                <p className="text-white/80 text-sm sm:text-base">
                  Faster deal closing times
                </p>
              </div>
            </div>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Contractors with the Guardian Gold Seal see 3x higher estimate acceptance rates and close deals 40% faster. Combined with NXLBYLDR&trade;&apos;s 8-channel ecosystem — 3 posts/day across Instagram, Facebook, LinkedIn, Yelp, and Google Business Profile, plus full management of Social, Google &amp; Yelp Ads reported every 15 days — trust isn&apos;t optional. It&apos;s the foundation of every deal you close.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Professional Deep Audit: 20-Point Operational Standard ── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Marine Blue base with subtle gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0D1754] to-[#1A237E]" />
        {/* Metallic gold accent glow top-right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#B8860B]/10 rounded-full blur-3xl" />
        {/* Metallic gold accent glow bottom-left */}
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#D4AF37]/8 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 md:mb-14">
            {/* Gold shield badge */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#D4AF37]/40 bg-[#D4AF37]/10 mb-6">
              <Shield className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF37]/80 mb-3">
              For the Professionals
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              The Professional&apos;s Deep Audit
            </h2>
            <p className="text-[#9FA8DA] font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-2">
              For the Pros who move the needle, we go beyond the consumer-facing 10 points.
            </p>
            <p className="text-[#C5CAE9]/70 text-sm max-w-xl mx-auto leading-relaxed">
              We verify an additional 10 operational checkpoints including CEO Strategy Syncs and 8-Channel Content Management — the full machinery behind every Guardian-certified contractor.
            </p>
            {/* Decorative gold divider */}
            <div className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
          </AnimatedSection>

          {/* 20-Point Grid — 2 columns on mobile, 3 on md+ */}
          <StaggerContainer staggerDelay={0.04} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
            {integrityStandard.points.map((point, index) => (
              <StaggerItem key={point.title}>
                <div className="flex items-start gap-3 group">
                  {/* Gold checkmark with number badge */}
                  <div className="flex-shrink-0 mt-0.5 relative">
                    <div className="w-7 h-7 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37]/25 transition-colors duration-300">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    {/* Point number */}
                    <span className="absolute -top-1.5 -right-1.5 text-[9px] font-bold text-[#D4AF37]/70 bg-[#0A1628] rounded-full w-4 h-4 flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-white leading-snug mb-0.5">
                      {point.title}
                    </h4>
                    <p className="text-xs text-[#9FA8DA] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Professional CTA */}
          <AnimatedSection delay={0.35} className="mt-14 md:mt-16 text-center">
            <div className="inline-block bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl px-8 py-6 sm:px-10 sm:py-8">
              <p className="text-[#C5CAE9] text-sm mb-4 max-w-md mx-auto">
                Every Alliance member must pass all 20 operational checkpoints. The consumer sees 10. You earn all 20.
              </p>
              <Button
                onClick={() => navigate('apply')}
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#B8860B] text-[#0A1628] font-bold px-8 h-12 text-base rounded-full shadow-[0_2px_16px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_24px_rgba(212,175,55,0.35)] transition-all duration-300 cursor-pointer"
              >
                Apply for the 10-Point Audit
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Bottom CTA Section ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] mb-4">
              Ready for a Contractor You Can Actually Trust?
            </h2>
            <p className="text-[#6E6E73] text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Start your journey with a Guardian-certified professional. We verify them every 30 days — so you never have to.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                onClick={() => navigate('apply')}
                size="lg"
                className="bg-[#1A237E] hover:bg-[#0D1754] text-white font-semibold px-8 h-12 text-base rounded-full shadow-sm cursor-pointer"
              >
                Request a Guardian-Vetted Partner
                <ArrowRight className="size-4 ml-2" />
              </Button>
              <Button
                onClick={() => navigate('proportal')}
                size="lg"
                variant="outline"
                className="border-[#1A237E]/20 text-[#1A237E] hover:bg-[#1A237E]/[0.04] font-semibold px-8 h-12 text-base rounded-full transition-all duration-300 cursor-pointer"
              >
                Explore the Guardian Path
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
