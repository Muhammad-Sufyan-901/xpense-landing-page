import React, { useState } from "react";
import ProductCards from "./ProductCards";
import { product } from "../data/data";

function Product() {
  const [activeIndex, setActiveIndex] = useState(1);
  const { title, subtitle, cards } = product;

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center mb-10 lg:mb-20">
          <h2 className="section-title" data-aos="fade-up" data-aos-offset="400" data-aos-delay="300">
            {title}
          </h2>
          <p className="lead lg:max-w-[350px]" data-aos="fade-up" data-aos-offset="400" data-aos-delay="400">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px]">
          {cards.map(({ icon, title, subtitle, delay }, index) => (
            <ProductCards key={index} icon={icon} title={title} subtitle={subtitle} delay={delay} index={index} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Product;
