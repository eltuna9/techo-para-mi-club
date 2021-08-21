import Image from 'next/dist/client/image'
/** Docs for this component at https://github.com/express-labs/pure-react-carousel */
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Dot,
  Slide,
  Slider,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import * as React from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'
import { CarouselContext } from 'pure-react-carousel'
import { useState } from 'react'
import { useEffect } from 'react'

interface CarouselProps {
  /** Array of images to show in the carousel, have to be static to leverage nextjs img optimization */
  images: StaticImageData[]
  /** should the user see the arrows? */
  showArrows?: boolean
  /** Setup the css for the carousel */
  className?: string
  /** Should it continue indefinitely? */
  infinite?: boolean
  /** Number of seconds to wait when the autoplay prop is true*/
  slideDurationInSeconds?: number
  /**Want this slider to play automatically? */
  autoplay?: boolean
  /**Should it show dots on the bottom of the sliders? */
  showDots?: boolean
}
export function Carousel(props: CarouselProps) {
  const {
    images,
    showArrows,
    className,
    infinite,
    slideDurationInSeconds,
    autoplay,
    showDots,
  } = props
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={50}
      totalSlides={images.length}
      className={`relative ${className || ''}`}
      infinite={infinite}
      isPlaying={autoplay}
      interval={(slideDurationInSeconds || 5) * 1000}
    >
      <Slider className="h-3/6 w-full rounded-xl xl:rounded-3xl">
        {images.map((img, index) => (
          <Slide key={index} index={index}>
            <Image
              src={img}
              className=""
              alt="Imagen sobre el club"
              layout="responsive"
            />
          </Slide>
        ))}
      </Slider>
      {showArrows && (
        <>
          <ButtonBack className="absolute transform -translate-y-1/2 top-1/2">
            <FaCaretLeft className="text-secondary text-5xl" />
          </ButtonBack>
          <ButtonNext className="absolute transform -translate-y-1/2 top-1/2 right-0">
            <FaCaretRight className="text-secondary text-5xl" />
          </ButtonNext>
        </>
      )}
      {showDots && <CarouselDots images={images} />}
    </CarouselProvider>
  )
}

function CarouselDots(props: { images: StaticImageData[] }) {
  const { images } = props
  /**From this example https://www.npmjs.com/package/pure-react-carousel#hooks-and-usecontext */
  const carouselContext = React.useContext(CarouselContext)
  const [currentSlide, setCurrentSlide] = useState(
    carouselContext.state.currentSlide
  )
  useEffect(() => {
    function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide)
    }
    carouselContext.subscribe(onChange)
    return () => carouselContext.unsubscribe(onChange)
  }, [carouselContext])

  return (
    <div className="p-6 w-full flex justify-center ">
      {images.map((_img, index) => {
        const isEven = index % 2 === 0
        const isCurrentSlide = currentSlide === index
        return (
          <Dot key={index} slide={index}>
            <div
              className={`rounded-full ml-2 w-3 h-3 cursor-pointer bg-${
                isEven
                  ? 'tertiary hover:bg-yellow-500'
                  : 'primary hover:bg-blue-600'
              } ${isCurrentSlide ? 'h-4 w-4' : ''}`}
            ></div>
          </Dot>
        )
      })}
    </div>
  )
}
