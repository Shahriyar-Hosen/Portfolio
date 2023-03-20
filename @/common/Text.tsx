import { memo } from "react";

import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

import { TitleProps } from ".";

const Text = memo(({ children, className }: TitleProps) => (
  <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className={`text-secondary text-[17px] max-w-3xl leading-[30px]  mt-3 ${className}`}
  >
    {children}
  </motion.p>
));

export default Text;
