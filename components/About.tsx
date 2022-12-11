"use client";

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { idProps } from "../config/interface";

export const About = (props: idProps) => {
  const { id } = props;
  return (
    <>
      <section
        id={id}
        className="flex flex-row w-full h-auto justify-center items-center py-20 bg-white lg:flex-col"
      >
        {/**Banner */}
        <div className="w-full h-full object-cover lg:pb-7">
          <img src="/magic-banner.png" className="h-full w-8/12 m-auto " />
        </div>
        {/**Details */}
        <div className="flex flex-col w-full h-full">
          <h1 className="font-extrabold text-base w-9/12 lg:m-auto md:text-sm lg:text-lg md:text-left md:w-11/12">
            Bring the WOW factor to your venue!
          </h1>
          <p className="pb-10 pt-7 lg:pt-2 w-11/12 lg:m-auto text-sm md:text-left md:w-11/12 md:text-xs font-medium">
            Engage audiences in taking photos with celebrities, athletes and
            characters - These can be animated, green-screen or volumetric
            scanned content.
          </p>
          <div className="pb-10 lg:ml-10 font-semibold">
            <span className="flex flex-row mb-4">
              <img src="tick.svg" className="mr-10" /> Animations
            </span>
            <span className="flex flex-row mb-4">
              <img src="tick.svg" className="mr-10" /> Live Action
            </span>
            <span className="flex flex-row">
              <img src="tick.svg" className="mr-10" /> Volumetric Scans
            </span>
          </div>
          <div className="flex lg:w-full lg:justify-center lg:m-auto ">
            <ScrollLink 
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
              <button className="rounded-full h-[60px] w-[300px] text-white font-bold bg-blue hover:bg-black">
                BOOK A CONSULTATION
              </button>
            </ScrollLink>
          </div>
        </div>
      </section>
    </>
  );
};
