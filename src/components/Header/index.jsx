// import textLogo from '../../assets/images/textLogo1RS.png';
// import nLogo from '../../assets/images/nLogo1.png';

import { IconMenu2 } from '@tabler/icons-react';
import { Link } from 'react-scroll';

const index = () => {
  return (
    <div className='fixed top-0 w-full z-10 bg-white'>
      <nav className='justify-between px-16 lg:p-0 h-[125px] lg:h-[10vh] lg:justify-around items-center flex'>
        <h2 className='text-3xl'>Nguyen Tran</h2>
        <ul className='hidden text-2xl lg:flex gap-8'>
          <li>
            <Link
              className='hover:cursor-pointer hover:text-gray-500 hover:underline-offset-[1rem] hover:underline [&.active]:underline [&.active]:underline-offset-[1rem] [&.active]:text-gray-500'
              to='about'
              spy={true}
              smooth={true}
              // offset={-100}
              duration={200}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className='hover:cursor-pointer hover:text-gray-500 hover:underline-offset-[1rem] hover:underline [&.active]:underline [&.active]:underline-offset-[1rem] [&.active]:text-gray-500'
              to='skill'
              spy={true}
              smooth={true}
              // offset={-100}
              duration={200}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              className='hover:cursor-pointer hover:text-gray-500 hover:underline-offset-[1rem] hover:underline [&.active]:underline [&.active]:underline-offset-[1rem] [&.active]:text-gray-500'
              to='project'
              spy={true}
              smooth={true}
              // offset={-50}
              duration={200}
            >
              Project
            </Link>
          </li>

          <li>
            <Link
              className='hover:cursor-pointer hover:text-gray-500 hover:underline-offset-[1rem] hover:underline [&.active]:underline [&.active]:underline-offset-[1rem] [&.active]:text-gray-500'
              to='contact'
              spy={true}
              smooth={true}
              // offset={-100}
              duration={200}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className='lg:hidden'>
          <IconMenu2 style={{ width: '60px', height: '60px' }} />
        </div>
      </nav>
    </div>
  );
};

export default index;
