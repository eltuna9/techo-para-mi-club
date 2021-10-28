import { HTMLProps } from 'react'

interface TextInputProps extends HTMLProps<HTMLInputElement> {
  label: string
  id: string
  className?: string
  errorText?: string
}

export function TextInput(props: TextInputProps) {
  const { label, className, errorText, id, ...rest } = props
  return (
    <div className={`w-full ${className}`}>
      <label className="block mb-1" htmlFor="formGridCode_card">
        {label}
      </label>
      <input
        className={`w-full h-10 px-3 text-base placeholder-gray-400 border rounded-lg focus:shadow-outline ${
          !!errorText ? 'border-red-700' : ''
        }`}
        type="text"
        name={id}
        id={id}
        {...rest}
      />
      {!!errorText && <span className="text-xs text-red-700">{errorText}</span>}
    </div>
  )
}
