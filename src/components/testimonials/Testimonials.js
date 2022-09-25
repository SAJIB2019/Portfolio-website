import React from "react";
import "./Testimonials.css";
import AVATAR1 from "../../assets/images/avatar1.jpg";
import AVATAR2 from "../../assets/images/avatar2.jpg";
import AVATAR3 from "../../assets/images/avatar3.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVATAR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectutur adipisicing elit, delectus aliquid cupiditate architecto voluptas delentiti dolore esse sint perspiciatis, amet doloribus labore ipsum quod volumtatum nuts?",
  },
  {
    avatar: AVATAR2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet consectutur adipisicing elit, delectus aliquid cupiditate architecto voluptas delentiti dolore esse sint perspiciatis, amet doloribus labore ipsum quod volumtatum nuts?",
  },
  {
    avatar: AVATAR3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit amet consectutur adipisicing elit, delectus aliquid cupiditate architecto voluptas delentiti dolore esse sint perspiciatis, amet doloribus labore ipsum quod volumtatum nuts?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="AVATAR-ONE" />
              </div>
              <h5>{name}</h5>
              <small>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
