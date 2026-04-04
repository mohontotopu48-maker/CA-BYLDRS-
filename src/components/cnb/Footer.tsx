'use client';

import { Phone, Mail, MapPin, ChevronRight, Cpu, Shield, BarChart3 } from 'lucide-react';
import { useRouter } from '@/lib/router-store';
import { footerLinks } from '@/lib/data';

export function Footer() {
  const { navigate } = useRouter();

  const handleNav = (href: string) => {
    navigate(href as any);
  };

  return (
    <footer className="bg-[#F5F5F7]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img
              src="https://i.ibb.co/6308JrK/image.png"
              alt="CA BYLDRS Logo"
              width={192} height={64}
              className="h-14 w-auto object-contain mb-5 drop-shadow-sm"
            />
            <p className="text-sm text-[#6E6E73] mb-6 leading-relaxed">
              The Elite B2B Unified Referral Network for Licensed Contractors in OC &amp; LA County.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-[#6E6E73]">
                <Phone className="h-4 w-4 text-[#1A237E] shrink-0" />
                <a href="tel:+15629440500" className="hover:text-[#1A237E] transition-colors duration-200">+1 (562) 944-0500</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#6E6E73]">
                <Mail className="h-4 w-4 text-[#1A237E] shrink-0" />
                <a href="mailto:hello@nxlbyldr.com" className="hover:text-[#1A237E] transition-colors duration-200">hello@nxlbyldr.com</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#6E6E73]">
                <MapPin className="h-4 w-4 text-[#1A237E] shrink-0" />
                <span>12510 Mc Cann Dr., Santa Fe Springs, CA 90670</span>
              </div>
            </div>
          </div>

          {/* Platform Column */}
          <div>
            <h3 className="text-[#1D1D1F] font-semibold text-sm uppercase tracking-wider mb-5">
              Platform
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-[#6E6E73] hover:text-[#1A237E] transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-[#1D1D1F] font-semibold text-sm uppercase tracking-wider mb-5">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-[#6E6E73] hover:text-[#1A237E] transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & CTA Column */}
          <div>
            <h3 className="text-[#1D1D1F] font-semibold text-sm uppercase tracking-wider mb-5">
              Why Contractors Choose Us
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-2 rounded-xl bg-white shadow-sm">
                  <Cpu className="h-4 w-4 text-[#1A237E]" />
                </div>
                <div>
                  <p className="text-sm text-[#1D1D1F] font-medium">Done-For-You Engine</p>
                  <p className="text-xs text-[#86868B]">Automated sales pipeline from lead to close</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-2 rounded-xl bg-white shadow-sm">
                  <Shield className="h-4 w-4 text-[#1A237E]" />
                </div>
                <div>
                  <p className="text-sm text-[#1D1D1F] font-medium">Exclusive Lead Flow</p>
                  <p className="text-xs text-[#86868B]">No shared leads — no race to the bottom</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-2 rounded-xl bg-white shadow-sm">
                  <BarChart3 className="h-4 w-4 text-[#1A237E]" />
                </div>
                <div>
                  <p className="text-sm text-[#1D1D1F] font-medium">Monthly Strategy Sync</p>
                  <p className="text-xs text-[#86868B]">Data-driven growth sessions with our CSO team</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleNav('apply')}
              className="w-full apple-btn-primary text-sm py-3"
            >
              Start Your $500 Audit
              <ChevronRight className="h-4 w-4 ml-1 inline" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#86868B]">
            &copy; {new Date().getFullYear()} CA BYLDRS. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('privacy')}
              className="text-xs text-[#86868B] hover:text-[#1D1D1F] transition-colors duration-200"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleNav('terms')}
              className="text-xs text-[#86868B] hover:text-[#1D1D1F] transition-colors duration-200"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
