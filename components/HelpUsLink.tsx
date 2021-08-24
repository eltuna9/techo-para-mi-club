import Link from 'next/link'
import * as React from 'react'

interface HelpUsLinkProps {
  className?: string
}
export function HelpUsLink(props: HelpUsLinkProps) {
  const { className } = props
  return (
    <Link href="/ayudanos" passHref>
      <span
        className={`py-2 px-4 xl:px-8 text-xl xl:text-2xl text-primary bg-tertiary font-semibold rounded hover:bg-tertiary-light transition duration-300 cursor-pointer ${
          className || ''
        } `}
      >
        Ayudanos
      </span>
    </Link>
  )
}
