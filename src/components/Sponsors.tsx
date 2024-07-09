import Image from 'next/image'
import { Container } from '@/components/Container'
import { Button } from './Button'

export function Sponsors() {
  return (
    <section
      id="sponsors"
      aria-label="Sponsors"
      className="bg-white py-12 sm:py-32"
    >
      <Container>
        <h2 className="text-left font-display text-4xl font-medium tracking-tighter text-black">
          Sponsoren & Partner 2024
        </h2>
        <div className="mt-20 grid grid-cols-1 items-center gap-y-10 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h3 className="text-2xl font-bold tracking-tight text-zinc-900">
              Gold Sponsoren
            </h3>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Unsere Goldsponsoren sind die tragenden Säulen unserer
              Veranstaltungen. Mit ihrer großzügigen Unterstützung ermöglichen
              sie es uns, ein außergewöhnliches Event zu schaffen.
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-2xl grid-cols-1 items-center gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:pl-8">
            <a
              href="https://www.digitalhub.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="max-h-26 w-full object-contain object-right lg:max-h-24"
                src="/digitalhub.svg"
                alt="DigitalHub Bonn Logo"
                width={104}
                height={48}
              />
            </a>
          </div>
        </div>
        <div className="mx-auto mt-20 max-w-2xl lg:max-w-none">
          <h3 className="text-xl font-semibold leading-8 text-zinc-900">
            Community Partner
          </h3>
          <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:gap-x-10 lg:mx-0">
            <a
              href="https://cyber-security-cluster.eu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="col-span-2 max-h-16 w-full object-contain object-left lg:col-span-1"
                src="/ccb-logo.png"
                alt="Cybersecurity Cluster Bonn e.V. Logo"
                width={158}
                height={48}
              />
            </a>
            <a
              href="https://www.h-brs.de/en/gruenden/start-up-manufaktur/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="col-span-2 max-h-14 w-full object-contain object-center lg:col-span-1"
                src="/startup-man-w.png"
                alt="Startup Manufaktur Logo"
                width={158}
                height={48}
              />
            </a>
            <a
              href="https://www.uni-bonn.de/de/forschung-lehre/transfercenter-enacom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="col-span-2 max-h-16 w-full object-contain object-center lg:col-span-1"
                src="/enacom.jpg"
                alt="Enacom Logo"
                width={158}
                height={48}
              />
            </a>
          </div>
        </div>
        <div className="mx-auto mt-20 max-w-2xl lg:max-w-none">
          <h3 className="text-xl font-semibold leading-8 text-zinc-900">
            Akademische Partner
          </h3>
          <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:gap-x-10 lg:mx-0">
            <a
              href="https://www.h-brs.de/de"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                src="/hbrs.svg"
                alt="Hochschule Bonn-Rhein-Sieg Logo"
                width={158}
                height={48}
              />
            </a>
            <a
              href="https://www.uni-bonn.de/de"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="col-span-2 max-h-12 w-full object-contain object-center lg:col-span-1"
                src="/uni-bonn.jpg"
                alt="Universität Bonn Logo"
                width={158}
                height={48}
              />
            </a>
          </div>
        </div>
        <div className="mt-20 border-b border-t border-zinc-200 py-12 lg:flex lg:items-center lg:justify-between">
          <h4 className="font-display text-3xl font-medium tracking-tighter text-gray-900">
            Sie wollen Sponsor oder Partner werden?
            <br />
            Kontaktiere uns!
          </h4>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Button href="mailto:sponsor@cybersecurity-hackathon.de?subject=Cybersecurity Hackathon 2024 Sponsoring">
              Kontakt aufnehmen
            </Button>
            <a
              href="/sponsor"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Mehr erfahren <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
