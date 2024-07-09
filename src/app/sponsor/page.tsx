import ContactPerson from '@/components/sponsor/ContactPerson'
import MarketingSponsor from '@/components/sponsor/MarketingSponsor'
import Packages from '@/components/sponsor/Packages'
import SponsorHero from '@/components/sponsor/SponsorHero'
import WhySponsor from '@/components/sponsor/WhySponsor'

export default function Home() {
  return (
    <>
      <SponsorHero />
      <WhySponsor />
      <Packages />
      <MarketingSponsor />
      <ContactPerson />
    </>
  )
}
