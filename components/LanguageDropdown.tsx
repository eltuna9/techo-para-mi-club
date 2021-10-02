import { useRouter } from 'next/router'
import { useState } from 'react'
import { BiWorld } from 'react-icons/bi'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import Link from 'next/link'

export function LanguagesDropDown() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  return (
    <div className="relative inline-block text-left">
      <div>
        <span
          className="inline-flex justify-center items-center w-full cursor-pointer rounded-md border border-gray-300 shadow-sm px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          {router.locale?.toUpperCase()}
          {!isOpen && <FaCaretDown />}
          {isOpen && <FaCaretUp />}
        </span>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            <Link href={router.asPath} locale="es">
              <span
                className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <BiWorld className="inline-block mr-2" />
                Español
              </span>
            </Link>
            <Link href={router.asPath} locale="en">
              <span
                className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <BiWorld className="inline-block mr-2" />
                English
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
