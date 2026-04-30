import {
  Cpu,
  Shield,
  Handshake,
  FileCheck,
  Video,
  BarChart3,
  Target,
  TrendingUp,
  Award,
  Users,
  CheckCircle2,
  Zap,
  Clock,
  MessageSquare,
  DollarSign,
  Scale,
  Landmark,
  AlertTriangle,
  BadgeCheck,
  CalendarClock,
  ShieldOff,
  Building2,
  Wrench,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/* ─── Navigation ─── */
export const navLinks = [
  { label: "The Engine", href: "engine" },
  { label: "The Shield", href: "shield" },
  { label: "The Alliance", href: "alliance" },
  { label: "Pro-Shop", href: "proshop" },
  { label: "Pro-Portal", href: "proportal" },
  { label: "Apply Now", href: "apply" },
];

/* ─── Footer Links ─── */
export const footerLinks = {
  platform: [
    { label: "The Engine", href: "engine" },
    { label: "The Shield", href: "shield" },
    { label: "The Alliance", href: "alliance" },
    { label: "Pro-Shop", href: "proshop" },
    { label: "Pro-Portal", href: "proportal" },
    { label: "Apply Now", href: "apply" },
  ],
  company: [
    { label: "Privacy Policy", href: "privacy" },
    { label: "Terms of Service", href: "terms" },
  ],
};

/* ─── The Power Triad ─── */
export interface TriadItem {
  id: string;
  name: string;
  subtitle: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  href: string;
}

export const powerTriad: TriadItem[] = [
  {
    id: "engine",
    name: "NXLBYLDR™ OS",
    subtitle: "The Engine",
    icon: Cpu,
    description:
      "NXLBYLDR™ scales businesses using an exclusive 8-channel ecosystem to deliver more Calls, Clicks, and Customers. A high-tech GoHighLevel-powered operating system that automates your entire sales pipeline — from lead capture to close.",
    features: [
      "Automated lead capture & instant routing",
      "60-second speed-to-lead response system",
      "AI-powered follow-up sequences",
      "GEO & AI Optimization (AIO) — Siri, Alexa, ChatGPT-ready",
      "Pipeline tracking & ROI dashboard",
      "Review generation automation",
      "CRM + Marketing automation in one",
      "8-channel marketing ecosystem (Google, Meta, Yelp, GBP, LinkedIn, Organic, Referral, Video)",
      "Daily content management (3 posts/day across all platforms)",
    ],
    href: "engine",
  },
  {
    id: "shield",
    name: "BYLDRS Guardian",
    subtitle: "The Shield",
    icon: Shield,
    description:
      "The consumer trust certification that separates you from every other contractor. The Guardian Gold Seal signals verified expertise, insurance, and accountability — so homeowners choose you with confidence and pay premium margins.",
    features: [
      "Guardian Gold Seal certification badge",
      "Verified CA License & Insurance status",
      "Consumer trust rating system",
      "Premium positioning on all platforms",
      "Background-checked & vetted status",
      "Monthly compliance monitoring",
    ],
    href: "shield",
  },
  {
    id: "alliance",
    name: "CA BYLDRS",
    subtitle: "The Alliance",
    icon: Handshake,
    description:
      "The Elite B2B Unified Referral Network connecting licensed contractors with high-intent, exclusive leads across Orange County and Los Angeles County. NXLBYLDR™ scales businesses using an exclusive 8-channel ecosystem. No shared leads. No race to the bottom.",
    features: [
      "Exclusive & semi-exclusive lead flow",
      "OC & LA County territory coverage",
      "Personal brand video production",
      "Monthly Strategy Deep-Dive sessions",
      "Done-for-you marketing engine",
      "Community of elite professionals",
    ],
    href: "alliance",
  },
];

/* ─── Contractor Journey ─── */
export const contractorJourney = [
  {
    step: 1,
    title: "Integrity Audit",
    description:
      "We verify your CA License, Insurance, and Workers' Comp. No shortcuts — every partner meets our gold standard before entering the Alliance.",
    icon: FileCheck,
  },
  {
    step: 2,
    title: "Strategic Sync",
    description:
      "A mandatory 60-minute onboarding with our CSO and Tech Team. We align your business goals with the NXLBYLDR™ OS infrastructure and set your growth KPIs.",
    icon: Target,
  },
  {
    step: 3,
    title: "Digitization",
    description:
      "We film your process and build your Guardian brand profile. High-end video content that positions you as the Neighborhood Authority in your market.",
    icon: Video,
  },
  {
    step: 4,
    title: "Deployment",
    description:
      "Switch on the NXLBYLDR™ OS and initiate the Alpha Trial lead flow. Your automated sales engine is live — and the leads start flowing.",
    icon: Zap,
  },
];

/* ─── Comparison Data ─── */
export const comparisonData = {
  competitors: [
    { label: "Angi", leadType: "Shared (5+ pros)", costPerLead: "$180+", personalBrand: "None", automation: "None", trustSignal: "Star ratings only" },
    { label: "Yelp", leadType: "Shared (unlimited)", costPerLead: "$150+", personalBrand: "Profile only", automation: "None", trustSignal: "Reviews only" },
    { label: "HomeAdvisor", leadType: "Shared (3-5 pros)", costPerLead: "$200+", personalBrand: "None", automation: "Basic", trustSignal: "Screened badge" },
    { label: "Thumbtack", leadType: "Shared (pay-per-quote)", costPerLead: "$15–$100+", personalBrand: "Limited", automation: "None", trustSignal: "None" },
  ],
  cabuilders: {
    leadType: "Exclusive / Semi-Exclusive",
    costPerLead: "Proven ROI First",
    personalBrand: "Full Video Production",
    automation: "Full NXLBYLDR™ OS",
    trustSignal: "Guardian Gold Seal",
  },
};

/* ─── Partnership Phases ─── */
export const partnershipPhases = [
  {
    phase: 1,
    name: "The Alpha Discovery Trial",
    description:
      "Think of Phase 1 as a test drive — except you're the one proving you deserve the car. We deploy your NXLBYLDR™ OS infrastructure, manage your social media (3 posts/day), run your ads, and initiate the high-trust lead flow. We prove the ROI first with 15-day growth reports — before you commit to the full Alliance.",
    highlights: [
      "Full OS setup & configuration",
      "Initial lead flow activation",
      "Speed-to-lead benchmarking",
      "ROI tracking dashboard",
      "No upfront investment risk",
      "3 social media posts/day across Instagram, Facebook, LinkedIn, Yelp & Google Business Profile",
      "Full management of Social, Google & Yelp Ads",
      "15-day growth & ROI reports",
    ],
  },
  {
    phase: 2,
    name: "The Full Alliance Integration",
    description:
      "Once we find the leads and prove the system works (after the second month), we lock in the full partnership. You know exactly what you're investing in because you've seen tangible results.",
    highlights: [
      "Unlimited lead flow access",
      "Advanced automation & AI",
      "Personal brand content production",
      "Monthly Strategy Deep-Dive",
      "Guardian Gold Seal certification",
      "Priority territory rights",
      "8-channel marketing dominance",
      "Daily content management continues",
    ],
  },
];

/* ─── CEO Involvement Data ─── */
export const ceoInvolvement = {
  tagline: "The Done-For-You Standard That Requires Partner Leadership",
  description:
    "We are a Done-For-You service that requires Partner Leadership. Every member must commit to a 30-60 minute Monthly Strategy Sync to review the NXLBYLDR™ Task Log and ROI Calibration Report. If you aren't ready to lead your growth, we aren't the right fit. We build the engine; you steer the ship.",
  syncDetails: [
    { icon: BarChart3, title: "NXLBYLDR™ Task Log Review", description: "Deep-dive into automated task performance and completion rates" },
    { icon: TrendingUp, title: "Speed-to-Lead Analysis", description: "Real-time data on response times and conversion metrics" },
    { icon: Target, title: "ROI Calibration Report", description: "Comprehensive breakdown of revenue attribution and growth trajectory" },
  ],
};

/* ─── Unfair Advantage Data ─── */
export const unfairAdvantage = {
  headline: "From Worker to Neighborhood Authority",
  description:
    "We don't just send leads — NXLBYLDR™ scales businesses using an exclusive 8-channel ecosystem. We film your members, create high-end content, and manage your ads and social dominance so the phone rings. Homeowners get to know you before you even arrive.",
  benefits: [
    { icon: Video, title: "Professional Video Production", description: "We film your process, your team, and your results — turning your expertise into compelling content." },
    { icon: Award, title: "Personal Brand Authority", description: "Position yourself as the go-to expert in your service area. 3 social media posts daily across Instagram, Facebook, LinkedIn, Yelp, and Google Business Profile." },
    { icon: Users, title: "Pre-Sold Homeowners", description: "Clients already know and trust you before the first estimate." },
    { icon: CheckCircle2, title: "Premium Margin Justification", description: "Stop racing to the bottom. Command premium pricing backed by credibility." },
  ],
};

/* ─── Guardian Path Phases (Pro-Portal) ─── */
export const guardianPathPhases = [
  {
    phase: 1,
    name: "Performance Audit",
    price: "$1,000 Entry",
    priceBreakdown: "$500 Setup + $500 Ad Spend",
    tagline: "Prove It Before You Pay for It.",
    description:
      "Your $1,000 Entry is split exactly where it matters. We build your high-end Personal Brand Portfolio, integrate the NXLBYLDR™ tracking engine into your business, and audit your current response times and lead-handling. 100% of the ad spend goes to the market to generate live projects.",
    deliverables: [
      "High-end Personal Brand Portfolio built",
      "NXLBYLDR™ tracking engine integrated",
      "Response time & lead-handling audit",
      "$500 direct ad spend deployed",
      "15-day Truth Dashboard ROI reports",
      "Baseline ROI verification",
    ],
  },
  {
    phase: 2,
    name: "NXLBYLDR™ Systems Integration",
    price: "Full Alliance",
    priceBreakdown: "AI Bot & CRM deployment for scale",
    tagline: "Scale What We Just Proved.",
    description:
      "Once Phase 1 proves your ROI, we deploy the full NXLBYLDR™ OS. AI-powered lead qualification, automated follow-up, review generation, calendar sync, and the complete 8-channel ecosystem — all running on autopilot.",
    deliverables: [
      "Full NXLBYLDR™ OS deployment",
      "AI Bot for lead qualification",
      "CRM & pipeline automation",
      "8-channel marketing ecosystem",
      "3 posts/day content management",
      "Monthly Strategy Sync with CSO",
    ],
  },
  {
    phase: 3,
    name: "Full CA BYLDRS Membership",
    price: "Elite Alliance",
    priceBreakdown: "Guardian Seal & Referral Network",
    tagline: "Own the Market. Protect the Standard.",
    description:
      "The Authorized Monopoly of Trust in your city. You carry the Guardian Gold Seal, command premium margins, and receive exclusive referrals from the entire Alliance network. You aren't a solo operator — you're part of a consortium that protects the industry standard.",
    deliverables: [
      "Guardian Gold Seal certification",
      "Exclusive territory rights",
      "Alliance referral network access",
      "Priority lead flow",
      "Community of verified elite pros",
      "Quarterly brand refresh & video shoots",
    ],
  },
];

/* ─── The 3 Pillars of the Alliance ─── */
export const threePillars = [
  {
    title: "Vetted Authority",
    description:
      "We don't just list you; we verify you. Passing Phase 1 is your first step toward the Guardian Seal — the Apple-standard of consumer trust in California. Every contractor in the Alliance carries the same verified credential.",
    icon: Shield,
    stat: "100%",
    statLabel: "Verified & Licensed",
  },
  {
    title: "Performance Tech",
    description:
      "Stop guessing. Use our NXLBYLDR™ engine to track every single dollar of your $500 spend. Access your \"Truth Dashboard\" to see your real-time ROI — Calls, Clicks, and Customers measured with surgical precision.",
    icon: BarChart3,
    stat: "8",
    statLabel: "Marketing Channels",
  },
  {
    title: "The Alliance",
    description:
      "You aren't a solo operator anymore. You are entering a consortium of elite pros who protect the industry standard and refer business only to those who carry the Seal. Your territory. Your brand. Your market.",
    icon: Handshake,
    stat: "2",
    statLabel: "Spots Per City",
  },
];

/* ─── Live Audit Ticker Data ─── */
export const auditTickerData = {
  auditsInProgress: 14,
  spotsRemaining: "Fullerton",
  spotsCount: 2,
  nextInduction: "April 15th",
};

/* ─── BYLDRS Guardian™ 10-Point Integrity Standard (The Shield — Consumer-Facing) ─── */
export interface GuardianPoint {
  number: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  theCheck: string;
  theProtection: string;
}

export const guardianTenPoints: GuardianPoint[] = [
  {
    number: 1,
    title: "Real-Time 30-Day Vetting",
    subtitle: "License & Insurance",
    icon: Clock,
    theCheck: "Monthly verification of CA CSLB Licenses, $1M+ General Liability, and Active Workers' Comp.",
    theProtection: "Most platforms check once a year. We check every 30 days to ensure you are never liable for onsite accidents or unlicensed work.",
  },
  {
    number: 2,
    title: "No-Ghosting Communication Guarantee",
    subtitle: "Real-Time Production Portal",
    icon: MessageSquare,
    theCheck: "Integration with the NXLBYLDR™ Real-Time Production Portal.",
    theProtection: "Eliminates the 'Deposit Ghosting' phase. You receive automated updates, photo progress, and direct access to your team from start to finish.",
  },
  {
    number: 3,
    title: "Legal Payment Protection",
    subtitle: "CSLB Compliance",
    icon: DollarSign,
    theCheck: "Strict enforcement of CA State down-payment limits (10% or $1,000 max).",
    theProtection: "You keep the financial leverage. We ensure our partners never demand illegal upfront deposits, keeping your investment safe.",
  },
  {
    number: 4,
    title: "Fixed-Price Integrity",
    subtitle: "No Bait-and-Switch",
    icon: Scale,
    theCheck: "Mandatory 'Root Cause' identification before final bidding.",
    theProtection: "Prevents mid-job price spikes. The price quoted is the price you pay, backed by digital change orders for any requested additions.",
  },
  {
    number: 5,
    title: "Clean Legal & Financial Standing",
    subtitle: "Annual Audit",
    icon: Landmark,
    theCheck: "Annual audit for outstanding lawsuits, liens, material legal judgments, or financial insolvency.",
    theProtection: "We only partner with stable, verified home improvement businesses with a physical local office and a clean record.",
  },
  {
    number: 6,
    title: "24-Hour Transparency Protocol",
    subtitle: "Mandatory Mishap Reporting",
    icon: AlertTriangle,
    theCheck: "Mandatory mishap reporting and resolution SOPs.",
    theProtection: "If a minor accident happens (a cracked tile or sprinkler), our pros are required to notify you and provide a written resolution within 24 hours.",
  },
  {
    number: 7,
    title: "Certified Craftsmanship & Warranty Guard",
    subtitle: "Factory-Trained Verification",
    icon: BadgeCheck,
    theCheck: "Verification of 5+ years experience and factory-trained certifications.",
    theProtection: "Ensures your 20-30 year manufacturer warranties remain valid. Uncertified labor voids warranties—Guardian labor protects them.",
  },
  {
    number: 8,
    title: "Honoring Your 'Cooling-Off' Rights",
    subtitle: "CA Civil Code 1689.6",
    icon: CalendarClock,
    theCheck: "Adherence to CA Civil Code 1689.6 (3-to-5 day cancellation rights).",
    theProtection: "We never allow high-pressure 'instant starts.' We respect your legal right to reflect on your decision before the hammer swings.",
  },
  {
    number: 9,
    title: "Zero-Footprint Property Protection",
    subtitle: "Site Restoration Protocols",
    icon: ShieldOff,
    theCheck: "Standardized 'Site Restoration' protocols and landscape shielding.",
    theProtection: "Your kids, pets, and driveways stay safe. Our pros follow a strict clean-up routine to leave your home exactly how they found it.",
  },
  {
    number: 10,
    title: "Local Permit & Code Compliance",
    subtitle: "LA/OC Building Code Adherence",
    icon: Building2,
    theCheck: "Verification of LA/OC city-specific building code adherence.",
    theProtection: "No 'stop-work' orders or city fines. We handle the red tape to ensure your project adds real, legal value to your home equity.",
  },
];

/* ─── 20-Point Operational Deep Audit (The Shield — Professional) ─── */
export const integrityStandard = {
  title: "The BYLDRS Guardian™ 20-Point Integrity Standard",
  subheadline:
    "We don't just verify your license. We audit your entire operation to ensure you are the elite choice for Southern California homeowners.",
  points: [
    { title: "5-Year Minimum Experience", description: "Verified business history in your specific trade." },
    { title: "Reputation Audit", description: "Monthly 5-star review and cross-platform sentiment check." },
    { title: "Active CSLB Licensing", description: "Real-time monthly verification of your CA State License." },
    { title: "$1M+ General Liability", description: "Active coverage verified monthly for consumer protection." },
    { title: "Workers' Comp Compliance", description: "Verified active coverage or legal exempt status." },
    { title: "Financial Solvency", description: "Annual business health and fiscal stability audit." },
    { title: "Clean Legal Record", description: "Background audit free of material lawsuits or judgments." },
    { title: "Verified Physical Office", description: "Confirmation of local operations and business licensing." },
    { title: "BYLDRS Code of Ethics", description: "Signed commitment to high-integrity trade practices." },
    { title: "Local Market Expertise", description: "Verification of OC/LA service area and neighborhood knowledge." },
    { title: "CSLB Payment Integrity", description: "Strict adherence to CA down-payment legal limits." },
    { title: "Consumer Bill of Rights", description: "Honoring all 3–5 day legal cooling-off periods." },
    { title: "Upfront Pricing Transparency", description: "Core-issue identification before final quotes." },
    { title: "Documented Site Protocol", description: "Standardized SOPs for property protection and safety." },
    { title: "24-Hour Accident Policy", description: "Mandatory mishap reporting and resolution transparency." },
    { title: "NXLBYLDR™ OS Integration", description: "Full use of our unified production and communication system." },
    { title: "Homeowner Financing Access", description: "Partnership with authorized lenders for payment options." },
    { title: "Insurance Claim Navigation", description: "Certified expertise in documenting insurance-related builds." },
    { title: "Mandatory CEO Strategy Sync", description: "Monthly 60-minute ROI review with our CSO." },
    { title: "Guardian Maintenance Plans", description: "Authorization to offer recurrent neighborhood service plans." },
  ],
  valueAdd: {
    title: "Authority Branding Video",
    description: "High-impact Guardian Authority Video introducing the contractor, their story, and their 'Why' — produced by our team as part of the Alpha Trial to maximize trust before the first call.",
  },
};

/* ─── Services ─── */
export interface ServiceItem {
  slug: string;
  name: string;
  icon: LucideIcon;
  description: string;
  shortDescription?: string;
  features?: string[];
  faqs?: Array<{ q: string; a: string }>;
}

export const services: ServiceItem[] = [
  { slug: 'roofing', name: 'Roofing', icon: Shield, description: 'Expert roof repair, replacement, and maintenance.', shortDescription: 'Expert roof repair, replacement, and storm damage restoration.' },
  { slug: 'hvac', name: 'HVAC', icon: Zap, description: 'Heating, ventilation, and air conditioning services.', shortDescription: 'Complete heating and cooling installation and maintenance.' },
  { slug: 'plumbing', name: 'Plumbing', icon: Wrench, description: 'Full-service plumbing repair and installation.', shortDescription: 'Full-service plumbing repair, installation, and emergency fixes.' },
  { slug: 'electrical', name: 'Electrical', icon: Zap, description: 'Licensed electrical work for homes and businesses.', shortDescription: 'Licensed electrical work for residential and commercial properties.' },
  { slug: 'painting', name: 'Painting', icon: Sparkles, description: 'Interior and exterior painting services.', shortDescription: 'Interior and exterior painting with premium finishes.' },
  { slug: 'landscaping', name: 'Landscaping', icon: Landmark, description: 'Professional landscaping design and maintenance.', shortDescription: 'Professional landscaping design, installation, and maintenance.' },
];

/* ─── Counties ─── */
export interface CountyItem {
  slug: string;
  name: string;
  tagline?: string;
  description: string;
  image: string;
  cities?: string[];
}

export const counties: CountyItem[] = [
  { slug: 'orange-county', name: 'Orange County', tagline: 'Premium Home Services Across OC', description: 'Full service coverage across Orange County with verified, licensed professionals.', image: '/oc.jpg', cities: ['Anaheim', 'Irvine', 'Santa Ana', 'Huntington Beach', 'Garden Grove', 'Fullerton', 'Costa Mesa', 'Orange', 'Mission Viejo', 'Newport Beach', 'Laguna Niguel', 'Yorba Linda', 'Tustin', 'Brea', 'Westminster'] },
  { slug: 'los-angeles-county', name: 'Los Angeles County', tagline: 'Trusted Professionals Across LA', description: 'Full service coverage across Los Angeles County with elite, Guardian-certified contractors.', image: '/la.jpg', cities: ['Long Beach', 'Santa Monica', 'Pasadena', 'Burbank', 'Glendale', 'Torrance', 'Lakewood', 'Norwalk', 'Downey', 'Whittier', 'Pico Rivera', 'Cerritos', 'La Mirada', 'Santa Fe Springs', 'Culver City'] },
];

/* ─── County Services ─── */
export const countyServices = services.map((s) => ({ slug: s.slug, service: s.name }));

/* ─── Trust Stats ─── */
export const trustStats = [
  { value: "60s", label: "Speed-to-Lead" },
  { value: "100%", label: "Exclusive Territories" },
  { value: "0", label: "Shared Leads Sold" },
  { value: "8", label: "Marketing Channels" },
];
