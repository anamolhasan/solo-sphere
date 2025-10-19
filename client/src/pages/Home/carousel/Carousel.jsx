// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../../index.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

import bgImg1 from '../../../assets/images/carousel1.jpg'
import bgImg2 from '../../../assets/images/carousel2.jpg'
import bgImg3 from '../../../assets/images/carousel3.jpg'

const Carousel = () => {
 return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper container px-6 py-10 mx-auto"
      >
        <SwiperSlide>
          <Slide 
          image={bgImg1} 
          text={'Get Your Web Development Project Done in minutes'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide 
          image={bgImg2} 
          text={'Get Your Web Development Project Done in minutes'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide 
          image={bgImg3} 
          text={'Get Your Web Development Project Done in minutes'}
          />
        </SwiperSlide>
        
        
      </Swiper>
    </>
  );
}

export default Carousel