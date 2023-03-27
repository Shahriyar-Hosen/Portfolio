import { motion } from "framer-motion";

import { CommonText, Title } from "@/common";
import { projects } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";
import { memo } from "react";
import Details from "./section/Project/Details";
import ProjectCard from "./section/Project/ProjectCard";

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
