'use client';

import { useRouter } from '@/lib/router-store';
import { AnimatedSection } from '@/components/cnb/AnimatedSection';
import { Home, ChevronRight } from 'lucide-react';

export default function TermsPage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-black/[0.08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-[#6E6E73]">
            <button
              onClick={() => navigate('home')}
              className="hover:text-[#1A237E] transition-colors cursor-pointer flex items-center gap-1"
            >
              <Home className="size-3.5" />
              Home
            </button>
            <ChevronRight className="size-3.5" />
            <span className="text-[#1D1D1F] font-medium">Terms of Service</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="space-y-10 text-[#1D1D1F]">
              {/* Header */}
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] leading-tight">
                  Terms of Service
                </h1>
                <p className="mt-3 text-sm text-[#86868B]">
                  Last Updated: January 1, 2025
                </p>
              </div>

              {/* Intro */}
              <p className="text-base leading-relaxed text-[#6E6E73]">
                Welcome to CA BYLDRS. These Terms of Service (&quot;Terms&quot;) govern
                your use of our website and lead-matching platform. By accessing or using our
                services, you agree to be bound by these Terms. If you do not agree to these
                Terms, please do not use our platform.
              </p>

              {/* 1. Acceptance of Terms */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-[#1D1D1F]">
                  1. Acceptance of Terms
                </h2>
                <p className="text-base leading-relaxed text-[#6E6E73]">
                  By accessing the CA BYLDRS website, submitting a service request,
                  or creating a contractor account, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms of Service, as well as our
                  Privacy Policy. These Terms apply to all visitors, homeowners, and contractor
                  partners who use our platform. We reserve the right to refuse service to anyone
                  for any reason at any time.
                </p>
              </div>

              {/* 2. Service Description */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-[#1D1D1F]">
                  2. Service Description
                </h2>
                <p className="text-base leading-relaxed text-[#6E6E73]">
                  CA BYLDRS is a lead-matching platform that connects homeowners in
                  Orange County and Los Angeles County with licensed local contractors. We are not
                  a contractor, and we do not directly perform any home services. Our role is
                  limited to facilitating introductions between homeowners seeking services and
                  qualified contractors who can provide them.
                </p>
                <p className="text-base leading-relaxed text-[#6E6E73]">
                  We do not guarantee the quality, timeliness, or outcome of any services
                  performed by contractors matched through our platform. All agreements for
                  services are made directly between the homeowner and the contractor. We
                  encourage users to perform their own due diligence, including verifying
                  licenses, checking references, and reviewing contractor profiles before entering
                  into any service agreement.
                </p>
              </div>

              {/* 3. User Responsibilities */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-[#1D1D1F]">
                  3. User Responsibilities
                </h2>
                <p className="text-base leading-relaxed text-[#6E6E73]">
                  When using our platform, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base text-[#6E6E73] pl-2">
                  <li>
                    Provide accurate, truthful, and complete information when submitting service
                    requests or creating an account.
                  </li>
                  <li>
                    Not use the platform for any fraudulent, deceptive, or unlawful purpose.
                  </li>
                  <li>
                    Not submit false or misleading service requests, including requests for
                    services you do not intend to have performed.
                  </li>
                  <li>
                    Not impersonate any person or entity or misrepresent your affiliation with
                    any person or entity.
                  </li>
                  <li>
                    Not attempt to bypass, disable, or interfere with the platform&apos;s security
                    features or functionality.
                  </li>
                  <li>
                    Communicate professionally and respectfully with contractors and other users
                    on the platform.
                  </li>
                </ul>
              </div>

              {/* 4. Contractor Partners */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-[#1D1D1F]">
                  4. Contractor Partners
                </h2>
                <p className="text-base leading-relaxed text-[#6E6E73]">
                  All contractor partners on our platform are independent contractors and are not
                  employees, agents, or representatives of CA BYLDRS. We do not
                  supervise, direct, or control the work performed by any contractor. Each
                  contractor is solely responsible for the quality and timeliness of their own
                  work, maintaining proper licensing and insurance, and complying with all
                  applicable local, state, and federal laws and regulations.
                </p>
                <p className="text-base leading-relaxed text-[#6E6E73]">
                  While we make reasonable efforts to verify contractor licenses and credentials,
                  we do not guarantee the accuracy of this information. Homeowners are encouraged
                  to independently verify the license status and insurance coverage of any
                  contractor before hiring them.
                </p>
              </div>

              {/* 5. Limitation of Liability */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-[#1D1D1F]">
                  5. Limitation of Liability
                </h2>
                <p className="text-base leading-relaxed text-[#6E6E73]">
                  To the fullest extent permitted by applicable law, CA BYLDRS, its
                  officers, directors, employees, agents, and affiliates shall not be liable for
                  any indirect, incidental, special, consequential, or punitive damages, including
                  but not limited to loss of profits, data, or goodwill, arising out of or related
                  to your use of or inability to use the platform.
                </p>
                <p className="text-base leading-relaxed text-[#6E6E73]">
                  CA BYLDRS shall not be liable for any damages arising from the
                  acts, omissions, errors, or misconduct of any contractor matched through our
                  platform, including but not limited to property damage, personal injury, or
                  financial loss. Our total liability to you for any claims arising from these
                  Terms shall not exceed the amount you have paid to us in the twelve (12) months
                  preceding the claim, or one hundred dollars ($100), whichever is greater.
                </p>
              </div>

              {/* 6. Changes to Terms */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-[#1D1D1F]">
                  6. Changes to Terms
                </h2>
                <p className="text-base leading-relaxed text-[#6E6E73]">
                  We reserve the right to modify, amend, or update these Terms of Service at any
                  time at our sole discretion. When we make changes, we will update the
                  &quot;Last Updated&quot; date at the top of this page. We may also notify you through
                  email or a prominent notice on our website for material changes.
                </p>
                <p className="text-base leading-relaxed text-[#6E6E73]">
                  Your continued use of the platform after any changes to these Terms constitutes
                  your acceptance of the revised Terms. If you do not agree to the modified Terms,
                  you should discontinue use of our platform and, if applicable, request deletion
                  of your account.
                </p>
              </div>

              {/* 7. Contact */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-[#1D1D1F]">
                  7. Contact
                </h2>
                <p className="text-base leading-relaxed text-[#6E6E73]">
                  If you have any questions about these Terms of Service or need assistance,
                  please contact us:
                </p>
                <div className="bg-[#F5F5F7] rounded-2xl p-6 space-y-2 text-sm text-[#1D1D1F]">
                  <p>
                    <strong className="text-[#1D1D1F]">CA BYLDRS</strong>
                  </p>
                  <p className="text-[#6E6E73]">Email: legal@cabyldrs.com</p>
                  <p className="text-[#6E6E73]">Address: 12510 Mc Cann Dr., Santa Fe Springs, CA 90670, United States</p>
                  <p className="text-[#6E6E73]">Phone: +1 (562) 944-0500</p>
                </div>
              </div>

              {/* Closing */}
              <p className="text-base leading-relaxed text-[#86868B] pt-4 border-t border-black/[0.08]">
                These Terms of Service shall be governed by and construed in accordance with the
                laws of the State of California, without regard to its conflict of law provisions.
                Any disputes arising under these Terms shall be resolved in the courts of
                California.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
