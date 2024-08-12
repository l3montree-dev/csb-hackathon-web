import Faqs from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import LastTimeImpressions from '@/components/LastTimeImpressions'
import { Schedule } from '@/components/Schedule'
import { Sponsors } from '@/components/Sponsors'
import ThisYearsProblem from '@/components/ThisYearsProblem'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Cybersecurity Hackathon 2024 | Bonn | Open Source Software Sicherheit',
  description:
    'Nimm am Cybersecurity Hackathon 2024 in Bonn vom 8. - 10. November teil! Entwickle Lösungen für OSS Sicherheit, vernetze dich mit Experten und gewinne 3k € Preisgeld. Kostenlose Teilnahme, spannende Workshops und eine großartige Atmosphäre erwarten dich.',
}

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
