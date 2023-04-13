import { motion } from "framer-motion";
import { memo } from "react";

import { Button } from "@/common";
import { fadeIn } from "@/utils/motion";

import { FaFileDownload } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Resume = memo(() => (
  <motion.div
    variants={fadeIn("right", "spring", 0.5, 0.75)}
    className="flex flex-col justify-evenly items-center gap-10 btn-container w-auto"
  >
    <Button
      onClick={() =>
        window.open(
          "https://drive.google.com/file/d/179ghgxLUElR0nqTitTeSVwWsuMSnx-GQ/view?usp=sharing",
          "_blank"
        )
      }
    >
      View Resume <FiExternalLink className="ml-3 " />
    </Button>

    <Button
      onClick={() =>
        window.open(
          "https://drive.google.com/u/0/uc?id=179ghgxLUElR0nqTitTeSVwWsuMSnx-GQ&export=download",
          "_blank"
        )
      }
    >
      Download <FaFileDownload className="ml-3" />
    </Button>
  </motion.div>
));

export default Resume;
