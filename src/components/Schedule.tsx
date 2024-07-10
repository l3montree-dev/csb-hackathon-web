'use client'

import { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'

interface Day {
  date: React.ReactNode
  dateTime: string
  summary: string
  timeSlots: Array<{
    name: string
    description: string | null
    start: string
    end: string
    openForOthers: boolean
    id: number
  }>
}

const schedule: Array<Day> = [
  {
    date: 'Fr. 08. November',
    dateTime: '2024-11-08',
    summary:
      'Der Freitag startet mit der Begrüßung und Teamfindung, gefolgt von einem kreativen Workshop, Abendessen und dem Beginn der offenen Arbeitsphase.',
    timeSlots: [
      {
        name: 'Begrüßung & Problemvorstellung',
        description: null,
        start: '17:00',
        end: '18:30',
        openForOthers: false,
        id: 1,
      },
      {
        name: 'Teamfindung',
        description: null,
        start: '18:30',
        end: '19:00',
        openForOthers: false,
        id: 2,
      },
      {
        name: 'Workshop: Kreativtechniken',
        description: null,
        start: '19:00',
        end: '19:30',
        openForOthers: false,
        id: 3,
      },
      {
        name: 'Abendessen',
        description: '🥬 🥔 🥙 🧆 🌮 🍔',
        start: '19:30',
        end: '20:30',
        openForOthers: false,
        id: 4,
      },
      {
        name: 'Beginn der Arbeitsphase',
        description: '🚀',
        start: '20:30',
        end: 'offen',
        openForOthers: false,
        id: 5,
      },
    ],
  },
  {
    date: 'Sa. 09. November',
    dateTime: '2024-11-09',
    summary:
      'Am Samstag steht die intensive Arbeitsphase im Mittelpunkt. Unser Team steht euch den ganzen Tag für Rückfragen zur Verfügung. Ein Pitch-Workshop bereitet euch auf Sonntag vor.',
    timeSlots: [
      {
        name: 'Arbeitsphase',
        description: '🚀',
        start: 'offen',
        end: '10:00',
        openForOthers: false,
        id: 6,
      },
      {
        name: 'Frühstück',
        description: '🥞 🥨 🍎 🥐 🥯 ☕',
        start: '10:00',
        end: '11:00',
        openForOthers: false,
        id: 7,
      },
      {
        name: 'Arbeitsphase',
        description: '🚀',
        start: '11:00',
        end: '14:00',
        openForOthers: false,
        id: 8,
      },
      {
        name: 'Mittagessen',
        description: '🥬 🥔 🥙 🧆 🌮 🍔',
        start: '14:00',
        end: '15:00',
        openForOthers: false,
        id: 9,
      },
      {
        name: 'Arbeitsphase',
        description: '🚀',
        start: '15:00',
        end: '17:00',
        openForOthers: false,
        id: 10,
      },
      {
        name: 'Workshop: Boost your Pitch',
        description: null,
        start: '18:00',
        end: '18:30',
        openForOthers: false,
        id: 11,
      },
      {
        name: 'Abendessen',
        description: '🥬 🥔 🥙 🧆 🌮 🍔',
        start: '18:30',
        end: '19:30',
        openForOthers: false,
        id: 12,
      },
      {
        name: 'Arbeitsphase',
        description: '🚀',
        start: '19:30',
        end: 'offen',
        openForOthers: false,
        id: 13,
      },
    ],
  },
  {
    date: 'So. 10. November',
    dateTime: '2024-11-10',
    summary:
      'Der Sonntag beginnt mit einer letzten Arbeitsphase und Frühstück, gefolgt von Partnerpräsentationen, Pitches, einem Buffet, der Preisverleihung und einer Networking-Party zum Abschluss.',
    timeSlots: [
      {
        name: 'Arbeitsphase',
        description: '🚀',
        start: 'offen',
        end: '11:00',
        openForOthers: false,
        id: 14,
      },
      {
        name: 'Frühstück',
        description: '🥞 🥨 🍎 🥐 🥯 ☕',
        start: '11:00',
        end: '12:00',
        openForOthers: false,
        id: 15,
      },
      {
        name: 'Partnervorstellungen',
        description: 'Sponsoren & Partner stellen sich vor',
        start: '12:00',
        end: '13:00',
        openForOthers: true,
        id: 16,
      },
      {
        name: 'Pitches',
        description: 'Die Teams präsentieren ihre Ideen',
        start: '13:00',
        end: '15:00',
        openForOthers: true,
        id: 17,
      },
      {
        name: 'Buffet & Drinks',
        description: '🍕 🍣 🍷 🍺 🍹 🍸',
        start: '15:00',
        end: '15:30',
        openForOthers: true,
        id: 18,
      },
      {
        name: 'Preisverleihung',
        description: '🏆',
        start: '15:30',
        end: '16:00',
        openForOthers: true,
        id: 19,
      },
      {
        name: '🎊 Networking & Abschlussparty 🎉',
        description:
          'Austausch mit anderen Teilnehmern, Besuchern und Sponsoren. Musik, Drinks & Snacks.',
        start: '16:00',
        end: 'offen',
        openForOthers: true,
        id: 20,
      },
    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <TabGroup
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <TabList className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) => (
          <>
            {schedule.map((day, dayIndex) => (
              <div
                key={day.dateTime}
                className={clsx(
                  'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                  dayIndex !== selectedIndex && 'opacity-70',
                )}
              >
                <DaySummary
                  day={{
                    ...day,
                    date: (
                      <Tab className="ui-not-focus-visible:outline-none">
                        <span className="absolute inset-0" />
                        {day.date}
                      </Tab>
                    ),
                  }}
                />
              </div>
            ))}
          </>
        )}
      </TabList>
      <TabPanels>
        {schedule.map((day) => (
          <TabPanel
            key={day.dateTime}
            className="ui-not-focus-visible:outline-none"
          >
            <TimeSlots day={day} />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}

function DaySummary({ day }: { day: Day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-white">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-zinc-400">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }: { day: Day; className?: string }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-zinc-900 px-10 py-14 text-center',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.id}
          aria-label={`TOP: ${timeSlot.name}; Beschreibung: ${timeSlot.description}; Start um ${timeSlot.start} bis ${timeSlot.end}`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-white/20" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-zinc-100">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-zinc-100">
              {timeSlot.description}
            </p>
          )}
          {timeSlot.openForOthers && (
            <p className="mt-1 text-sm font-medium tracking-tight text-l3-400">
              Offen mit{' '}
              <a
                href="/coming-soon"
                className="text-l3-400 underline decoration-dashed decoration-1 underline-offset-2 hover:text-l3-200"
              >
                Besucherticket
              </a>
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-zinc-400">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section
      id="schedule"
      aria-label="Schedule"
      className="bg-zinc-950 py-20 sm:py-32"
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-white">
            Der Zeitplan im Überblick
          </h2>
          <p className="mt-4 font-display text-xl tracking-tight text-zinc-400">
            Erlebe drei Tage voller Herausforderungen, intensiver Arbeitsphasen
            und Networking. Triff neue Leute, erweitere dein Netzwerk und
            gewinne mit deinem Team das Preisgeld. 
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-20">
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
