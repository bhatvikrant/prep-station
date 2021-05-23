import Image from 'next/image'

// REACT SLICK
import Slider from 'react-slick'

// ICONS
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

// DATA
import { howWeCanAssistYouData } from './data/how-we-can-assist-you.data'

function PrevArrow(props: { className?: any; style?: any; onClick?: any }) {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <FaChevronCircleLeft />
    </div>
  )
}
function NextArrow(props: { className?: any; style?: any; onClick?: any }) {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <FaChevronCircleRight />
    </div>
  )
}

const HowWeCanAssistYou: React.FC = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: 'react__slick__slider__parent',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: true,
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
        <h2 className="tw-section-heading">How We Can Assist You</h2>
      </div>

      <div className="mx-8 md:mx-auto md:max-w-6xl">
        <Slider {...settings} className="react__slick__slider__parent">
          {howWeCanAssistYouData.map((data, idx) => (
            <div
              className="relative cursor-pointer sm:p-4 hover:opacity-75 hover:shadow-lg"
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
                  alt="How We Can Assist You"
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
