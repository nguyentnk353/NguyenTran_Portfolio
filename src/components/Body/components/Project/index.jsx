import projectCard from "./components/projectCard";
import projectCardMB from "./components/projectCardMB";
import projectInfo from "./components/projectInfo";

const index = () => {
  return (
    <div>
      <section className="project lg:min-h-[100vh] lg:pt-[15vh] pb-16">
        <p className="text-center">Browse My Recent</p>
        <h1 className="text-center text-[3rem] mb-8">Projects</h1>
        <div className="hidden lg:block">
          <div className="flex flex-col justify-center items-center gap-16">
            {projectInfo.project.map((e) => projectCard(e))}
          </div>
        </div>
        <div className="lg:hidden">
          <div className="flex flex-col gap-16">
            {projectInfo.project.map((e) => projectCardMB(e))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
