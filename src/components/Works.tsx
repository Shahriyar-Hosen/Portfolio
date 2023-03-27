import { motion } from "framer-motion";

import { CommonText, Title } from "@/common";
import { projects } from "@/constants";
import { memo } from "react";

import { SectionWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";
import { Details, ProjectCard } from "./section/Project";

const Works = memo(() => (
  <>
    <motion.div variants={textVariant()}>
      <CommonText>My work</CommonText>
      <Title>Projects.</Title>
    </motion.div>

    <Details />

    <div className="mt-20 flex flex-wrap gap-7">
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} index={index} {...project} />
      ))}
    </div>
  </>
));

export default SectionWrapper(Works, "projects");
