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
              <h3 className="mt-2 font-display text-4xl font-medium tracking-tighter text-black">
                Wie können wir bewerten, ob ein Open-Source-Projekt sicher
                einsetzbar ist?
              </h3>
              <p className="mt-6 text-base leading-8 text-zinc-800">
                Typische Software besteht zu 80–90 % aus
                Open-Source-Abhängigkeiten. Wie kann festgestellt werden, ob
                hierbei sichere Software eingesetzt wird?
              </p>
              <p className="mt-6 text-base leading-8 text-zinc-800">
                Die jüngste Sicherheitslücke in der{' '}
                <a
                  href="https://www.heise.de/news/xz-Attacke-Hintertuer-entraetselt-weitere-Details-zu-betroffenen-Distros-9671588.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  XZ-Library
                </a>{' '}
                hat eindrucksvoll gezeigt, wie essenziell die Sicherheit in der
                Open-Source-Entwicklung ist. Für Unternehmen und die gesamte
                Gesellschaft, einschließlich der öffentlichen Verwaltung und der
                Wirtschaft, ist dies ein bedeutendes Anliegen, das bisher noch
                unzureichend behandelt ist. Es bedarf konkreter Ansätze, um mehr
                Sicherheit zu schaffen und dadurch das Vertrauen und den Einsatz
                von Open-Source-Lösungen zu stärken.
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
