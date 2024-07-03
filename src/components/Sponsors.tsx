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
              href="https://zendis.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="max-h-26 lg:max-h-26 w-full object-contain object-left"
                src="/zendis.svg"
                alt="Tuple"
                width={105}
                height={48}
              />
            </a>
            <a
              href="https://www.digitalhub.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="max-h-26 w-full object-contain object-left lg:max-h-24"
                src="/digitalhub.svg"
                alt="Reform"
                width={104}
                height={48}
              />
            </a>
          </div>
        </div>
        <div className="mx-auto mt-20 max-w-2xl lg:max-w-none">
          <h3 className="text-xl font-semibold leading-8 text-zinc-900">
            Silber Sponsoren
          </h3>
          <div className="-mx-6 mt-2 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
            <div className="bg-zinc-400/5 p-8 sm:p-10">
              <Image
                className="max-h-16 w-full object-contain"
                src="/ccb-logo.png"
                alt="Transistor"
                width={158}
                height={48}
              />
            </div>
            <div className="bg-zinc-400/5 p-6 sm:p-10">
              <Image
                className="max-h-16 w-full object-contain"
                src="/Bundesnetzagentur_logo.svg"
                alt="Reform"
                width={158}
                height={48}
              />
            </div>
            <div className="bg-zinc-400/5 p-6 sm:p-10">
              <Image
                className="max-h-16 w-full object-contain"
                src="/wheregroup.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-20 max-w-2xl lg:max-w-none">
          <h3 className="text-xl font-semibold leading-8 text-zinc-900">
            Akademische Partner
          </h3>
          <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:gap-x-10 lg:mx-0">
            <Image
              className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
              src="/hbrs.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain object-center lg:col-span-1"
              src="/startup-man-w.png"
              alt="Transistor"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain object-center lg:col-span-1"
              src="/uni-bonn.jpg"
              alt="Reform"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain object-center lg:col-span-1"
              src="/enacom.jpg"
              alt="Transistor"
              width={158}
              height={48}
            />
          </div>
        </div>
        <div className="mt-20 border-b border-t border-zinc-200 py-12 lg:flex lg:items-center lg:justify-between">
          <h4 className="font-display text-3xl font-medium tracking-tighter text-gray-900">
            Sie wollen Sponsor oder Partner werden?
            <br />
            Kontaktiere uns!
          </h4>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Button href="#">Kontakt aufnehmen</Button>
            <a
              href="#"
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
