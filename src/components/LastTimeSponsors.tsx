import Image from 'next/image'

export default function LastTimeSponsors() {
  return (
    <div className="">
      <h3 className="text-xl font-semibold leading-8 text-zinc-100">
        Sponsoren & Partner im letzten Jahr
      </h3>
      <div className="mt-10 grid max-w-lg grid-cols-4 gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none">
        <Image
          alt="KPMG Logo"
          src="/kpmg_logo.svg"
          width={158}
          height={48}
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        />
        <Image
          alt="Digital Hub Bonn Logo"
          src="/digitalhub-w.svg"
          width={158}
          height={48}
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        />
        <Image
          alt="Hochschule Bonn-Rhein-Sieg Logo"
          src="/hbrs-w.png"
          width={158}
          height={48}
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        />
        <Image
          alt="Universität Bonn Logo"
          src="/uni-bonn-w.svg"
          width={158}
          height={48}
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        />
      </div>
    </div>
  )
}
