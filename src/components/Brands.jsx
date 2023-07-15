import React from "react";
import { overview } from "../data/data";

function Brands() {
  const { brands } = overview;

  return (
    <section className="py-9">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6">
        {brands.map(({ image, delay }, index) => (
          <div key={index} data-aos-delay={delay} data-aos="fade-up">
            <img src={image} alt="Brands Sponsor" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brands;
