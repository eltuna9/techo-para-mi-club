import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

export const serializers = {
  types: {
    // eslint-disable-next-line react/display-name
    youtube: ({ node }) => {
      const { url } = node
      const id = getYouTubeId(url)
      return (
        <YouTube
          videoId={id}
          className="w-full h-screen-1/3 md:h-screen-2/3 mx-auto"
        />
      )
    },
  },
}
