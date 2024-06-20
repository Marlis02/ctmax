import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import './slider.scss'

// import required modules
import Image from 'next/image'
import { Navigation } from 'swiper/modules'

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        modules={[Navigation]}
      >
        <SwiperSlide>
          <Image
            src="/images/swiper_img.webp"
            alt="logo"
            width={200}
            height={250}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/swiper_img2.webp"
            alt="logo"
            width={200}
            height={250}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/swiper_img3.webp"
            alt="logo"
            width={200}
            height={250}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/swiper_img3.webp"
            alt="logo"
            width={200}
            height={250}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/swiper_img4.webp"
            alt="logo"
            width={200}
            height={250}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/swiper_img4.webp"
            alt="logo"
            width={200}
            height={250}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/swiper_img4.webp"
            alt="logo"
            width={200}
            height={250}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/swiper_img4.webp"
            alt="logo"
            width={200}
            height={250}
          />
        </SwiperSlide>

        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider
