'use client';

import { useRouter } from '@/lib/router-store';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/cnb/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Phone,
  AlertTriangle,
  Droplets,
  Zap,
  Home,
  Thermometer,
  Shield,
  Clock,
  ChevronRight,
  PhoneCall,
} from 'lucide-react';
import SharedMiniJourney from '@/components/cnb/SharedMiniJourney';

const emergencyTypes = [
  {
    icon: Droplets,
    title: 'Plumbing Emergencies',
    description: 'Burst pipes, major leaks, sewer backups, and water heater failures.',
  },
  {
    icon: Zap,
    title: 'Electrical Emergencies',
    description: 'Power outages, sparking outlets, exposed wiring, and electrical fires.',
  },
  {
    icon: Home,
    title: 'Roofing Emergencies',
    description: 'Roof collapse, major storm damage, and severe leaks threatening interior.',
  },
  {
    icon: Thermometer,
    title: 'HVAC Emergencies',
    description: 'Heating failure in freezing weather, AC failure during extreme heat.',
  },
];

export default function EmergencyPage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-black/[0.08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-[#6E6E73]">
            <button
              onClick={() => navigate('home')}
              className="hover:text-[#1A237E] transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="size-3.5" />
            <span className="text-[#1D1D1F] font-medium">Emergency Help</span>
          </nav>
        </div>
      </div>

      {/* Alert Banner */}
      <section className="bg-[#1D1D1F] py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/15 mb-4">
              <AlertTriangle className="size-5 text-red-500 animate-pulse" />
              <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">
                Need Emergency Help?
              </span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Emergency Home Services
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mt-4 text-lg sm:text-xl text-[#86868B] max-w-2xl mx-auto leading-relaxed">
              When disaster strikes, you need help fast. We prioritize emergency requests to get you connected with a professional immediately.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mini Journey */}
      <SharedMiniJourney type="emergency" />

      {/* Phone Number */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <AnimatedSection>
          <Card className="shadow-sm rounded-2xl border border-black/[0.08] bg-white">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
                <PhoneCall className="size-8 text-red-600" />
              </div>
              <h2 className="text-lg font-semibold text-[#1D1D1F] mb-2">
                Call Now for Immediate Help
              </h2>
              <a
                href="tel:+15629440500"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 hover:text-red-700 transition-colors inline-block"
              >
                +1 (562) 944-0500
              </a>
              <p className="mt-3 text-sm text-[#6E6E73]">
                Available 24/7 for emergency requests
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>
      </section>

      {/* What Counts as Emergency */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <AnimatedSection>
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#1A237E] mb-3">
              Emergency Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F]">
              What Counts as an Emergency?
            </h2>
            <p className="mt-3 text-[#6E6E73] max-w-2xl mx-auto leading-relaxed">
              Some home issues can&apos;t wait. If you&apos;re experiencing any of the following, don&apos;t hesitate to reach out immediately.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <Card className="shadow-sm rounded-2xl border border-black/[0.08] bg-white">
            <CardContent className="p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Droplets, label: 'Burst or leaking pipes causing flooding' },
                  { icon: Zap, label: 'Electrical hazards or sparking outlets' },
                  { icon: AlertTriangle, label: 'Gas leaks or gas smell' },
                  { icon: Home, label: 'Roof collapse or structural damage' },
                  { icon: Thermometer, label: 'HVAC failure during extreme weather' },
                  { icon: Droplets, label: 'Active flooding or water damage' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="size-4 text-red-600" />
                    </div>
                    <span className="text-sm text-[#1D1D1F]">{item.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </section>

      {/* Emergency Service Types Grid */}
      <section className="bg-[#F5F5F7] py-12 sm:py-16 mt-12 sm:mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#1A237E] mb-3">
                Coverage
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F]">
                Emergency Services We Cover
              </h2>
            </div>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyTypes.map((service) => (
              <StaggerItem key={service.title}>
                <Card className="h-full shadow-sm rounded-2xl border border-black/[0.08] bg-white hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                      <service.icon className="size-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#6E6E73] leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full rounded-full border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 cursor-pointer"
                      onClick={() => navigate('contact')}
                    >
                      <Phone className="size-3.5 mr-1.5" />
                      Request Emergency Service
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Big CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <AnimatedSection>
          <div className="bg-[#1D1D1F] rounded-2xl overflow-hidden">
            <CardContent className="p-8 sm:p-10 text-center relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="size-6 text-[#86868B]" />
                <Shield className="size-6 text-[#86868B]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Don&apos;t Wait — Get Help Now
              </h2>
              <p className="text-[#86868B] max-w-xl mx-auto mb-6">
                Every minute counts during a home emergency. Submit your request now and we&apos;ll immediately connect you with a verified emergency professional in your area.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  size="lg"
                  className="bg-[#1A237E] hover:bg-[#1A237E]/90 text-white font-semibold px-8 py-5 text-lg rounded-full cursor-pointer h-auto"
                  onClick={() => navigate('contact')}
                >
                  Request Emergency Service
                  <ChevronRight className="size-5 ml-1" />
                </Button>
                <a
                  href="tel:+15629440500"
                  className="inline-flex items-center justify-center gap-2 px-8 py-5 text-lg font-semibold rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300 h-auto"
                >
                  <Phone className="size-5" />
                  Call +1 (562) 944-0500
                </a>
              </div>
            </CardContent>
          </div>
        </AnimatedSection>
      </section>

      {/* 911 Notice */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <AnimatedSection>
          <div className="bg-[#FFF9F0] border border-[#FFD699] rounded-2xl p-4 sm:p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#1A237E]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertTriangle className="size-5 text-[#1A237E]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#1D1D1F] mb-1">
                For Life-Threatening Emergencies
              </h3>
              <p className="text-sm text-[#6E6E73] leading-relaxed">
                If you or anyone is in immediate danger, experiencing a medical emergency, or if there is an active fire, gas explosion, or electrical fire, please call{' '}
                <span className="font-bold text-[#1D1D1F]">911</span> immediately. CA BYLDRS connects homeowners with service professionals for property-related emergencies — we are not a substitute for emergency services.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
