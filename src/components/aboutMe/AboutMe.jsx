import React, { useEffect, useRef } from "react";
import Link from "next/link"
import Shammu from "@/assets/Shammu-2.png"
import Image from "next/image";
import GitLab from "@/assets/skillIcons/GitLab";
import { motion } from "framer-motion";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { ArrowDown, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/button";
import GetInTouchButton from "../GetInTouch/GetInTouchButton";

const hoverTextStyle = {
  display: "inline-block",
  transition: "transform 0.2s, color 0.2s",
};

const hoverTextHoverStyle = {
  transform: "scale(1.2)",
  color: "#c56363",
};

const BubbleText = ({ text }) => {
  const refs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      refs.current.forEach((span, idx) => {
        setTimeout(() => {
          span.style.transform = hoverTextHoverStyle.transform;
          span.style.color = hoverTextHoverStyle.color;
        }, idx * 50);
        setTimeout(() => {
          span.style.transform = "";
          span.style.color = "";
        }, 1000 + idx * 50);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((child, idx) => (
    <span
      className="text-xl tracking-wide"
      key={idx}
      ref={(el) => (refs.current[idx] = el)}
      style={hoverTextStyle}>
      {child}
    </span>
  ));
};

const AboutMe = () => {
  return (
    <div id="about-me" className="md:h-[600px] bg-[#f6eee1] w-full p-4">
      <div className="hidden md:block absolute top-14 font-londrina-outline text-[100px] tracking-[4px] font-medium text-[#c56363]">
        <p>ABOUT ME</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex my-20 h-max flex-col gap-4 px-4">
          <div className="text-[34px] md:text-[54px] font-bold font-serif">
            <h1>Hello,</h1>
            <h1 >I&apos;m Sharmila !</h1>
          </div>
          <div>
            <h1>
              Hello, {"I'm"} Sharmila, a skilled{" "}
              <span className="font-bold">
                <BubbleText text="Full-Stack Developer" />
              </span>{" "}
              a passionate full-stack developer with 1 year of experience in
              building and deploying modern, production-ready web applications
              and Building robust backends, integrating secure authentication,
              and deploying services on AWS using Docker and CI/CD pipelines.
              I’m comfortable working across the entire tech stack and love
              solving real-world problems with clean, scalable code.
            </h1>
          </div>
          <div className="flex items-center gap-4 md:h-14 w-max">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 text-blue-500 hover:h-14 hover:w-14 transition-all duration-300 cursor-pointer bg-white flex justify-center items-center rounded-full">
                <Link href="https://www.linkedin.com/in/shakilashaik">
                  <LinkedInLogoIcon />
                </Link>
              </div>
              <div className="h-10 w-10 hover:h-14 hover:w-14 transition-all duration-300 cursor-pointer bg-white flex justify-center items-center rounded-full">
                <Link href="https://github.com/shakilaShaik">
                  <GitHubLogoIcon />
                </Link>
              </div>
              <div className="h-10 w-10 hover:h-14 hover:w-14 transition-all duration-300 cursor-pointer bg-white flex justify-center items-center rounded-full">
                <Link href="https://gitlab.com/skshakilask67">
                  <GitLab className="text-2xl text-orange-500" />
                </Link>
              </div>
            </div>
            <Link href="/MERN_dev_shammu.pdf" download="download">
              <Button className="p-2 border bg-[#c56363] border-black text-black  hover:bg-[#c56363] transition-all duration-500 rounded-full">
                <ArrowDown className="text-lg" />
                Download Resume
              </Button>
            </Link>
          </div>
        </div>
                  {/* <div className="bottom-10 lg:-bottom-20 h-[450px] w-[320px] md:w-[350px] bg-[#faa188] rounded-md shadow-md relative">  #*/}
        <div className="flex justify-center items-center">
          <div className="bottom-10 lg:-bottom-20 h-[450px] w-[320px] md:w-[350px] bg-[#fa9088] rounded-md shadow-md relative">
            <div>
              <Image
                className="z-10 absolute bottom-14 right-14 "
                src={Shammu}
                alt="user_shammu"
                width={250}
                height={200}
              />
              <Link href="#projects">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="hidden sm:block absolute top-28 text-xs font-medium bg-[#c56363] p-2 rounded-full w-max left-[-30px] z-40">
                  See Projects
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="hidden sm:flex absolute bottom-28  w-max right-[-30px] z-40">
                <GetInTouchButton />
              </motion.button>
              <div className="absolute h-40 w-40 bg-[#f6eee1] rounded-full top-14 left-[70px] lg:left-24" />
              <div className="absolute w-full h-[200px] bg-black bottom-[-120px] p-4 rounded-md">
                <h1 className="text-[#f6eee1] text-[44px] font-bold">
                  Contact
                </h1>
                <ul className="text-[#f6eee1] flex justify-center gap-2 flex-col">
                  <li className="flex gap-2 items-center">
                    <Mail />
                    <span>shakilaaask@gmail.com</span>
                  </li>

                  <li className="flex gap-2 items-center">
                    <MapPin />
                    <span>Hyderabad, Telangana.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
