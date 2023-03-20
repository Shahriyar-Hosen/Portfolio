import { Dispatch, SetStateAction } from "react";

import MainLogo from "./MainLogo";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

export interface LogoProps {
  setActive: Dispatch<SetStateAction<string>>;
}
export interface MenuProps extends LogoProps {
  active: string;
  mobile?: boolean;
  toggle?: boolean;
  setToggle?: (value: SetStateAction<boolean>) => void;
}

export { MainLogo, MobileMenu, Menu };
