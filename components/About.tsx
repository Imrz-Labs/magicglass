"use client";

import { Link as ScrollLink } from "react-scroll";
import { idProps } from "../config/interface";
import Image from "next/image";

export const About = (props: idProps) => {
  const { id } = props;
  return (
    <>
      {/**Stats */}
      <section
        id={id}
        className="flex lg:flex-col w-full h-auto justify-center py-20 md:gap-10"
      >
        {/**row-I */}
        <div className="flex flex-col w-full h-auto justify-center items-center gap-5">
          <span className="font-bold text-base w-9/12 lg:m-auto md:text-sm lg:text-lg md:text-left md:w-11/12">
            Augmented Reality Mirror
          </span>

          <p className="font-normal text-sm w-9/12 lg:m-auto md:text-sm lg:text-lg md:text-left md:w-11/12">
            MagicGlass presented by IMRZ Labs and Gazooky Studios is an
            augmented reality mirror that provides users with an unforgettable,
            fun on-site experience which amplifies your brand through sharing,
            data capture and promotion.
          </p>
        </div>

        {/**row-II */}
        <div className="flex flex-col w-full h-auto md:items-center md:m-auto ">
          <span className="text-blue text-[120px] lg:text-[75px] font-normal">
            20X
          </span>
          <p>YOUR FOOTFALL TO ONLINE IMPRESSIONS</p>
          <span className="text-blue text-[120px] lg:text-[75px] font-normal">
            50,000+
          </span>
          <p>PHOTOS SHARED </p>
        </div>
      </section>

      {/**About */}
      <section className="flex flex-row w-full h-auto justify-center items-center py-20 bg-black lg:flex-col">
        {/**Banner */}
        <div className="w-full h-full object-cover lg:pb-7">
          <img
            src="/magic-banner.png"
            className="h-full w-8/12 md:w-11/12 m-auto"
          />
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
              duration={500}
            >
              <button className="button">
                BOOK A CONSULTATION
              </button>
            </ScrollLink>
          </div>
        </div>
      </section>

      {/**Logos */}

      <section className="flex my-20 w-full h-[85px] xl:h-[35px] md:h-10 justify-center gap-20 md:hidden">
        <img src="/everton.svg" />
        <img src="/premier-league.svg" />
        <img src="/liverpool-cc.svg" />
        <img src="/st-g.svg" />
      </section>
    </>
  );
};
