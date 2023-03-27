import { memo } from "react";
import { TitleProps } from ".";

const Title = memo(({ children, hero, className }: TitleProps) => (
  <h1
    className={`${
      !hero
        ? "md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
        : "lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2"
    } text-white font-black ${className}`}
  >
    {children}
  </h1>
));

export default Title;
