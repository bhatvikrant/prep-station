// import Image from 'next/image'

const Landing: React.FC = () => {
  return (
    <div className="relative h-40 bg-black md:h-80">
      {/* <div className="filter brightness-50">
        <Image
          src="/custom-bg.png"
          layout="responsive"
          objectFit="cover"
          objectPosition="top"
          height={250}
          width={500}
          alt="Prep Station"
        />
      </div> */}

      <div className="absolute flex flex-col items-center justify-center w-full px-2 transform -translate-y-1/2 md:max-w-4xl top-1/2 md:left-1/2 md:-translate-x-1/2">
        <h1 className="tw-landing__text">
          Evaluate Your Profile Today, So You Can Start Working On It Tomorrow!
        </h1>
      </div>
    </div>
  )
}

export default Landing
