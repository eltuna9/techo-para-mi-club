import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

export const serializers = {
  types: {
    // eslint-disable-next-line react/display-name
    youtube: ({ node }) => {
      const { url, lang } = node
      const id = getYouTubeId(url)
      return (
        <YouTube
          videoId={id}
          opts={{ playerVars: { cc_lang_pref: lang, cc_load_policy: 1 } }}
          className="w-full h-screen-1/3 md:h-screen-2/3 mx-auto"
        />
      )
    },
  },
}
