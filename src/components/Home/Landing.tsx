import Image from 'next/image'

// ICONS
import { SearchIcon } from '@heroicons/react/solid'

const Landing: React.FC = () => {
  return (
    <div className="relative">
      <div className="filter brightness-50">
        <Image
          src="/custom-bg.png"
          layout="responsive"
          objectFit="cover"
          objectPosition="top"
          height={250}
          width={500}
          alt="Prep Station"
        />
      </div>

      <div className="absolute flex flex-col items-center justify-center w-full px-2 transform -translate-y-1/2 md:max-w-xl top-1/2 md:left-1/2 md:-translate-x-1/2">
        <h2 className="tw-landing__text">We Understand</h2>
        <h2 className="tw-landing__text">We Help</h2>
        <h2 className="tw-landing__text">We Solve</h2>

        <div className="flex items-center w-full px-4 py-2 mt-8 bg-white rounded-2xl">
          <SearchIcon className="h-5 mr-2" />
          <input
            type="text"
            className="w-full border-none outline-none"
            placeholder="Get information on colleges, exams and more..."
          />
        </div>
      </div>
    </div>
  )
}

export default Landing
