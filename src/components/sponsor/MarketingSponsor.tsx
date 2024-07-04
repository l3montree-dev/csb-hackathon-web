import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

export default function MarketingSponsor() {
  return (
    <div className="-mt-8 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Marketing-Werbemöglichkeit
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Das Logo des Sponsors wird auf dem Ärmel aller Teilnehmer-T-Shirts
              angebracht. Größe, Farbe und Platzierung des Logos richten sich
              nach dem Design des T-Shirts und unterliegen der Genehmigung durch
              die Organisatoren. Das Logo darf nur einfarbig sein (keine
              Farbverläufe).
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Wenden Sie sich an{' '}
              <a
                className="text-l3-500 underline decoration-dashed decoration-1 underline-offset-2 hover:text-l3-300"
                href="mailto:sponsor@cybersecurity-hackathon.de"
              >
                sponsor@cybersecurity-hackathon.de
              </a>{' '}
              und sichern Sie sich noch heute Ihre Sponsorschaft.
            </p>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="min-h-full rounded-2xl bg-gray-50 py-8 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-12">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Teilnehmer-T-Shirt
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    2.500 €
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
