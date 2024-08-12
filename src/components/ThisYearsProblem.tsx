export default function ThisYearsProblem() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-l3-600">
                Das Thema 2024: Open Source Software Security
              </h2>
              <h3 className="mt-2 font-display text-3xl font-medium tracking-tighter text-black">
                Wie können wir feststellen, ob Open-Source-Projekte sicher und
                vertrauenswürdig sind? Wie können wir zu der Sicherheit von
                Open-Source-Projekten beitragen?
              </h3>
              <p className="mt-6 text-base leading-8 text-zinc-800">
                Open-Source-Software ist das Rückgrat vieler moderner
                Anwendungen. Typische Software besteht zu 80–90 % aus
                Open-Source-Abhängigkeiten.
              </p>
              <p className="mt-6 text-base leading-8 text-zinc-800">
                Die jüngste Sicherheitslücke in der{' '}
                <a
                  href="https://www.heise.de/news/xz-Attacke-Hintertuer-entraetselt-weitere-Details-zu-betroffenen-Distros-9671588.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-l3-600 underline decoration-dashed decoration-1 underline-offset-2 hover:text-l3-500"
                >
                  XZ-Utuils-Library
                </a>{' '}
                hat eindrucksvoll gezeigt, wie entscheidend die Sicherheit in
                der Open-Source-Softwareentwicklung ist. Unternehmen, die
                öffentliche Verwaltung und somit die gesamte Gesellschaft
                verlassen sich auf Open-Source-Lösungen. Jedoch wird die Frage
                der Sicherheit oft unzureichend gestellt.
              </p>
              <p className="mt-6 text-base leading-8 text-zinc-800">
                Bei unserem Hackathon wollen wir dieses Thema aus einem neuen
                Blickwinkel betrachten: Wie können wir die Sicherheit von
                Open-Source-Projekten gemeinsam bewerten oder sogar verbessern?
              </p>
              <p className="mt-6 text-base leading-8 text-zinc-800">
                Unser Ziel ist es, gemeinsam Lösungen zu entwickeln, die sowohl
                Unternehmen als auch der Open-Source-Community helfen, die
                Sicherheit zu verbessern und das Vertrauen in
                Open-Source-Software nachhaltig zu stärken.
              </p>
            </div>
          </div>
          <video
            src="/hands-6.mp4"
            className="hidden w-[48rem] max-w-none rounded-lg shadow-xl shadow-black/10 ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 lg:block"
            width={2432}
            height={1442}
            autoPlay
            muted
          />
        </div>
      </div>
    </div>
  )
}
