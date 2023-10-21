import {
  IconCloudUpload,
  IconDatabase,
  IconDeviceDesktopAnalytics,
  IconShare2,
  IconTerminal2,
} from "@tabler/icons-react";
import { BsGithub } from "react-icons/bs";

const projectCardMB = (p) => {
  const image = p?.image;
  const name = p?.name;
  const description = p?.description;
  const fe = p?.fe;
  const be = p?.be;
  const db = p?.db;
  const deploy = p?.deploy;
  const gh = p?.gh;
  const link = p?.link;
  return (
    <div className="flex flex-col border-2 border-gray-400 rounded-[2rem]">
      <img
        src={image}
        alt="Project's image"
        className="h-60 rounded-t-[2rem]"
      />
      <div className="flex flex-col gap-2 p-8">
        <h3 className="font-bold text-center text-xl">{name}</h3>
        <p className="text-center mb-2">{description}</p>
        <div className="flex justify-between items-center">
          <div className="text-left flex items-center gap-2">
            <IconDeviceDesktopAnalytics />
            Frontend
          </div>
          <div className="text-right font-semibold">{fe}</div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-left flex items-center gap-2">
            <IconTerminal2 />
            Backend
          </div>
          <div className="text-right font-semibold">{be}</div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-left flex items-center gap-2">
            <IconDatabase />
            Database
          </div>
          <div className="text-right font-semibold">{db}</div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-left flex items-center gap-2">
            <IconCloudUpload />
            Deployment
          </div>
          <div className="text-right font-semibold">{deploy}</div>
        </div>
        <div className="flex justify-center items-center gap-4 mt-2">
          <a href={gh} target="_blank" rel="noreferrer">
            <button className="flex items-center justify-center gap-2 font-semibold text-[14px] p-4 w-36 rounded-[2rem] border-2 border-black bg-[#353535] text-white hover:text-white hover:bg-black duration-300">
              <BsGithub className="text-[24px]" /> Github
            </button>
          </a>
          <a href={link} target="_blank" rel="noreferrer">
            <button className="flex items-center justify-center gap-2 font-semibold text-[14px] p-4 w-36 rounded-[2rem] border-2 border-black hover:text-white hover:bg-black duration-300">
              <IconShare2 />
              Live demo
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default projectCardMB;
