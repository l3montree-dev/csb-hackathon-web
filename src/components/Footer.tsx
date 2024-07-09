import { Container } from '@/components/Container'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="flex-none bg-zinc-900 py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Image
          src="/l3montree-logo-ce.svg"
          width={300}
          height={120}
          className="h-16 w-auto"
          alt=""
        />
        <div className="text-sm text-zinc-400">
          <div className="flex flex-1 justify-end">
            <a
              className="mr-10"
              href="https://l3montree.com/impressum"
              target="_blank"
              rel="noopener noreferrer"
            >
              Impressum
            </a>
            <a
              className=""
              href="https://l3montree.com/datenschutz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datenschutz
            </a>
          </div>
          <p className="mt-4">
            Copyright &copy; {new Date().getFullYear()} l3montree UG
            (haftungsbeschränkt). All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
