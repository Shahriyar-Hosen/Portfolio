import { motion } from "framer-motion";
import { memo } from "react";

import { CommonText, SubTitle, Title } from "@/common";
import { about } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";
import { Resume, Services } from "./section/About";

const About = memo(() => (
  <>
    <motion.div variants={textVariant()}>
      <SubTitle>Introduction</SubTitle>
      <Title>About Me</Title>
    </motion.div>

    <div className="flex justify-center sm:justify-start flex-wrap  gap-10 sm:gap-20">
      <CommonText className="inline-block">
        {about.map((text, i) =>
          text === " " ? <br key={i} /> : <span key={i}>{text} </span>
        )}
      </CommonText>

      <Resume />
    </div>

    <Services />
  </>
));

export default SectionWrapper(About, "about");
