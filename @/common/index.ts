import { ReactNode } from "react";
import Loader from "./Loader";
import SubTitle from "./SubTitle";
import CommonText from "./Text";
import Title from "./Title";

export interface TitleProps {
  children: ReactNode;
  className?: string;
  hero?: boolean;
}

export { Title, SubTitle, CommonText, Loader };
