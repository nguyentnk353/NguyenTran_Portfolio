/* eslint-disable react/jsx-key */
import beTech from './components/beTech';
import devTech from './components/devTech';
import feTech from './components/feTech';
import tech from './components/tech';
import techbe from './components/techbe';

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

  return (
    <div>
      <section className='skill min-h-[100vh] pt-[15vh] pb-16'>
        <p className='text-center'>Explore My</p>
        <h1 className='text-center text-[3rem] mb-8'>Experience</h1>
        <div className='flex px-16 justify-around gap-8'>
          <div className='flex-1 border-2 border-gray-400 p-8 rounded-[2rem]'>
            <h2 className='text-center font-semibold text-[1.75rem] text-gray-500'>
              Frontend Development
            </h2>
            <div className='flex justify-around flex-wrap gap-8 p-4'>
              {fe.map((e) => e.map((el) => <div>{tech(el)}</div>))}
            </div>
          </div>
          <div className='flex-1 border-2 border-gray-400 p-8 rounded-[2rem]'>
            <h2 className='text-center font-semibold text-[1.75rem] text-gray-500'>
              Backend Development
            </h2>
            <div className='flex justify-around flex-wrap gap-8 p-4'>
              {be.map((e) => e.map((el) => <div>{techbe(el)}</div>))}
            </div>
          </div>
          <div className='flex-1 border-2 border-gray-400 p-8 rounded-[2rem]'>
            <h2 className='text-center font-semibold text-[1.75rem] text-gray-500'>
              Dev tool
            </h2>
            <div className='flex justify-around flex-wrap gap-8 p-4'>
              {dev.map((e) => e.map((el) => <div>{tech(el)}</div>))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
