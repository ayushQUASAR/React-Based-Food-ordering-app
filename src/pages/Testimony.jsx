import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/autoplay";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper";
import "./Testimony.css";
import Arr from "./Test-card-data";

const Testimony = () => {
  return (
    <div className="test">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2000 }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        id='Test-swiper'
      >
        {Arr.map((val, index) => {
          return (
            <SwiperSlide>
              
              <div className="Test-card">
                <img src={val.src} alt="" className="Test-card-img" />
                <div className="review">
                  <p>{val.content}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimony;
