'use client';

import { RouterProvider, useRouter } from '@/lib/router-store';
import { Navbar } from '@/components/cnb/Navbar';
import { Footer } from '@/components/cnb/Footer';

// Homepage sections (rewritten for B2B)
import HeroSection from '@/components/cnb/homepage/HeroSection';
import TrustBar from '@/components/cnb/homepage/TrustBar';
import ComparisonSection from '@/components/cnb/homepage/WhyUsVsThem';
import PowerTriad from '@/components/cnb/homepage/ServicesGrid';
import ThreePillars from '@/components/cnb/homepage/ThreePillars';
import PartnershipModel from '@/components/cnb/homepage/ServiceJourney';
import ContractorJourney from '@/components/cnb/homepage/WhyChooseUs';
import CEOInvolvement from '@/components/cnb/homepage/SocialProof';
import UnfairAdvantage from '@/components/cnb/homepage/CountyCoverage';
import SocialProof from '@/components/cnb/homepage/BookingCalendar';
import FinalCTA from '@/components/cnb/homepage/HighIntentCTA';

// Inner pages
import TheEnginePage from '@/components/cnb/pages/ServicePage';
import TheShieldPage from '@/components/cnb/pages/ServicesOverviewPage';
import TheAlliancePage from '@/components/cnb/pages/AboutPage';
import ApplyPage from '@/components/cnb/pages/PartnerPage';
import ProPortalPage from '@/components/cnb/pages/ProPortalPage';
import PrivacyPage from '@/components/cnb/pages/PrivacyPage';
import TermsPage from '@/components/cnb/pages/TermsPage';
import { WhatsAppButton } from '@/components/cnb/WhatsAppButton';

function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ComparisonSection />
      <PowerTriad />
      <ThreePillars />
      <PartnershipModel />
      <ContractorJourney />
      <CEOInvolvement />
      <UnfairAdvantage />
      <SocialProof />
      <FinalCTA />
    </>
  );
}

function PageRouter() {
  const { currentPage } = useRouter();

  switch (currentPage) {
    case 'home':
      return <HomePage />;
    case 'engine':
      return <TheEnginePage />;
    case 'shield':
      return <TheShieldPage />;
    case 'alliance':
      return <TheAlliancePage />;
    case 'proportal':
      return <ProPortalPage />;
    case 'apply':
      return <ApplyPage />;
    case 'privacy':
      return <PrivacyPage />;
    case 'terms':
      return <TermsPage />;
    default:
      return <HomePage />;
  }
}

export default function Home() {
  return (
    <RouterProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main id="main-content" className="flex-1" role="main">
          <PageRouter />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </RouterProvider>
  );
}
