import TextAnimation from "@/components/TextAnimations";
import React from "react";

const Education = () => {
  return (
    <div className=" text-black ">
      <div className="text-black">
        <TextAnimation text="Education" />
      </div>

      {/* <h1 className="text-4xl text-yellow-500 font-bold">Education</h1> */}
      <div className="my-10">
        <ol className="relative border-s border-[#fa9088]">
          <li className="mb-10 ms-4  ">
            <div className="absolute w-3 h-3  rounded-full mt-0 -start-1.5 border border-[#fa9088] bg-[#fa9088] "></div>
            <div className="flex items-start gap-6 ">
              <time className="w-[120px]  text-sm md:text-md font-bold  leading-none text-black">
                2019 - 2023
              </time>
              <div className="-mt-2 w-full">
                <h3 className="text-sm md:text-xl font-semibold">
                  Jawaharlal Nehru Technological University Kakinada
                </h3>
                <p className="mb-4  text-base font-normal">
                  Electronics And Communication Engineering
                </p>
              </div>
            </div>
          </li>
          <li className="mb-10 ms-4 ">
            <div className="absolute w-3 h-3  rounded-full mt-0 -start-1.5 border border-[#fa9088] bg-[#fa9088] "></div>
            <div className="flex items-start gap-6 ">
              <time className="w-[120px]  text-sm md:text-md font-bold  leading-none text-black">
                2017 - 2019
              </time>
              <div className="-mt-2 w-full">
                <h3 className="text-sm md:text-xl font-semibold ">
                  pallotti Junior College
                </h3>
                <p className="mb-4  text-base font-normal">MPC</p>
              </div>
            </div>
          </li>{" "}
          <li className="mb-10 ms-4 ">
            <div className="absolute w-3 h-3  rounded-full mt-0 -start-1.5 border border-[#fa9088] bg-[#fa9088] "></div>
            <div className="flex items-start gap-6 ">
              <time className=" w-[120px]  text-sm  md:text-md font-bold  leading-none text-black">
                2016 - 2017
              </time>
              <div className="-mt-2 w-full">
                <h3 className="text-sm md:text-xl font-semibold ">
                  Sri Rama Krishna Hindu High School
                </h3>
                <p className="mb-4  text-base font-normal">Class - X</p>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Education;
