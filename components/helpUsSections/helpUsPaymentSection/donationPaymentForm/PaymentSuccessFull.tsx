import useTranslation from 'next-translate/useTranslation'

interface PaymentSuccessFullProps {
  paymentResultTitle: string
  paymentResultDescription: string
}
export function PaymentSuccessFull(props: PaymentSuccessFullProps) {
  const { paymentResultDescription, paymentResultTitle } = props
  const { t } = useTranslation()
  return (
    <div className="w-full text-center">
      <h1 className="text-secondary text-lg md:text-4xl text-center mb-4 md:mb-6 font-bold">
        {t('helpUs:paymentThanksTitle')}
      </h1>

      <h2 className="text-md md:text-3xl mb-4">{paymentResultTitle}</h2>
      <p className="text-sm md:text-xl mb-10">{paymentResultDescription}</p>
      <div className="w-3/5 mx-auto text-center">
        <img
          src="https://i.giphy.com/media/229vN1LszOgKayj87M/giphy.webp"
          className="w-10/12 mx-auto"
          alt={t('helpUs:paymentThanksTitle')}
        />
      </div>
    </div>
  )
}
