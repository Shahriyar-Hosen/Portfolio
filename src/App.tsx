import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  SocialIcon,
  StarsCanvas,
  Tech,
  Works,
} from "~/components";

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center  relative">
        <Navbar />
        <SocialIcon />

        <Hero />
      </div>
      <About />
      <Tech />
      <Works />
      <Experience />
      {/* <Feedbacks /> */}
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default App;
