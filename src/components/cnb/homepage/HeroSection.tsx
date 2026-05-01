'use client';

import { Shield, Award, ChevronRight, FileCheck, Sparkles, Lock } from 'lucide-react';
import { useRouter } from '@/lib/router-store';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/cnb/AnimatedSection';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const { navigate } = useRouter();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          {/* Logo */}
          <AnimatedSection delay={0}>
            <div className="inline-flex items-center justify-center mb-8">
              <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 bg-[#16253D]">
                <img
                  src="/logo-white-hero.png"
                  alt="CA BYLDRS - Contractor Recruitment & Strategic Growth Engine"
                  width={256}
                  height={256}
                  className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto object-contain"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Headline — Triple-Punch Stacked */}
          <AnimatedSection delay={0.1}>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#B0C4DE] mb-4">
              The End of the Lead Gen Lottery.
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F0F4F8] leading-tight tracking-tight">
              Stop Buying Leads.
              <span className="block mt-2 sm:mt-3">
                Stop Guessing.
              </span>
              <span
                className="block mt-2 sm:mt-3"
                style={{
                  background: 'linear-gradient(90deg, #20FBD3, #1D7AFC)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Start Owning Your Market.
              </span>
            </h1>
          </AnimatedSection>

          {/* Sub-headline */}
          <AnimatedSection delay={0.25}>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#B0C4DE] max-w-3xl mx-auto leading-relaxed">
              Most contractors buy leads. CA BYLDRS members own the market. Start your $500 Audit today to begin your journey toward Guardian Certification. We build your Personal Brand, automate your Sales Engine, and grant you the BYLDRS Guardian Gold Seal to justify premium margins and close deals faster.
            </p>
          </AnimatedSection>

          {/* Elite Market Exclusivity Callout */}
          <AnimatedSection delay={0.3}>
            <div className="mt-6 max-w-2xl mx-auto">
              <div className="inline-flex items-start gap-3 bg-[#16253D] border rounded-2xl px-5 sm:px-7 py-4 text-left" style={{ borderColor: 'rgba(94,182,240,0.15)' }}>
                <Shield className="w-5 h-5 text-[#5EB6F0] flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-[#B0C4DE] leading-relaxed">
                  <span className="font-semibold text-[#F0F4F8]">In the Southern California market,</span> homeowners aren&apos;t just looking for a contractor — they are looking for a <span className="font-semibold text-[#5EB6F0]">Guardian</span>. If you aren&apos;t on the vetted list, you are invisible to the elite homeowner.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* No-Contract Promise Badges */}
          <AnimatedSection delay={0.35}>
            <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5EB6F0]">
                <Lock className="w-3.5 h-3.5" />
                No Long-Term Contracts
              </span>
              <span className="w-1 h-1 rounded-full bg-[#5EB6F0]/40" />
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5EB6F0]">
                <FileCheck className="w-3.5 h-3.5" />
                No Hidden Fees
              </span>
              <span className="w-1 h-1 rounded-full bg-[#5EB6F0]/40" />
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5EB6F0]">
                <Sparkles className="w-3.5 h-3.5" />
                Performance-Driven Growth
              </span>
            </div>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection delay={0.45}>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button
                size="lg"
                className="bg-[#5EB6F0] hover:bg-[#4AA3E0] text-[#0F1A2E] font-semibold px-8 py-4 text-base sm:text-lg rounded-full shadow-[0_2px_16px_rgba(94,182,240,0.25)] hover:shadow-[0_4px_24px_rgba(94,182,240,0.35)] transition-all duration-300 cursor-pointer h-auto"
                onClick={() => navigate('apply')}
              >
                Start Your $500 Audit
                <ChevronRight className="size-5 ml-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border border-[#5EB6F0]/30 text-[#F0F4F8] bg-transparent hover:bg-[#5EB6F0]/10 hover:border-[#5EB6F0]/50 font-semibold px-8 py-4 text-base sm:text-lg rounded-full transition-all duration-300 cursor-pointer h-auto"
                onClick={() => navigate('proportal')}
              >
                Explore the Guardian Path
              </Button>
            </div>
          </AnimatedSection>

          {/* Trust Badges */}
          <StaggerContainer
            className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto"
            staggerDelay={0.12}
          >
            <StaggerItem>
              <div className="apple-card-flat px-4 py-4 sm:px-6 sm:py-5 flex items-center justify-center gap-3 bg-[#16253D] border" style={{ borderColor: 'rgba(94,182,240,0.1)' }}>
                <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#5EB6F0]/10 flex items-center justify-center">
                  <Shield className="size-5 text-[#5EB6F0]" />
                </div>
                <div className="text-left">
                  <p className="text-sm sm:text-base font-semibold text-[#F0F4F8]">Exclusive Territories</p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="apple-card-flat px-4 py-4 sm:px-6 sm:py-5 flex items-center justify-center gap-3 bg-[#16253D] border" style={{ borderColor: 'rgba(94,182,240,0.1)' }}>
                <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#5EB6F0]/10 flex items-center justify-center">
                  <Shield className="size-5 text-[#5EB6F0]" />
                </div>
                <div className="text-left">
                  <p className="text-sm sm:text-base font-semibold text-[#F0F4F8]">Zero Shared Leads</p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="apple-card-flat px-4 py-4 sm:px-6 sm:py-5 flex items-center justify-center gap-3 bg-[#16253D] border" style={{ borderColor: 'rgba(94,182,240,0.1)' }}>
                <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#5EB6F0]/10 flex items-center justify-center">
                  <Award className="size-5 text-[#5EB6F0]" />
                </div>
                <div className="text-left">
                  <p className="text-sm sm:text-base font-semibold text-[#F0F4F8]">Guardian Gold Seal</p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
