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
        <p className="mt-6 text-base text-zinc-400 md:mt-0">
          Copyright &copy; {new Date().getFullYear()} l3montree UG
          (haftungsbeschränkt). All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
