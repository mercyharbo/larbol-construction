export interface ContactCard {
  title: string
  primary: string
  secondary?: string
  description: string
  iconName: string
  actionUrl: string
  actionText: string
}

export const corporateContactCards: ContactCard[] = [
  {
    title: 'Phone Consultation',
    primary: '+234 (0) 803 123 4567',
    secondary: '+234 (0) 812 987 6543',
    description: 'Speak directly with our engineering procurement team',
    iconName: 'Phone',
    actionUrl: 'tel:+2348031234567',
    actionText: 'Call Office',
  },
  {
    title: 'Corporate Email',
    primary: 'info@larbolconstruction.com',
    secondary: 'projects@larbolconstruction.com',
    description: 'Send architectural drawings & Bill of Quantities (BOQ)',
    iconName: 'Mail',
    actionUrl: 'mailto:info@larbolconstruction.com',
    actionText: 'Send Email',
  },
  {
    title: 'Lagos Headquarters',
    primary: 'Plot 14, Commercial Avenue',
    secondary: 'Victoria Island, Lagos, Nigeria',
    description: 'Visit our corporate engineering offices',
    iconName: 'MapPin',
    actionUrl: '#location',
    actionText: 'Get Directions',
  },
  {
    title: 'Operating Hours',
    primary: 'Mon - Fri: 8:00 AM - 6:00 PM',
    secondary: 'Sat: 9:00 AM - 2:00 PM',
    description: 'Offices open for site consultations',
    iconName: 'Clock',
    actionUrl: 'tel:+2348031234567',
    actionText: 'Schedule Visit',
  },
]

export const serviceCategoryOptions = [
  'Civil & Highway Engineering',
  'Commercial & Multi-Family Towers',
  'Industrial & Logistics Facilities',
  'Sustainable & Green Architecture',
  'Turnkey Project Management & BOQ Audit',
  'Structural Rehabilitation & Repairs',
]

export const projectTimelineOptions = [
  'Immediate (Within 30 Days)',
  'Q1/Q2 Planning Phase',
  'Within 6 Months',
  'Long-Term Capital Tender',
]
