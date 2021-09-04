import * as React from 'react'
import { useEffect } from 'react'
import { FaHeart } from 'react-icons/fa'
import { fetchAllDonors } from '../../apiClients'
import { Donor } from '../../models'

export function ThanksDonorsSection() {
  const [donors, setDonors] = React.useState<Donor[]>([])

  useEffect(() => {
    const fetchDonors = async () => {
      const allDonors = await fetchAllDonors()
      setDonors(allDonors)
    }
    fetchDonors()
  }, [])

  return (
    <div className="w-full flex flex-wrap bg-white py-24">
      <h1 className="text-primary text-center w-full font-extrabold text-3xl md:text-6xl">
        Cada aporte suma un montón{' '}
        <FaHeart className="text-secondary inline-block" />
      </h1>
      <div className="w-full p-4 md:p-16 flex flex-wrap justify-center">
        {donors.map((donor) => (
          <DonorCard key={donor.id} {...donor} />
        ))}
      </div>
    </div>
  )
}

function DonorCard(props: Donor) {
  const { fullName, amountDonated } = props
  return (
    <div className="bg-gray-200 relative rounded-2xl md:mr-8 px-8 py-6 mb-6 text-primary w-full md:w-auto text-xl">
      <div className="bg-secondary absolute w-4 h-full left-0 top-0 rounded-l-2xl" />
      <span className="text-secondary font-extrabold">{fullName},</span> gracias
      por tu ayuda de ${amountDonated}
    </div>
  )
}
