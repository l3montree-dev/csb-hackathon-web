import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-zinc-950">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-zinc-100/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-zinc-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-l3-500/10 px-3 py-1 text-sm font-semibold leading-6 text-l3-400 ring-1 ring-inset ring-l3-500/20">
                Sponsor werden
              </span>
            </a>
          </div>
          <h1 className="mt-2 font-display text-5xl font-medium tracking-tighter text-white">
            Gemeinsam für mehr Sicherheit in der Open-Source-Softwarewelt
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Der Cyber Security Hackathon Bonn 2024 bietet Unternehmen eine
            einzigartige Gelegenheit, ihre Marke zu präsentieren und
            gleichzeitig einen bedeutenden Beitrag zur Sicherheit in der
            Open-Source-Softwareentwicklung zu leisten. Als Sponsor unterstützen
            Sie nicht nur eine zukunftsweisende Veranstaltung, sondern
            profitieren auch von zahlreichen Vorteilen.
          </p>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <Image
              src="/hero-kpmg.png"
              alt="App screenshot"
              width={2432}
              height={1442}
              className="w-[50rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
