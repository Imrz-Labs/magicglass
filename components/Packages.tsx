"use client";

import { idProps } from "../config/interface";

export const Packages = (props: idProps) => {
  const { id } = props;
  return (
    <>
      <main id={id} className="bg-blue-500 py-20 flex flex-col w-full h-auto">
        {/** Title */}
        <div className="flex w-full justify-center flex-col mb-20">
          <h1 className="m-auto text-base font-bold text-center mb-3">
            Packages
          </h1>
          <p className="lg:w-11/12 md:text-xs m-auto text-sm text-center">
            Installation can be tailored to match your requirements.
          </p>
        </div>
        {/** Grid Layout*/}
        <section className="w-full flex justify-center items-center">
          <div className="flex flex-row lg:grid lg:grid-flow-row lg:grid-cols-2 gap-5 w-11/12 justify-start items-center">
            <div className="flex flex-col gap-y-4 justify-start text-left">
              <img src="/1.svg" alt="1" className="h-[100px]" />
              <h1>Rent or Buy </h1>
              <p>Lorem ipsum dolor sit amet et eos appareat placerat.</p>
            </div>

            <div className="flex flex-col gap-y-4 justify-left text-left ">
              <img src="/2.svg" alt="2" className="h-[100px]" />
              <h1>Custom Design</h1>
              <p>Provide your imagery or have us design and capture.</p>
            </div>

            <div className="flex flex-col gap-y-4 justify-left text-left ">
              <img src="/3.svg" alt="3" className="h-[100px]" />
              <h1>Evolve</h1>
              <p>Evolve your offering throughout the season.</p>
            </div>

            <div className="flex flex-col gap-y-4 justify-left text-left ">
              <img src="/4.svg" alt="4" className="h-[100px]" />
              <h1>Scale Up</h1>
              <p>Projects can be fixed cost or scale with usage.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
