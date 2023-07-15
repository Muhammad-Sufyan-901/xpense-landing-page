import React from "react";
import ArrowImg from "../assets/img/product/cards/arrow.svg";

function Cards({ icon, title, subtitle, delay, index, activeIndex, setActiveIndex }) {
  return (
    <div data-aos-delay={delay} data-aos="zoom-out" data-aos-offset="300">
      <div
        onClick={() => setActiveIndex(index)}
        className={`${index === activeIndex && "bg-white shadow-2xl"} w-[350px] h-[350px] flex flex-col justify-center items-center mx-auto p-[65px] text-center rounded-[12px] cursor-pointer transition-all`}>
        <div className="mb-6">
          <img src={icon} alt="Products Icon" />
        </div>
        <div className="mb-3 text-[30px] font-medium">{title}</div>
        <p className="mb-6 text-light">{subtitle}</p>
        {activeIndex === index && <img src={ArrowImg} alt="Arrow Icon" />}
      </div>
    </div>
  );
}

export default Cards;
