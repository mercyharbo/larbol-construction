import type { Metadata } from 'next'
import ProjectDetailsClient from './ProjectDetailsClient'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const projectId = (await params).id
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return {
      title: 'Project Not Found | Larbol Construction',
      description:
        'The requested project could not be found. Browse our portfolio of construction projects.',
      robots: 'noindex, nofollow',
    }
  }

  return {
    title: `${project.projectTitle} | Larbol Construction Project`,
    description: `${project.description} Located in ${project.location}. Completed in ${project.year}. ${project.type} for ${project.client}.`,
    openGraph: {
      title: `${project.projectTitle} | Larbol Construction`,
      description: project.description,
      images: [
        {
          url: project.videoThumbnail,
          width: 1200,
          height: 630,
          alt: project.projectTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.projectTitle} | Larbol Construction`,
      description: project.description,
      images: [project.videoThumbnail],
    },
    alternates: {
      canonical: `https://larbol-construction.com/projects/${project.id}`,
    },
  }
}

const projects = [
  {
    id: 'custom-riverside-retreat',
    projectTitle: 'Custom Riverside Retreat Construction',
    year: 2021,
    client: 'Johnson Family',
    type: 'Custom Home Construction',
    location: 'California, USA',
    videoThumbnail:
      'https://cdn.pixabay.com/photo/2018/12/12/23/02/site-3871804_1280.jpg',
    videoUrl:
      'https://cdn.pixabay.com/video/2019/02/08/21233-316116300_large.mp4',
    description:
      'A luxurious riverside retreat featuring modern architecture and sustainable design. This custom home construction project showcases our commitment to quality and attention to detail.',
    features: [
      'Modern sustainable design',
      'Energy-efficient systems',
      'Custom interior finishes',
      'Landscaped gardens',
      'Smart home technology',
    ],
    images: [
      'https://cdn.pixabay.com/photo/2018/12/12/23/02/site-3871804_1280.jpg',
      'https://cdn.pixabay.com/photo/2018/08/25/14/21/construction-3630200_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/08/22/06/03/construction-2667892_1280.jpg',
    ],
  },
  {
    id: 'modern-urban-apartment',
    projectTitle: 'Modern Urban Apartment Renovation',
    year: 2020,
    client: 'Smith Corporation',
    type: 'Apartment Renovation',
    location: 'New York, USA',
    videoThumbnail:
      'https://cdn.pixabay.com/photo/2018/08/25/14/21/construction-3630200_1280.jpg',
    videoUrl:
      'https://cdn.pixabay.com/video/2019/02/08/21233-316116300_large.mp4',
    description:
      'A comprehensive renovation of a historic apartment building, transforming it into modern living spaces while preserving its architectural heritage.',
    features: [
      'Historic preservation',
      'Modern amenities',
      'Open floor plans',
      'High-end finishes',
      'Community spaces',
    ],
    images: [
      'https://cdn.pixabay.com/photo/2018/08/25/14/21/construction-3630200_1280.jpg',
      'https://cdn.pixabay.com/photo/2018/12/12/23/02/site-3871804_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/08/22/06/03/construction-2667892_1280.jpg',
    ],
  },
  {
    id: 'luxury-beach-house',
    projectTitle: 'Luxury Beach House Development',
    year: 2019,
    client: 'Williams Family',
    type: 'Beach House Development',
    location: 'Florida, USA',
    videoThumbnail:
      'https://cdn.pixabay.com/photo/2017/08/22/06/03/construction-2667892_1280.jpg',
    videoUrl:
      'https://cdn.pixabay.com/video/2019/02/08/21233-316116300_large.mp4',
    description:
      'A stunning beachfront property featuring contemporary design elements and premium materials, designed to withstand coastal conditions while providing luxurious living spaces.',
    features: [
      'Oceanfront location',
      'Hurricane-resistant design',
      'Infinity pool',
      'Outdoor entertainment areas',
      'Smart home technology',
    ],
    images: [
      'https://cdn.pixabay.com/photo/2017/08/22/06/03/construction-2667892_1280.jpg',
      'https://cdn.pixabay.com/photo/2018/12/12/23/02/site-3871804_1280.jpg',
      'https://cdn.pixabay.com/photo/2018/08/25/14/21/construction-3630200_1280.jpg',
    ],
  },
]

export default async function Page({ params }: Props) {
  const projectId = (await params).id
  console.log(projectId)
  const project = projects.find((p) => p.id === projectId)
  console.log(project)

  return <ProjectDetailsClient project={project} />
}
