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
      <h1 className="text-secondary text-lg md:text-5xl text-center mb-4 md:mb-10 font-bold">
        {t('helpUs:paymentThanksTitle')}
      </h1>

      <h2 className="text-md md:text-3xl mb-8">{paymentResultTitle}</h2>
      <p className="text-sm md:text-2xl mb-10">{paymentResultDescription}</p>
      <div className="w-4/5 mx-auto">
        <img
          src="https://i.giphy.com/media/229vN1LszOgKayj87M/giphy.webp"
          className="w-100"
          alt={t('helpUs:paymentThanksTitle')}
        />
      </div>
    </div>
  )
}
