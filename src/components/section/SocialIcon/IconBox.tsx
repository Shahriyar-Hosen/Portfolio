import { memo } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

interface IconBoxProps {
  link: string;
  bg: string;
  name: string;
}

const IconBox = memo(({ bg, link, name }: IconBoxProps) => (
  <div
    className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${bg} cursor-pointer`}
    onClick={() => window.open(link, "_blank")}
  >
    <div
      className="flex justify-end pr-4 gap-5 items-center w-full text-gray-300"
      // to={link}
    >
      {name}{" "}
      {(name === "Linkedin" && <FaLinkedin size={30} />) ||
        (name === "Github" && <FaGithub size={30} />) ||
        (name === "Email" && <HiOutlineMail size={30} />) ||
        (name === "Resume" && <BsFillPersonLinesFill size={30} />)}
    </div>
  </div>
));

export default IconBox;
