import React, { useState } from "react";
import Link from "next/link";
import sideMenuUserImg from "@/assets/sideMenuUserImg.png";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import GetInTouchButton from "../GetInTouch/GetInTouchButton";
import NavTextAnimation from "./NavTextAnimation";
import { Button } from "../ui/button";

const NavBar = () => {
  const year = new Date().getFullYear();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#004736] text-white font-medium sticky top-0 shadow-md z-50">
      <div className="relative flex items-center justify-between px-5 md:px-14 py-5">
        <div>
          <Link href="/" className="hidden sm:block">
            <NavTextAnimation />
          </Link>
        </div>
        <div>
          <ul className="hidden sm:flex items-center gap-4">
            <li>
              <Link href="#about-me">About me</Link>
            </li>
            <li>
              <Link href="#resume">Resume</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <GetInTouchButton />
          </ul>

          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Menu className="w-6 h-6 transition-all duration-300 cursor-pointer" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="p-0 flex flex-col justify-between md:hidden"
              >
                <SheetHeader className="h-full">
                  <SheetTitle>
                    <div className="flex w-full   items-center px-4  gap-2 mt-4">
                      <Image
                        src={sideMenuUserImg}
                        alt=""
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <NavTextAnimation />
                        <small>Full Stack Developer</small>
                      </div>
                    </div>
                  </SheetTitle>
                  <SheetDescription className="h-full flex justify-between flex-col">
                    <div className="flex justify-between flex-col gap-10 w-full ">
                      <ul className="flex flex-col gap-5 w-full  ">
                        {["About me", "Resume", "Projects"].map((text, i) => (
                          <Link
                            key={i}
                            href={`#${text.toLowerCase().replace(" ", "-")}`}
                            onClick={() => setOpen(false)}
                          >
                            <Button
                              type="button"
                              key={i}
                              className=" w-[60%] rounded-r-full bg-transparent hover:bg-blue-50 text-black shadow-none flex justify-start items-start"
                            >
                              {text}
                            </Button>
                          </Link>
                        ))}
                      </ul>{" "}
                      <GetInTouchButton />
                      <div />
                    </div>
                    <div className="w-full p-4 ">
                      <h1>&copy; 2023 Niranjan Raju. All rights reserved.</h1>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
