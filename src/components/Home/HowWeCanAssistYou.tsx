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
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    // slidesToScroll: 3
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
      <div className="my-8 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">
          How We Can Assist You
        </h2>
      </div>
      <Slider {...settings}>
        {howWeCanAssistYouData.map((data, idx) => (
          <div key={idx} className="p-4 border h-60">
            <p className="text-2xl italic font-bold leading-snug">
              {data.label}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  )
}
export default HowWeCanAssistYou
