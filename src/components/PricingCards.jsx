import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function PricingCards({ icon, title, services, price, userAmount, delay, index, activeIndex, setActiveIndex }) {
  return (
    <div data-aos-delay={delay} data-aos="fade-up" data-aos-offset="300">
      <div onClick={() => setActiveIndex(index)} className={`${activeIndex === index ? "bg-white shadow-2xl" : "border border-grey"} w-[350px] h-[500px] rounded-[12px] p-[40px] cursor-pointer transition-all`}>
        <div className="mb-8">
          <img src={icon} alt="Pricing Icon" />
        </div>
        <div className="text-[32px] font-semibold mb-8">{title}</div>
        <div className="flex flex-col gap-y-2 mb-6">
          {services.map(({ name, textDecoration, Icon }, servicesIndex) => (
            <div key={servicesIndex} className="flex items-center gap-x-[10px]">
              <Icon className="text-light" />
              <div className={textDecoration}>{name}</div>
            </div>
          ))}
        </div>
        <div className="mb-10">
          <div>
            <span className="text-2xl font-semibold">{price} / </span>
            <span className="text-xl text-light font-light">Year</span>
          </div>
          <div className="text-base text-light">{userAmount}</div>
        </div>
        <button className={`${activeIndex === index ? "bg-accent hover:bg-accentHover text-white" : "border border-accent text-accent"} btn btn-sm space-x-[14px]`}>
          <span>Get This</span>
          <HiOutlineArrowNarrowRight />
        </button>
      </div>
    </div>
  );
}

export default PricingCards;
