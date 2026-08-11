import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Larbol Construction Limited',
  description:
    'Read the official Terms of Service for Larbol Construction Limited governing engineering contracts, BOQ tenders, site consultations, and website usage.',
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  return (
    <main className='w-full bg-[#F5F4F0] pt-24 pb-20 lg:pt-32 lg:pb-28 min-h-screen'>
      <div className='max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12'>
        
        <div className='space-y-4'>
          <span className='text-sm font-bold tracking-wide text-neutral-700 border border-neutral-300 px-4 py-1.5 rounded-full bg-white/70 inline-block mb-2'>
            Legal & Terms
          </span>
          <h1 className='text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950 font-sans'>
            Terms of Service
          </h1>
          <p className='text-neutral-500 text-sm font-mono'>
            Last Updated: August 2026 • Larbol Construction Limited (RC: 1742890)
          </p>
        </div>

        <div className='bg-white rounded-[28px] p-8 sm:p-12 border border-neutral-200/80 space-y-8 text-neutral-700 leading-relaxed text-base'>
          <section className='space-y-3'>
            <h2 className='text-2xl font-bold text-neutral-950 font-sans'>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the website or engaging Larbol Construction Limited for site evaluations, engineering designs, or construction contracting, you agree to comply with these Terms of Service and applicable laws of the Federal Republic of Nigeria.
            </p>
          </section>

          <section className='space-y-3'>
            <h2 className='text-2xl font-bold text-neutral-950 font-sans'>
              2. Structural Engineering & Contracting
            </h2>
            <p>
              All engineering works, foundation piling, civil highway construction, and commercial developments are executed in strict accordance with signed contracts, approved Bill of Quantities (BOQ), COREN regulatory standards, and local building codes.
            </p>
          </section>

          <section className='space-y-3'>
            <h2 className='text-2xl font-bold text-neutral-950 font-sans'>
              3. Intellectual Property & Blueprints
            </h2>
            <p>
              All architectural renderings, BIM models, site photographs, structural calculations, and brand marks displayed on this platform remain the intellectual property of Larbol Construction Limited.
            </p>
          </section>

          <section className='space-y-3'>
            <h2 className='text-2xl font-bold text-neutral-950 font-sans'>
              4. Governing Law
            </h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of Nigeria. Any disputes arising out of construction contracts shall be subject to arbitration in Lagos State, Nigeria.
            </p>
          </section>
        </div>

      </div>
    </main>
  )
}
