import Image from 'next/image'
import { Button } from './Button'

export function Hero() {
  return (
    <div className="bg-zinc-950">
      <div className="relative isolate overflow-hidden px-6 pt-20">
        <video
          src="/blueprint-for-software-1-5.mp4"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-10"
          autoPlay
          muted
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#020617] to-[#ca8a04] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Cybersecurity Hackathon 2024
            </h1>
            <p className="mt-6 text-lg text-gray-200">
              Lasst uns gemeinsam Lösungen für die spannendsten Probleme der
              Cybersecurity Welt finden! Der &quot;Cybersecurity Hackathon&quot;
              ist das jährliche Hackathon-Event in der Region Köln-Bonn:
            </p>
            <p className="mt-4 text-lg font-semibold text-l3-400">
              Preisgeld: 3.000 € für das Gewinnerteam
            </p>
            <p className="text-l mt-4 text-white">
              Location:{' '}
              <a
                href="https://maps.app.goo.gl/NidUD6xNoRGNovmQA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-l3-400 underline decoration-dashed decoration-1 underline-offset-2 hover:text-l3-200"
              >
                DIGITALHUB.DE, Am Hauptbahnhof 6, 53111 Bonn
              </a>
            </p>
            <p className="mt-4 text-lg text-gray-200">
              48 Stunden Zeit, coole Leute, spannende technische
              Problemstellungen + Networking, Drinks &apos;n Food und eine große
              Abschlussparty
            </p>
            <div className="justify-center gap-10 sm:inline-block lg:flex">
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button href="https://pretix.eu/l3montree/cybers-hack-2024/"
                  target="_blank"
                  rel="noopener noreferrer"
                >Kostenlos teilnehmen</Button>
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button
                  className="border border-l3-500 bg-transparent text-l3-500 hover:border-l3-400 hover:bg-transparent hover:text-l3-400"
                  href="/sponsor"
                >
                  Sponsor werden
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="-mt-20 py-20 lg:-mt-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-6">
              <a
                href="https://www.digitalhub.de/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt="DigitalHub AG Bonn Logo"
                  src="/digitalhub-w.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
              </a>
              <a
                href="https://dwnrw-hubs.de/startseite/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt="Digitale Wirtschaft NRW Logo"
                  src="/dwnrw.png"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
              </a>
              <a
                href="https://cyber-security-cluster.eu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt="Cyber Security Logo Bonn e.V. Logo"
                  src="/ccb-logo-w.png"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
              </a>
              <a
                href="https://zendis.de/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt="ZenDiS GmbH Logo"
                  src="/zendis-w.png"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
              </a>
              <a
                href="https://www.uni-bonn.de/de"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt="Universität Bonn Logo"
                  src="/uni-bonn-w.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
              </a>
              <a
                href="https://www.h-brs.de/de"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt="Hochschule Bonn-Rhein-Sieg Logo"
                  src="/hbrs-w.png"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
              </a>
            </div>
            <div className="mt-16 flex justify-center">
              <p className="relative rounded-full bg-zinc-800 px-4 py-1.5 text-sm leading-6 text-gray-300">
                <span className="hidden md:inline">
                  Ermöglicht von unseren Sponsoren und Partnern
                </span>
                <a href="#sponsors" className="font-semibold text-white">
                  <span aria-hidden="true" className="absolute inset-0" />{' '}
                  Unsere Sponsoren <span aria-hidden="true">&rarr;</span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#020617] to-[#ca8a04] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
