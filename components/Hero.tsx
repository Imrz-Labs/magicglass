"use client";

import Link from "next/link";

export const Hero = () => {
  return (
    <>
      {/* //Hero */}
      <section className="w-full flex justify-center items-center lg:bg-blue-500">
        <img
          src="/hero.png"
          className="flex h-screen w-full object-cover items-center md:hidden "
        />
        <div className="absolute mt-10 md:relative md:h-screen md:items-center left-20 md:flex md:flex-col md:justify-center md:ml-0  md:left-0 md:w-full md:m-auto">
          <h1 className="font-extrabold text-[50px] w-9/12 md:text-base lg:text-lg md:text-center md:w-11/12">
            MagicGlass <br/>
            AR Photo Mirror
          </h1>
          <p className="pb-10 pt-7 w-6/12 text-sm md:text-center md:w-11/12 md:text-xs font-medium">
            MagicGlass provides users with a fun on-site experience that can
            amplify your brand through sharing and promotion.
          </p>
          <Link href="#contact">
            <button className="rounded-full h-[60px] w-[300px] text-white font-bold bg-blue hover:bg-black">
              BOOK A CONSULTATION
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};
