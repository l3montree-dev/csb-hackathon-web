import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Innovationen fördern',
    description:
      'Unterstützen Sie die Entwicklung innovativer Lösungen für die Herausforderungen der Open-Source-Software-Sicherheit. Ihre Unterstützung hilft dabei, die besten Ideen und Talente zu fördern.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Recruiting-Möglichkeiten',
    description:
      'Treffen Sie auf hochqualifizierte Fachkräfte und Talente, die Ihre Organisation bereichern können. Nutzen Sie die Veranstaltung, um potenzielle Mitarbeiter kennenzulernen und von Ihren Karrierechancen zu überzeugen.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Netzwerken und Partnerschaften',
    description:
      'Knüpfen Sie wertvolle Kontakte mit anderen Unternehmen, Experten und Teilnehmern. Nutzen Sie die Gelegenheit, Ihr Netzwerk zu erweitern und neue Partnerschaften zu etablieren.',
    icon: UsersIcon,
  },
  {
    name: 'Sichtbarkeit und Reichweite',
    description:
      'Präsentieren Sie Ihre Marke einem breiten Publikum aus Technologie-Enthusiasten, Entwicklern, Unternehmen und potenziellen zukünftigen Partnern.',
    icon: FingerPrintIcon,
  },
]

export default function WhySponsor() {
  return (
    <div className="bg-zinc-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 font-display text-5xl font-medium tracking-tighter text-white">
            Warum Sponsor werden?
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-l3-500">
                    <feature.icon
                      className="h-6 w-6 text-black"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-zinc-200">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
