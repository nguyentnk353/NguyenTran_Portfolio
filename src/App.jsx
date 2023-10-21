import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "./App.css";
import React from "react";
import { Link } from "react-scroll";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
        <div className="p-8">
          <ul className="text-2xl flex flex-col gap-8">
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                // offset={-100}
                duration={200}
                onClick={toggleDrawer}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skill"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                onClick={toggleDrawer}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-130}
                duration={200}
                onClick={toggleDrawer}
              >
                Project
              </Link>
            </li>

            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                // offset={-100}
                duration={200}
                onClick={toggleDrawer}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </Drawer>
      <Header setIsOpen={setIsOpen} />
      <Body />
      <Footer />
    </>
  );
}

export default App;
