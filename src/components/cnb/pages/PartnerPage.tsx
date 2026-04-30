'use client';

import { useState } from 'react';
import { useRouter } from '@/lib/router-store';
import { AnimatedSection } from '@/components/cnb/AnimatedSection';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Rocket,
  Loader2,
  ArrowRight,
} from 'lucide-react';
import { toast } from 'sonner';
import { trackFormSubmit } from '@/lib/ghl-tracking';

const TRADE_OPTIONS = [
  'Roofing',
  'Plumbing',
  'HVAC',
  'Electrical',
  'Other',
] as const;

export default function PartnerPage() {
  const { navigate } = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [commitChecked, setCommitChecked] = useState(false);
  const [form, setForm] = useState({
    businessName: '',
    yourName: '',
    email: '',
    phone: '',
    trade: '',
    licenseNumber: '',
    referral: '',
  });

  function updateField(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.businessName || !form.yourName || !form.email || !form.phone || !form.trade || !form.licenseNumber) {
      toast.error('Please fill in all required fields.');
      return;
    }

    if (!commitChecked) {
      toast.error('Please confirm the commitment checkbox to continue.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/partners', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: form.businessName,
          contactName: form.yourName,
          email: form.email,
          phone: form.phone,
          serviceCategories: form.trade,
          licenseNumber: form.licenseNumber,
          serviceAreas: 'Orange County, Los Angeles County',
          yearsInBusiness: form.referral || undefined,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Application submitted! Our team will contact you within 48 hours.');
        trackFormSubmit('partner', { business_name: form.businessName, email: form.email });

        // Reset form
        setForm({
          businessName: '',
          yourName: '',
          email: '',
          phone: '',
          trade: '',
          licenseNumber: '',
          referral: '',
        });
        setCommitChecked(false);
      } else {
        toast.error(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      toast.error('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#F5F5F7] pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#1A237E] mb-6">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#1A237E] mb-4">
              Start Your $500 Audit
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D1D1F] leading-tight tracking-tight mb-4">
              The End of the Lead Gen Lottery.
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-[#1A237E] mb-6">
              What if your entire marketing operation cost less than your daily coffee runs?
            </p>
            <p className="text-lg text-[#6E6E73] max-w-2xl mx-auto leading-relaxed">
              We don&apos;t sell leads. We build the Authorized Monopoly of Trust in your city. To join CA BYLDRS, every contractor must first pass the Phase 1 Performance Audit. Your $1,000 Entry is split exactly where it matters: $500 Setup & Audit Fee + $500 Direct Ad Spend. 100% of the ad spend goes to the market — we prove your ROI before you ever commit to the full Alliance.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-black/[0.08] shadow-sm p-6 sm:p-8 md:p-10 space-y-6"
            >
              {/* Business Name */}
              <div className="space-y-2">
                <Label htmlFor="businessName">
                  Business Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="businessName"
                  placeholder="Acme Roofing Co."
                  value={form.businessName}
                  onChange={(e) => updateField('businessName', e.target.value)}
                  required
                  className="bg-white border-black/[0.08] rounded-xl focus:ring-[#1A237E]"
                />
              </div>

              {/* Your Name */}
              <div className="space-y-2">
                <Label htmlFor="yourName">
                  Your Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="yourName"
                  placeholder="John Smith"
                  value={form.yourName}
                  onChange={(e) => updateField('yourName', e.target.value)}
                  required
                  className="bg-white border-black/[0.08] rounded-xl focus:ring-[#1A237E]"
                />
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@acme.com"
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    required
                    className="bg-white border-black/[0.08] rounded-xl focus:ring-[#1A237E]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Phone <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (562) 555-0000"
                    value={form.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    required
                    className="bg-white border-black/[0.08] rounded-xl focus:ring-[#1A237E]"
                  />
                </div>
              </div>

              {/* Trade / Service Type & License Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>
                    Trade / Service Type <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={form.trade}
                    onValueChange={(val) => updateField('trade', val)}
                  >
                    <SelectTrigger className="w-full bg-white border-black/[0.08] rounded-xl focus:ring-[#1A237E]">
                      <SelectValue placeholder="Select trade" />
                    </SelectTrigger>
                    <SelectContent>
                      {TRADE_OPTIONS.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="licenseNumber">
                    CA License Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="licenseNumber"
                    placeholder="CA LIC #1234567"
                    value={form.licenseNumber}
                    onChange={(e) => updateField('licenseNumber', e.target.value)}
                    required
                    className="bg-white border-black/[0.08] rounded-xl focus:ring-[#1A237E]"
                  />
                </div>
              </div>

              {/* Referral */}
              <div className="space-y-2">
                <Label htmlFor="referral">
                  How did you hear about us?
                </Label>
                <Input
                  id="referral"
                  placeholder="Google, referral, social media..."
                  value={form.referral}
                  onChange={(e) => updateField('referral', e.target.value)}
                  className="bg-white border-black/[0.08] rounded-xl focus:ring-[#1A237E]"
                />
              </div>

              {/* Commitment Checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <Checkbox
                  id="commit"
                  checked={commitChecked}
                  onCheckedChange={(checked) => setCommitChecked(checked === true)}
                  className="mt-0.5"
                />
                <Label htmlFor="commit" className="text-sm text-[#6E6E73] leading-relaxed cursor-pointer">
                  I understand this is a Done-For-You service that requires Partner Leadership. I commit to a 30-60 minute Monthly Strategy Sync to review the NXLBYLDR™ Task Log and ROI Calibration Report.
                </Label>
              </div>

              {/* Coffee Run Note */}
              <div className="bg-[#E8EAF6] rounded-xl p-4">
                <p className="text-sm text-[#1A237E] font-medium leading-relaxed">
                  💡 Phase 1 Performance Audit: Your $1,000 Entry ($500 Setup + $500 Ad Spend) proves your ROI with daily content management (3 posts/day), Truth Dashboard access, and 15-day growth reports — before locking in the Phase 2 Alliance.
                </p>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="apple-btn-primary w-full text-base font-semibold py-5 transition-all duration-300 h-auto cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit My Audit Application
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </Button>
              </div>

              {/* Terms & Privacy */}
              <p className="text-center text-xs text-[#86868B] pt-2">
                By applying, you agree to our{' '}
                <button
                  type="button"
                  onClick={() => navigate('terms')}
                  className="text-[#1A237E] hover:underline cursor-pointer"
                >
                  Terms of Service
                </button>{' '}
                and{' '}
                <button
                  type="button"
                  onClick={() => navigate('privacy')}
                  className="text-[#1A237E] hover:underline cursor-pointer"
                >
                  Privacy Policy
                </button>
                .
              </p>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
