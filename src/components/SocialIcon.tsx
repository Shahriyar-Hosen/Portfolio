import { IconBox } from "~/components/section/SocialIcon";

const SocialIcon = () => (
  <div className="hidden sm:flex fixed flex-col top-[35%] left-0 z-50">
    <IconBox
      name="Linkedin"
      bg="bg-blue-600"
      link="https://www.linkedin.com/feed/"
    />
    <IconBox
      name="Github"
      bg="bg-[#333333]"
      link="https://github.com/Shahriyar-Hosen"
    />
    <IconBox
      name="Email"
      bg="bg-[#6fc2b0]"
      link="mailto:me.shahriyarhosen@gmail.com"
    />
    <IconBox
      name="Resume"
      bg="bg-[#565f69]"
      link="https://drive.google.com/file/d/179ghgxLUElR0nqTitTeSVwWsuMSnx-GQ/view"
    />
  </div>
);

export default SocialIcon;
