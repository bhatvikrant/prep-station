import Link from 'next/link'

// DATA
import { ourOfferingsData } from './data/our-offerings.data'

const OurOfferings: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto my-32">
      <div className="my-16 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Our Offerings</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:grid-rows-2">
        {ourOfferingsData.map((offering, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-4 mx-4 border rounded shadow-md hover:shadow"
          >
            <p className="text-2xl font-bold text-gray-700">{offering.label}</p>

            <ul className="my-6 text-xs list-disc list-inside">
              {offering.points.map((point, idxx) => (
                <li key={idxx}>{point}</li>
              ))}
            </ul>

            <Link href="/">
              <a className="flex items-center justify-center px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">
                {offering.icon}
                {offering.ctaText}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurOfferings
