import React from "react";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="absolute w-[1024px] h-[365px] left-[173px] top-[1514px]">
      <div className="flex flex-row items-center p-0 gap-4 absolute w-[391px] h-[42px] left-0 top-0">
        <h2 className="flex flex-row items-start p-0 w-[136px] h-[42px] flex-none order-0 flex-grow-0">
          <span className="w-5 h-[42px] font-sans not-italic font-medium text-3xl leading-[42px] text-purple-400 flex-none order-none flex-grow-0">
            #
          </span>
          <span className="w-32 h-10 font-sans not-italic font-medium text-3xl leading-[42px] text-white flex-none order-1 flex-grow-0">
            skills
          </span>
        </h2>
        <span className="w-[239px] h-px bg-purple-400 flex-none order-1 flex-grow" />
        <div className="absolute w-[584px] h-[200px] top-[85px] left-[440px]">
          <div className="border-box flex flex-col flex-start pt-2 pr-0 gap-2 absolute w-[178px] h-[103px] left-0 top-0 border border-solid border-gray-500">
            <h3 className="flex flex-row items-start pt-0 pl-2 w-48 h-5 flex-none order-none self-stretch flex-grow-0">
              <span className="w-[87px] h-[21px] font-sans not-italic font-semibold text-base leading-5 text-white flex-none order-0 flex-grow-0">
                Languages
              </span>
            </h3>
            <span className="w-[178px] h-0 border border-solid border-gray-500 flex-none order-1 self-stretch flex-grow-0"></span>
            <p className="flex flex-col items-start w-[178px] pt-0 pl-2 gap-2 h-[50px] flex-none order-2 flex-grow-0">
              <span className="flex flex-row items-start p-0 w-[133px] h-[21px] flex-none order-none flex-grow-0">
                {" "}
                <span className="w-24 h-[21px] font-sans not-italic font-normal text-base leading-5 text-gray-500 flex-none order-none flex-grow-0">
                  Typescript
                </span>{" "}
              </span>
              <span className="flex flex-row items-start p-0 w-40 h-5 flex-none order-1 flex-grow-0">
                {" "}
                <span className="w-24 h-5 not-italic font-sans font-normal text-base leading-5 text-gray-500 flex-none order-1 flex-grow-0">
                  Javascript
                </span>{" "}
              </span>
            </p>
          </div>
          <div className="border-box flex flex-col items-start pt-2 pr-0 gap-2 absolute w-[178px] h-[103px] left-[194px] top-0 border border-solid border-gray-500">
            <h2 className="flex flex-row items-start pt-0 pl-2 w-[178px] h-[21px] flex-none order-0 self-stretch flex-grow-0">
              <span className="w-[87px] h-[21px] font-sans not-italic font-semibold text-base leading-5 text-white flex-none order-none flex-grow-0">
                Databases
              </span>
            </h2>
            <span className="w-[178px] h-0 border border-solid border-gray-500 flex-none order-1 self-stretch flex-grow-0" />
            <p className="flex flex-col items-start pt-0 pr-2 pl-2 gap-2 w-[178px] h-[50px] flex-none order-2 flex-grow-0">
              <span className="w-16 h-5 font-sans not-italic font-normal text-base leading-5 text-gray-500 flex-none order-none flex-grow-0">
                MySQL
              </span>
              <span className="w-12 h-5 font-sans not-italic font-normal text-base leading-5 text-gray-500 flex-none order-none flex-grow-0">
                *Mongo
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
