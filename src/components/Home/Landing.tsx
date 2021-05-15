import Image from 'next/image'

// ICONS
import { SearchIcon } from '@heroicons/react/solid'

const Landing: React.FC = () => {
  return (
    <div className="relative">
      <div className="filter brightness-50">
        <Image
          src="/bg.jpg"
          layout="responsive"
          objectFit="cover"
          objectPosition="top"
          height={250}
          width={500}
        />
      </div>

      <div className="absolute top-1/2 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 px-2">
        <h1 className="sm:text-4xl font-bold text-white leading-snug bg-gradient-to-r from-red-500 inline md:px-6 decoration-clone">
          We Understand, We Help, We Solve, Because We Are One Of You
        </h1>

        <div className="flex items-center  bg-white px-4 py-2 rounded-2xl mt-8">
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
