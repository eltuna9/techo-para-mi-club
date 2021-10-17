import useTranslation from 'next-translate/useTranslation'
import { DonationPaymentForm } from './donationPaymentForm'

export function HelpUsPaymentSection() {
  const { t } = useTranslation()
  return (
    <div className="w-full">
      <h1>{t('helpUs:paymentTitle')}</h1>
      <p>{t('helpUs:paymentDescription')}</p>
      <div className="py-10">
        <DonationPaymentForm />
      </div>
    </div>
  )
}
