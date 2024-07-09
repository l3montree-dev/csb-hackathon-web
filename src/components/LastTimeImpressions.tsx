import Image from 'next/image'
import { Button } from './Button'

export default function LastTimeImpressions() {
  return (
    <div className="relative isolate bg-zinc-900 pb-24">
      <svg
        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-zinc-800 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="CkSiQ2eH4rJuahLyKoWgppc5kzQaBRtN"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-zinc-800">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#CkSiQ2eH4rJuahLyKoWgppc5kzQaBRtN)"
        />
      </svg>
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h2 className="font-display text-4xl font-medium tracking-tighter text-white">
                Eindrücke von Cybersecurity Hackathon 2023
              </h2>

              <figure className="mt-10 border-l border-l3-500 pl-9">
                <blockquote className="font-semibold text-zinc-100">
                  <p>
                    “Ich studiere an der Uni Bonn und habe mich auf Computer
                    Vision spezialisiert. Beim Hackathon mache ich mit, weil ich
                    das Teamwork genieße und das Gefühl mag, dass man in sehr
                    kurzer Zeit etwas lernen und sogar etwas aufbauen kann. Und
                    es hilft mir wirklich sehr, mein Selbstvertrauen zu
                    stärken.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4">
                  <div className="text-sm leading-6 text-zinc-100">
                    <strong className="font-semibold">Xi</strong> – Teilnehmerin
                    2023
                  </div>
                </figcaption>
              </figure>
              <div className="mt-10 flex items-center gap-x-6">
                <Button
                  href="https://www.youtube.com/watch?v=I49TUI5Rly4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  Teilnehmer-Interview von 2023 ansehen
                </Button>
              </div>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="https://www.youtube.com/watch?v=9xt4zltT0D4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold leading-6 text-zinc-100"
                >
                  Teaser-Video von 2023 ansehen{' '}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div className="relative">
                  <Image
                    src="/IMG_5574.jpg"
                    height={1000}
                    width={1500}
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative">
                  <Image
                    src="/IMG_5629.jpg"
                    height={1000}
                    width={1500}
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <Image
                    src="/IMG_5647.jpg"
                    height={1000}
                    width={1500}
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div className="relative">
                  <Image
                    src="/IMG_5701.jpg"
                    height={1000}
                    width={1500}
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <Image
                    src="/IMG_5471.jpg"
                    height={1000}
                    width={1500}
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            src="/teilnehmende.jpg"
            alt="App screenshot"
            className="rounded-lg shadow-2xl ring-1 ring-white/10"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
