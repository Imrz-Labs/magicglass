"use client";

import { idProps } from "../config/interface";

export const Packages = (props: idProps) => {
  const { id } = props;
  return (
    <>
      <main id={id} className="bg-black py-20 flex md:flex-col w-full h-auto justify-center px-20 lg:px-0">
        {/** Title */}
        <div className="flex w-9/12 md:w-full justify-start lg:justify-center lg:items-center items-start flex-col mt-20 ">
          <h1 className="flex justify-center items-center text-base font-bold text-start md:text-center mb-3">
            Packages
          </h1>
          <p className="flex lg:w-11/12 md:text-xs md:text-center justify-center w-8/12 items-center">
            Installation can be tailored to match your requirements.
          </p>
        </div>
        {/** Grid Layout*/}
        <section className="w-full flex justify-center items-center">
          <div className="flex flex-row lg:grid lg:grid-flow-row lg:grid-cols-2 gap-5 w-11/12 justify-start md:justify-center md:m-auto items-center">
            <legend>
              <div className="flex flex-col gap-y-4 justify-start text-left ">
                <span className="text-[85px]  text-blue uppercase font-bold md:text-center  ">
                  1.
                </span>
                <h1>Rent or Buy </h1>
                <p>Suitable for long term and short term set ups.</p>
              </div>

              <div className="flex flex-col gap-y-4 justify-left text-left ">
                <span className="text-[85px]  text-blue uppercase font-bold md:text-center ">
                  3.
                </span>
                <h1>Evolve</h1>
                <p>Evolve your offering throughout the season.</p>
              </div>
            </legend>

            <legend>
              <div className="flex flex-col gap-y-4 justify-left text-left pt-10 ">
                <span className="text-[85px]  text-blue uppercase font-bold md:text-center ">
                  2.
                </span>
                <h1>Custom Design</h1>
                <p>Provide your imagery or have us design and capture.</p>
              </div>

              <div className="flex flex-col gap-y-4 justify-left text-left ">
                <span className="text-[85px]  text-blue uppercase font-bold md:text-center ">
                  4.
                </span>
                <h1>Scale Up</h1>
                <p>Projects can be fixed cost or scale with usage.</p>
              </div>
            </legend>
          </div>
        </section>
      </main>
    </>
  );
};
