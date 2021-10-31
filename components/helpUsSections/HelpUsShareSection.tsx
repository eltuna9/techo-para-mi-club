import * as React from 'react'
import {
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
} from 'next-share'
import useTranslation from 'next-translate/useTranslation'

export function HelpUsShareSection() {
  const { t } = useTranslation()

  const siteUrl = 'www.untechoparamiclub.com.ar'
  const shareText =
    'Ayudemos a este club a cumplir con el sueño de todos estos niños!'
  return (
    <div className="w-full bg-gray-200">
      <div className="w-15/16 mx-auto lg:container p-6 pb-16 pt-12 md:p-16 lg:p-32">
        <h1 className="text-primary text-lg text-center md:text-3xl font-bold mb-5">
          {t('helpUs:helpUsText')}
        </h1>

        <h1 className="text-secondary text-lg text-center md:text-2xl font-bold mb-4">
          {t('common:ctaShare')}
        </h1>

        <div className="flex flex-wrap justify-center">
          <FacebookShareButton
            url={siteUrl}
            title={shareText}
            hashtag="#unTechoParaMiClub"
          >
            <FacebookIcon
              className="mr-3 w-10 h-10 md:w-16 md:h-16 mb-4"
              round
            />
          </FacebookShareButton>

          <WhatsappShareButton url={siteUrl} title={shareText} separator=" | ">
            <WhatsappIcon
              className="mr-3 w-10 h-10 md:w-16 md:h-16 mb-4"
              round
            />
          </WhatsappShareButton>

          <TwitterShareButton url={siteUrl} title={shareText}>
            <TwitterIcon
              className="mr-3 w-10 h-10 md:w-16 md:h-16 mb-4"
              round
            />
          </TwitterShareButton>

          <LinkedinShareButton url={siteUrl}>
            <LinkedinIcon
              className="mr-3 w-10 h-10 md:w-16 md:h-16 mb-4"
              round
            />
          </LinkedinShareButton>

          <TelegramShareButton url={siteUrl} title={shareText}>
            <TelegramIcon
              className="mr-3 w-10 h-10 md:w-16 md:h-16 mb-4"
              round
            />
          </TelegramShareButton>

          <RedditShareButton url={siteUrl} title={shareText}>
            <RedditIcon className="mr-3 w-10 h-10 md:w-16 md:h-16 mb-4" round />
          </RedditShareButton>

          <EmailShareButton
            url={siteUrl}
            subject={'Y si ayudamos a esta causa?'}
            body={shareText}
          >
            <EmailIcon className="mr-3 w-10 h-10 md:w-16 md:h-16 mb-4" round />
          </EmailShareButton>
        </div>
      </div>
    </div>
  )
}
