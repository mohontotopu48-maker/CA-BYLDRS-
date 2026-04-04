'use client';

import { ArrowLeft, ChevronRight, CheckCircle2, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/cnb/AnimatedSection';
import { useRouter, type PageKey } from '@/lib/router-store';
import { services, counties } from '@/lib/data';

interface CountyServicePageProps {
  countySlug: string;
  serviceSlug: string;
}

export default function CountyServicePage({ countySlug, serviceSlug }: CountyServicePageProps) {
  const { navigate } = useRouter();
  const county = counties.find((c) => c.slug === countySlug);
  const service = services.find((s) => s.slug === serviceSlug);

  if (!county || !service) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1D1D1F] mb-2">Page Not Found</h1>
          <p className="text-[#6E6E73] mb-6">The service or county you're looking for doesn't exist.</p>
          <Button
            onClick={() => navigate('home')}
            className="bg-[#1A237E] hover:bg-[#1A237E]/90 text-white rounded-full px-8 h-12 font-medium"
          >
            <ArrowLeft className="size-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-sm">
            <button onClick={() => navigate('home')} className="text-[#6E6E73] hover:text-[#1A237E] transition-colors">Home</button>
            <ChevronRight className="size-3.5 text-[#86868B]" />
            <button onClick={() => navigate(countySlug as PageKey)} className="text-[#6E6E73] hover:text-[#1A237E] transition-colors">{county.name}</button>
            <ChevronRight className="size-3.5 text-[#86868B]" />
            <span className="text-[#1D1D1F] font-medium">{service.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#F5F5F7] pt-16 pb-16 md:pt-24 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-start gap-6 max-w-4xl">
              <div className="w-16 h-16 rounded-2xl bg-[#1A237E]/10 flex items-center justify-center shrink-0">
                <Icon className="h-8 w-8 text-[#1A237E]" />
              </div>
              <div>
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#1A237E] mb-3">
                  {county.name}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-[#1D1D1F] mb-3">
                  {service.name} in {county.name}
                </h1>
                <p className="text-lg text-[#6E6E73] max-w-2xl">
                  {service.shortDescription} Serving homeowners throughout {county.name}, including {county.cities.slice(0, 4).join(', ')}{county.cities.length > 4 ? ', and more' : ''}.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <AnimatedSection>
                <div className="bg-white rounded-2xl border border-black/[0.08] shadow-sm p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-[#1D1D1F] mb-4">
                    Professional {service.name} in {county.name}
                  </h2>
                  <p className="text-[#6E6E73] leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 p-4 bg-[#F5F5F7] rounded-xl">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-[#1A237E] shrink-0 mt-0.5" />
                      <p className="text-sm text-[#1D1D1F]">
                        Our verified {service.name.toLowerCase()} professionals serve all areas of {county.name}, including{' '}
                        {county.cities.join(', ')}.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="mb-6">
                  <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#1A237E] mb-3">
                    Included
                  </span>
                  <h2 className="text-2xl font-bold text-[#1D1D1F]">What&apos;s Included</h2>
                </div>
                <StaggerContainer className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <StaggerItem key={feature}>
                      <div className="flex items-start gap-3 bg-white rounded-xl border border-black/[0.08] shadow-sm p-4">
                        <CheckCircle2 className="h-5 w-5 text-[#1A237E] shrink-0 mt-0.5" />
                        <span className="text-sm text-[#1D1D1F]">{feature}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="mb-6">
                  <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#1A237E] mb-3">
                    FAQ
                  </span>
                  <h2 className="text-2xl font-bold text-[#1D1D1F]">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-4">
                  {service.faqs.map((faq) => (
                    <div key={faq.q} className="bg-white rounded-xl border border-black/[0.08] shadow-sm p-6">
                      <h3 className="font-semibold text-[#1D1D1F] mb-2">{faq.q}</h3>
                      <p className="text-sm text-[#6E6E73]">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AnimatedSection direction="right">
                <div className="bg-white rounded-2xl border border-black/[0.08] shadow-sm p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-[#1D1D1F] mb-2">
                    Need {service.name} in {county.name}?
                  </h3>
                  <p className="text-[#6E6E73] text-sm mb-6">
                    Get connected with a verified {service.name.toLowerCase()} professional in {county.name} today.
                  </p>
                  <Button
                    onClick={() => navigate('contact')}
                    className="w-full bg-[#1A237E] hover:bg-[#1A237E]/90 text-white rounded-full font-semibold h-12"
                    size="lg"
                  >
                    Request Service
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                  <Button
                    onClick={() => navigate('emergency')}
                    variant="outline"
                    className="w-full mt-3 rounded-full border-black/[0.08] text-[#1D1D1F] hover:bg-[#F5F5F7] h-12"
                    size="lg"
                  >
                    Emergency Help
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.1}>
                <div className="bg-white rounded-2xl border border-black/[0.08] shadow-sm p-6">
                  <h4 className="font-semibold text-[#1D1D1F] mb-4">Areas We Serve in {county.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {county.cities.map((city) => (
                      <span
                        key={city}
                        className="px-3 py-1.5 bg-[#F5F5F7] text-[#6E6E73] rounded-lg text-xs font-medium border border-black/[0.08]"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.2}>
                <div className="bg-white rounded-2xl border border-black/[0.08] shadow-sm p-6">
                  <h4 className="font-semibold text-[#1D1D1F] mb-4">Other Services in {county.name}</h4>
                  <div className="space-y-2">
                    {services
                      .filter((s) => s.slug !== serviceSlug)
                      .map((s) => (
                        <button
                          key={s.slug}
                          onClick={() => navigate(`county/${countySlug}/service/${s.slug}`)}
                          className="w-full text-left flex items-center gap-3 p-2 rounded-lg hover:bg-[#F5F5F7] transition-colors group"
                        >
                          <s.icon className="h-4 w-4 text-[#1A237E]" />
                          <span className="text-sm text-[#1D1D1F] flex-1">{s.name}</span>
                          <ChevronRight className="h-3 w-3 text-[#86868B] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#F5F5F7] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-[#6E6E73] text-lg mb-8">
              Request {service.name} service in {county.name} and get connected with a verified professional today.
            </p>
            <Button
              onClick={() => navigate('contact')}
              size="lg"
              className="bg-[#1A237E] hover:bg-[#1A237E]/90 text-white rounded-full px-8 h-12 font-semibold shadow-sm"
            >
              Request Service Now
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
