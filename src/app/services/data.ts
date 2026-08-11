export interface ServiceItem {
  id: string
  number: string
  title: string
  category: string
  description: string
  image: string
  features: string[]
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export const servicesList: ServiceItem[] = [
  {
    id: 'road-construction',
    number: '01.',
    title: 'Civil & Highway Engineering',
    category: 'Civil Infrastructure',
    description:
      'Turnkey asphalt road construction, arterial highways, bridge foundation piling, and storm water drainage networks engineered for heavy axle loads.',
    image: '/images/slides/slide-2.jpg',
    features: ['Asphalt Paving & Rehabilitation', 'Bridge & Flyover Foundations', 'Stormwater Culverts & Drainage'],
  },
  {
    id: 'building-construction',
    number: '02.',
    title: 'Commercial & Multi-Family Towers',
    category: 'Building Construction',
    description:
      'High-rise commercial office headquarters, luxury residential apartment complexes, and structural steel framed towers built to strict COREN standards.',
    image: '/images/slides/slide-1.jpg',
    features: ['Reinforced Concrete Framing', 'Curtain Wall & Facade Systems', 'Turnkey Fit-Out Execution'],
  },
  {
    id: 'industrial-facilities',
    number: '03.',
    title: 'Industrial & Logistics Parks',
    category: 'Industrial Construction',
    description:
      'Heavy-duty industrial warehouses, manufacturing plants, logistics hubs, and reinforced concrete slab flooring designed for industrial logistics.',
    image: '/images/slides/slide-3.jpg',
    features: ['Heavy Machinery Foundation Slabs', 'Steel Truss Roofing Systems', 'Site Earthworks & Grading'],
  },
  {
    id: 'sustainable-building',
    number: '04.',
    title: 'Sustainable & Green Construction',
    category: 'Eco Architecture',
    description:
      'Eco-certified green building development incorporating solar energy integration, energy-efficient thermal envelopes, and rainwater harvesting systems.',
    image: '/images/slides/slide-5.jpg',
    features: ['Solar Microgrid Integration', 'Thermal Envelope Insulation', 'Rainwater Recycling Systems'],
  },
  {
    id: 'project-management',
    number: '05.',
    title: 'Turnkey Project Management',
    category: 'Consulting & BOQ',
    description:
      'End-to-end site management, Bill of Quantities (BOQ) auditing, regulatory approval handling, and strict site safety supervision.',
    image: '/images/slides/slide-4.jpg',
    features: ['BOQ Cost Auditing & Control', 'COREN Site Safety Compliance', 'Subcontractor Procurement'],
  },
  {
    id: 'renovation-remodeling',
    number: '06.',
    title: 'Structural Rehabilitation & Retrofitting',
    category: 'Renovation & Repairs',
    description:
      'Reinforcing existing building frameworks, seismic retrofitting, commercial interior remodeling, and adaptive reuse for aging structures.',
    image: '/images/slides/slide-3.jpg',
    features: ['Carbon Fiber Reinforcement', 'Foundation Underpinning', 'Facade Modernization'],
  },
]

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Site Evaluation & Consultation',
    description:
      'Conducting comprehensive soil testing, topographic surveys, and client vision alignment before drafting preliminary scope documents.',
  },
  {
    number: '02',
    title: 'Bespoke Architecture & BOQ',
    description:
      'Drafting 3D BIM structural designs, engineering calculations, and transparent Bill of Quantities (BOQ) cost breakdowns.',
  },
  {
    number: '03',
    title: 'Rigorous Site Execution',
    description:
      'Mobilizing heavy machinery, COREN certified engineers, and site safety supervisors to execute structural build phases strictly on schedule.',
  },
  {
    number: '04',
    title: 'Quality Assurance & Handover',
    description:
      'Final structural integrity testing, MEP commission inspection, and official asset handover with comprehensive warranties.',
  },
]
