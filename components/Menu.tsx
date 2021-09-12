import React, { useState } from 'react'
import Image from 'next/dist/client/image'
import { IoCloseSharp, IoMenu } from 'react-icons/io5'
import { ActiveLink } from './ActiveLink'
import { HelpUsLink } from './HelpUsLink'
import { LogoCampaingBlue } from './svg'
import Link from 'next/link'

export default function Menu(props: React.HTMLProps<HTMLDivElement>) {
  const { className } = props
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav
      className={`bg-white m-auto w-full lg:w-10/12 md:rounded-full ${
        className || ''
      }`}
    >
      <div className="px-6 md:mx-auto md:px-12">
        <div className="flex justify-between ">
          <div className="flex space-x-7">
            <div className="flex items-center cursor-pointer py-3">
              <Link href="/">
                <LogoCampaingBlue className="h-10" />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            <div className="hidden md:flex items-center space-x-1">
              <MenuLink text="Inicio" href="/" />
              <MenuLink text="Novedades" href="/noticias" />
              {/* 
              <MenuLink text={'El club'} href={'/club'} /> */}
              <MenuLink text="Gracias" href="/gracias" />
            </div>
            <HelpUsLink className="py-1" />
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
          <ResponsiveMenuLink text="Inicio" href="/" />
          <ResponsiveMenuLink text="Novedades" href="/noticias" />
          {/* <ResponsiveMenuLink text={'El club'} href={'/home'} />*/}
          <ResponsiveMenuLink text="Gracias" href="/gracias" />
          <li className="my-10">
            <HelpUsLink />
          </li>
        </ul>
      </div>
    </nav>
  )
}
type MenuLinkProps = {
  text: string
  href: string
}

const MenuLink = ({ text, href }: MenuLinkProps) => {
  const baseClassName =
    'py-4 px-2 text-lg xl:text-2xl whitespace-nowrap hover:text-blue-500 font-semibold border-blue-500  '
  return (
    <ActiveLink activeClassName={baseClassName + ' text-blue-500'} href={href}>
      <a className={baseClassName + ' text-primary'}>{text}</a>
    </ActiveLink>
  )
}

const ResponsiveMenuLink = ({ text, href }: MenuLinkProps) => {
  const baseClassName =
    'block text-2xl py-3 hover:text-blue-500 font-semibold transition duration-300  '
  return (
    <li>
      <ActiveLink
        activeClassName={baseClassName + ' text-blue-500'}
        href={href}
      >
        <a className={baseClassName + ' text-primary'}>{text}</a>
      </ActiveLink>
    </li>
  )
}
