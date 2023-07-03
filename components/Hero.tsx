"use client";


import { Link as ScrollLink } from "react-scroll";
import { idProps } from "../config/interface";

export const Hero = (props: idProps) => {
  const { id } = props;
  return (
    <>
      {/* //Hero */}
      
      <main
        id={id}
        className="hero-video flex flex-col w-full h-[75.5vh] gap-[30px] justify-center items-center bg-black"
      >
        <img src="/logo-hero.svg" className="w-6/12" />

        <p className="flex w-full max-w-[50%] justify-center text-sm md:text-center md:w-11/12 md:text-tiny font-medium">
          ENTER A WORLD OF NEW OPPORTUNITY
        </p>
      </main>
    </>
  );
};
