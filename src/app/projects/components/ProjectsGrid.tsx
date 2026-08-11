'use client'

import { ArrowUpRight, Calendar, MapPin, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { projectCategories, projectsList } from '../data'

export default function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const filteredProjects = projectsList.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.type.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className='w-full bg-[#F5F4F0] py-20 lg:py-28'>
      <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12'>
        
        {/* Title Case Badge Pill & Category Filter Controls */}
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-300/40'>
          <div className='space-y-4 max-w-xl'>
            <div className='inline-block'>
              <span className='text-sm font-bold tracking-wide text-neutral-700 border border-neutral-300 px-4 py-1.5 rounded-full bg-white/70'>
                Featured Showcase
              </span>
            </div>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 font-sans'>
              Select Portfolio Category
            </h2>
          </div>

          {/* Search Input Filter */}
          <div className='relative w-full md:w-72'>
            <Search
              size={18}
              className='absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400'
            />
            <input
              type='text'
              placeholder='Search project or location...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-full bg-white border border-neutral-300 rounded-full pl-11 pr-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 transition-colors'
            />
          </div>
        </div>

        {/* Category Pills Filter Bar */}
        <div className='flex flex-wrap gap-3'>
          {projectCategories.map((cat) => {
            const isActive = selectedCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#121417] text-white border border-[#121417]'
                    : 'bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Projects Cards Grid (Zero Shadows) */}
        {filteredProjects.length === 0 ? (
          <div className='bg-white rounded-[24px] p-12 text-center border border-neutral-200 text-neutral-500'>
            No projects match your filter query. Please try selecting a different category.
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className='bg-white rounded-[28px] p-6 flex flex-col justify-between border border-neutral-200/80 transition-all hover:border-neutral-400 group'
              >
                <div className='space-y-6'>
                  {/* Card Image Header */}
                  <div className='relative w-full h-64 rounded-[20px] overflow-hidden bg-neutral-900 border border-neutral-200/60'>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className='object-cover group-hover:scale-105 transition-transform duration-500'
                    />
                    <div className='absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[11px] font-mono font-bold text-[#D4F639] uppercase tracking-wider'>
                      {project.category}
                    </div>
                    <div className='absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10'>
                      <span className='flex items-center gap-1.5'>
                        <MapPin size={13} className='text-[#D4F639]' />
                        {project.location}
                      </span>
                      <span className='flex items-center gap-1'>
                        <Calendar size={13} />
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div className='space-y-3'>
                    <span className='text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full inline-block'>
                      {project.type}
                    </span>
                    <h3 className='text-xl lg:text-2xl font-bold text-neutral-950 font-sans leading-snug'>
                      {project.title}
                    </h3>
                    <p className='text-neutral-600 text-sm leading-relaxed line-clamp-2'>
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action Link to /projects/${id} */}
                <div className='pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between'>
                  <span className='text-xs font-bold text-neutral-500 uppercase tracking-wider truncate max-w-[60%]'>
                    Client: <strong className='text-neutral-900'>{project.client}</strong>
                  </span>
                  <Link
                    href={`/projects/${project.id}`}
                    className='inline-flex items-center gap-2 text-xs font-bold text-neutral-950 hover:text-neutral-700 transition-colors group/link shrink-0'
                  >
                    <span>View Case Study</span>
                    <div className='w-7 h-7 rounded-full bg-[#D4F639] text-neutral-950 flex items-center justify-center font-bold group-hover/link:scale-110 transition-transform'>
                      <ArrowUpRight size={14} strokeWidth={2.5} />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
