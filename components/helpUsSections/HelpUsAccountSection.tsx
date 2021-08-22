import * as React from 'react'

export function HelpUsAccountSection() {
  return (
    <div className="w-full bg-white" id="account">
      <div className="w-11/12 lg:container p-4 pb-12 pt-12 mx-auto md:p-16 lg:p-32">
        <h1 className="text-secondary text-lg md:text-5xl text-center mb-4 md:mb-8 font-bold">
          Podés donar a la cuenta bancaria del club:
        </h1>
        <div className="flex justify-center">
          <p className="text-primary text-md md:text-3xl md:leading-10">
            Banco Credicoop - Cuenta corriente <br />
            Club Deportivo Gral Paz A C <br />
            <strong>CUIT:</strong> 30-70884774-3 <br />
            <strong>CBU:</strong> 1910085855008502284300 <br />
            <strong>Alias:</strong> untecho.paramiclub
          </p>
        </div>
      </div>
    </div>
  )
}
