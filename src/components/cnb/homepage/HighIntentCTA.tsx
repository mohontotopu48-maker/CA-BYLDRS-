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
          <p className="text-sm font-semibold tracking-[0.2em] text-white/50 uppercase mb-6">
            THE END OF THE LEAD GEN LOTTERY
          </p>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            There Are Only 2 Spots Left in Your City.
          </h2>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
            Start your $500 Performance Audit today and begin your journey toward Guardian Certification. NXLBYLDR™ scales businesses using an exclusive 8-channel ecosystem to deliver more Calls, Clicks, and Customers — with the Guardian Gold Seal, personal brand content, and automated ads. Proven before you invest.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('apply')}
              className="bg-white text-[#1A237E] hover:bg-[#F5F5F7] font-semibold px-8 py-4 text-base sm:text-lg rounded-full transition-all duration-300 cursor-pointer"
            >
              <span className="inline-flex items-center gap-2">
                Start Your $500 Audit
                <ChevronRight className="h-5 w-5" />
              </span>
            </button>

            <button
              onClick={() => navigate('proportal')}
              className="border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-base sm:text-lg rounded-full transition-all duration-300 cursor-pointer"
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
