import React, { useState } from 'react'
import Image from 'next/dist/client/image'

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="bg-white m-auto w-full md:w-11/12 md:rounded-full">
      <div className="max-w-6xl mx-auto px-12">
        <div className="flex justify-between ">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex  items-center px-2">
                {/* <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" /> */}
                <span className="flex font-semibold text-blue-800 text-lg">
                  <Image
                    src="/logoCapaniaWide.png"
                    alt="Logo un techo para mi club"
                    width="200"
                    height="70"
                    className="justify-self-center"
                  />
                </span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            <div className="hidden md:flex items-center space-x-1">
              <a
                href=""
                className="py-4 px-2 text-blue-500 font-semibold border-blue-500  "
              >
                Campana
              </a>
              <a
                href=""
                className="py-4 px-2 text-blue-800 font-semibold hover:text-blue-500 transition duration-300"
              >
                Novedades
              </a>
              <a
                href=""
                className="py-4 px-2 text-blue-800 font-semibold hover:text-blue-500 transition duration-300"
              >
                El club
              </a>
              <a
                href=""
                className="py-4 px-2 text-blue-800 font-semibold hover:text-blue-500 transition duration-300"
              >
                Gracias
              </a>
            </div>
            <a
              href=""
              className="py-2 px-8 font-medium text-primary bg-tertiary font-semibold rounded hover:bg-tertiary-light transition duration-300"
            >
              Ayudanos
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={handleToggle}
            >
              <svg
                className=" w-8 h-8 p-1 rounded-md bg-blue-800 text-white "
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          (menuOpen ? 'flex ' : 'hidden') +
          ' md:hidden mobile-menu rounded-none px-6 py-8 h-full '
        }
      >
        <ul className="">
          <li className="active">
            <a
              href="index.html"
              className="block text-sm px-2 py-3 text-blue-800 hover:text-blue-500 font-semibold transition duration-300"
            >
              Campana
            </a>
          </li>
          <li>
            <a
              href="#novedades"
              className="block text-sm px-2 py-3 text-blue-800 hover:text-blue-500 font-semibold transition duration-300"
            >
              Novedades
            </a>
          </li>
          <li>
            <a
              href="#elClub"
              className="block text-sm px-2 py-3 text-blue-800 hover:text-blue-500 font-semibold transition duration-300"
            >
              El club
            </a>
          </li>
          <li>
            <a
              href="#gracias"
              className="block text-sm px-2 py-3 text-blue-800 hover:text-blue-500 font-semibold transition duration-300"
            >
              Gracias
            </a>
          </li>
          <li className="my-4">
            <a
              href=""
              className="py-2 px-8  font-medium text-white bg-blue-400 rounded hover:bg-blue-300 transition duration-300"
            >
              Ayudanos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
