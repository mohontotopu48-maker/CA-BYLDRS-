'use client';

import { useState, useEffect } from 'react';
import { Menu, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { useRouter } from '@/lib/router-store';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Navbar() {
  const { currentPage, navigate } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    navigate(href as any);
    setMobileOpen(false);
  };

  const isHome = currentPage === 'home';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled || !isHome
          ? 'bg-[#0F1A2E]/90 backdrop-blur-xl border-b border-[rgba(94,182,240,0.1)]'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 group"
          >
            <img
              src="/logo-white.png"
              alt="CA BYLDRS Logo"
              width={168} height={56}
              className="h-10 lg:h-12 w-auto object-contain transition-all duration-300"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={cn(
                  'px-3 xl:px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  currentPage === link.href
                    ? 'text-[#5EB6F0] bg-[rgba(94,182,240,0.08)]'
                    : scrolled || !isHome
                    ? 'text-[#B0C4DE] hover:text-[#F0F4F8] hover:bg-[rgba(94,182,240,0.08)]'
                    : 'text-[#B0C4DE]/80 hover:text-[#F0F4F8] hover:bg-white/10'
                )}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              onClick={() => handleNav('apply')}
              className="bg-[#5EB6F0] text-[#0F1A2E] hover:bg-[#4AA3E0] text-sm py-2 px-5 rounded-full font-semibold transition-colors duration-200"
            >
              Start Your $500 Audit
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center gap-2">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    scrolled || !isHome ? 'text-[#F0F4F8]' : 'text-[#F0F4F8]'
                  )}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0 bg-[#0F1A2E]">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-[rgba(94,182,240,0.1)]">
                    <div className="flex items-center gap-3">
                      <img
                        src="/logo-white.png"
                        alt="CA BYLDRS Logo"
                        width={140} height={40}
                        className="h-9 w-auto object-contain"
                      />
                      <div>
                        <p className="font-semibold text-sm text-[#F0F4F8]">CA BYLDRS</p>
                        <p className="text-xs text-[#B0C4DE]/60">Elite Contractor Alliance</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-4 space-y-1">
                    {navLinks.map((link) => (
                      <button
                        key={link.href}
                        onClick={() => handleNav(link.href)}
                        className={cn(
                          'w-full text-left px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200',
                          currentPage === link.href
                            ? 'text-[#5EB6F0] bg-[rgba(94,182,240,0.08)]'
                            : 'text-[#B0C4DE] hover:text-[#F0F4F8] hover:bg-[rgba(94,182,240,0.08)]'
                        )}
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                  <div className="p-4 border-t border-[rgba(94,182,240,0.1)] space-y-3">
                    <Button
                      className="w-full bg-[#5EB6F0] text-[#0F1A2E] hover:bg-[#4AA3E0] rounded-full font-semibold transition-colors duration-200"
                      onClick={() => handleNav('apply')}
                    >
                      Start Your $500 Audit
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
