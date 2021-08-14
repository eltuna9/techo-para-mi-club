import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import React, { Children, ReactElement } from 'react'

type Props = {
  children: ReactElement
  activeClassName: string
} & LinkProps

export const ActiveLink = ({ children, activeClassName, ...props }: Props) => {
  const { asPath } = useRouter()

  const child = Children.only(children)
  const childClassName = child.props.className || ''

  const className =
    asPath == props.href || asPath == props.as
      ? activeClassName.trim()
      : childClassName
  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}
