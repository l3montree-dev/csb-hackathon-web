import Image from 'next/image'
import { Container } from '@/components/Container'
import { Button } from './Button'

import ZendisLogo from '../../public/zendis.png'

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
              Themensponsoren
            </h3>
            <p className="mt-6 text-base leading-8 text-zinc-600">
              Unsere Themensponsoren sind die kreativen Ideengeber, die die
              Aufgaben für unsere Veranstaltungen bereitstellen. Ihre
              Unterstützung ermöglicht es uns, ein unvergessliches und
              spannendes Event zu gestalten.
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-2xl grid-cols-1 items-center gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:pl-8">
            <a
              href="https://zendis.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="lg:max-h-26 max-h-24 w-full object-contain object-center lg:max-h-24 lg:object-right"
                src={ZendisLogo}
                alt="Zentrum für Digitale Souveränität der Öffentlichen Verwaltung (ZenDiS) Logo"
              />
            </a>
            <a
              href="https://zendis.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="lg:max-h-26 max-h-24 w-full object-contain object-center lg:max-h-24 lg:object-right"
                src="/stf-dark.svg"
                width={400}
                height={150}
                alt="Sovereign Tech Fund Logo"
              />
            </a>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 items-center gap-y-10 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h3 className="text-2xl font-bold tracking-tight text-zinc-900">
              Gold Sponsoren
            </h3>
            <p className="mt-6 text-base leading-8 text-zinc-600">
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
                className="lg:max-h-26 max-h-24 w-full object-contain object-center lg:max-h-24 lg:object-right"
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
          <div className="mx-auto mt-10 grid grid-cols-2 items-start gap-x-8 gap-y-10 sm:gap-x-10 lg:mx-0 lg:grid-cols-4">
            <a
              href="https://cyber-security-cluster.eu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="col-span-2 max-h-14 w-full object-contain object-left lg:col-span-1 lg:max-h-16"
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
                className="col-span-2 max-h-12 w-full object-contain object-center lg:col-span-1 lg:max-h-14"
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
                className="col-span-2 max-h-14 w-full object-contain object-left lg:col-span-1 lg:max-h-16 lg:object-center"
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
          <div className="mx-auto mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:gap-x-10 lg:mx-0 lg:grid-cols-4 lg:items-start">
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
            <Button href="/sponsor">Details zum Sponsoring</Button>
            <a
              href="mailto:sponsor@cybersecurity-hackathon.de?subject=Cybersecurity Hackathon 2024 Sponsoring"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Kontakt aufnehmen <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
