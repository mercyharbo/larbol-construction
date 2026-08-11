import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Larbol Construction Limited',
  description:
    'Read the official Privacy Policy for Larbol Construction Limited. Learn how we handle client data, project specifications, and site privacy.',
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <main className='w-full bg-[#F5F4F0] pt-24 pb-20 lg:pt-32 lg:pb-28 min-h-screen'>
      <div className='max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12'>
        
        <div className='space-y-4'>
          <span className='text-sm font-bold tracking-wide text-neutral-700 border border-neutral-300 px-4 py-1.5 rounded-full bg-white/70 inline-block mb-2'>
            Legal & Compliance
          </span>
          <h1 className='text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950 font-sans'>
            Privacy Policy
          </h1>
          <p className='text-neutral-500 text-sm font-mono'>
            Last Updated: August 2026 • Larbol Construction Limited (RC: 1742890)
          </p>
        </div>

        <div className='bg-white rounded-[28px] p-8 sm:p-12 border border-neutral-200/80 space-y-8 text-neutral-700 leading-relaxed text-base'>
          <section className='space-y-3'>
            <h2 className='text-2xl font-bold text-neutral-950 font-sans'>
              1. Information We Collect
            </h2>
            <p>
              Larbol Construction Limited (&quot;Larbol&quot;, &quot;we&quot;, &quot;us&quot;) collects information necessary to evaluate site parameters, issue Bill of Quantities (BOQ) proposals, and execute civil and architectural contracts. This includes contact details, site coordinates, organization names, and structural scope documents.
            </p>
          </section>

          <section className='space-y-3'>
            <h2 className='text-2xl font-bold text-neutral-950 font-sans'>
              2. How Information is Used
            </h2>
            <p>
              Client data is strictly utilized for engineering project management, regulatory compliance with bodies such as COREN, site safety auditing, procurement logistics, and contractual communications. We do not sell or monetize client data.
            </p>
          </section>

          <section className='space-y-3'>
            <h2 className='text-2xl font-bold text-neutral-950 font-sans'>
              3. Data Security & Confidentiality
            </h2>
            <p>
              We enforce physical, digital, and managerial safeguards to protect proprietary architectural blueprints, financial proposals, and confidential site data against unauthorized access.
            </p>
          </section>

          <section className='space-y-3'>
            <h2 className='text-2xl font-bold text-neutral-950 font-sans'>
              4. Contact Us
            </h2>
            <p>
              For privacy inquiries or compliance requests, contact our corporate legal department at{' '}
              <strong className='text-neutral-950'>info@larbolconstruction.com</strong> or visit our Victoria Island headquarters in Lagos.
            </p>
          </section>
        </div>

      </div>
    </main>
  )
}
