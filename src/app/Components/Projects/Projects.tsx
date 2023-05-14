import React from "react";
import Image from "next/image";

const Projects: React.FC = () => {
  return (
    <div className="absolute w-[1027px] height-[518px] left-[168px] top-[658px]">
      <div>
        <h1 className="flex flex-row items-start p-0 w-44 h-11 flex-none order-0 flex-grow-0  ">
          {" "}
          <span className="w-5 h-11 font-sans not-italic font-medium text-3xl text-purple-400 flex-none order-none flex-grow-0 ">
            #
          </span>{" "}
          <span className="w-40 h-10 not-italic font-medium text-3xl font-sans text-white flex-none order-1 flex-grow-0">
            projects
          </span>{" "}
          <span className="w-[511px] h-px bg-purple-400 flex-none order-1 flex-grow mt-[20.5px]"></span>
        </h1>
        <h3 className="top-0 left-[901px] absolute w-32 h-5 not-italic font-medium text-base leading-5 text-white">
          View all &#x21DD;{" "}
        </h3>
      </div>
      <div className="flex flex-row items-start p-0 gap-4 absolute w-210 h-[428px] left-0 top-[59px]">
        <div className="flex flex-col items-start w-[330.58px] h-[391px] p-0 flex-none order-none flex-grow-0 border  border-solid border-gray-500">
          <div className="z-1 flex-none order-0 flex-grow-0 border-b border-solid border-gray-500">
            <Image
              src="/place.jpg"
              width={330.58}
              height={201}
              alt="restuarant"
            />
          </div>
          <h2 className="flex flex-row items-start p-2 gap-2 w-[330.58px] h-9 flex-none order-1 self-stretch flex-grow-0">
            <span className="w-12 h-5 font-sans not-italic font-normal text-base leading-5 text-gray-500 flex-none order-none flex-grow-0">
              React
            </span>
            <span className="w-12 h-5 font-sans not-italic font-normal text-base leading-5 text-gray-500 flex-none order-1 flex-grow-0">
              {" "}
              SCSS
            </span>
          </h2>
          <div className="flex flex-col items-start p-2 gap-4 w-[329.58px] h-[153px] border-t border-solid text-gray-500 flex-none order-3 self-stretch flex-grow-0">
            <h3 className="w-[298.58px] h-8 font-sans not-italic font-medium text-2xl leading-8 text-white flex-none order-0 self-stretch flex-grow-0">
              Lilie&apos;s PLace
            </h3>
            <div className="flex flex-row gap-4 items-start">
              <a
                href="https://lilies-place.netlify.app/"
                className="box-border flex flex-row items-start pt-2 pl-[4px]  gap-2.5 w-[109px] h-10 flex-none order-none flex-grow-0 border border-solid border-purple-400"
              >
                <span className="w-[77px] h-[21px] font-sans not-italic font-medium font-base leading-5 text-white flex-none order-0 flex-grow-0">
                  Web &#x21DC;&#x21DD;
                </span>
              </a>
              <a
                href=""
                className="box-border flex flex-row items-start pt-2 pl-1  gap-2.5 w-[109px] h-10 flex-none order-none flex-grow-0 border border-solid border-gray-400"
              >
                <span className="w-[87px] h-[21px] font-sans not-italic font-medium font-base leading-5 text-gray-500 flex-none order-0 flex-grow-0">
                  Github &ge;
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
