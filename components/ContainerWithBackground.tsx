import * as React from 'react'
import Image from 'next/dist/client/image'
import { ReactNode } from 'react'

interface ContainerWithBackgroundProps {
  className?: string
  imgClassName?: string
  children?: ReactNode
  backgroundImage?: StaticImageData
  backgroundImageSrc?: string
}

export function ContainerWithBackground(props: ContainerWithBackgroundProps) {
  const {
    className,
    children,
    backgroundImage,
    imgClassName,
    backgroundImageSrc,
  } = props

  if (backgroundImageSrc)
    return (
      <div
        style={{
          backgroundImage: `url(${backgroundImageSrc})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className={className}
      >
        {children}
      </div>
    )
  if (backgroundImage)
    return (
      <div className={`relative z-0 ${className || ''}`}>
        <Image
          src={backgroundImage}
          layout="fill"
          className={`object-center object-cover pointer-events-none ${
            imgClassName || ''
          }`}
          alt=""
        />
        {children && <div className="relative z-1">{children}</div>}
      </div>
    )

  return <> {children} </>
}
