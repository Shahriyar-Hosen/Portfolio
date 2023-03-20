import { Head, NavigateToBottom } from "~🫀~/section/Hero";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <Head />
      <ComputersCanvas />
      <NavigateToBottom />
    </section>
  );
};

export default Hero;
