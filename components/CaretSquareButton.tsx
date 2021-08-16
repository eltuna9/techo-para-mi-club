import * as React from 'react'
import { FaCaretUp, FaCaretDown } from 'react-icons/fa'

interface CaretSquareButtonProps extends React.HTMLProps<HTMLDivElement> {
  caretDirection: 'up' | 'down'
}

export function CaretSquareButton(props: CaretSquareButtonProps) {
  const { caretDirection, className, ...rest } = props

  return (
    <div
      className={`rounded-lg bg-tertiary text-white w-12 h-12 flex justify-center items-center cursor-pointer ${
        className || ''
      }`}
      {...rest}
    >
      {caretDirection === 'up' && <FaCaretUp className="text-5xl" />}
      {caretDirection === 'down' && <FaCaretDown className="text-5xl" />}
    </div>
  )
}
