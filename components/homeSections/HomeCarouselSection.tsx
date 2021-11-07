import getYouTubeID from 'get-youtube-id'
import useTranslation from 'next-translate/useTranslation'
import * as React from 'react'
import YouTube from 'react-youtube'
import { LogoCampaingSquare } from '../svg'

export function HomeCarouselSection() {
  const { t, lang } = useTranslation()
  return (
    <div className="w-full pt-12 md:pt-16 lg:pt-32 pb-12 md:pb-16 lg:pb-48 bg-gray-300">
      <div className="container w-11/12 mx-auto flex flex-wrap">
        <h1 className="text-primary text-lg md:text-5xl text-center mb-4 md:mb-10 font-bold w-full">
          {t('home:videoTitle')}
        </h1>
        <p className="text-primary text-sm md:text-2xl text-center pb-10 md:pb-20">
          {t('home:videoDescription')}
        </p>
        <div className="w-full flex items-center justify-center">
          <iframe
            className="w-full h-screen-1/3 md:h-screen-2/3 mx-auto"
            src={`https://www.youtube.com/embed/1xRxvhPEwKk?cc_lang_pref=${lang}&cc_load_policy=1&modestbranding=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // @ts-ignore
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}
