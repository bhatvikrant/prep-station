import Image from 'next/image'

// REACT SLICK
import Slider from 'react-slick'

// DATA
import { howWeCanAssistYouData } from './data/how-we-can-assist-you.data'

const HowWeCanAssistYou: React.FC = () => {
  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div>
      <div className="my-16 text-center">
        <h2 className="text-2xl font-semibold xs:text-3xl md:text-4xl">
          How We Can Assist You
        </h2>
      </div>

      <div className="mx-8 md:mx-auto md:max-w-6xl">
        <Slider {...settings}>
          {howWeCanAssistYouData.map((data, idx) => (
            <div
              className="relative cursor-pointer hover:opacity-75 hover:shadow-lg"
              key={idx}
            >
              <div className="filter brightness-50">
                <Image
                  src="/bg.jpg"
                  layout="responsive"
                  objectFit="cover"
                  objectPosition="top"
                  height={250}
                  width={250}
                />
              </div>

              <div className="absolute px-4 transform -translate-y-1/2 sm:px-0 top-1/2 md:left-1/2 md:-translate-x-1/2">
                <div className="text-xl italic font-bold leading-snug text-white">
                  {data.label}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
export default HowWeCanAssistYou
