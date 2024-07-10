import Faqs from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import LastTimeImpressions from '@/components/LastTimeImpressions'
import { Schedule } from '@/components/Schedule'
import { Sponsors } from '@/components/Sponsors'
import ThisYearsProblem from '@/components/ThisYearsProblem'

export default function Home() {
  return (
    <>
      <Hero />
      <ThisYearsProblem />
      <Schedule />
      <LastTimeImpressions />
      <Sponsors />
      <Faqs />
    </>
  )
}
