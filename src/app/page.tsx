import Services from '@/components/Services'
import SliderComp from '@/components/slider'
import Testimonials from '@/components/Testimonials'
import WhyChooseUs from '@/components/WhyChooseUs'
import { sliderImages } from '@/constants/data'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center gap-10'>
      <SliderComp slides={sliderImages} />
      <WhyChooseUs />
      <Services />
      <Testimonials />
    </main>
  )
}
