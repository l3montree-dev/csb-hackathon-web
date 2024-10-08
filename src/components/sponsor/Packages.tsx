import { Fragment } from 'react'
import {
  CheckIcon,
  InformationCircleIcon,
  MinusIcon,
} from '@heroicons/react/20/solid'
import { classNames } from '@/utils/utils'

type Tier = {
  name: string
  id: string
  href: string
  price: string
  mostPopular: boolean
  available?: number
}

type Section = {
  name: string
  features: {
    name: string
    tiers: Record<string, string | boolean>
  }[]
}

const tiers: Tier[] = [
  {
    name: 'Startup*',
    id: 'tier-startup',
    href: '#',
    price: 'ab 200 €',
    mostPopular: false,
    available: 5,
  },
  {
    name: 'Silber',
    id: 'tier-silver',
    href: '#',
    price: 'ab 2.000 €',
    mostPopular: false,
    available: 5,
  },
  {
    name: 'Gold',
    id: 'tier-gold',
    href: '#',
    price: 'ab 4.000 €',
    mostPopular: true,
    available: 3,
  },
]

const sections: Section[] = [
  {
    name: 'Präsentationsmöglichkeiten',
    features: [
      {
        name: '10 Minuten Vorstellung vor den finalen Pitches',
        tiers: { Startup: false, Silber: false, Gold: true },
      },
      {
        name: 'Gelegenheit einen eigenen 30 min Workshop anzubieten',
        tiers: { Startup: false, Silber: false, Gold: true },
      },
      {
        name: 'Platz in der Jury',
        tiers: { Startup: false, Silber: false, Gold: true },
      },
    ],
  },
  {
    name: 'Spezielle Recruitingmöglichkeit',
    features: [
      {
        name: 'Möglichkeit, Praktika an die Teilnehmer des Siegerteams anzubieten',
        tiers: { Startup: false, Silber: false, Gold: true },
      },
    ],
  },
  {
    name: 'Präsenz auf der Veranstaltung',
    features: [
      {
        name: 'Stand auf der Veranstaltung (Sonntag)',
        tiers: { Startup: '2qm', Silber: '5qm', Gold: '6qm' },
      },
      {
        name: 'Direkter Zugang zu den Teilnehmenden',
        tiers: {
          Startup: 'Sonntag',
          Silber: 'Freitag & Sonntag',
          Gold: 'Freitag, Samstag & Sonntag',
        },
      },
      {
        name: 'Kostenloser Zugang für Mitarbeitende',
        tiers: { Startup: '2', Silber: '2', Gold: '4' },
      },
      {
        name: 'Exklusive E-Mail vor oder nach der Konferenz an die Teilnehmende (nach Absprache)',
        tiers: { Startup: false, Silber: true, Gold: true },
      },
      {
        name: 'Prominente Logopräsenz auf der Webseite der Veranstaltung, im Konferenzprogramm und auf Sponsorenschildern vor Ort',
        tiers: { Startup: true, Silber: true, Gold: true },
      },
    ],
  },
]

export default function Example() {
  return (
    <div className="bg-white pt-12 sm:pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-base font-semibold leading-7 text-l3-600">
            Sponsoren-Pakete
          </h2>
          <p className="mt-2 font-display text-5xl font-medium tracking-tighter text-zinc-950">
            Vorteile des Sponsorings auf einen Blick
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-zinc-600">
          Wenden Sie sich an{' '}
          <a
            className="text-l3-500 underline decoration-dashed decoration-1 underline-offset-2 hover:text-l3-300"
            href="mailto:sponsor@cybersecurity-hackathon.de?subject=Cybersecurity Hackathon 2024 Sponsoring"
          >
            sponsor@cybersecurity-hackathon.de
          </a>{' '}
          und sichern Sie sich noch heute Ihre Sponsorschaft.
        </p>

        {/* xs to lg */}
        <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
          {tiers.map((tier) => (
            <section
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? 'rounded-xl bg-zinc-400/5 ring-1 ring-inset ring-zinc-200'
                  : '',
                'p-8',
              )}
            >
              <h3
                id={tier.id}
                className="text-sm font-semibold leading-6 text-zinc-900"
              >
                {tier.name}
              </h3>
              <p className="mt-2 flex items-baseline gap-x-1 text-zinc-900">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-sm font-semibold">(netto)</span>
              </p>
              <div className="mt-4">
                {tier.available != undefined && tier.available > 4 ? (
                  <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                    Noch {tier.available} Plätze
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-md bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">
                    Noch {tier.available} Plätze
                  </span>
                )}
              </div>
              <ul
                role="list"
                className="mt-10 space-y-4 text-sm leading-6 text-zinc-900"
              >
                {sections.map((section) => (
                  <li key={section.name}>
                    <ul role="list" className="space-y-4">
                      {section.features.map((feature) =>
                        feature.tiers[tier.name] ? (
                          <li key={feature.name} className="flex gap-x-3">
                            <CheckIcon
                              className="h-6 w-5 flex-none text-l3-600"
                              aria-hidden="true"
                            />
                            <span>
                              {feature.name}{' '}
                              {typeof feature.tiers[tier.name] === 'string' ? (
                                <span className="text-sm leading-6 text-zinc-500">
                                  ({feature.tiers[tier.name]})
                                </span>
                              ) : null}
                            </span>
                          </li>
                        ) : null,
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className="isolate mt-20 hidden lg:block">
          <div className="relative -mx-8">
            {tiers.some((tier) => tier.mostPopular) ? (
              <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                <div
                  className="flex w-1/4 px-4"
                  aria-hidden="true"
                  style={{
                    marginLeft: `${(tiers.findIndex((tier) => tier.mostPopular) + 1) * 25}%`,
                  }}
                >
                  <div className="w-full rounded-t-xl border-x border-t border-zinc-900/10 bg-zinc-400/5" />
                </div>
              </div>
            ) : null}
            <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
              <caption className="sr-only">Pricing plan comparison</caption>
              <colgroup>
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
              </colgroup>
              <thead>
                <tr>
                  <td />
                  {tiers.map((tier) => (
                    <th
                      key={tier.id}
                      scope="col"
                      className="px-6 pt-6 xl:px-8 xl:pt-8"
                    >
                      <div className="flex justify-end">
                        {tier.available != undefined && tier.available > 4 ? (
                          <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                            Noch {tier.available} Plätze
                          </span>
                        ) : (
                          <span className="inline-flex items-center rounded-md bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">
                            Noch {tier.available} Plätze
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-semibold leading-7 text-zinc-900">
                        {tier.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className="sr-only">Price</span>
                  </th>
                  {tiers.map((tier) => (
                    <td key={tier.id} className="px-6 pt-2 xl:px-8">
                      <div className="flex items-baseline gap-x-1 text-zinc-900">
                        <span className="text-2xl font-bold">{tier.price}</span>
                        <span className="text-sm font-semibold leading-6">
                          (netto)
                        </span>
                      </div>
                    </td>
                  ))}
                </tr>
                {sections.map((section, sectionIdx) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={4}
                        className={classNames(
                          sectionIdx === 0 ? 'pt-8' : 'pt-16',
                          'pb-4 text-sm font-semibold leading-6 text-zinc-900',
                        )}
                      >
                        {section.name}
                        <div className="absolute inset-x-8 mt-4 h-px bg-zinc-900/10" />
                      </th>
                    </tr>
                    {section.features.map((feature) => (
                      <tr key={feature.name}>
                        <th
                          scope="row"
                          className="py-4 text-sm font-normal leading-6 text-zinc-900"
                        >
                          {feature.name}
                          <div className="absolute inset-x-8 mt-4 h-px bg-zinc-900/5" />
                        </th>
                        {tiers.map((tier) => (
                          <td key={tier.id} className="px-6 py-4 xl:px-8">
                            {typeof feature.tiers[tier.name] === 'string' ? (
                              <div className="text-center text-sm leading-6 text-zinc-500">
                                {feature.tiers[tier.name]}
                              </div>
                            ) : (
                              <>
                                {feature.tiers[tier.name] === true ? (
                                  <CheckIcon
                                    className="mx-auto h-5 w-5 text-l3-600"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <MinusIcon
                                    className="mx-auto h-5 w-5 text-zinc-400"
                                    aria-hidden="true"
                                  />
                                )}

                                <span className="sr-only">
                                  {feature.tiers[tier.name] === true
                                    ? 'Included'
                                    : 'Not included'}{' '}
                                  in {tier.name}
                                </span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <InformationCircleIcon
                className="h-5 w-5 text-zinc-800"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3 flex-1 md:flex md:justify-between">
              <p className="text-sm text-zinc-900">
                * Voraussetzung für das Start-Up-Paket: Das Unternehmen ist
                jünger als 3 Jahre und hat weniger als 5 Mitarbeitende.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
