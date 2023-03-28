import { memo } from "react";

import { ComputersCanvas } from "./canvas";
import { Head, NavigateToBottom } from "./section/Hero";

const Hero = memo(() => (
  <section className={`relative w-full h-screen mx-auto`}>
    <Head />
    <ComputersCanvas />
    <NavigateToBottom />
  </section>
));

export default Hero;
