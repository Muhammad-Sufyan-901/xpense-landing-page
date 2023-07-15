import React from "react";
import ClientSlider from "./ClientSlider";
import { testimonials } from "../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Testimonials() {
  const { title, clients } = testimonials;

  return (
    <section className="section">
      <div className="container mx-auto">
        <h2 className="title mb-10 lg:mb-20 text-center max-h-[920px] mx-auto" data-aos="fade-up" data-aos-delay="200">
          {title}
        </h2>
        <div data-aos="fade-up" data-aos-delay="400">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            grabCursor={true}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1170: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}>
            {clients.map(({ message, image, name, position, borderColor }, index) => (
              <SwiperSlide key={index} style={{ borderColor: borderColor }} className="border-t-[10px] rounded-t-[12px]">
                <ClientSlider message={message} image={image} name={name} position={position} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
