"use client";

import { idProps } from "../config/interface";

export const Benefits = (props: idProps) => {
  const { id } = props;
  return (
    <>
      <main
        id={id}
        className="flex flex-row md:flex-col-reverse px-20 py-20 md:px-0 md:w-11/12 md:m-auto gap-10 w-full h-auto justify-center items-center  bg-black"
      >
        {/**Details */}
        <section className="flex flex-col w-full h-full items-start gap-10 ">
          <div className="text-base font-bold capitalize w-full">
            The Value of Magic Glass
          </div>

          <div className="flex w-full h-auto items-center">
            {/**Row 1 */}
            <span className="flex flex-col w-full h-auto gap-y-10">
              <span className="flex flex-col w-full ">
                <span className="font-bold uppercase text-blue">
                  Engagement
                </span>
                <p>
                  Mass footfall engagement creating better customer experiences
                </p>
              </span>

              <span className="flex flex-col w-full ">
                <span className="font-bold uppercase text-blue">
                  Sponsorship
                </span>
                <p>
                  Offer a really effective sponsorship opportunity by branding
                  your MagicGlass photos
                </p>
              </span>
            </span>

            {/**Row 2 */}
            <span className="flex flex-col w-full h-[200px] gap-y-10">
              <span className="flex flex-col w-full ">
                <span className="font-bold uppercase text-blue">Amplify</span>
                <p>
                  Amplify your eyes-on-brand through the end users social
                  promotion{" "}
                </p>
              </span>

              <span className="flex flex-col w-full ">
                <span className="font-bold uppercase text-blue">
                  Collect & Analyze Data
                </span>
                <p>
                  Learn about your customers, most popular assets and gather
                  data that would usually be missed
                </p>
              </span>
            </span>
          </div>
        </section>

        {/**Banner */}
        <section className="flex w-full h-auto lg:pb-7">
          <img src="/banner-2.png" className="w-8/12 m-auto flex object-scale-down md:w-full" />
        </section>
      </main>
    </>
  );
};
