'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import './carouse.scss'
import { Pagination } from 'swiper/modules'
import Image from 'next/image'

const Carousel = () => {
  return (
    // <div className="con">
    //   <Swiper
    //     slidesPerView={3}
    //     spaceBetween={30}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     modules={[Pagination]}
    //     className="mySwiper"
    //   >
    //     <SwiperSlide>Slide 1</SwiperSlide>
    //     <SwiperSlide>Slide 2</SwiperSlide>
    //     <SwiperSlide>Slide 3</SwiperSlide>
    //     <SwiperSlide>Slide 4</SwiperSlide>
    //     <SwiperSlide>Slide 5</SwiperSlide>
    //     <SwiperSlide>Slide 6</SwiperSlide>
    //     <SwiperSlide>Slide 7</SwiperSlide>
    //     <SwiperSlide>Slide 8</SwiperSlide>
    //     <SwiperSlide>Slide 9</SwiperSlide>
    //   </Swiper>
    // </div>
    <div className="con">
      <Image
        src="/images/swiper_img3.webp"
        alt="logo"
        width={200}
        height={250}
      />
      <Image
        src="/images/swiper_img.webp"
        alt="logo"
        width={200}
        height={250}
      />
      <Image
        src="/images/swiper_img2.webp"
        alt="logo"
        width={200}
        height={250}
      />
      <Image
        src="/images/swiper_img3.webp"
        alt="logo"
        width={200}
        height={250}
      />
      <Image
        src="/images/swiper_img4.webp"
        alt="logo"
        width={200}
        height={250}
      />
      <Image
        src="/images/swiper_img4.webp"
        alt="logo"
        width={200}
        height={250}
      />
    </div>
  )
}

export default Carousel
