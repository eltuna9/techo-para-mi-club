import useTranslation from 'next-translate/useTranslation'
import { DonationPaymentForm } from './donationPaymentForm'

export function HelpUsPaymentSection() {
  const { t } = useTranslation()
  return (
    <div className="bg-secondary py-20">
      <div className="w-11/12 md:w-4/5 lg:w-3/5 mx-auto text-primary">
        <h1 className="text-lg md:text-5xl text-center mb-4 md:mb-8 font-bold">
          {t('helpUs:paymentTitle')}
        </h1>
        <p>{t('helpUs:paymentDescription')}</p>
        <div className="py-10">
          <DonationPaymentForm />
        </div>
      </div>
    </div>
  )
}
