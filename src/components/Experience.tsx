import { memo } from "react";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { CommonText, Title } from "@/common";
import { experiences } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";
import { ExperienceCard } from "./section/Experiences";

const Experience = memo(() => (
  <>
    <motion.div
      variants={textVariant()}
      className="flex flex-col justify-center items-center"
    >
      <CommonText>What I have done so far</CommonText>
      <Title>Work Experience.</Title>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  </>
));

export default SectionWrapper(Experience, "experience");
