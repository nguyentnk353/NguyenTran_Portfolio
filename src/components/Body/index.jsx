import About from "./components/About";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Contact from "./components/Contact";

const index = () => {
  return (
    <div className="w-full px-8">
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
};

export default index;
