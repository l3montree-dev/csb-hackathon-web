import { Button } from './Button'

export function Hero() {
  return (
    <div className="bg-zinc-950">
      <div className="relative isolate overflow-hidden pt-20">
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
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Cybersecurity Hackathon 2024
            </h1>
            <p className="mt-6 text-lg text-gray-200">
              Lasst uns gemeinsam Lösungen für die spannendsten Probleme der
              Cybersecurity Welt finden! Der &quot;Cybersecurity Hackathon&quot;
              ist die jährliche Veranstaltung in der Region:
            </p>
            <p className="mt-4 text-lg font-semibold text-l3-400">
              Preisgeld: 3.000 € für das Gewinnerteam
            </p>
            <p className="mt-4 text-lg text-gray-200">
              48 Stunden Zeit, coole Leute, spannede technische
              Problemstellungen + Networking, Drinks &apos;n Food und eine große
              Abschlussparty
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                href="https://pretix.eu/l3montree/cybers-hack-2024/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kostenlos teilnehmen
              </Button>
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
