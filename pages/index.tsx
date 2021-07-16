import Image from 'next/image'
import logo from '../public/combo.png'

export default function Home() {
  return (
    <div className="pb-14 bg-right bg-cover bg-pan-top main-div">
      <div className="container md:pt-12 sm:pt-8 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="w-5/5 md:w-4/5 mx-auto overflow-y-hidden">
          <Image
            className="lg:w-4/6 mx-auto mb-12 pt-6 w-12/12"
            src={logo}
            alt="Logo de campaña"
          />
          <h1 className="my-4 md:text-3xl text-lg text-white font-bold leading-tight text-center mb-6 text-yellow-400">
            Ayudanos a cumplir el sueño de una comunidad
          </h1>
          <p className="leading-normal text-gray-200 text-base md:text-xl sm:text-sm mb-8 text-center w-5/5 lg:w-8/12 mx-auto ">
            El <span className="text-yellow-400"> Club General Paz</span>,
            situado en la calle San Juan 1550 de Salta Capital, necesita de tu
            ayuda para lograr techar el predio que contiene a mas de 170 niños y
            jovenes.
          </p>
          <p className="leading-normal text-gray-200 text-base md:text-xl sm:text-sm mb-8 text-center lg:w-8/12 mx-auto ">
            Estamos construyendo este sitio web para que puedas seguir todos los
            detalles de esta gran campaña solidaria.
          </p>
          <p className="leading-normal text-gray-200 text-base md:text-xl sm:text-sm mb-8 text-center lg:w-8/12 mx-auto ">
            Mientras tanto, enterate de todo en nuestro Instagram 👇
          </p>
          <div className="w-full my-3 text-center ">
            <a
              className="text-3xl"
              href="https://www.instagram.com/general_paz_salta/"
            >
              <span className="text-yellow-400 font-bold text-lg md:text-3xl">
                @general_paz_salta
              </span>
            </a>
          </div>
          <h1 className="my-4 md:text-3xl text-3xl text-white font-bold leading-tight text-center mb-6 text-yellow-400 heartbeat pt-8">
            Cómo donar?
          </h1>
          <p className="leading-normal text-gray-100 text-base md:text-xl sm:text-sm mb-8 text-center lg:w-8/12 mx-auto ">
            Podés donar directamente a la cuenta bancaria del Club 👇
          </p>
          <p className="leading-normal text-gray-100 text-base md:text-xl sm:text-sm mb-8 text-center">
            Banco Credicoop - Cuenta corriente
            <br />
            Club Deportivo Gral Paz A C <br />
            CUIT: 30-70884774-3 <br />
            CBU: 1910085855008502284300 <br />
            Alias: untecho.paramiclub <br />
          </p>

          <h1 className="my-4 md:text-3xl text-xl text-white font-bold leading-tight text-center mb-6 text-yellow-400 pt-8">
            Tu colaboración puede hacer la diferencia
          </h1>
          <p className="leading-normal text-gray-100 text-base md:text-xl sm:text-sm mb-8 text-center lg:w-8/12 mx-auto ">
            Vos podés ayudarnos a cumplir este sueño! 😊 <br /> Siguiéndonos en
            Instagram, o simplemente comentandole a un amigo sobre la campaña,
            ya estás contribuyendo para que mas personas conozcan nuestra
            historia. <br />
          </p>
        </div>
      </div>
    </div>
  )
}
