import ContactPerson from '@/components/sponsor/ContactPerson'
import MarketingSponsor from '@/components/sponsor/MarketingSponsor'
import Packages from '@/components/sponsor/Packages'
import SponsorHero from '@/components/sponsor/SponsorHero'
import WhySponsor from '@/components/sponsor/WhySponsor'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Cybersecurity Hackathon 2024 | Sponsoring | Gemeinsam für mehr Sicherheit in der Open-Source-Softwarewelt',
  description:
    'Werden Sie Sponsor des Cybersecurity Hackathons 2024. Fördern Sie Innovationen, knüpfen Sie wertvolle Kontakte, lernen potentielle MitarbeiterInnen kennen und präsentieren Sie Ihre Marke. Sichern Sie sich jetzt Ihr Sponsorship!',
}

export default function Home() {
  return (
    <>
      <div className="pt-20 lg:pt-0">
        <SponsorHero />
      </div>
      <WhySponsor />
      <Packages />
      <MarketingSponsor />
      <ContactPerson />
    </>
  )
}
