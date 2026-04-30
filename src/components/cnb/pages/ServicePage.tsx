'use client';

import { useRouter } from '@/lib/router-store';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/cnb/AnimatedSection';
import { Button } from '@/components/ui/button';
import {
  Zap,
  Bot,
  BarChart3,
  Star,
  Calendar,
  CheckSquare,
  ArrowRight,
  Target,
  Filter,
  Handshake,
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Lead Routing',
    description: 'Leads routed to you within 60 seconds of capture',
  },
  {
    icon: Bot,
    title: 'AI Follow-Up Engine',
    description: 'Automated texts, emails, and voicemails that book appointments',
  },
  {
    icon: BarChart3,
    title: 'Pipeline Dashboard',
    description: 'Real-time visibility into every lead, deal, and dollar',
  },
  {
    icon: Star,
    title: 'Review Automation',
    description: 'Automatic review requests after every completed job',
  },
  {
    icon: Calendar,
    title: 'Calendar Sync',
    description: 'Online booking that syncs with your existing calendar',
  },
  {
    icon: CheckSquare,
    title: 'Task Management',
    description: 'AI-generated daily task lists for you and your team',
  },
];

const steps = [
  {
    number: '01',
    icon: Target,
    title: 'BRAND IT',
    description:
      'Branded video production and the BYLDRS Guardian Gold Seal to build homeowner trust before you arrive.',
  },
  {
    number: '02',
    icon: Filter,
    title: 'BUILD IT',
    description:
      'Deploying the NXLBYLDR™ Operating System with an AI-optimized tracking website and automated sales engine.',
  },
  {
    number: '03',
    icon: Handshake,
    title: 'SELL IT',
    description:
      'Managing ads and social dominance across 8 channels to get the phone to ring and keep it ringing.',
  },
];

export default function ServicePage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#F5F5F7] pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#1A237E] mb-4">
              The Engine
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D1D1F] leading-tight tracking-tight mb-4">
              The Engine Behind Your Growth
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A237E] mb-6">
              NXLBYLDR™ OS
            </p>
            <p className="text-lg text-[#6E6E73] max-w-2xl mx-auto leading-relaxed">
              NXLBYLDR™ scales businesses using an exclusive 8-channel ecosystem to deliver more Calls, Clicks, and Customers. A GoHighLevel-powered operating system that automates lead capture, follow-up, pipeline management, reputation, and social dominance — all from one dashboard.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#1A237E] mb-3">
                Features
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F]">
                Everything You Need to Dominate
              </h2>
            </div>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <StaggerItem key={feature.title}>
                  <div className="bg-white rounded-2xl border border-black/[0.08] shadow-sm p-6 h-full hover:shadow-md transition-shadow duration-300">
                    <div className="w-12 h-12 rounded-xl bg-[#E8EAF6] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#1A237E]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#6E6E73] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#1A237E] mb-3">
                Process
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F]">
                How It Works
              </h2>
            </div>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.number}>
                  <div className="bg-white rounded-2xl border border-black/[0.08] shadow-sm p-6 sm:p-8 text-center h-full">
                    <div className="w-14 h-14 rounded-full bg-[#1A237E] flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="inline-block text-xs font-bold tracking-widest text-[#5C6BC0] mb-2">
                      STEP {step.number}
                    </span>
                    <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#6E6E73] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] mb-4">
              Ready to Brand It. Build It. Sell It?
            </h2>
            <p className="text-[#6E6E73] text-lg mb-8 max-w-xl mx-auto">
              Join the Phase 1 Performance Audit and watch NXLBYLDR™ transform your Calls, Clicks, and Customers. We prove the ROI before you commit.
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
