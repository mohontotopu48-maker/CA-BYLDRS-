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
  XCircle,
  Video,
  Sparkles,
} from 'lucide-react';
import { guardianTenPoints, integrityStandard } from '@/lib/data';

export default function ServicesOverviewPage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-[#0F1A2E]">
      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION — The Guardian 20-Point Integrity Standard
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            {/* BYLDRS Guardian G Shield */}
            <div className="inline-flex flex-col items-center mb-6">
              <div className="relative">
                <img
                  src="/logo-mark-excellence.png"
                  alt="BYLDRS Guardian G Shield"
                  width={120}
                  height={120}
                  className="h-24 sm:h-28 md:h-32 w-auto object-contain"
                />
                {/* "Verified" badge */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[8px] font-bold text-[#0A1628] tracking-wider uppercase whitespace-nowrap">
                  Mark of Excellence
                </div>
              </div>
            </div>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#5EB6F0] mb-4">
              The Shield
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F0F4F8] leading-tight tracking-tight mb-6">
              The BYLDRS Guardian&trade;
              <span className="block mt-2 text-[#5EB6F0]">
                20-Point Integrity Standard
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-[#5EB6F0] mb-6">
              We Audit the Professional so You Don&apos;t Have to Gamble on the Project.
            </p>
            <p className="text-base sm:text-lg text-[#B0C4DE] max-w-2xl mx-auto leading-relaxed mb-6">
              Every Guardian-certified contractor passes our 10-point consumer trust verification — checked every 30 days. No exceptions. No shortcuts. Because your home deserves more than a coin flip.
            </p>

            {/* Guardian Seal Promise */}
            <div className="inline-flex items-start gap-3 bg-[#D4AF37]/[0.06] border border-[#D4AF37]/[0.15] rounded-2xl px-5 sm:px-7 py-4 max-w-2xl text-left">
              <Shield className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#B0C4DE] leading-relaxed">
                <span className="font-semibold text-[#F0F4F8]">The Guardian Seal is earned, not bought.</span> Our 20-point rigorous audit ensures that every partner is Licensed, Insured, and Ethically Aligned with Southern California building standards.
              </p>
            </div>

            {/* ── Quick Stats ── */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[#5EB6F0]">30</p>
                <p className="text-xs sm:text-sm text-[#B0C4DE] font-medium mt-1">Day Re-Verification</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[#5EB6F0]">10</p>
                <p className="text-xs sm:text-sm text-[#B0C4DE] font-medium mt-1">Protection Points</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[#5EB6F0]">0</p>
                <p className="text-xs sm:text-sm text-[#B0C4DE] font-medium mt-1">Unverified Contractors</p>
              </div>
              <div className="text-center col-span-2 md:col-span-1">
                <p className="text-3xl sm:text-4xl font-bold text-[#C62828]">34%</p>
                <p className="text-xs sm:text-sm text-[#B0C4DE] font-medium mt-1">Applicants Fail Audit</p>
              </div>
            </div>

            {/* Failure Rate Callout */}
            <AnimatedSection delay={0.15}>
              <div className="mt-8 inline-flex items-start gap-3 bg-[#C62828]/[0.04] border border-[#C62828]/[0.12] rounded-2xl px-5 sm:px-7 py-4 max-w-2xl mx-auto text-left">
                <XCircle className="w-5 h-5 text-[#C62828] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[#B0C4DE] leading-relaxed">
                  <span className="font-semibold text-[#F0F4F8]">Audit Rigor:</span> 34% of applicants fail our initial 20-Point Deep-Dive. We only keep the elite pros, so you don&apos;t have to guess.
                </p>
              </div>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THE GUARDIAN 10 — The Hero of the Page
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#0F1A2E]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14 md:mb-18">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#5EB6F0] mb-3">
              Your Protection Charter
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F0F4F8] tracking-tight">
              10 Ways We Protect Your Investment
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#B0C4DE] max-w-2xl mx-auto leading-relaxed">
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
                  <div className="group relative bg-[#16253D] rounded-2xl border border-[rgba(94,182,240,0.1)] hover:border-[rgba(94,182,240,0.2)] transition-all duration-300 overflow-hidden">
                    {/* Number accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#5EB6F0] group-hover:bg-[#4AA3E0] transition-colors duration-300" />

                    <div className="p-5 sm:p-6 pl-6 sm:pl-8">
                      <div className="flex items-start gap-4 sm:gap-5">
                        {/* Number + Icon */}
                        <div className="flex-shrink-0 flex flex-col items-center gap-2">
                          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#5EB6F0]/[0.06] border border-[#5EB6F0]/[0.1] flex items-center justify-center group-hover:bg-[#5EB6F0]/[0.1] transition-colors duration-300">
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#5EB6F0]" />
                          </div>
                          <span className="text-xs font-bold text-[#5EB6F0]/60 tracking-wider">
                            {String(point.number).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-semibold text-[#F0F4F8] leading-snug mb-1">
                            {point.title}
                          </h3>
                          {point.subtitle && (
                            <p className="text-xs font-semibold text-[#5EB6F0]/70 uppercase tracking-wider mb-3">
                              {point.subtitle}
                            </p>
                          )}

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3">
                            {/* The Check */}
                            <div className="bg-[#0D1754] rounded-xl p-3 sm:p-4">
                              <div className="flex items-center gap-2 mb-1.5">
                                <Eye className="w-3.5 h-3.5 text-[#5EB6F0] flex-shrink-0" />
                                <span className="text-xs font-semibold text-[#5EB6F0] uppercase tracking-wider">The Check</span>
                              </div>
                              <p className="text-xs sm:text-sm text-[#B0C4DE] leading-relaxed">
                                {point.theCheck}
                              </p>
                            </div>
                            {/* The Protection */}
                            <div className="rounded-xl p-3 sm:p-4 bg-[#1A237E] border border-[#1A237E]">
                              <div className="flex items-center gap-2 mb-1.5">
                                <Lock className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">The Protection</span>
                              </div>
                              <p className="text-xs sm:text-sm text-white font-semibold leading-relaxed">
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
            <div className="inline-block bg-[#0D1754] rounded-2xl px-8 py-6 sm:px-12 sm:py-8 border border-[rgba(94,182,240,0.1)]">
              <p className="text-[#B0C4DE] text-sm mb-5 max-w-md mx-auto leading-relaxed">
                Every Guardian-certified contractor is re-verified every 30 days. If they fall below standard, the Seal is revoked — and you are reassigned to a verified pro.
              </p>
              <Button
                onClick={() => navigate('apply')}
                size="lg"
                className="bg-[#5EB6F0] hover:bg-[#4AA3E0] text-[#0F1A2E] font-semibold px-8 h-12 text-base rounded-full transition-all duration-300 cursor-pointer"
              >
                Start Your $500 Audit
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          GUARDIAN VS. THE OTHER GUYS — Trust Comparison
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#0D1754]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10 md:mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#5EB6F0] mb-3">
              The Trust Gap
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F0F4F8] tracking-tight">
              The Guardian vs. The Other Guys
            </h2>
          </AnimatedSection>

          <StaggerContainer
            staggerDelay={0.15}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Lead Farms Card */}
            <StaggerItem>
              <div className="bg-[#16253D] rounded-2xl border border-[rgba(198,40,40,0.2)] p-6 sm:p-8 h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#C62828]" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#C62828]/[0.08] flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-[#C62828]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#C62828] uppercase tracking-wider">The Status Quo</p>
                    <h3 className="text-lg font-bold text-[#F0F4F8]">The Big Lead Farms</h3>
                  </div>
                </div>
                <p className="text-sm text-[#B0C4DE] mb-5 font-medium">
                  Angi, Yelp, HomeAdvisor, Thumbtack — the platforms that sell your information to anyone willing to pay.
                </p>
                <ul className="space-y-3">
                  {[
                    'Vetted once a year (at best)',
                    'Your info sold to 5+ contractors',
                    'Zero accountability once work starts',
                    'No production tracking or transparency',
                    'No financial protection for homeowners',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-[#C62828] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#B0C4DE]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            {/* Guardian Card */}
            <StaggerItem>
              <div className="bg-[#16253D] rounded-2xl border border-[rgba(94,182,240,0.2)] p-6 sm:p-8 h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#5EB6F0]" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#5EB6F0]/[0.08] flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#5EB6F0]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#5EB6F0] uppercase tracking-wider">The Standard</p>
                    <h3 className="text-lg font-bold text-[#F0F4F8]">The BYLDRS Guardian</h3>
                  </div>
                </div>
                <p className="text-sm text-[#B0C4DE] mb-5 font-medium">
                  The only contractor network that re-verifies every partner every 30 days — and answers to a Board of Ethics.
                </p>
                <ul className="space-y-3">
                  {[
                    'Real-time 30-day re-verification',
                    'Exclusive partnerships (no shared leads)',
                    '24-hour transparency guarantee',
                    'Direct accountability to our Board of Ethics',
                    'Full financial & legal protection built in',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#5EB6F0] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#F0F4F8] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHY IT MATTERS — Revenue Multiplier Stats
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#0D1754]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#5EB6F0] mb-3">
              Why It Matters
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F0F4F8] mb-6">
              The Gold Seal Isn&apos;t Just a Badge. It&apos;s a Revenue Multiplier.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 flex-1 max-w-xs w-full">
                <div className="text-4xl sm:text-5xl font-bold text-[#5EB6F0] mb-2">3x</div>
                <p className="text-white/80 text-sm sm:text-base">
                  Higher estimate acceptance rates
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 flex-1 max-w-xs w-full">
                <div className="text-4xl sm:text-5xl font-bold text-[#5EB6F0] mb-2">40%</div>
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

      {/* ═══════════════════════════════════════════════════════════════
          BEHIND THE SEAL — 20-Point Operational Deep-Dive
          ═══════════════════════════════════════════════════════════════ */}
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F0F4F8] tracking-tight leading-tight mb-4">
              Behind the Seal: Our 20-Point Operational Deep-Dive
            </h2>
            <p className="text-[#B0C4DE] font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              While you see 10 layers of consumer protection, we audit 20. We verify the business health, CEO leadership, and digital infrastructure of every partner to ensure they have the staying power to back their warranties for years to come.
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
                    <h4 className="text-sm font-semibold text-[#F0F4F8] leading-snug mb-0.5">
                      {point.title}
                    </h4>
                    <p className="text-xs text-[#B0C4DE] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* ── Value-Add Bonus: Authority Branding Video ── */}
          {integrityStandard.valueAdd && (
            <AnimatedSection delay={0.3} className="mt-10">
              <div className="relative bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/10 to-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37] text-[#0A1628] text-[10px] font-bold tracking-widest uppercase">
                    <Sparkles className="w-3 h-3" />
                    Value-Add Bonus
                  </span>
                </div>
                <div className="flex items-start gap-4 mt-2">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0">
                    <Video className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#F0F4F8] mb-1.5">
                      {integrityStandard.valueAdd.title}
                    </h4>
                    <p className="text-sm text-[#B0C4DE] leading-relaxed">
                      {integrityStandard.valueAdd.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Professional CTA */}
          <AnimatedSection delay={0.35} className="mt-14 md:mt-16 text-center">
            <div className="inline-block bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl px-8 py-6 sm:px-10 sm:py-8">
              <p className="text-[#B0C4DE] text-sm mb-4 max-w-md mx-auto">
                Every Alliance member must pass all 20 operational checkpoints. The consumer sees 10. You earn all 20.
              </p>
              <Button
                onClick={() => navigate('apply')}
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#B8860B] text-[#0A1628] font-bold px-8 h-12 text-base rounded-full transition-all duration-300 cursor-pointer"
              >
                Start Your $500 Audit
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          BOTTOM CTA — Homeowner-Focused
          ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0F1A2E] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F0F4F8] mb-4">
              Ready for a Contractor You Can Actually Trust?
            </h2>
            <p className="text-[#B0C4DE] text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Start your journey with a Guardian-certified professional. We verify them every 30 days — so you never have to.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                onClick={() => navigate('apply')}
                size="lg"
                className="bg-[#5EB6F0] hover:bg-[#4AA3E0] text-[#0F1A2E] font-semibold px-8 h-12 text-base rounded-full transition-all duration-300 cursor-pointer"
              >
                Start Your $500 Audit
                <ArrowRight className="size-4 ml-2" />
              </Button>
              <Button
                onClick={() => navigate('proportal')}
                size="lg"
                variant="outline"
                className="border-[#5EB6F0]/20 text-[#5EB6F0] hover:bg-[#5EB6F0]/[0.04] font-semibold px-8 h-12 text-base rounded-full transition-all duration-300 cursor-pointer"
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
