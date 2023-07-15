import React from "react";
import { nav } from "../data/data";

function Nav() {
  return (
    <nav>
      <ul className="flex gap-x-10">
        {nav.map(({ name, href }, index) => (
          <li key={index}>
            <a href={href} className="hover:text-accent transition">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
