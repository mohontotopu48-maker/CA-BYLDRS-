'use client';

import { counties, countyServices, services } from '@/lib/data';
import { useRouter } from '@/lib/router-store';
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from '@/components/cnb/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, MapPin, ArrowLeft, Building2 } from 'lucide-react';
import type { PageKey } from '@/lib/router-store';
import SharedMiniJourney from '@/components/cnb/SharedMiniJourney';

interface CountyPageProps {
  slug: string;
}

export default function CountyPage({ slug }: CountyPageProps) {
  const { navigate } = useRouter();
  const county = counties.find((c) => c.slug === slug);

  if (!county) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-white">
        <AnimatedSection direction="up">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 rounded-full bg-[#F5F5F7] flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🗺️</span>
            </div>
            <h1 className="text-3xl font-bold text-[#1D1D1F] mb-3">
              County Not Found
            </h1>
            <p className="text-[#6E6E73] mb-6">
              We couldn&apos;t find the county you&apos;re looking for. Please check the URL or browse our available locations.
            </p>
            <Button
              onClick={() => navigate('home')}
              className="bg-[#1A237E] hover:bg-[#1A237E]/90 text-white rounded-full px-8 h-12 font-medium"
            >
              <ArrowLeft className="size-4" />
              Back to Home
            </Button>
          </div>
        </AnimatedSection>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-sm">
            <button
              onClick={() => navigate('home')}
              className="text-[#6E6E73] hover:text-[#1A237E] transition-colors"
            >
              Home
            </button>
            <ChevronRight className="size-3.5 text-[#86868B]" />
            <span className="text-[#1D1D1F] font-medium">{county.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#F5F5F7] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-10 h-10 sm:w-12 sm:h-12 text-[#1A237E]" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1F] mb-4">
              {county.name}
            </h1>
            <p className="text-lg sm:text-xl text-[#6E6E73] font-medium mb-4">
              {county.tagline}
            </p>
            <p className="text-[#6E6E73] leading-relaxed max-w-2xl mx-auto">
              {county.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mini Journey */}
      <SharedMiniJourney type="customer" />

      {/* Cities Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-8">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#1A237E] mb-3">
                Service Areas
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] mb-3">
                Areas We Serve in {county.name}
              </h2>
              <p className="text-[#6E6E73] max-w-xl mx-auto">
                Professional home services available in these cities
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {county.cities.map((city) => (
                <div
                  key={city}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F5F5F7] text-[#1D1D1F] border border-black/[0.08] hover:bg-[#1A237E]/10 hover:border-[#1A237E]/20 transition-colors text-sm font-medium"
                >
                  <MapPin className="size-3.5 text-[#1A237E]" />
                  {city}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#1A237E] mb-3">
                Our Services
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] mb-3">
                Services Available in {county.name}
              </h2>
              <p className="text-[#6E6E73] max-w-xl mx-auto">
                Choose from our full range of professional home services
              </p>
            </div>
          </AnimatedSection>
          <StaggerContainer
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            staggerDelay={0.08}
          >
            {countyServices.map((cs) => {
              const serviceData = services.find((s) => s.slug === cs.slug);
              if (!serviceData) return null;

              const ServiceIcon = serviceData.icon;

              return (
                <StaggerItem key={cs.slug}>
                  <Card className="h-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 border-black/[0.08] rounded-2xl bg-white">
                    <CardContent className="pt-2 pb-2 flex flex-col h-full">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[#1A237E]/10 flex items-center justify-center shrink-0">
                          <ServiceIcon className="w-6 h-6 text-[#1A237E]" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold text-[#1D1D1F] mb-1">
                            {cs.service}
                          </h3>
                          {(
                            <p className="text-sm text-[#6E6E73] leading-relaxed">
                              {serviceData.shortDescription}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="mt-auto pt-4">
                        <Button
                          onClick={() =>
                            navigate(`county/${county.slug}/service/${cs.slug}` as PageKey)
                          }
                          variant="outline"
                          className="w-full group rounded-full border-black/[0.08]"
                        >
                          View Services
                          <ChevronRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] mb-3">
                Need Service in {county.name}?
              </h2>
              <p className="text-[#6E6E73] mb-6">
                Get connected with licensed, verified professionals in {county.name}. Fast response times and guaranteed quality workmanship.
              </p>
              <Button
                onClick={() => navigate('contact')}
                size="lg"
                className="bg-[#1A237E] hover:bg-[#1A237E]/90 text-white rounded-full px-8 h-12 text-base font-medium"
              >
                Get a Free Quote
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
