import React from "react";
import { copyright } from "../data/data";

function Copyright() {
  const {
    link1: { name: link1Name, href: link1Href },
    link2: { name: link2Name, href: link2Href },
    copyText,
    social,
  } = copyright;

  return (
    <div className="flex flex-col items-center gap-y-2 lg:flex-row lg:justify-between" data-aos="fade-up" data-aos-offset="0" data-aos-delay="200">
      <div className="flex gap-x-6">
        <a href={link1Href} className="hover:text-accent transition">
          {link1Name}
        </a>
        <a href={link2Href} className="hover:text-accent transition">
          {link2Name}
        </a>
      </div>
      <div>{copyText}</div>
      <ul className="flex gap-x-[12px]">
        {social.map(({ href, icon }, index) => (
          <li key={index}>
            <a href={href}>
              <img src={icon} alt="Social Media Icons" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Copyright;
