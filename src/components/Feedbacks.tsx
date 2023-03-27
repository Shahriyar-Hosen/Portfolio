import { motion } from "framer-motion";

import { testimonials } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";
import { styles } from "~/styles";
import { FeedbackCard } from "./section/Feedbacks";

const Feedbacks = () => (
  <div className={`mt-12 bg-black-100 rounded-[20px]`}>
    <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What others say</p>
        <h2 className={styles.sectionHeadText}>Testimonials.</h2>
      </motion.div>
    </div>
    <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
      {testimonials.map((testimonial, index) => (
        <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
      ))}
    </div>
  </div>
);

export default SectionWrapper(Feedbacks, "");
