import { memo } from "react";
import { motion } from "framer-motion";

import { CommonText, SubTitle, Title } from "@/common";
import { about, services } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";
import { ServiceCard } from "./section/About";

const About = memo(() => (
  <>
    <motion.div variants={textVariant()}>
      <SubTitle>Introduction</SubTitle>
      <Title>Overview.</Title>
    </motion.div>

    <CommonText>
      {about.map((text, i) =>
        text === " " ? <br key={i} /> : <span key={i}>{text} </span>
      )}
    </CommonText>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>
));

export default SectionWrapper(About, "about");
