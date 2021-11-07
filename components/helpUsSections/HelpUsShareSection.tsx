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
import Trans from 'next-translate/Trans'
const ShareDescription = (props: any) => (
  <h1
    className="text-primary text-md text-center md:text-2xl font-bold mb-12"
    {...props}
  />
)
export function HelpUsShareSection() {
  const { t } = useTranslation()

  const siteUrl = 'www.untechoparamiclub.com.ar'
  const shareText = t('helpUs:shareText')
  return (
    <div className="w-full bg-gray-200">
      <div className="w-15/16 mx-auto lg:container p-6 pb-16 pt-12 md:p-16 lg:p-32 lg:py-20">
        <h1 className="text-primary text-lg md:text-5xl text-center mb-4 md:mb-10 font-bold">
          {t('helpUs:shareTitle')}
        </h1>
        <Trans
          i18nKey="helpUs:helpUsText"
          components={[
            <ShareDescription key="a" />,
            <a
              className="text-tertiary font-bold"
              href="https://www.instagram.com/general_paz_salta/"
              target="_blank"
              rel="noreferrer"
              key="b"
            />,
          ]}
        />

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
