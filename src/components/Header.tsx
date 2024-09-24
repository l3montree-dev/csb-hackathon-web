import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import Image from 'next/image'

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 flex-none lg:py-8">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <a href="/">
            <Image
              src="/l3montree-logo-ce.svg"
              width={300}
              height={120}
              className="h-16 w-auto"
              alt=""
            />
          </a>
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm font-semibold text-l3-500 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              <time dateTime="2024-11-08">08.</time> -{' '}
              <time dateTime="2024-11-10">10. November 2024</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p>Bonn, NRW</p>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="https://pretix.eu/l3montree/cybers-hack-2024/" target="_blank"
            rel="noopener noreferrer">Kostenlos teilnehmen</Button>
        </div>
      </Container>
    </header>
  )
}
