---
Task ID: 1
Agent: Main Agent
Task: Update "The Shield" page with BYLDRS Guardian™ 10-Point Integrity Standard

Work Log:
- Read and analyzed existing ServicesOverviewPage.tsx (243 lines) and data.ts integrity standard section
- Added 10 new Lucide icons to data.ts imports (Clock, MessageSquare, DollarSign, Scale, Landmark, AlertTriangle, BadgeCheck, CalendarClock, ShieldOff, Building2)
- Created new `GuardianPoint` TypeScript interface with fields: number, title, subtitle, icon, theCheck, theProtection
- Created `guardianTenPoints` array with all 10 consumer-facing integrity points as specified
- Kept `integrityStandard` (20-point) data intact and rebranded section header as "Professional's Deep Audit"
- Completely rewrote ServicesOverviewPage.tsx with 5 sections:
  1. Hero: New headline "The BYLDRS Guardian™ 10-Point Integrity Standard" with sub-headline "We Audit the Professional so You Don't Have to Gamble on the Project"
  2. Guardian 10-Point Standard: Each point rendered as a card with number accent bar, icon, "The Check" and "The Protection" sub-cards
  3. Why It Matters: Retained existing 3x and 40% stats section
  4. Professional's Deep Audit: Moved 20-point list here with gold dark-blue design, labeled "For the Pros who move the needle"
  5. Bottom CTA: Dual buttons — "Request a Guardian-Vetted Partner" (homeowners) and "Explore the Guardian Path"
- Updated all CTA buttons: homeowner-facing ("Request a Guardian-Vetted Partner") and contractor-facing ("Apply for the 10-Point Audit")
- Lint passes cleanly
- Dev server compiles and serves page with 200 status

Stage Summary:
- The Shield page now leads with the consumer-facing 10-Point Integrity Standard as the page hero
- The 20-point operational checklist is preserved in a secondary "Professional's Deep Audit" section below
- All 10 points include The Check / The Protection card format with high-contrast icons
- CTAs updated for both homeowner and contractor audiences
- No data was deleted — the 20-point list was relocated to a professional-focused deep-dive section
