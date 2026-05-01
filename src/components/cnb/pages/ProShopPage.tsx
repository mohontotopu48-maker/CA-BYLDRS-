'use client';

import { useRouter } from '@/lib/router-store';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/cnb/AnimatedSection';
import { Button } from '@/components/ui/button';
import {
  Shield,
  ArrowRight,
  Briefcase,
  Crown,
  HardHat,
  Flag,
  ClipboardList,
  Truck,
  Tag,
  Eye,
  Sparkles,
} from 'lucide-react';

const products = [
  {
    id: '01',
    name: 'The Elite Work Shirt',
    icon: Briefcase,
    description:
      'High-performance polo with embroidered logo and Guardian Seal on the sleeve.',
    badge: 'Coming Soon',
    gradient: 'from-[#1A237E] to-[#283593]',
    accent: '#D4AF37',
    shape: 'polo',
  },
  {
    id: '02',
    name: 'The Guardian Hat',
    icon: Crown,
    description:
      'Flat-brim or snapback hat with a detailed 3D embroidered patch.',
    badge: 'Coming Soon',
    gradient: 'from-[#0D1754] to-[#1A237E]',
    accent: '#D4AF37',
    shape: 'hat',
  },
  {
    id: '03',
    name: 'The Site Restoration Tee',
    icon: HardHat,
    description:
      'Screen-printed t-shirt with a bold logo for the entire crew.',
    badge: 'Alpha Trial Exclusive',
    gradient: 'from-[#1A237E] via-[#283593] to-[#3949AB]',
    accent: '#FFFFFF',
    shape: 'tee',
  },
  {
    id: '04',
    name: "The 'Yard-Guard' Banner",
    icon: Flag,
    description:
      "Professional 3×6 job site banner with QR code to your verified profile.",
    badge: 'Coming Soon',
    gradient: 'from-[#1A237E] to-[#3949AB]',
    accent: '#D4AF37',
    shape: 'banner',
  },
  {
    id: '05',
    name: 'The Digital Estimate Board',
    icon: ClipboardList,
    description:
      'Branded tablet or clipboard case to use during the kitchen-table presentation.',
    badge: 'Coming Soon',
    gradient: 'from-[#3E2723] to-[#4E342E]',
    accent: '#D4AF37',
    shape: 'clipboard',
  },
  {
    id: '06',
    name: 'The Elite Truck Decal',
    icon: Truck,
    description:
      'Substantial, die-cut truck/fleet decal featuring the interlocking logo.',
    badge: 'Coming Soon',
    gradient: 'from-[#1A237E] via-[#0D1754] to-[#1A237E]',
    accent: '#D4AF37',
    shape: 'truck',
  },
];

const stats = [
  { value: '89%', label: 'of homeowners say professional appearance increases trust' },
  { value: '3x', label: 'higher perceived value when teams arrive in branded gear' },
  { value: '47%', label: 'of first impressions are made before a single word is spoken' },
];

function ProductVisual({
  product,
}: {
  product: (typeof products)[number];
}) {
  const Icon = product.icon;

  return (
    <div
      className={`relative w-full h-[300px] bg-gradient-to-br ${product.gradient} rounded-t-2xl overflow-hidden flex items-center justify-center`}
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      {/* Radial glow */}
      <div className="absolute inset-0" style={{
        background: `radial-gradient(circle at 50% 40%, ${product.accent}15 0%, transparent 60%)`,
      }} />

      {/* Shape-based visual */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        {product.shape === 'polo' && (
          <div className="relative">
            {/* Polo collar shape */}
            <div className="w-28 h-32 rounded-t-[2rem] rounded-b-lg border-2 border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center">
              <div className="w-20 h-6 rounded-full border-2 border-white/20 bg-white/5 mt-[-2rem]" />
            </div>
            <Icon className="absolute bottom-3 left-1/2 -translate-x-1/2 w-10 h-10 text-white/30" />
          </div>
        )}

        {product.shape === 'hat' && (
          <div className="relative">
            {/* Hat brim shape */}
            <div className="w-32 h-20 rounded-t-full border-2 border-white/20 bg-white/5 backdrop-blur-sm" />
            <div className="w-40 h-4 -mt-1 rounded-b-full border-2 border-white/10 bg-white/[0.03]" />
            <Icon className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 text-white/30" />
          </div>
        )}

        {product.shape === 'tee' && (
          <div className="relative">
            {/* T-shirt shape */}
            <div className="flex items-center justify-center">
              <div className="w-12 h-16 border-2 border-white/20 bg-white/5 rounded-t-lg -mr-6" />
              <div className="w-24 h-28 border-2 border-white/20 bg-white/5 rounded-lg flex items-center justify-center z-10">
                <Icon className="w-8 h-8 text-white/30" />
              </div>
              <div className="w-12 h-16 border-2 border-white/20 bg-white/5 rounded-t-lg -ml-6" />
            </div>
          </div>
        )}

        {product.shape === 'banner' && (
          <div className="relative">
            {/* Banner shape */}
            <div className="w-40 h-24 border-2 border-white/20 bg-white/5 rounded-lg flex items-center justify-center">
              <div className="w-28 h-16 border border-white/10 bg-white/[0.03] rounded flex items-center justify-center">
                <Icon className="w-8 h-8 text-white/30" />
              </div>
            </div>
            {/* Pole */}
            <div className="w-1 h-12 bg-white/10 mx-auto" />
            <div className="w-3 h-3 bg-white/10 rounded-full mx-auto -mt-2" />
          </div>
        )}

        {product.shape === 'clipboard' && (
          <div className="relative">
            {/* Clipboard shape */}
            <div className="w-24 h-32 border-2 border-white/20 bg-white/5 rounded-lg flex items-center justify-center">
              <div className="w-20 h-24 border border-white/10 bg-white/[0.03] rounded p-2">
                <div className="w-full h-2 bg-white/10 rounded mb-2" />
                <div className="w-3/4 h-2 bg-white/10 rounded mb-2" />
                <div className="w-full h-2 bg-white/10 rounded mb-2" />
                <div className="w-2/3 h-2 bg-white/10 rounded" />
              </div>
            </div>
            <div className="w-10 h-3 bg-white/10 rounded-t-lg absolute -top-1.5 left-1/2 -translate-x-1/2" />
          </div>
        )}

        {product.shape === 'truck' && (
          <div className="relative">
            {/* Truck shape */}
            <div className="flex items-end">
              <div className="w-20 h-16 border-2 border-white/20 bg-white/5 rounded-l-lg rounded-b-lg flex items-center justify-center">
                <Icon className="w-8 h-8 text-white/30" />
              </div>
              <div className="w-14 h-12 border-2 border-white/20 bg-white/5 rounded-r-lg rounded-b-lg border-l-0 flex items-center justify-center">
                <div className="w-8 h-5 border border-white/10 rounded" />
              </div>
            </div>
            {/* Wheels */}
            <div className="absolute -bottom-3 left-4 w-5 h-5 rounded-full border-2 border-white/20 bg-white/5" />
            <div className="absolute -bottom-3 left-14 w-5 h-5 rounded-full border-2 border-white/20 bg-white/5" />
            <div className="absolute -bottom-3 right-2 w-5 h-5 rounded-full border-2 border-white/20 bg-white/5" />
          </div>
        )}
      </div>

      {/* Product number watermark */}
      <span className="absolute bottom-4 right-5 text-4xl font-bold text-white/[0.06] font-mono">
        {product.id}
      </span>

      {/* Gold accent line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: product.accent }}
      />
    </div>
  );
}

export default function ProShopPage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-[#0F1A2E]">
      {/* ── Hero Section ── */}
      <section className="hero-gradient pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#5EB6F0] mb-4">
              PRO-SHOP
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F0F4F8] leading-tight tracking-tight mb-6">
              Guardian Pro-Shop: Dress for the{' '}
              <span className="text-[#5EB6F0]">Elite Status</span> You've
              Earned.
            </h1>
            <p className="text-lg text-[#B0C4DE] max-w-2xl mx-auto leading-relaxed mb-8">
              Homeowners pay premium rates to companies that look the part. If
              your team shows up in generic, stained t-shirts, you are instantly
              devaluing your brand. The CA BYLDRS Solution: Our Pro-Shop offers
              custom-branded, high-quality gear featuring your logo and the
              Guardian Seal — verified by us. Look like an elite authority, not
              just a contractor.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(94,182,240,0.08)] border border-[rgba(94,182,240,0.1)]">
              <Shield className="w-4 h-4 text-[#5EB6F0]" />
              <span className="text-sm font-semibold text-[#5EB6F0]">
                Guardian Verified
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Product Grid Section ── */}
      <section className="py-16 md:py-24 bg-[#0F1A2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#5EB6F0] mb-3">
                The Collection
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F0F4F8] mb-3">
                Elite Gear, Built for Guardians
              </h2>
              <p className="text-[#B0C4DE] max-w-xl mx-auto">
                Every piece is designed to project authority and trust — because
                first impressions are non-negotiable.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
              const Icon = product.icon;
              const isAlphaExclusive = product.badge === 'Alpha Trial Exclusive';

              return (
                <StaggerItem key={product.id}>
                  <div className="bg-[#16253D] rounded-2xl border border-[rgba(94,182,240,0.1)] shadow-sm overflow-hidden hover:shadow-[0_4px_24px_rgba(94,182,240,0.08)] transition-shadow duration-300 h-full flex flex-col">
                    {/* Product Visual */}
                    <ProductVisual product={product} />

                    {/* Product Info */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-xs font-mono font-bold text-[#5EB6F0]/40">
                          #{product.id}
                        </span>
                        {isAlphaExclusive ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">
                            <Sparkles className="w-3 h-3" />
                            {product.badge}
                          </span>
                        ) : (
                          <span className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-[#0D1754] text-[#B0C4DE] border border-[rgba(94,182,240,0.1)]">
                            {product.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-[#F0F4F8] mb-1.5">
                        {product.name}
                      </h3>
                      <p className="text-sm text-[#B0C4DE] leading-relaxed flex-1">
                        {product.description}
                      </p>
                      <div className="mt-4 pt-3 border-t border-[rgba(94,182,240,0.1)]">
                        <div className="flex items-center gap-2 text-xs text-[#5EB6F0] font-medium">
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Details</span>
                          <ArrowRight className="w-3 h-3 ml-auto" />
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Why the Gear Matters ── */}
      <section className="py-16 md:py-24 bg-[#0D1754]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#5EB6F0] mb-3">
                The Proof
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F0F4F8]">
                Why the Gear Matters
              </h2>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <StaggerItem key={stat.value}>
                <div className="bg-[#16253D] rounded-2xl border border-[rgba(94,182,240,0.1)] shadow-sm p-8 text-center hover:shadow-[0_4px_24px_rgba(94,182,240,0.08)] transition-shadow duration-300">
                  <p className="text-4xl sm:text-5xl font-bold text-[#5EB6F0] mb-3">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[#B0C4DE] leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.2}>
            <p className="text-center text-[#B0C4DE] max-w-2xl mx-auto mt-10 text-base leading-relaxed">
              Your team's appearance is the first thing a homeowner sees — and
              the last thing they forget. Professional gear doesn't just look
              good; it signals reliability, quality, and trust before you even
              say a word.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Smart Integration / GHL Note ── */}
      <section className="py-16 md:py-24 bg-[#0F1A2E]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-2xl border border-[rgba(94,182,240,0.1)] bg-[#0D1754] p-8 sm:p-10 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-[rgba(94,182,240,0.08)] flex items-center justify-center shrink-0">
                <Tag className="w-6 h-6 text-[#5EB6F0]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#F0F4F8] mb-2">
                  Smart Integration
                </h3>
                <p className="text-sm text-[#B0C4DE] leading-relaxed">
                  Every Pro-Shop order generates a sales tag in our system:{' '}
                  <span className="font-semibold text-[#F0F4F8]">
                    'Merch_Order'
                  </span>{' '}
                  or{' '}
                  <span className="font-semibold text-[#F0F4F8]">
                    'Authority_Video_Booking.'
                  </span>{' '}
                  This allows our team to identify upsell opportunities for the
                  full marketing engine once you see the quality of our branding
                  work.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Bottom CTA Section ── */}
      <section className="bg-[#0D1754] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F0F4F8] mb-4">
              Ready to Look Like the Authority You Are?
            </h2>
            <p className="text-[#B0C4DE] text-lg mb-8 max-w-xl mx-auto">
              Alpha Trial members receive priority access to the full Guardian
              Pro-Shop catalog.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => navigate('apply')}
                size="lg"
                className="bg-[#5EB6F0] hover:bg-[#4AA3E0] text-[#0F1A2E] font-semibold px-8 h-12 text-base rounded-full shadow-sm cursor-pointer"
              >
                Start Your $500 Audit
                <ArrowRight className="size-4 ml-2" />
              </Button>
              <Button
                onClick={() => navigate('alliance')}
                variant="outline"
                size="lg"
                className="border-[rgba(94,182,240,0.3)] text-[#5EB6F0] font-semibold px-8 h-12 text-base rounded-full hover:bg-[rgba(94,182,240,0.06)] hover:border-[#5EB6F0] cursor-pointer"
              >
                Explore the Alliance
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
