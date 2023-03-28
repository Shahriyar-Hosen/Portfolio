import { memo, useState } from "react";
import { close, menu } from "~/assets";
import { Menu, MenuProps } from ".";

const MobileMenu = memo(({ active, setActive }: MenuProps) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="lg:hidden flex flex-1 justify-end items-center">
      <img
        src={toggle ? close : menu}
        alt="menu"
        className="w-[28px] h-[28px] object-contain cursor-pointer"
        onClick={() => setToggle(!toggle)}
      />

      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
      >
        <Menu
          active={active}
          setActive={setActive}
          mobile
          toggle={toggle}
          setToggle={setToggle}
        />
      </div>
    </div>
  );
});

export default MobileMenu;
