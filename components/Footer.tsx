import React from 'react'
import { ReactNode } from 'react'
import { FaFacebookF, FaInstagram, FaCaretUp } from 'react-icons/fa'
import { CaretSquareButton } from './CaretSquareButton'
import { LogoCampaingWhite } from './svg/logoCampaignWhite'
import { LogoClub } from './svg/logoClub'

export function Footer() {
  const handleCaretClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className="w-full bg-primary p-10 md:p-16 relative">
      <CaretSquareButton
        caretDirection="up"
        onClick={handleCaretClick}
        className="absolute -top-14 right-10"
      />
      <div className="container flex justify-between flex-wrap mx-auto">
        <FooterSection>
          <LogoCampaingWhite className="w-4/6 sm:w-4/6 pb-8" />
        </FooterSection>
        <FooterSection>
          <LogoClub className="w-3/6 md:w-2/6 pb-8" />
        </FooterSection>
        <FooterSection>
          <div className="text-center">
            <h4 className="text-tertiary text-lg">CONTACTO</h4>
            <p className="text-white text-lg">San Juan 1550 - Salta Capital</p>
            <div className="flex pt-4 justify-center">
              <a
                href="https://www.instagram.com/general_paz_salta/"
                target="_blank"
                rel="noreferrer"
              >
                <IconWrapper>
                  <FaInstagram className="text-xl" />
                </IconWrapper>
              </a>

              <a
                href="https://www.facebook.com/Club-Deportivo-General-Paz-437368147029695"
                target="_blank"
                rel="noreferrer"
              >
                <IconWrapper>
                  <FaFacebookF className="text-xl" />
                </IconWrapper>
              </a>
            </div>
          </div>
        </FooterSection>
      </div>
    </div>
  )
}

function IconWrapper(props: { children: ReactNode }) {
  const { children } = props
  return (
    <div className="rounded-full bg-white text-primary w-10 h-10 mr-4 flex justify-center items-center hover:bg-tertiary">
      {children}
    </div>
  )
}

function FooterSection(props: { children: ReactNode }) {
  const { children } = props
  return (
    <div className="w-full md:w-2/6 flex justify-center items-center">
      {children}
    </div>
  )
}
