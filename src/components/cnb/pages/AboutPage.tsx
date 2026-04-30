'use client';

import { useRouter } from '@/lib/router-store';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/cnb/AnimatedSection';
import { Button } from '@/components/ui/button';
import {
  MapPin,
  Filter,
  Megaphone,
  Users,
  BarChart3,
  Video,
  ArrowRight,
  HardHat,
  Award,
} from 'lucide-react';

const differentiators = [
  {
    icon: MapPin,
    title: 'Exclusive Territories',
    description:
      'Your service area is protected. No other Alliance member competes in your zone.',
  },
  {
    icon: Filter,
    title: 'Semi-Exclusive Leads',
    description:
      'Every lead goes to 1-3 contractors max — not 5+ like the lead farms.',
  },
  {
    icon: Megaphone,
    title: 'Done-For-You Marketing',
    description:
      'We handle your entire 8-channel marketing engine — ads, content (3 posts/day), follow-ups, and social dominance across Instagram, Facebook, LinkedIn, Yelp, and Google Business Profile.',
  },
  {
    icon: Users,
    title: 'Community of Elite Pros',
    description:
      'A private network of vetted, high-performing contractors.',
  },
  {
    icon: BarChart3,
    title: 'Monthly Strategy Sessions',
    description:
      '30-60 minute deep-dives with our CSO to review the NXLBYLDR™ Task Log, Speed-to-Lead data, and ROI Calibration Report.',
  },
  {
    icon: Video,
    title: 'Personal Brand Development',
    description:
      'Professional video production that makes you the authority.',
  },
];

const trades = ['Roofing', 'Plumbing', 'HVAC', 'Electrical'];

export default function AboutPage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#F5F5F7] pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#1A237E] mb-4">
              The Alliance
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D1D1F] leading-tight tracking-tight mb-4">
              The CA BYLDRS Elite Alliance
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-[#1A237E] mb-6">
              The B2B Unified Referral Network
            </p>
            <p className="text-lg text-[#6E6E73] max-w-2xl mx-auto leading-relaxed">
              NXLBYLDR™ scales businesses using an exclusive 8-channel ecosystem to deliver more Calls, Clicks, and Customers. The Elite B2B Unified Referral Network connecting licensed contractors with high-intent, exclusive leads across Orange County and Los Angeles County.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#1A237E] mb-3">
                Why the Alliance
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F]">
                What Sets Us Apart
              </h2>
            </div>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <div className="bg-white rounded-2xl border border-black/[0.08] shadow-sm p-6 h-full hover:shadow-md transition-shadow duration-300">
                    <div className="w-12 h-12 rounded-xl bg-[#E8EAF6] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#1A237E]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#6E6E73] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 md:py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#1A237E] mb-3">
                Who We Serve
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] mb-4">
                Built for Elite Contractors
              </h2>
              <p className="text-lg text-[#6E6E73] max-w-2xl mx-auto">
                Roofing, Plumbing, HVAC, and Electrical contractors who are licensed in California, insured, and ready to grow.
              </p>
            </div>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {trades.map((trade) => (
              <StaggerItem key={trade}>
                <div className="bg-white rounded-2xl border border-black/[0.08] shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#E8EAF6] flex items-center justify-center mx-auto mb-3">
                    <HardHat className="w-6 h-6 text-[#1A237E]" />
                  </div>
                  <span className="text-sm font-semibold text-[#1D1D1F]">
                    {trade}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Meet Your Contractor Before the First Call — Authority Branding */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#1A237E] mb-3">
              Personal Authority Branding
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D1D1F] leading-tight tracking-tight mb-4">
              We Don't Just Send Leads. We Create Authorities.
            </h2>
            <p className="text-lg text-[#6E6E73] max-w-2xl mx-auto leading-relaxed">
              The number one fear for homeowners is the &apos;Stranger Danger.&apos; Homeowners are terrified of who they are letting into their space — their most personal investment.
            </p>
          </AnimatedSection>

          {/* Solution + How We Help cards */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            <StaggerItem>
              <div className="bg-[#1A237E] rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-white/70">
                    The CA BYLDRS Solution
                  </span>
                </div>
                <p className="text-base text-white/90 leading-relaxed">
                  We produce a high-impact, Guardian Authority Video for your public profile. This short, high-quality video introduces the contractor, their story, their &apos;Why,&apos; and their core expertise before they even ring the doorbell. Homeowners choose the human they trust — not just the low-ball estimate.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#F5F5F7] rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E8EAF6] flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#1A237E]" />
                  </div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#1A237E]">
                    How We Help
                  </span>
                </div>
                <p className="text-base text-[#6E6E73] leading-relaxed">
                  As part of the Alpha Trial, our production team directs, films, and edits your Guardian Authority Video to maximize trust and authority. You aren&apos;t just another contractor — you&apos;re the Neighborhood Expert.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Stats row */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <StaggerItem>
              <div className="bg-white rounded-2xl border border-black/[0.08] shadow-sm p-6 text-center">
                <p className="text-lg font-bold text-[#1D1D1F]">3 Weeks to Authority</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white rounded-2xl border border-black/[0.08] shadow-sm p-6 text-center">
                <p className="text-lg font-bold text-[#1D1D1F]">Professional Production</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white rounded-2xl border border-black/[0.08] shadow-sm p-6 text-center">
                <p className="text-lg font-bold text-[#1D1D1F]">Profile + Social + Web</p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* CTA */}
          <AnimatedSection className="text-center">
            <Button
              onClick={() => navigate('apply')}
              size="lg"
              className="bg-[#1A237E] hover:bg-[#0D1754] text-white font-semibold px-8 h-12 text-base rounded-full shadow-sm cursor-pointer"
            >
              Start Your $500 Audit
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#1A237E] mb-3">
                Coverage
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F]">
                Our Service Territory
              </h2>
            </div>
          </AnimatedSection>
          <StaggerContainer className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="bg-[#E8EAF6] rounded-2xl p-8 text-center flex-1 max-w-sm w-full">
              <MapPin className="w-8 h-8 text-[#1A237E] mx-auto mb-3" />
              <h3 className="text-xl font-bold text-[#1D1D1F] mb-1">
                Orange County
              </h3>
              <p className="text-sm text-[#6E6E73]">
                Full county coverage with exclusive territory protection
              </p>
            </div>
            <div className="bg-[#E8EAF6] rounded-2xl p-8 text-center flex-1 max-w-sm w-full">
              <MapPin className="w-8 h-8 text-[#1A237E] mx-auto mb-3" />
              <h3 className="text-xl font-bold text-[#1D1D1F] mb-1">
                Los Angeles County
              </h3>
              <p className="text-sm text-[#6E6E73]">
                Full county coverage with exclusive territory protection
              </p>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F5F5F7] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] mb-4">
              Ready to Join the Elite Alliance?
            </h2>
            <p className="text-[#6E6E73] text-lg mb-8 max-w-xl mx-auto">
              Limited spots available in each territory. What if your entire marketing operation cost less than your daily coffee runs? Start your $500 Audit today.
            </p>
            <Button
              onClick={() => navigate('apply')}
              size="lg"
              className="bg-[#1A237E] hover:bg-[#0D1754] text-white font-semibold px-8 h-12 text-base rounded-full shadow-sm cursor-pointer"
            >
              Start Your $500 Audit
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
