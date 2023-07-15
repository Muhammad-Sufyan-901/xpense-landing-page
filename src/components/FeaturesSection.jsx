import React from "react";
import ArrowRightImg from "../../src/assets/img/features/arrow-right.svg";

function FeaturesSection({ pretitle, title, subtitle, image, index }) {
  if (index % 2 !== 0) {
    return (
      <section className="section">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]">
            <div className="flex-1" data-aos="fade-right" data-aos-offset="400">
              <div className="pretitle">{pretitle}</div>
              <h2 className="title">{title}</h2>
              <p className="lead">{subtitle}</p>
              <button className="btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all">
                Learn More <img src={ArrowRightImg} alt="Arrow" />
              </button>
            </div>
            <div className="flex-1" data-aos="fade-left" data-aos-offset="300">
              <img src={image} alt="Features Banner" />
            </div>
          </div>
        </div>
      </section>
    );
  } else if (index % 2 === 0) {
    return (
      <section className="section">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]">
            <div className="flex-1 order-2 lg:order-1" data-aos="fade-right" data-aos-offset="300">
              <img src={image} alt="Features Banner" />
            </div>
            <div className="flex-1 order-1 lg:order-2" data-aos="fade-left" data-aos-offset="400">
              <div className="pretitle">{pretitle}</div>
              <h2 className="title">{title}</h2>
              <p className="lead">{subtitle}</p>
              <button className="btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all">
                Learn More <img src={ArrowRightImg} alt="Arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return undefined;
  }
}

export default FeaturesSection;
