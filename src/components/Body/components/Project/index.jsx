import projectCard from './components/projectCard';
import projectInfo from './components/projectInfo';

const index = () => {
  return (
    <div>
      <section className='project min-h-[100vh] pt-[15vh] pb-16'>
        <p className='text-center'>Browse My Recent</p>
        <h1 className='text-center text-[3rem] mb-8'>Projects</h1>
        <div className='flex flex-col justify-center items-center gap-16'>
          {projectInfo.project.map((e) => projectCard(e))}
        </div>
      </section>
    </div>
  );
};

export default index;
