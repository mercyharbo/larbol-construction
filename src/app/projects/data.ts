export interface ProjectItem {
  id: string
  title: string
  year: number
  client: string
  type: string
  category: 'Commercial' | 'Civil Infrastructure' | 'Residential' | 'Industrial'
  location: string
  status: string
  duration: string
  budget: string
  description: string
  image: string
  tags: string[]
  specs: { label: string; value: string }[]
}

export const projectCategories = [
  'All',
  'Commercial',
  'Civil Infrastructure',
  'Residential',
  'Industrial',
] as const

export const projectsList: ProjectItem[] = [
  {
    id: 'ikoyi-commercial-tower',
    title: 'Ikoyi Landmark Commercial Tower',
    year: 2024,
    client: 'Horizon Property Developments',
    type: 'Commercial Tower Construction',
    category: 'Commercial',
    location: 'Ikoyi, Lagos',
    status: 'Completed',
    duration: '18 months',
    budget: '₦4.8B',
    description:
      'A 14-story modern commercial headquarters featuring structural steel framing, thermal glass curtain walls, and subterranean parking.',
    image: '/images/slides/slide-1.jpg',
    tags: ['High-Rise', 'Curtain Wall', 'Commercial', 'Lagos'],
    specs: [
      { label: 'Floors', value: '14 Storeys' },
      { label: 'Built Area', value: '18,500 sqm' },
      { label: 'Structure', value: 'Post-Tensioned Slab' },
    ],
  },
  {
    id: 'lekki-highway-expansion',
    title: 'Lekki Coastal Highway & Flyover Piling',
    year: 2023,
    client: 'State Transport & Works Authority',
    type: 'Civil Infrastructure & Bridge',
    category: 'Civil Infrastructure',
    location: 'Lekki Expressway, Lagos',
    status: 'Completed',
    duration: '14 months',
    budget: '₦8.2B',
    description:
      'Construction of a 6-lane dual carriageway asphalt road network, deep foundation pile bridge, and heavy stormwater culverts.',
    image: '/images/slides/slide-2.jpg',
    tags: ['Civil', 'Highways', 'Bridge Piling', 'Infrastructure'],
    specs: [
      { label: 'Road Length', value: '12.4 km' },
      { label: 'Piling Depth', value: '42 meters' },
      { label: 'Lanes', value: '6-Lane Carriageway' },
    ],
  },
  {
    id: 'ikeja-industrial-park',
    title: 'Ikeja Logistics & Manufacturing Hub',
    year: 2023,
    client: 'Apex Industrial Logistics',
    type: 'Heavy Industrial Construction',
    category: 'Industrial',
    location: 'Ikeja Industrial Zone, Lagos',
    status: 'Completed',
    duration: '11 months',
    budget: '₦3.5B',
    description:
      'Turnkey manufacturing facility featuring reinforced laser-screed concrete flooring, high-clearance steel trusses, and loading bays.',
    image: '/images/slides/slide-3.jpg',
    tags: ['Industrial', 'Warehousing', 'Heavy Concrete', 'Logistics'],
    specs: [
      { label: 'Clear Height', value: '12.5 meters' },
      { label: 'Floor Capacity', value: '8 Tons/sqm' },
      { label: 'Facility Size', value: '24,000 sqm' },
    ],
  },
  {
    id: 'banana-island-residence',
    title: 'Banana Island Luxury Waterfront Estate',
    year: 2024,
    client: 'Private Investment Consortium',
    type: 'Luxury Residential Development',
    category: 'Residential',
    location: 'Banana Island, Lagos',
    status: 'Completed',
    duration: '16 months',
    budget: '₦6.1B',
    description:
      'Exclusive gated waterfront residential estate comprising 6 ultra-modern smart villas with private boat docks and infinity pools.',
    image: '/images/slides/slide-4.jpg',
    tags: ['Luxury', 'Waterfront', 'Smart Home', 'Residential'],
    specs: [
      { label: 'Villas', value: '6 Units' },
      { label: 'Features', value: 'Private Dock & Pool' },
      { label: 'Energy', value: 'Solar Microgrid' },
    ],
  },
  {
    id: 'sustainable-eco-office',
    title: 'Victoria Island Green Architecture Center',
    year: 2024,
    client: 'EcoRealities Corporate',
    type: 'Green Eco Building',
    category: 'Commercial',
    location: 'Victoria Island, Lagos',
    status: 'Completed',
    duration: '12 months',
    budget: '₦2.9B',
    description:
      'Eco-certified corporate building featuring rooftop solar arrays, thermal insulated building envelopes, and greywater recycling.',
    image: '/images/slides/slide-5.jpg',
    tags: ['Eco', 'Solar Energy', 'Green Building', 'Commercial'],
    specs: [
      { label: 'Rating', value: 'EDGE Certified' },
      { label: 'Solar Output', value: '350 kWp' },
      { label: 'Water Savings', value: '45% Recycled' },
    ],
  },
  {
    id: 'abuja-diplomatic-estate',
    title: 'Abuja Diplomatic Residential Complex',
    year: 2022,
    client: 'Federal Housing Agency',
    type: 'Multi-Family Residential',
    category: 'Residential',
    location: 'Maitama, Abuja',
    status: 'Completed',
    duration: '20 months',
    budget: '₦5.4B',
    description:
      'High-security residential housing estate built for international diplomatic missions featuring reinforced perimeter systems and underground utilities.',
    image: '/images/slides/slide-1.jpg',
    tags: ['Residential', 'High Security', 'Abuja', 'Turnkey'],
    specs: [
      { label: 'Units', value: '24 Apartments' },
      { label: 'Security', value: 'Biometric Access' },
      { label: 'Land Size', value: '3.5 Hectares' },
    ],
  },
]
