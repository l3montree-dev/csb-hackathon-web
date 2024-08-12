import { type Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Cybersecurity Hackathon',
    default:
      'Cybersecurity Hackathon 2024 - 08. bis 10. November in Bonn - Open Source Software Security',
  },
  description:
    'Der Cybersecurity Hackathon 2024 in Bonn ist ein Event für alle, die sich für Open-Source-Software-Sicherheit interessieren. Sei dabei und entwickle innovative Lösungen!',
}

const env = process.env.NODE_ENV

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Cybersecurity Hackathon 2024',
  startDate: '2024-11-08T17:00',
  endDate: '2024-11-10T23:00',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'Place',
    name: 'DIGITALHUB.DE',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Am Hauptbahnhof 6',
      addressLocality: 'Bonn',
      postalCode: '53111',
      addressRegion: 'NRW',
      addressCountry: 'DE',
    },
  },
  image: ['https://cybersecurity-hackathon.de/teilnehmende-2023.jpg'],
  description:
    'Nimm am Cybersecurity Hackathon 2024 in Bonn vom 8. - 10. November teil! Entwickle Lösungen für OSS Sicherheit, vernetze dich mit Experten und gewinne 3k € Preisgeld. Kostenlose Teilnahme, spannende Workshops und eine großartige Atmosphäre erwarten dich.',
  organizer: {
    '@type': 'Organization',
    name: 'L3montree Cybersecurity',
    url: 'https://l3montree.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="de"
      className={clsx(
        'h-full bg-zinc-950 antialiased',
        inter.variable,
        dmSans.variable,
      )}
    >
      <head>
        {env === 'production' && (
          <script
            async
            src="https://umami.l3montree.com/script.js"
            data-website-id="e3572955-12ea-44c9-9581-634e16bf8b74"
          ></script>
        )}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        ></script>
      </head>
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}
