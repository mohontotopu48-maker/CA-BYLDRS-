'use client';

import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from '@/components/cnb/AnimatedSection';
import { ClipboardCheck, Video, Rocket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from '@/lib/router-store';

const steps = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Audit',
    description:
      'We perform a deep-dive 20-point integrity check on your business operations — licenses, insurance, financial health, reputation, and more. Only the elite pass.',
    accent: '#1A237E',
    bgAccent: '#E8EAF6',
  },
  {
    number: '02',
    icon: Video,
    title: 'Authority',
    description:
      'We film your personal branding video and deploy your custom NXLBYLDR™ sales portal. Homeowners meet you before the first call — you\'re the Authority, not a stranger.',
    accent: '#D4AF37',
    bgAccent: '#FFF8E1',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Dominate',
    description:
      'You lead the market with the Guardian Seal and our automated 8-channel content engine. Exclusive territory. Premium margins. Zero competition.',
    accent: '#1A237E',
    bgAccent: '#E8EAF6',
  },
];

export default function HowItWorks() {
  const { navigate } = useRouter();

  return (
    <section className="py-20 md:py-28 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="mb-14 md:mb-18 text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#1A237E] mb-3">
            The Guardian Path
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1D1F] mb-4 tracking-tight">
            Your Elite Three-Step Roadmap
          </h2>
          <p className="text-[#6E6E73] text-lg md:text-xl leading-relaxed">
            From audit to authority to market dominance — every step is engineered to make you the
            only logical choice for Southern California homeowners.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative"
          staggerDelay={0.15}
        >
          {/* Connecting line between steps (visible on md+) */}
          <div className="hidden md:block absolute top-20 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5">
            <div className="w-full h-full border-t-2 border-dashed border-[#C5CAE9]" />
          </div>

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.number}>
                <div className="relative bg-white rounded-2xl p-6 md:p-8 border border-black/[0.08] shadow-sm h-full hover:shadow-md transition-shadow duration-300">
                  {/* Number + Icon */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: step.bgAccent }}
                    >
                      <Icon className="w-6 h-6" style={{ color: step.accent }} />
                    </div>
                    <div>
                      <span
                        className="text-xs font-mono font-bold tracking-wider"
                        style={{ color: step.accent + '60' }}
                      >
                        STEP {step.number}
                      </span>
                      <h3 className="text-xl font-bold text-[#1D1D1F] leading-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-[#6E6E73] leading-relaxed">
                    {step.description}
                  </p>

                  {/* Top accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                    style={{ backgroundColor: step.accent }}
                  />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedSection delay={0.4} className="mt-14 md:mt-18 text-center">
          <Button
            onClick={() => navigate('apply')}
            size="lg"
            className="bg-[#1A237E] hover:bg-[#0D1754] text-white font-semibold px-8 h-12 text-base rounded-full shadow-[0_2px_16px_rgba(26,35,126,0.2)] hover:shadow-[0_4px_24px_rgba(26,35,126,0.3)] transition-all duration-300 cursor-pointer"
          >
            Start With Step 1 — Your $500 Audit
            <ArrowRight className="size-4 ml-2" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
