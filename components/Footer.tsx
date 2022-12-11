"use client"

import Link from "next/link";

export const Footer = () => {
  return (
    <>
      {/* //Footer */}
      <section className="imrz-black pt-8">
        <div className="pl-48 lg:pl-0 imrz-black m-auto flex h-auto w-full items-center justify-around lg:flex-col lg:pt-10 ">
          {/*** Logo row***/}
          <div className="flex flex-col gap-6">
            <Link href="https://www.imrzlabs.com/" className="">
              <img
                className="h-auto object-cover w-[155px]"
                src="/imrzlight.svg"
                alt="Imrz Labs"
              />
            </Link>
            <Link href="https://gazookystudios.com/" className="">
              <img
                className="h-auto object-cover w-[155px]"
                src="/gazooky-logo.png"
                alt="Imrz Labs"
              />
            </Link>
          </div>
          
          {/*** Links row***/}
          <div className="m-auto lg:my-10 uppercase">
            <div className="flex items-center justify-center space-x-10 text-center font-extrabold text-white md:w-full ">
              <a
                href="https://www.imrzlabs.com/media"
                className="link-style-default m-auto text-tiny text-white"
              >
                Media
              </a>

              <a
                href="https://www.imrzlabs.com/careers"
                className="link-style-default text-tiny text-white indicator"
              >
                <div className="grid h-8 place-items-center">Careers</div>
              </a>

              <a
                href="https://www.imrzlabs.com/privacy"
                className="link-style-default m-auto text-tiny text-white"
              >
                Privacy
              </a>
            </div>
          </div>
          {/*** Social row ***/}

          <div className="pr-48 lg:pr-0 ">
            <ul className="flex items-center gap-5">
              <li>
                <Link href="https://discord.gg/5eruR3BAH7">
                  <img src="/discord.svg" className="h-[20px] w-[20px]" />
                </Link>
              </li>
              <li>
                <Link href="https://www.twitter.com/imrzlabs">
                  <img src="/twi.svg" className="h-[20px] w-[20px]" />
                </Link>
              </li>
              <li>
                {" "}
                <Link href="https://www.linkedin.com/company/imrzlabs">
                  <img src="/linkedin.svg" className="h-[18px] w-[18px]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="imrz-black w-full flex flex-col justify-center items-center m-auto pb-10 pt-2 text-center text-[15px] text-white lg:pt-0 lg:mt-20 lg:mb-2">
          <p> HOST, Media City, Salford, M50 2ST</p>
          <p>Copyright © 2023 IMRZ Labs and Gazooky Studios. </p>
        </div>
      </section>
    </>
  );
};
