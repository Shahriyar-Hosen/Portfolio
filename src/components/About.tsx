import { motion } from "framer-motion";

import { CommonText, SubTitle, Title } from "@/common";
import { services } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";
import { ServiceCard } from "~🫀~/section/About";

const About = () => (
  <>
    <motion.div variants={textVariant()}>
      <SubTitle>Introduction</SubTitle>
      <Title>Overview.</Title>
    </motion.div>

    <CommonText>
      I'm a skilled software developer with experience in TypeScript and
      JavaScript, and expertise in frameworks like React, Redux, and Node.js.
      <br />
      <br />
      I'm passionate about building excellent software that improves the lives
      of those around me. I specialize in creating software for clients ranging
      from individuals and small businesses to large enterprise corporations.
      <br />
      <br />
      I'm a quick learner and collaborate closely with clients to create
      efficient, scalable, and user-friendly solutions that solve real-world
      problems. Let's work together to bring your ideas to life! What would you
      do if you had a software expert available at your fingertips?
    </CommonText>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>
);

export default SectionWrapper(About, "about");
