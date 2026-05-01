'use client';

import { AnimatedSection } from '@/components/cnb/AnimatedSection';
import { useRouter } from '@/lib/router-store';
import { Shield, ChevronRight } from 'lucide-react';

export default function HighIntentCTA() {
  const { navigate } = useRouter();

  return (
    <section className="w-full bg-[#1A237E] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          {/* Section Label */}
          <p className="text-sm font-semibold tracking-[0.2em] text-[#5EB6F0]/60 uppercase mb-6">
            THE END OF THE LEAD GEN LOTTERY
          </p>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F0F4F8] leading-tight mb-6">
            There Are Only 2 Spots Left in Your City.
          </h2>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-[#B0C4DE] max-w-3xl mx-auto leading-relaxed mb-10">
            Start your $500 Audit today and begin your journey toward Guardian Certification. NXLBYLDR™ scales businesses using an exclusive 8-channel ecosystem to deliver more Calls, Clicks, and Customers — with the Guardian Gold Seal, personal brand content, and automated ads. Proven before you invest.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('apply')}
              className="bg-[#5EB6F0] text-[#0F1A2E] hover:bg-[#4AA3E0] font-semibold px-8 py-4 text-base sm:text-lg rounded-full transition-all duration-300 cursor-pointer"
            >
              <span className="inline-flex items-center gap-2">
                Start Your $500 Audit
                <ChevronRight className="h-5 w-5" />
              </span>
            </button>

            <button
              onClick={() => navigate('proportal')}
              className="border border-[rgba(94,182,240,0.3)] text-[#5EB6F0] hover:bg-[rgba(94,182,240,0.1)] font-semibold px-8 py-4 text-base sm:text-lg rounded-full transition-all duration-300 cursor-pointer"
            >
              <span className="inline-flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Explore the Guardian Path
              </span>
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
