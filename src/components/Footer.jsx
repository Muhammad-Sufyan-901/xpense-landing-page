import React from "react";
import Copyright from "./Copyright";
import { footer } from "../data/data";

function Footer() {
  const {
    logo,
    links,
    legal,
    newsletter: { title, subtitle },
    form: { placeholder, btnText, smallText },
  } = footer;

  return (
    <footer className="pt-[142px] pb-[60px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center text-center lg:items-start lg:text-left lg:justify-between gap-y-8">
          <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="300">
            <img src={logo} alt="Footer Logo" />
          </div>
          <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="500">
            <div className="text-2xl uppercase font-medium mb-6">Links</div>
            <ul className="flex flex-col gap-y-3">
              {links.map(({ href, name }, index) => (
                <li key={index}>
                  <a href={href} className="font-medium hover:text-accent transition">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="700">
            <div className="text-2xl uppercase font-medium mb-6">Legal</div>
            <ul className="flex flex-col gap-y-3">
              {legal.map(({ href, name }, index) => (
                <li key={index}>
                  <a href={href} className="font-medium hover:text-accent transition">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="900">
            <div className="text-2xl uppercase font-medium mb-6">{title}</div>
            <div className="text-xl text-light mb-[18px]">{subtitle}</div>
            <form className="max-w-[349px] mb-[10px]">
              <div className="h-[62px] p-[7px] flex border border-dark rounded-lg">
                <input placeholder={placeholder} type="email" className="w-full h-full pl-6 border-none outline-none placeholder:text-dark" />
                <button type="button" className="btn btn-sm bg-accent hover:bg-accentHover w-[102px] text-white">
                  {btnText}
                </button>
              </div>
            </form>
            <span className="text-sm text-light">{smallText}</span>
          </div>
        </div>
        <hr className="mt-10 mb-5" data-aos="fade-up" data-aos-offset="100" data-aos-delay="200" />
        <Copyright />
      </div>
    </footer>
  );
}

export default Footer;
