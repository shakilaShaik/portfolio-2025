import TextAnimation from "@/components/TextAnimations";
import React from "react";

const ExperienceData = [
  {
    id: 2,
    time: "July 2024 - Present",
    companyName: "FlyingFox Labs Pvt Ltd",
    role: "Software Developer",
    description: [
      "Developed scalable RESTful APIs using Python (Flask) and Node.js for secure and efficient backend communication.",
      "Built and deployed full-stack applications with React.js frontend and Python/Node.js backend on AWS with Docker and CI/CD pipelines.",
      "Built and deployed Ethereum smart contracts using Solidity for on-chain transactions. Integrated with Web3.js and MetaMask to enable secure, decentralized payments via browser.",
    ],
    technologies: [
      "Pyhton",
      "Javascript",
      "Express",
      "React",
      "Git",
      "web3",
      "MongoDB",
    ],
  },
  {
    id: 1,
    time: "Nov 2023 - July 2024",
    companyName: "Frontlines Edutech",
    role: "Java Full Stack Developer Intern",
    description: [
      "Completed backend development training at Frontlines Edutech, learning Core Java, JDBC, SQL, Hibernate, and Spring Boot.",
      "Developed a Patient Management System as part of my internship, using Java, Spring Boot, Hibernate, and MySQL for efficient CRUD operations and backend logic.",

      " Followed best practices for clean code, scalability, and modular design while managing version control with Git.",
    ],
    technologies: [
      "Data Structures And Algorithms",
      "core Java",
      "JDBC",
      "SQL",
      "Hibernate",
      "Springboot",
      "React",
    ],
  },
];

const Experience = () => {
  return (
    <div className="w-full max-h-[450px] overflow-auto rounded-xl shadow-md text-black p-5  bg-[#b3d6f9]">
      <div>
        <TextAnimation text="Experience" />
      </div>
      <div className="my-10">
        <ol className="relative border-s border-black">
          {ExperienceData.map((item, index) => (
            <li key={index} className="mb-10 ms-4 ">
              <div className="absolute w-3 h-3  rounded-full mt-0 -start-1.5 border border-black bg-black "></div>
              <div className="flex flex-col lg:flex-row  items-start  ">
                <time className=" text-md w-full lg:w-[220px] font-bold  leading-none text-black">
                  {item.time}
                </time>
                <div className="lg:-mt-2 w-full  ">
                  <h3 className="text-xl font-semibold">{item.companyName}</h3>
                  <p className="mb-4 text-base font-semibold">{item.role}</p>
                  <div>
                    {item.description.map((item, index) => (
                      <ul key={index}>
                        <li>&bull; {item}</li>
                      </ul>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 my-2">
                    {item.technologies.map((item, index) => (
                      <span
                        key={index}
                        className="bg-black text-white px-2 py-1 rounded-md"
                      >
                        &bull; {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Experience;
