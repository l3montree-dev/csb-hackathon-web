const faqs = [
  {
    id: 1,
    question: 'Was ist ein Hackathon?',
    answer:
      'Ein Hackathon ist ein intensives, meist mehrtägiges Event, bei dem Technologie-Enthusiasten zusammenkommen, um innovative Lösungen für spezifische Herausforderungen zu entwickeln. Bei einem Hackathon geht es oft darum, innerhalb eines begrenzten Zeitraums (meist 24–48 Stunden) ein starkes Lösungskonzept und im Idealfall einen Prototyp zu erstellen.',
  },
  {
    id: 2,
    question: 'Wer kann Teilnehmen?',
    answer:
      'Grundsätzlich jede und jeder, der Interesse hat! Wenn du eine Leidenschaft für Technologie hast, dann bist du herzlich willkommen. Aufgrund des diesjährigen Themas sind Erfahrungen mit Open-Source-Software von Vorteil, aber nicht zwingend erforderlich. Auch Teilnehmende aus anderen Bereichen wie Wirtschaft oder Design sind willkommen - ein diverses Team bringt oft große Vorteile mit sich! Nicht nur Studierende, sondern Menschen jeden Alters können teilnehmen. Es gilt unser Code of Conduct, um ein respektvolles und inklusives Umfeld zu gewährleisten.',
  },
  {
    id: 3,
    question: 'Muss ich Programmieren können?',
    answer:
      'Nein, du musst nicht programmieren können. Da es dieses Jahr um Open-Source-Software-Sicherheit geht, kann ein Teammitglied mit Programmiererfahrung vorteilhaft sein. Erfolgreiche Teams sind allerdings eher divers aufgestellt und die Teammitglieder bringen verschiedene Blickwinkel ein. Wenn du also einen anderen Hintergrund mitbringst, kann das für dein Team sehr wertvoll sein!',
  },
  {
    id: 4,
    question: 'Kann ich mich mit einem bestehenden Team anmelden?',
    answer:
      'Grundsätzlich kannst du dich mit einem Team anmelden. Meldet euch dafür bitte einzeln an und schreibt uns danach eine kurze Nachricht an hello@l3montree.com mit den Namen eurer Teammitglieder. ',
  },
  {
    id: 5,
    question: 'Was sollte ich an Equipment mitbringen?',
    answer:
      'Einen Internetzugang und Screens sind vor Ort. Bringt also einfach das mit, was ihr zum Arbeiten braucht - klassisch: Laptop, ggf. Tablet, ...',
  },
  {
    id: 6,
    question: 'Wie siehts mit Essen und Trinken aus?',
    answer:
      'Wir versorgen euch (kostenlos) mit Mittag- und Abendessen. Wirf auch gerne einen Blick in den vorläufigen Zeitplan weiter oben. Es wird immer zumindest eine vegetarische Option geben. Getränke sind auch ausreichend vor Ort (verschiedene Softdrinks, Kaffee, Wasser etc.). Die Location ist sehr zentral in Bonn gelegen und fußläufig sind verschiedene Restaurants, Cafés und Supermärkte erreichbar, falls ihr etwas Spezielles oder größere Mengen braucht.',
  },
]

export default function Faqs() {
  return (
    <div className="bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="font-display text-4xl font-medium tracking-tighter text-white">
          Häufig gestellte Fragen
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300">
          Du hast eine andere Frage und kannst die Antwort nicht finden, die du
          suchst? Dann{' '}
          <a
            href="mailto:community@cybersecurity-hackathon.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-l3-400 underline decoration-dashed decoration-1 underline-offset-2 hover:text-l3-200"
          >
            schreibe uns gerne eine E-Mail
          </a>
          .
        </p>
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300">
          Bei allen Veranstaltungen von L3montree gilt unser{' '}
          <a
            href="https://github.com/l3montree-dev/devguard/blob/main/CODE_OF_CONDUCT.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-l3-400 underline decoration-dashed decoration-1 underline-offset-2 hover:text-l3-200"
          >
            Code of Conduct
          </a>
          .
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-semibold leading-7 text-white">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
