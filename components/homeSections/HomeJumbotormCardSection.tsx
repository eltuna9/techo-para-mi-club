import { ContainerWithBackground } from '../ContainerWithBackground'
import kidShooting from '../../public/kidShooting.jpg'
import bannerHome from '../../public/bannerHome.jpg'

export function HomeJumbotormCardSection() {
  return (
    <div className="w-full pt-8 pb-8">
      <div className="w-10/12 xl:container mx-auto">
        <div className="rounded-4xl flex flex-col-reverse md:flex-row w-full">
          <div className="w-full md:w-4/6 bg-primary p-6 py-12 md:py-18 lg:py-36 lg:px-20 rounded-b-xl md:rounded-b-none md:rounded-l-3xl lg:rounded-l-5xl">
            <h1 className="text-white text-2xl lg:text-5xl mb-6 font-bold">
              El Club es un espacio deportivo, de recreación, pero sobre todo de
              contención.
            </h1>
            <p className="text-white text-md lg:text-2xl">
              Necesitamos que nuestros niños, niñas y adolescentes puedan
              entrenar, jugar, crecer y desarrollarse en un ambiente en buenas
              condiciones.
            </p>
          </div>
          <ContainerWithBackground
            backgroundImage={kidShooting}
            className="hidden md:block w-2/6"
            imgClassName="rounded-r-3xl lg:rounded-r-5xl"
          />
          <ContainerWithBackground
            backgroundImage={bannerHome}
            className="block w-full md:hidden md:w-2/6 h-64"
            imgClassName="rounded-t-xl"
          />
        </div>
      </div>
    </div>
  )
}
