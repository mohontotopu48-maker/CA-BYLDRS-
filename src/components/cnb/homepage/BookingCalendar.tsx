'use client';

import { Star, Quote } from 'lucide-react';
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from '@/components/cnb/AnimatedSection';

/* ────────────────────────────────────────
   Testimonials Data
   ──────────────────────────────────────── */

interface Testimonial {
  name: string;
  trade: string;
  stars: number;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Mike R.',
    trade: 'Roofing Contractor, Orange County',
    stars: 5,
    quote:
      'Within 60 days of the Alpha Trial, I had more exclusive leads than I\'d gotten in 6 months on Angi. NXLBYLDR\u2122 manages my ads, posts 3 times a day on social, and the leads already know my name. Close rate went from 20% to 65%.',
  },
  {
    name: 'Sarah K.',
    trade: 'HVAC Professional, LA County',
    stars: 5,
    quote:
      'The NXLBYLDR\u2122 OS changed everything. 3 posts a day, full ad management, and automated follow-ups. I went from spending 3 hours a day chasing leads to just showing up and closing. The 8-channel ecosystem is real.',
  },
  {
    name: 'David T.',
    trade: 'Electrical Contractor, OC',
    stars: 5,
    quote:
      'The BYLDRS Guardian Gold Seal doubled my estimate acceptance rate. Combined with the branded video and social dominance, homeowners trust me before I even walk through the door. Premium pricing? No problem.',
  },
];

/* ────────────────────────────────────────
   Sub-component: Star Rating
   ──────────────────────────────────────── */

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < count
              ? 'fill-amber-400 text-amber-400'
              : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  );
}

/* ────────────────────────────────────────
   Sub-component: Testimonial Card
   ──────────────────────────────────────── */

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote className="w-8 h-8 text-[#C5CAE9]" />
      </div>

      {/* Star Rating */}
      <StarRating count={testimonial.stars} />

      {/* Quote Text */}
      <p className="mt-4 text-sm sm:text-base text-[#1D1D1F] leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author Info */}
      <div className="mt-6 pt-5 border-t border-[rgba(0,0,0,0.08)]">
        <p className="text-sm font-semibold text-[#1D1D1F]">
          {testimonial.name}
        </p>
        <p className="text-xs text-[#86868B] mt-0.5">
          {testimonial.trade}
        </p>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────
   Main Component
   ──────────────────────────────────────── */

export default function BookingCalendar() {
  return (
    <section className="bg-[#F5F5F7] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-14 md:mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#1A237E] mb-3">
            Partner Results
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-4 tracking-tight">
            Hear From Our Alliance Members
          </h2>
          <p className="text-lg text-[#6E6E73] max-w-2xl mx-auto leading-relaxed">
            Real contractors. Real results. See what happens when you stop buying leads and start building an empire.
          </p>
        </AnimatedSection>

        {/* Testimonial Cards */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          staggerDelay={0.12}
        >
          {testimonials.map((testimonial, idx) => (
            <StaggerItem key={idx}>
              <TestimonialCard testimonial={testimonial} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
