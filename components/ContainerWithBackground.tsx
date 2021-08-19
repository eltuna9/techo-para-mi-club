import * as React from 'react'
import Image from 'next/dist/client/image'
import { ReactNode } from 'react'

interface ContainerWithBackgroundProps {
  className?: string
  children?: ReactNode
  backgroundImage: StaticImageData
}

export function ContainerWithBackground(props: ContainerWithBackgroundProps) {
  const { className, children, backgroundImage } = props
  return (
    <div className={`relative z-0 ${className || ''}`}>
      <Image
        src={backgroundImage}
        layout="fill"
        className="object-center object-cover pointer-events-none"
        alt=""
      />
      {children && <div className="relative z-1">{children}</div>}
    </div>
  )
}