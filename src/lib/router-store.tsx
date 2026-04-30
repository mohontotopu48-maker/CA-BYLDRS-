'use client';

import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { trackPageView } from '@/lib/ghl-tracking';

export type PageKey =
  | 'home'
  | 'engine'
  | 'shield'
  | 'alliance'
  | 'proshop'
  | 'proportal'
  | 'apply'
  | 'contact'
  | 'emergency'
  | 'partner'
  | 'privacy'
  | 'terms';

interface NavigateOptions {
  scroll?: boolean;
}

interface RouterState {
  currentPage: PageKey;
  navigate: (page: PageKey, options?: NavigateOptions) => void;
  goBack: () => void;
  history: PageKey[];
}

const RouterContext = createContext<RouterState | null>(null);

/* Map page keys to human-readable titles for GHL tracking */
const pageTitles: Record<string, string> = {
  home: 'Home',
  engine: 'The Engine — NXLBYLDR™ OS',
  shield: 'The Shield — BYLDRS Guardian',
  alliance: 'The Alliance — CA BYLDRS Network',
  proshop: 'Pro-Shop — Guardian Gear',
  proportal: 'Pro-Portal — Guardian Path',
  apply: 'Start Your $500 Audit',
  contact: 'Contact Us',
  emergency: 'Emergency Services',
  partner: 'Partner Application',
  privacy: 'Privacy Policy',
  terms: 'Terms of Service',
};

function getPageTitle(key: string): string {
  if (pageTitles[key]) return pageTitles[key];
  return 'CA BYLDRS';
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState<PageKey>('home');
  const [history, setHistory] = useState<PageKey[]>(['home']);

  const navigate = useCallback((page: PageKey, options?: NavigateOptions) => {
    setCurrentPage(page);
    setHistory((prev) => [...prev, page]);

    // Only scroll to top if not explicitly disabled (e.g. for section scroll)
    if (options?.scroll !== false) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Track virtual pageview in GHL
    trackPageView(page, getPageTitle(page));
  }, []);

  const goBack = useCallback(() => {
    setHistory((prev) => {
      if (prev.length > 1) {
        const newHistory = prev.slice(0, -1);
        const prevPage = newHistory[newHistory.length - 1];
        setCurrentPage(prevPage);

        // Track virtual pageview in GHL
        trackPageView(prevPage, getPageTitle(prevPage));

        return newHistory;
      }
      setCurrentPage('home');
      trackPageView('home', 'Home');
      return ['home'];
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Track initial page load
  useEffect(() => {
    trackPageView('home', 'Home');
  }, []);

  // Listen for browser back button
  useEffect(() => {
    const handlePopState = () => {
      goBack();
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [goBack]);

  return (
    <RouterContext.Provider value={{ currentPage, navigate, goBack, history }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

export function parsePageKey(key: PageKey) {
  return { type: 'page' as const, key };
}
