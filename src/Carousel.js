import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"; // Core components
import "swiper/swiper-bundle.css"; // Swiper styles
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Swiper modules

const Carousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]} // Add desired modules
        slidesPerView={1} // Show one slide at a time
        loop={true} // Enable infinite loop
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide
        pagination={{ clickable: true }} // Enable pagination dots
        navigation={true} // Enable navigation arrows
      >
        <SwiperSlide>
          <img src={require('./assets/graphic.webp')} alt="Slide 1" style={{ width: "100%", height: "auto" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('./assets/carousel-2.webp')} alt="Slide 2" style={{ width: "100%", height: "auto" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('./assets/portfolio.webp')} alt="Slide 3" style={{ width: "100%", height: "auto" }} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
