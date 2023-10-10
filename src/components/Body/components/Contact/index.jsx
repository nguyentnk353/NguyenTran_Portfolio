import mail from '../../../../assets/images/email.png';
import linkedin from '../../../../assets/images/linkedin.png';

const index = () => {
  return (
    <div>
      <section className='contact min-h-[91vh] pt-[30vh] box-border'>
        <div className='flex flex-col justify-center m-auto'>
          <p className='text-center'>Get in Touch</p>
          <h1 className='text-center text-[3rem] mb-8'>Contact Me</h1>
          <div className='flex justify-center border-2 border-gray-500 p-4 m-auto rounded-[2rem] gap-4'>
            <div className='flex gap-2 items-center'>
              <img
                src={mail}
                alt='My LinkedIn profile'
                className='h-[2.5rem]'
              />
              <a
                href='mailto:nguyentnk353@gmail.com'
                target='_blank'
                rel='noreferrer'
                className='hover:cursor-pointer hover:text-gray-500 hover:underline-offset-8 hover:underline'
              >
                nguyentnk353@gmail.com
              </a>
            </div>
            <div className='flex gap-2 items-center'>
              <img
                src={linkedin}
                alt='My LinkedIn profile'
                className='h-[2.5rem]'
              />
              <a
                href='https://www.linkedin.com/in/nguyentnk353'
                target='_blank'
                rel='noreferrer'
                className='hover:cursor-pointer hover:text-gray-500 hover:underline-offset-8 hover:underline'
              >
                linkedin.com/in/nguyentnk353
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
