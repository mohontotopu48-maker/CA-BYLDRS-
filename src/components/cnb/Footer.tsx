'use client';

import { Phone, Mail, MapPin, ChevronRight, Cpu, Shield, BarChart3, Youtube, Facebook, Instagram } from 'lucide-react';
import { useRouter } from '@/lib/router-store';
import { footerLinks } from '@/lib/data';

/* Minimalist X (Twitter) icon — not in lucide-react */
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* Minimalist LinkedIn icon */
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socialLinks = [
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: XIcon, href: 'https://x.com', label: 'X' },
  { icon: LinkedInIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
];

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
            <p className="text-sm text-[#6E6E73] mb-5 leading-relaxed">
              The Elite B2B Unified Referral Network for Licensed Contractors in OC &amp; LA County.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-white border border-black/[0.06] flex items-center justify-center text-[#6E6E73] hover:text-[#1A237E] hover:border-[#1A237E]/20 hover:shadow-sm transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-xs text-[#86868B]">
                &copy; 2026 VSUALdigitalmedia. All rights reserved. | Powered by NXLBYLDR&trade;
              </p>
            </div>
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
          {/* Tagline */}
          <div className="mt-4 text-center sm:text-right">
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#1A237E]/40">
              Own the Neighborhood. Win the Market. Become a Guardian.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
