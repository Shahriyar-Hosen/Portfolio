import { CommonText, Title } from "@/common";
import { technologies } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { BallCanvas } from "./canvas";

const Tech = () => (
  <>
    <div className="flex flex-col justify-center items-center">
      <CommonText>My Skills.</CommonText>
      <Title>Technologies That I know</Title>
    </div>
    <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  </>
);

export default SectionWrapper(Tech, "skills");
