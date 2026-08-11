export interface MissionPillar {
  number: string
  title: string
  description: string
  bg: string
  accentBtn: string
}

export interface ExecutiveMember {
  name: string
  position: string
  image: string
  experience: string
  specialization: string
  bio: string
}

export interface CompanyStat {
  value: string
  label: string
}

export interface FaqItem {
  question: string
  answer: string
}

export const missionPillars: MissionPillar[] = [
  {
    number: '01.',
    title: 'Engineering Precision',
    description:
      'We combine advanced structural calculations, site preparation, and high-grade materials to construct resilient buildings designed to withstand generations.',
    bg: 'bg-[#121417] text-white',
    accentBtn: 'bg-[#D4F639] text-neutral-950',
  },
  {
    number: '02.',
    title: 'Sustainable Innovation',
    description:
      'Pioneering green construction techniques, thermal envelope optimization, and eco-certified building materials to minimize environmental impact.',
    bg: 'bg-[#D4F639] text-neutral-950',
    accentBtn: 'bg-neutral-950 text-white',
  },
  {
    number: '03.',
    title: 'Uncompromising Integrity',
    description:
      'Maintaining 100% transparency in procurement, COREN safety compliance, and on-time project execution across commercial and civil contracts.',
    bg: 'bg-[#1A1D1F] text-white',
    accentBtn: 'bg-[#D4F639] text-neutral-950',
  },
]

export const executiveTeam: ExecutiveMember[] = [
  {
    name: 'Afolabi Adebola Khadijah',
    position: 'Chief Executive Officer (CEO)',
    image: '/ceo.jpg',
    experience: '15+ Years',
    specialization: 'Strategic Corporate Leadership & Asset Development',
    bio: 'Visionary construction executive specializing in corporate growth, strategic capital allocation, and large-scale real estate developments.',
  },
  {
    name: 'Afolabi Ridwan Damilare',
    position: 'Lead Architect & Principal Design Director',
    image: '/mercy.JPEG',
    experience: '12+ Years',
    specialization: 'Bespoke Architectural Design & Urban Planning',
    bio: 'Renowned architect passionate about fusing modern structural aesthetics with functional, sustainable living environments.',
  },
  {
    name: 'Afolabi Moshood Opeyemi',
    position: 'Lead Project Manager & Civil Director',
    image: '/makols.JPEG',
    experience: '10+ Years',
    specialization: 'Civil Engineering & Site Operations',
    bio: 'Operations specialist overseeing structural execution, heavy machinery logistics, and site safety protocols across major infrastructure sites.',
  },
]

export const companyStats: CompanyStat[] = [
  { value: '15+', label: 'Years of Engineering Excellence' },
  { value: '250+', label: 'Landmark Projects Completed' },
  { value: '100%', label: 'Safety Compliance Record' },
  { value: '₦50B+', label: 'Capital Portfolio Delivered' },
]

export const faqs: FaqItem[] = [
  {
    question: 'What types of construction projects does Larbol handle?',
    answer:
      'Larbol Construction specializes in commercial office towers, civil infrastructure (roads and bridges), high-end residential estates, and turnkey project management across Nigeria.',
  },
  {
    question: 'Are your engineers registered with COREN and industry bodies?',
    answer:
      'Yes, all lead structural engineers at Larbol Construction are fully certified by COREN (Council for the Regulation of Engineering in Nigeria) and the company is CAC registered (RC: 1742890).',
  },
  {
    question: 'How do I request a formal project proposal or site assessment?',
    answer:
      'You can request a consultation through our website contact form or by contacting our Lagos office. Our team will schedule an initial site evaluation and deliver a detailed Bill of Quantities (BOQ).',
  },
  {
    question: 'Do you provide warranties on structural developments?',
    answer:
      'Absolutely. We provide comprehensive structural warranties on all completed building frameworks and infrastructure assets.',
  },
]
