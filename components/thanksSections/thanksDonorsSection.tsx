import useTranslation from 'next-translate/useTranslation'
import * as React from 'react'
import { useEffect } from 'react'
import { FaHeart } from 'react-icons/fa'
import { fetchAllDonors } from '../../apiClients'
import { Donor, PaginatedResults } from '../../models'

export function ThanksDonorsSection() {
  const { t } = useTranslation()
  const [donorsPage, setDonorsPageData] = React.useState<
    PaginatedResults<Donor>
  >({
    data: [],
  })

  const [isLoadingDonors, setIsLoadingDonors] = React.useState(true)

  const fetchDonors = async (nextRecordId?: string) => {
    setIsLoadingDonors(true)
    const allDonors = await fetchAllDonors(nextRecordId)
    setDonorsPageData({
      nextRecordId: allDonors.nextRecordId,
      data: [...donorsPage.data, ...allDonors.data],
    })
    setIsLoadingDonors(false)
  }

  useEffect(() => {
    fetchDonors()
  }, [])

  const seeMoreClickHandler = () => {
    fetchDonors(donorsPage.nextRecordId)
  }

  const hasDonors = donorsPage.data.length > 0

  return (
    <div className="w-full flex flex-wrap bg-white py-24">
      <h1 className="text-primary text-center w-full font-extrabold text-3xl md:text-6xl">
        {t('thanks:thanksText')}
        <FaHeart className="text-secondary inline-block" />
      </h1>

      {isLoadingDonors && (
        <h2 className="text-secondary p-16 text-center w-full text-3xl">
          {t('common:loading')}...
        </h2>
      )}

      <div className="w-full p-4 md:p-16 flex flex-wrap justify-center">
        {donorsPage.data.map((donor) => (
          <DonorCard key={donor.id} {...donor} />
        ))}
      </div>

      {hasDonors && !!donorsPage.nextRecordId && (
        <div className="w-full flex justify-center">
          <button
            className="px-6 py-3 bg-secondary text-white rounded-2xl"
            onClick={seeMoreClickHandler}
            disabled={isLoadingDonors}
          >
            {isLoadingDonors
              ? `${t('common:loading')}...`
              : `${t('common:ctaSeeMore')}`}
          </button>
        </div>
      )}
    </div>
  )
}

function DonorCard(props: Donor) {
  const { fullName, amountDonated } = props
  const { t } = useTranslation()

  return (
    <div className="bg-gray-200 relative rounded-2xl md:mr-8 px-6 py-3 md:px-8 md:py-6 mb-6 text-primary w-full xl:w-auto text-md md:text-xl">
      <div className="bg-secondary absolute w-3 md:w-4 h-full left-0 top-0 rounded-l-2xl" />
      <span className="text-secondary font-extrabold">{fullName.trim()},</span>
      {` ${t('thanks:donationSummary', { amount: amountDonated })}`}
    </div>
  )
}
