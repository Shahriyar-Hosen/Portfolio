import { SubTitle, Title } from "@/common";
import { memo } from "react";

import { styles } from "~/styles";

const Head = memo(() => {
  return (
    <div
      className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
    >
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
        <div className="w-1 sm:h-80 h-40 violet-gradient" />
      </div>

      <div>
        <Title hero>
          Hi, I'm <span className="text-[#915EFF]">Shahriyar</span>
        </Title>
        <SubTitle hero className="text-white-100">
          I develop React App, user <br className="sm:block hidden" />
          interfaces and web applications
        </SubTitle>
      </div>
    </div>
  );
});

export default Head;
