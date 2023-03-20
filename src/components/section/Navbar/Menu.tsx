import { memo } from "react";

import { navLinks } from "@/constants";
import { MenuProps } from ".";

const Menu = memo(
  ({ setActive, active, mobile, setToggle, toggle }: MenuProps) => (
    <ul
      className={`${
        mobile
          ? " flex justify-end items-start flex-1 flex-col gap-4"
          : " hidden sm:flex flex-row gap-10"
      } list-none`}
    >
      {navLinks.map((nav) => (
        <li
          key={nav.id}
          className={`${
            active === nav.title ? "text-white" : "text-secondary"
          } hover:text-white text-[18px] font-medium cursor-pointer ${
            mobile && "font-poppins text-[16px]"
          }`}
          onClick={() => {
            setToggle && setToggle(!toggle);
            setActive(nav.title);
          }}
        >
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ))}
    </ul>
  )
);

export default Menu;
