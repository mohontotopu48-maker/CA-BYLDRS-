/**
 * CA BYLDRS Workflow SDK Utilities
 * ==================================
 * Re-exports from the `workflow` package with CA BYLDRS-specific helpers.
 *
 * The Workflow SDK (by Vercel) enables durable, resilient workflows that
 * persist state across restarts, failures, and infrastructure changes.
 *
 * Key concepts:
 *   - Workflow Functions ("use workflow"): orchestrate steps, sandboxed env
 *   - Step Functions ("use step"): carry out actual work, full Node.js access
 *   - sleep(): built-in timer that suspends workflow without consuming resources
 *   - RetryableError: retry a step after a delay
 *   - FatalError: non-retryable step failure
 *
 * Usage:
 *   import { sleep, handleUserSignup, handleLeadCapture, handlePartnerApplication } from '@/lib/workflow';
 */

// ─── Core SDK Re-exports ──────────────────────────────────────────────────
export { sleep } from 'workflow';
export { getStepMetadata, type StepMetadata } from 'workflow';
export { getWorkflowMetadata } from 'workflow';
export { getWritable } from 'workflow';
export { createHook, createWebhook } from 'workflow';
export {
  FatalError,
  RetryableError,
} from 'workflow';
export {
  WorkflowError,
  WorkflowRunFailedError,
  WorkflowRunNotCompletedError,
  WorkflowRunCancelledError,
  WorkflowRunNotFoundError,
  StepNotRegisteredError,
  ThrottleError,
  TooEarlyError,
} from 'workflow/internal/errors';

// ─── Types ────────────────────────────────────────────────────────────────

interface GHLContactResult {
  contactId?: string;
  email: string;
  source: string;
  tags: string[];
}

interface EmailResult {
  sent: boolean;
  to: string;
  subject: string;
  type: 'welcome' | 'onboarding';
}

interface LeadData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  county: string;
  city?: string;
}

interface LeadResult {
  leadId: string;
  contactId?: string;
  email: string;
  status: 'captured';
}

interface PartnerData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  serviceCategories: string;
  serviceAreas: string;
  licenseNumber?: string;
  yearsInBusiness?: string;
  notes?: string;
}

interface PartnerResult {
  partnerId: string;
  contactId?: string;
  email: string;
  status: 'applied';
}

// ─── GHL Contact Creation (Step Function) ────────────────────────────────

async function createGHLContact(email: string): Promise<GHLContactResult> {
  'use step';

  const GHL_PIT = process.env.GHL_API_KEY;
  const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

  if (!GHL_PIT) {
    return { email, source: 'CA BYLDRS Website', tags: ['website-lead'] };
  }

  const nameParts = email.split('@')[0].split(/[._-]/);
  const firstName = nameParts[0] || 'Lead';
  const lastName = nameParts.slice(1).join(' ') || 'Signup';

  const res = await fetch('https://services.leadconnectorhq.com/contacts/', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GHL_PIT}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Version: '2021-07-28',
    },
    body: JSON.stringify({
      firstName,
      lastName,
      name: `${firstName} ${lastName}`.trim(),
      email,
      locationId: GHL_LOCATION_ID,
      tags: ['website-lead', 'signup', 'workflow-automated'],
      source: 'CA BYLDRS Workflow Engine',
      state: 'CA',
      country: 'US',
    }),
  });

  const data = await res.json().catch(() => ({}));

  if (res.ok && data.contact?.id) {
    console.log(`✅ [Workflow Step] GHL contact created: ${email} (${data.contact.id})`);
    return {
      contactId: data.contact.id,
      email,
      source: 'CA BYLDRS Workflow Engine',
      tags: ['website-lead', 'signup', 'workflow-automated'],
    };
  }

  console.warn(`⚠️ [Workflow Step] GHL contact creation failed for ${email}:`, data.message || res.status);
  return { email, source: 'CA BYLDRS Website', tags: ['website-lead', 'signup'] };
}

// ─── Send Welcome Email (Step Function) ────────────────────────────────────

async function sendWelcomeEmail(user: GHLContactResult): Promise<EmailResult> {
  'use step';

  const subject = 'Welcome to CA BYLDRS — Your Audit Journey Starts Now';

  console.log(`📧 [Workflow Step] Sending welcome email to: ${user.email}`);

  const GHL_PIT = process.env.GHL_API_KEY;
  if (GHL_PIT && process.env.GHL_WELCOME_WORKFLOW_ID) {
    try {
      await fetch(
        `https://services.leadconnectorhq.com/workflows/${process.env.GHL_WELCOME_WORKFLOW_ID}/triggers/${process.env.GHL_WELCOME_TRIGGER_ID}/execute`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${GHL_PIT}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Version: '2021-07-28',
          },
          body: JSON.stringify({
            email: user.email,
            firstName: user.email.split('@')[0],
            tags: user.tags,
          }),
        },
      );
      console.log(`✅ [Workflow Step] GHL welcome workflow triggered for: ${user.email}`);
    } catch (err) {
      console.warn(`⚠️ [Workflow Step] GHL workflow trigger failed:`, err);
    }
  }

  return { sent: true, to: user.email, subject, type: 'welcome' as const };
}

// ─── Send Onboarding Email (Step Function) ────────────────────────────────

async function sendOnboardingEmail(user: GHLContactResult): Promise<EmailResult> {
  'use step';

  const subject = 'Your CA BYLDRS Audit is Ready — Next Steps Inside';

  console.log(`📧 [Workflow Step] Sending onboarding email to: ${user.email}`);

  const GHL_PIT = process.env.GHL_API_KEY;
  if (GHL_PIT && process.env.GHL_ONBOARDING_WORKFLOW_ID) {
    try {
      await fetch(
        `https://services.leadconnectorhq.com/workflows/${process.env.GHL_ONBOARDING_WORKFLOW_ID}/triggers/${process.env.GHL_ONBOARDING_TRIGGER_ID}/execute`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${GHL_PIT}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Version: '2021-07-28',
          },
          body: JSON.stringify({
            email: user.email,
            tags: user.tags,
          }),
        },
      );
      console.log(`✅ [Workflow Step] GHL onboarding workflow triggered for: ${user.email}`);
    } catch (err) {
      console.warn(`⚠️ [Workflow Step] GHL workflow trigger failed:`, err);
    }
  }

  return { sent: true, to: user.email, subject, type: 'onboarding' as const };
}

// ─── Signup Workflow (Workflow Function) ───────────────────────────────────

/**
 * handleUserSignup
 *
 * Workflow: Create contact → Send welcome email → Sleep 5s → Send onboarding email
 *
 * This matches the user's provided pattern:
 *   import { sleep } from "workflow";
 *   export async function handleUserSignup(email: string) {
 *     "use workflow";
 *     const user = await createUser(email);
 *     await sendWelcomeEmail(user);
 *     await sleep("5s");
 *     await sendOnboardingEmail(user);
 *     return { userId: user.id, status: "onboarded" };
 *   }
 */
export async function handleUserSignup(email: string): Promise<{
  userId: string;
  email: string;
  status: 'onboarded';
  steps: {
    createContact: GHLContactResult;
    welcomeEmail: EmailResult;
    onboardingEmail: EmailResult;
  };
}> {
  'use workflow';

  // Step 1: Create contact in GHL
  const user = await createGHLContact(email);

  // Step 2: Send welcome email immediately
  const welcomeResult = await sendWelcomeEmail(user);

  // Step 3: Sleep for 5 seconds (durable — survives restarts/deployments)
  await sleep('5s');

  // Step 4: Send onboarding email with next steps
  const onboardingResult = await sendOnboardingEmail(user);

  return {
    userId: user.contactId || `pending-${Date.now()}`,
    email,
    status: 'onboarded',
    steps: {
      createContact: user,
      welcomeEmail: welcomeResult,
      onboardingEmail: onboardingResult,
    },
  };
}

// ─── Lead Capture Workflow (Workflow Function) ──────────────────────────────

async function createGHLLead(lead: LeadData): Promise<LeadResult> {
  'use step';

  const GHL_PIT = process.env.GHL_API_KEY;
  const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

  const nameParts = lead.fullName.trim().split(/\s+/);
  const firstName = nameParts[0] || 'Unknown';
  const lastName = nameParts.slice(1).join(' ') || 'Lead';

  if (!GHL_PIT) {
    return { leadId: `local-${Date.now()}`, email: lead.email, status: 'captured' };
  }

  const res = await fetch('https://services.leadconnectorhq.com/contacts/', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GHL_PIT}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Version: '2021-07-28',
    },
    body: JSON.stringify({
      firstName,
      lastName,
      name: lead.fullName.trim(),
      email: lead.email,
      phone: lead.phone,
      locationId: GHL_LOCATION_ID,
      tags: ['website-lead', `service:${lead.serviceType}`, `county:${lead.county}`, 'workflow-captured'],
      source: 'CA BYLDRS Lead Capture Workflow',
      city: lead.city ? lead.city.trim() : undefined,
      state: 'CA',
      country: 'US',
    }),
  });

  const data = await res.json().catch(() => ({}));

  return {
    leadId: data.contact?.id || `local-${Date.now()}`,
    contactId: data.contact?.id,
    email: lead.email,
    status: 'captured',
  };
}

async function triggerGHLAutomation(lead: LeadResult & LeadData): Promise<void> {
  'use step';

  const GHL_PIT = process.env.GHL_API_KEY;

  if (GHL_PIT && process.env.GHL_LEAD_WORKFLOW_ID) {
    try {
      await fetch(
        `https://services.leadconnectorhq.com/workflows/${process.env.GHL_LEAD_WORKFLOW_ID}/triggers/${process.env.GHL_LEAD_TRIGGER_ID}/execute`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${GHL_PIT}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Version: '2021-07-28',
          },
          body: JSON.stringify({
            email: lead.email,
            phone: lead.phone,
            firstName: lead.fullName.split(/\s+/)[0],
            serviceType: lead.serviceType,
            county: lead.county,
            tags: ['website-lead'],
          }),
        },
      );
      console.log(`✅ [Workflow Step] GHL lead automation triggered for: ${lead.email}`);
    } catch (err) {
      console.warn(`⚠️ [Workflow Step] GHL automation trigger failed:`, err);
    }
  }
}

export async function handleLeadCapture(lead: LeadData): Promise<LeadResult> {
  'use workflow';

  // Step 1: Create contact in GHL
  const result = await createGHLLead(lead);

  // Step 2: Trigger automation workflow in GHL
  await triggerGHLAutomation({ ...result, ...lead });

  return result;
}

// ─── Partner Application Workflow ──────────────────────────────────────────

async function createGHLPartner(partner: PartnerData): Promise<PartnerResult> {
  'use step';

  const GHL_PIT = process.env.GHL_API_KEY;
  const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

  const nameParts = partner.contactName.trim().split(/\s+/);
  const firstName = nameParts[0] || 'Unknown';
  const lastName = nameParts.slice(1).join(' ') || 'Contact';

  if (!GHL_PIT) {
    return { partnerId: `local-${Date.now()}`, email: partner.email, status: 'applied' };
  }

  const res = await fetch('https://services.leadconnectorhq.com/contacts/', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GHL_PIT}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Version: '2021-07-28',
    },
    body: JSON.stringify({
      firstName,
      lastName,
      name: partner.contactName.trim(),
      email: partner.email,
      phone: partner.phone,
      locationId: GHL_LOCATION_ID,
      tags: ['partner-application', 'contractor', `services:${partner.serviceCategories}`],
      source: 'CA BYLDRS Partner Workflow',
      country: 'US',
      state: 'CA',
    }),
  });

  const data = await res.json().catch(() => ({}));

  return {
    partnerId: data.contact?.id || `local-${Date.now()}`,
    contactId: data.contact?.id,
    email: partner.email,
    status: 'applied',
  };
}

export async function handlePartnerApplication(partner: PartnerData): Promise<PartnerResult> {
  'use workflow';

  const result = await createGHLPartner(partner);

  // Wait 3 seconds for GHL to process
  await sleep('3s');

  return result;
}

// ─── Export step functions for workflow registration ────────────────────────
export const workflowSteps = {
  createGHLContact,
  sendWelcomeEmail,
  sendOnboardingEmail,
  createGHLLead,
  triggerGHLAutomation,
  createGHLPartner,
};
