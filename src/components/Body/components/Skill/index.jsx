/* eslint-disable react/jsx-key */
import beTech from "./components/beTech";
import devTech from "./components/devTech";
import feTech from "./components/feTech";
import tech from "./components/tech";
import techbe from "./components/techbe";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const index = () => {
  const fe = [];
  const feArray = feTech.tech.map((e) => e);
  while (feArray.length) {
    fe.push(feArray.splice(0, 6));
  }
  const be = [];
  const beArray = beTech.tech.map((e) => e);
  while (beArray.length) {
    be.push(beArray.splice(0, 6));
  }

  const dev = [];
  const devArray = devTech.tech.map((e) => e);
  while (devArray.length) {
    dev.push(devArray.splice(0, 6));
  }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <div>
      <section className="skill lg:min-h-[100vh] lg:pt-[15vh] pt-16 pb-16">
        <p className="text-center">Explore My</p>
        <h1 className="text-center text-[3rem] mb-8">Experience</h1>
        <div className="flex lg:flex-row flex-col lg:px-16 justify-around gap-8">
          <div className="flex-1 border-2 border-gray-400 p-8 rounded-[2rem]">
            <h2 className="text-center font-semibold text-[1.75rem] text-gray-500">
              Frontend Development
            </h2>
            <div className="hidden lg:flex justify-around flex-wrap gap-8 p-4">
              {fe.map((e) => e.map((el) => <div>{tech(el)}</div>))}
            </div>
            <div className="lg:hidden pt-8">
              <Carousel
                showDots={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                responsive={responsive}
              >
                {fe.map((e) =>
                  e.map((el) => <div className="pb-8">{tech(el)}</div>)
                )}
              </Carousel>
            </div>
          </div>
          <div className="flex-1 border-2 border-gray-400 p-8 rounded-[2rem]">
            <h2 className="text-center font-semibold text-[1.75rem] text-gray-500">
              Backend Development
            </h2>
            <div className="hidden lg:flex justify-around flex-wrap gap-8 p-4">
              {be.map((e) => e.map((el) => <div>{techbe(el)}</div>))}
            </div>
            <div className="lg:hidden pt-8">
              <Carousel
                showDots={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                responsive={responsive}
              >
                {be.map((e) =>
                  e.map((el) => <div className="pb-8">{techbe(el)}</div>)
                )}
              </Carousel>
            </div>
          </div>
          <div className="flex-1 border-2 border-gray-400 p-8 rounded-[2rem]">
            <h2 className="text-center font-semibold text-[1.75rem] text-gray-500">
              Dev tool
            </h2>
            <div className="hidden lg:flex justify-around flex-wrap gap-8 p-4">
              {dev.map((e) => e.map((el) => <div>{tech(el)}</div>))}
            </div>
            <div className="lg:hidden pt-8">
              <Carousel
                showDots={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                responsive={responsive}
              >
                {dev.map((e) =>
                  e.map((el) => <div className="pb-8">{tech(el)}</div>)
                )}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
