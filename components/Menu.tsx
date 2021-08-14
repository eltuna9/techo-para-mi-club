import React, { useState } from 'react'
import Image from 'next/dist/client/image'
import { IoCloseSharp, IoMenu } from 'react-icons/io5'

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="bg-white m-auto w-full lg:w-11/12 xl:w-10/12 md:rounded-full">
      <div className="px-6 md:mx-auto md:px-12">
        <div className="flex justify-between ">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex  items-center px-2">
                <span className="flex font-semibold text-blue-800 text-lg">
                  <Image
                    src="/logoCapaniaWide.png"
                    alt="Logo un techo para mi club"
                    width="218"
                    height="71"
                    className="justify-self-center max-w-md"
                  />
                </span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            <div className="hidden md:flex items-center space-x-1">
              <a
                href=""
                className="py-4 px-2 text-lg xl:text-2xl text-blue-500 font-semibold border-blue-500  "
              >
                Campaña
              </a>
              <a
                href=""
                className="py-4 px-2 text-lg xl:text-2xl text-blue-800 font-semibold hover:text-blue-500 transition duration-300"
              >
                Novedades
              </a>
              <a
                href=""
                className="py-4 px-2 text-lg xl:text-2xl whitespace-nowrap text-blue-800 font-semibold hover:text-blue-500 transition duration-300"
              >
                El club
              </a>
              <a
                href=""
                className="py-4 px-2 text-lg xl:text-2xl text-blue-800 font-semibold hover:text-blue-500 transition duration-300"
              >
                Gracias
              </a>
            </div>
            <a
              href=""
              className="py-2 px-4 xl:px-8 text-xl xl:text-2xl text-primary bg-tertiary font-semibold rounded hover:bg-tertiary-light transition duration-300"
            >
              Ayudanos
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={handleToggle}
            >
              {menuOpen ? (
                <IoCloseSharp className=" w-10 h-10 p-1 rounded-md bg-blue-800 text-white " />
              ) : (
                <IoMenu className=" w-10 h-10 p-1 rounded-md bg-blue-800 text-white " />
              )}
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
        <ul className="px-6">
          <li className="active">
            <a
              href="index.html"
              className="block text-2xl py-3 text-blue-800 hover:text-blue-500 font-semibold transition duration-300"
            >
              Campaña
            </a>
          </li>
          <li>
            <a
              href="#novedades"
              className="block text-2xl py-3 text-blue-800 hover:text-blue-500 font-semibold transition duration-300"
            >
              Novedades
            </a>
          </li>
          <li>
            <a
              href="#elClub"
              className="block text-2xl py-3 text-blue-800 hover:text-blue-500 font-semibold transition duration-300"
            >
              El club
            </a>
          </li>
          <li>
            <a
              href="#gracias"
              className="block text-2xl py-3 text-blue-800 hover:text-blue-500 font-semibold transition duration-300"
            >
              Gracias
            </a>
          </li>
          <li className="my-10">
            <a
              href=""
              className="py-2 px-8 text-2xl text-primary bg-tertiary font-semibold rounded hover:bg-tertiary-light transition duration-300"
            >
              Ayudanos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
