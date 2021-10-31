import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

const YoutubePreview = ({ value }) => {
  const { url, lang } = value
  const id = getYouTubeId(url)
  return (
    <YouTube
      videoId={id}
      opts={{ playerVars: { cc_lang_pref: lang, cc_load_policy: 1 } }}
    />
  )
}

export default {
  name: 'youtube',
  type: 'object',
  title: 'Youtube Video',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
    {
      name: 'lang',
      type: 'string',
      title: 'Lang',
    },
  ],
  preview: {
    select: {
      url: 'url',
      lang: 'lang',
    },
    component: YoutubePreview,
  },
}
