/* eslint-disable react/no-unescaped-entities */
import self from '../../../../assets/images/self.png';
import cv from '../../../../assets/CV/CV_Tran Nguyen_Khoi_Nguyen.pdf';
import linkedin from '../../../../assets/images/linkedin.png';
import github from '../../../../assets/images/github.png';
import { Link } from 'react-scroll';
// import { BsGithub, BsLinkedin } from 'react-icons/bs';

const index = () => {
  return (
    <div>
      <section className='about flex justify-center items-center gap-[5rem] min-h-[85vh] pt-[15vh]'>
        <img
          src={self}
          alt='Nguyen Tran profile picture'
          className='h-[400px] w-[400px] rounded-full'
        />
        <div className='self-center text-center'>
          <p className='font-semibold text-gray-600'>Hello Im's</p>
          <h1 className='text-[3rem] font-bold'>Nguyen Tran</h1>
          <p className='font-semibold text-[1.75rem] mb-4 text-gray-600'>
            Front-End Developer
          </p>
          <div className='text-left w-[600px]'>
            <p className='list-item'>
              I am an user-oriented Front-End Developer with 1+ years experience
              specializing in the frontend and backend development.
            </p>
            {/* <br /> */}
            <p className='list-item'>
              I love programming, UI design and analysis.
            </p>
            {/* <br /> */}
            <p className='list-item'>
              My analytical skills helps me learn faster from others, especially
              in professional environment, it also can help me enhance
              problem-solving abilities, and analyze users needs to increase
              user experience.
            </p>
            {/* <br /> */}
            <p className='list-item'>
              I always keep an open-mind to learn and adapt to new technologies
              and new environments.
            </p>
          </div>
          <div className='flex justify-center gap-4 mt-4'>
            <a href={cv} target='_blank' rel='noreferrer'>
              <button className='font-semibold text-[13px] p-4 w-32 rounded-[2rem] border-2 border-black hover:text-white hover:bg-black duration-300'>
                Download CV
              </button>
            </a>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              // offset={-100}
              duration={200}
            >
              <button className='font-semibold text-[13px] p-4 w-32 rounded-[2rem] border-2 border-black bg-[#353535] text-white hover:text-white hover:bg-black duration-300'>
                Contact Info
              </button>
            </Link>
          </div>
          <div className='flex justify-center gap-4 mt-4'>
            <a
              href='https://www.linkedin.com/in/nguyentnk353'
              target='_blank'
              rel='noreferrer'
            >
              <img src={linkedin} alt='My LinkedIn profile' className='h-8' />
            </a>
            <a
              href='https://github.com/nguyentnk353'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={github}
                alt='My Github profile'
                className='h-8'
                // onClick={(location.href = 'https://github.com/nguyentnk353')}
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
