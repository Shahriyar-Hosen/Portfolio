import { memo } from "react";
import { Link } from "react-router-dom";
import { logo } from "~/assets";
import { LogoProps } from ".";

const MainLogo = memo(({ setActive }: LogoProps) => (
  <Link
    to="/"
    className="flex items-center gap-2"
    onClick={() => {
      setActive("");
      window.scrollTo(0, 0);
    }}
  >
    <img src={logo} alt="logo" className="w-9 h-9 object-contain" />

    <p className="text-white text-[18px] font-bold cursor-pointer flex ">
      Shahriyar &nbsp; <span className="sm:hidden block ">Hosen</span>
      <span className="sm:block hidden"> | React Developer</span>
    </p>
  </Link>
));

export default MainLogo;
