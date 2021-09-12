// This page is just to showcase the different componets we are creating, we'll delete it once we are ready to go to production.
import * as React from 'react'
import { DonationsCounter } from '../components/DonationsCounter'
import { Footer } from '../components/Footer'
import bannerHome from '../public/bannerHome.jpg'

import Menu from '../components/Menu'
import { ContainerWithBackground } from '../components/ContainerWithBackground'
import { PostCardBig } from '../components/newsSections/PostCard'

const postTitle = 'Locreada para recaudar fondos'
const postDate = '12 de Mayo'
const postSummary =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'

export default function ComponentsShowcase() {
  return (
    <>
      <div className="container mx-auto my-6">
        <h2 className="text-center text-2xl">Donations Counter</h2>
        <DonationsCounter amount="10.080.047" />
      </div>
      <div className=" w-full mx-auto py-6 bg-blue-400">
        <h2 className="text-center text-2xl">Responsive Menu</h2>
        <Menu />
      </div>
      <div className=" w-full mx-auto my-10 ">
        <PostCardBig
          title={postTitle}
          summary={postSummary}
          date={postDate}
          // image={postImage}
        />
      </div>
      <h2 className="text-center text-2xl pt-48">Footer</h2>
      <Footer />

      <h2 className="text-center text-2xl pt-48">Container with background</h2>
      <ContainerWithBackground
        backgroundImage={bannerHome}
        className="w-full lg:w-7/12 h-3/6"
      >
        <h1 className="text-8xl text-white text-center p-48">
          ANY CONTENT HERE!
        </h1>
      </ContainerWithBackground>
    </>
  )
}
