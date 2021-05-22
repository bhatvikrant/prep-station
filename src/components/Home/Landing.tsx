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
        />
      </div>

      <div className="absolute px-2 transform -translate-y-1/2 top-1/2 md:left-1/2 md:-translate-x-1/2">
        <h1 className="inline font-bold leading-snug text-white sm:text-4xl bg-gradient-to-r from-red-500 md:px-6 decoration-clone">
          We Understand, We Help, We Solve, Because We Are One Of You
        </h1>

        <div className="flex items-center px-4 py-2 mt-8 bg-white rounded-2xl">
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
