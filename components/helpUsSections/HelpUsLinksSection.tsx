import useTranslation from 'next-translate/useTranslation'
import * as React from 'react'
import { sendGaEvent } from '../../utils/analytics'

const DonationLink = ({
  link,
  amount,
  className,
  onClick,
}: {
  link: string
  amount: string
  className?: string
  onClick: () => void
}) => {
  return (
    <div className={`${className || ''}`}>
      <a href={link} target="_blank" onClick={onClick}>
        <span className="py-2 px-4 xl:px-8 text-xl xl:text-2xl text-primary bg-tertiary font-semibold rounded hover:bg-tertiary-light transition duration-300 cursor-pointer">
          {amount}
        </span>
      </a>
    </div>
  )
}

const links = [
  { amount: '50', link: 'https://mpago.la/2q7PEtq' },
  { amount: '100', link: 'https://mpago.la/126tLrV' },
  { amount: '200', link: 'https://mpago.la/2kXYgUh' },
  { amount: '300', link: 'https://mpago.la/1Tz9MJh' },
  { amount: '500', link: 'https://mpago.la/2v8LDir' },
  { amount: '800', link: 'https://mpago.la/1BCfVia' },
  { amount: '1000', link: 'https://mpago.la/2PvUr4H' },
  { amount: '1500', link: 'https://mpago.la/19zhc4n' },
  { amount: '2000', link: 'https://mpago.la/26R8Yu2' },
  { amount: '3000', link: 'https://mpago.la/32oe7g2' },
  { amount: '5000', link: 'https://mpago.la/2QaGqse' },
]

export function HelpUsLinksSection() {
  const { t } = useTranslation()
  return (
    <div className="w-full bg-gray-50" id="account">
      <div className="w-11/12 lg:container p-4 pb-12 pt-12 mx-auto md:p-16 lg:py-20">
        <h1 className="text-secondary text-lg md:text-5xl text-center mb-4 md:mb-8 font-bold">
          {t('helpUs:paymentLinksTitle')}
        </h1>

        <p className="text-primary text-md text-center md:text-2xl font-bold mb-5">
          {t('helpUs:paymentLinksDescription')}
        </p>
        <div className="flex flex-wrap justify-center">
          {links.map((l, i) => {
            return (
              <DonationLink
                amount={l.amount}
                link={l.link}
                className="mx-2 md:mx-6 pt-8 md:pt-16"
                key={i}
                onClick={() =>
                  sendGaEvent({
                    action: 'donation',
                    category: 'donationlink',
                    label: `clicked donation link for ARS ${l.amount}`,
                    value: Number(l.amount),
                  })
                }
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
