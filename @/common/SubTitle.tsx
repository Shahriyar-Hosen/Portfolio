import { memo } from "react";
import { TitleProps } from ".";

const SubTitle = memo(({ children, hero, className }: TitleProps) => {
  return (
    <h1
      className={`${
        !hero
          ? "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"
          : "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2"
      } ${className} text-white font-black`}
    >
      {children}
    </h1>
  );
});

export default SubTitle;
