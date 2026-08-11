import ProjectsComp from '@/components/ProjectsComp'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Larbol Construction',
  description:
    'View our latest construction projects and portfolio of completed work.',
  keywords: [
    'construction projects',
    'building portfolio',
    'construction work',
  ],
  alternates: {
    canonical: 'https://larbol-construction.vercel.app/projects',
  },
}

export default function ProjectsPage() {
  return <ProjectsComp />
}
