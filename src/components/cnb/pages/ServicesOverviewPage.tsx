'use client';

import { useRouter } from '@/lib/router-store';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/cnb/AnimatedSection';
import { Button } from '@/components/ui/button';
import {
  FileCheck,
  Shield,
  Award,
  TrendingUp,
  UserCheck,
  Activity,
  ArrowRight,
  Star,
  CheckCircle2,
} from 'lucide-react';
import { integrityStandard } from '@/lib/data';

const benefits = [
  {
    icon: FileCheck,
    title: 'Verified CA License',
    description: 'Your license status is verified and displayed on your profile',
  },
  {
    icon: Shield,
    title: 'Insurance Confirmation',
    description: 'Liability and Workers\' Comp verified monthly',
  },
  {
    icon: Award,
    title: 'Trust Rating',
    description: 'Consumer trust score based on performance metrics',
  },
  {
    icon: TrendingUp,
    title: 'Premium Placement',
    description: 'Priority positioning on all CA BYLDRS platforms',
  },
  {
    icon: UserCheck,
    title: 'Background Checked',
    description: 'Annual background screening for all team members',
  },
  {
    icon: Activity,
    title: 'Monthly Monitoring',
    description: 'Ongoing compliance checks to maintain certification',
  },
];

export default function ServicesOverviewPage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#F5F5F7] pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#1A237E] mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#1A237E] mb-4">
              The Shield
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D1D1F] leading-tight tracking-tight mb-4">
              The BYLDRS Guardian Gold Seal
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-[#1A237E] mb-6">
              The Shield That Commands Trust
            </p>
            <p className="text-lg text-[#6E6E73] max-w-2xl mx-auto leading-relaxed">
              The Guardian Gold Seal is the consumer trust certification that separates you from every other contractor in your market. It signals verified expertise, insurance, and accountability — backed by the NXLBYLDR™ 8-channel ecosystem that delivers Calls, Clicks, and Customers.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#1A237E] mb-3">
                What You Get
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F]">
                Your Gold Seal Includes
              </h2>
            </div>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <StaggerItem key={benefit.title}>
                  <div className="bg-white rounded-2xl border border-black/[0.08] shadow-sm p-6 h-full hover:shadow-md transition-shadow duration-300">
                    <div className="w-12 h-12 rounded-xl bg-[#E8EAF6] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#1A237E]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-[#6E6E73] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 20-Point Integrity Standard */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Marine Blue base with subtle gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0D1754] to-[#1A237E]" />
        {/* Metallic gold accent glow top-right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#B8860B]/10 rounded-full blur-3xl" />
        {/* Metallic gold accent glow bottom-left */}
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#D4AF37]/8 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14 md:mb-16">
            {/* Gold shield badge */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#D4AF37]/40 bg-[#D4AF37]/10 mb-6">
              <Shield className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              {integrityStandard.title}
            </h2>
            <p className="text-[#D4AF37]/90 font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {integrityStandard.subheadline}
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

          {/* CTA */}
          <AnimatedSection delay={0.35} className="mt-14 md:mt-16 text-center">
            <div className="inline-block bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl px-8 py-6 sm:px-10 sm:py-8">
              <p className="text-[#C5CAE9] text-sm mb-4 max-w-md mx-auto">
                Every Alliance member must pass all 20 checkpoints. No exceptions. No shortcuts.
              </p>
              <Button
                onClick={() => navigate('apply')}
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#B8860B] text-[#0A1628] font-bold px-8 h-12 text-base rounded-full shadow-[0_2px_16px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_24px_rgba(212,175,55,0.35)] transition-all duration-300 cursor-pointer"
              >
                Apply for the 20-Point Integrity Audit
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 md:py-24 bg-[#0D1754]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C5CAE9] mb-3">
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
              Contractors with the Guardian Gold Seal see 3x higher estimate acceptance rates and close deals 40% faster. Combined with NXLBYLDR™'s 8-channel ecosystem — 3 posts/day across Instagram, Facebook, LinkedIn, Yelp, and Google Business Profile, plus full management of Social, Google & Yelp Ads reported every 15 days — trust isn't optional. It's the foundation of every deal you close.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] mb-4">
              Earn Your Guardian Gold Seal
            </h2>
            <p className="text-[#6E6E73] text-lg mb-8 max-w-xl mx-auto">
              Start your Phase 1 Performance Audit and let us prove the ROI before you invest. The Gold Seal is included for every Alliance member.
            </p>
            <Button
              onClick={() => navigate('apply')}
              size="lg"
              className="bg-[#1A237E] hover:bg-[#0D1754] text-white font-semibold px-8 h-12 text-base rounded-full shadow-sm cursor-pointer"
            >
              Start Your $500 Performance Audit
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
