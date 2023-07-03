"use client";

import { idProps } from "../config/interface";

export const Where = ( props: idProps ) => {
  const { id } = props;
  return (
    <>
      <main id={id} className="bg-black py-20 flex flex-col w-full h-auto">
        {/** Title */}
        <div className="flex w-full justify-center flex-col mb-20">
          <h1 className="m-auto text-base font-bold text-center mb-3">Where</h1>
          <p className="lg:w-11/12 md:text-xs m-auto text-sm text-center">
            AR Photo Mirror is designed for experiential venues that want to
            engage their users.
          </p>
        </div>
        {/** Grid Layout*/}
       <section className="w-full flex justify-center items-center">
            <div className="flex flex-row lg:grid lg:grid-flow-row lg:grid-cols-2 gap-5 md:gap-10 w-11/12 justify-center items-center">
                <div className="flex flex-col gap-y-4 justify-center text-center m-auto ">
                    <img src="/events.svg" alt="Events" className="h-[75px]" />
                    <span className="font-semibold uppercase ">Events</span>
                    {/* <p>Lorem ipsum dolor sit amet et eos appareat placerat.</p> */}
                </div>
               
                <div className="flex flex-col gap-y-4 justify-center text-center m-auto ">
                    <img src="/sports.svg" alt="Events" className="h-[75px]" />
                    <span className="font-semibold uppercase ">Stadiums</span>
                    {/* <p>Lorem ipsum dolor sit amet et eos appareat placerat.</p> */}
                </div>
               
                <div className="flex flex-col gap-y-4 justify-center text-center m-auto ">
                    <img src="/landmarks.svg" alt="Events" className="h-[75px]" />
                    <span className="font-semibold uppercase ">Museums</span>
                    {/* <p>Lorem ipsum dolor sit amet et eos appareat placerat.</p> */}
                </div>
               
                <div className="flex flex-col gap-y-4 justify-center text-center m-auto ">
                    <img src="/entertainment.svg" alt="Events" className="h-[75px]" />
                    <span className="font-semibold uppercase ">Festivals</span>
                    {/* <p>Lorem ipsum dolor sit amet et eos appareat placerat.</p> */}
                </div>
               
               
                <div className="flex flex-col gap-y-4 justify-center text-center m-auto ">
                    <img src="/arenas.svg" alt="Events" className="h-[75px]" />
                    <span className="font-semibold uppercase ">Arenas</span>
                    {/* <p>Lorem ipsum dolor sit amet et eos appareat placerat.</p> */}
                </div>
               
               
                <div className="flex flex-col gap-y-4 justify-center text-center m-auto ">
                    <img src="/retailers.svg" alt="Events" className="h-[75px]" />
                    <span className="font-semibold uppercase ">Retailers</span>
                    {/* <p>Lorem ipsum dolor sit amet et eos appareat placerat.</p> */}
                </div>
               
            </div>
       </section>
      </main>
    </>
  );
};
