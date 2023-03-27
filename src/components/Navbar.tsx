import { memo, useEffect, useState } from "react";

import { styles } from "~/styles";
import { MainLogo, Menu, MobileMenu } from "./section/Navbar";

const Navbar = memo(() => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <MainLogo setActive={setActive} />
        <Menu active={active} setActive={setActive} />
        <MobileMenu active={active} setActive={setActive} />
      </div>
    </nav>
  );
});

export default Navbar;
