import React from "react";
import Link from 'next/link';


interface ProjectCardProps {
  backgroundImage: string;
  title: string;
  description: string;
  link: string;
};

const BoxProject: React.FC<ProjectCardProps>  = ({
  backgroundImage,
  title,
  description,
  link,
}) => {
  return (
        <div
      className={`w-md md:h-[60vh] 2xl:w-lg 2xl:h-[40vh] bg-[#F2F8FC] rounded-[30px] flex flex-col justify-start items-start gap-36 pt-16 pl-5`}
          style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
        >
          <div className="">
            <div>
              <p className="text-black text-2xl md:text-4xl font-bold">{title}</p>
            </div>
            <div>
              <p className="text-black/50 whitespace-pre-line">{description}</p>
            </div>
          </div>
          <Link href={link}>
            <div
              className="w-fit h-fit px-10 py-3 flex flex-col justify-center
              items-center rounded-2xl  bg-gradient-to-r from-[#FD23E3] via-[#8021E8] to-[#0619EA]"
            >
              <p className="text-white font-semibold">More details</p>
            </div>
          </Link>
        </div>
  );
}
export default BoxProject;