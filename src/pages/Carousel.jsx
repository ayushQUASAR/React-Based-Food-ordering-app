import React from "react";
import "./carousel.css";
import "./Home.css";
import Content from "./Content";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/autoplay";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";

import Car from "./Card_data";

const Carousel = () => {
  return (
    <div className="carousel">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 6000 }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper-card"
      >
        {Car.map((val, indx) => {
          return (
            <SwiperSlide className="carouselswiper-slide">
              <Content
                key={indx}
                price={val.price}
                name={val.name}
                src={val.src}
                txt={val.txt}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
