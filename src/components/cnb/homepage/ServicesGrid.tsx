'use client';

import { powerTriad } from '@/lib/data';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from '@/components/cnb/AnimatedSection';
import { useRouter, type PageKey } from '@/lib/router-store';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function ServicesGrid() {
  const { navigate } = useRouter();

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="mb-12 md:mb-16 text-center">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#1A237E] mb-3">
            THE POWER TRIAD
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1D1F] mb-4 tracking-tight">
            Three Forces. One Unstoppable Alliance.
          </h2>
          <p className="text-[#6E6E73] text-lg max-w-2xl mx-auto leading-relaxed">
            Every element of the CA BYLDRS ecosystem is engineered to make you
            the dominant contractor in your market.
          </p>
        </AnimatedSection>

        {/* Triad Cards Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
          staggerDelay={0.1}
        >
          {powerTriad.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.id}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className="h-full bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8
                    shadow-[0_1px_8px_rgba(0,0,0,0.03)]
                    hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)]
                    transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-[#E8EAF6] flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#1A237E]" />
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-[#1D1D1F] mb-1">
                    {item.name}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs font-semibold tracking-wider uppercase text-[#86868B] mb-4">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-[#6E6E73] text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Feature List */}
                  <ul className="space-y-2.5 mb-8">
                    {item.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#1A237E] mt-0.5 shrink-0" />
                        <span className="text-sm text-[#6E6E73]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More */}
                  <Button
                    variant="ghost"
                    onClick={() => navigate(item.href as PageKey)}
                    className="inline-flex items-center gap-1.5 text-[#1A237E] hover:text-[#0D1754] hover:bg-[#E8EAF6] font-semibold text-sm px-0"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
