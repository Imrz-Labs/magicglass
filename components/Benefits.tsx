"use client";

export const Benefits = () => {
  return (
    <>
      <main className="flex flex-col w-full h-auto py-20 bg-white ">
        {/** Title */}
        <div className="flex w-full justify-center flex-col mb-20">
          <h1 className="m-auto text-base font-bold text-center mb-3">
            Benefits
          </h1>
          <p className="lg:w-11/12 md:text-xs m-auto text-sm text-center">
            Lorem ipsum dolor sit amet, et eos appareat placerat gloriatur vel
            illum nonumes necessitatibus.
          </p>
        </div>
        {/** BENEFITS*/}
        <section className="w-full flex justify-center items-center md:flex-col">
          <div className="w-11/12 md:w-10/12 flex flex-row md:flex-col justify-center items-center ">
            {/** left layout*/}
            <div className="flex flex-col md:mb-20 md:justify-center md:flex-row h-full my-auto gap-y-20 mr-20 lg:mr-10 md:mr-auto">
              <div className="flex flex-col md:w-full gap-y-1 text-right md:text-left">
                <h1 className="text-blue">Drive Engagement</h1>
                <p className="md:text-tiny">Drive Live engagement in any space</p>
              </div>
              <span className="flex w-full md:w-auto items-end justify-end ">
                <span className="w-7/12 h-[1px] md:h-3/5 md:w-[1px] md:bg-gray-light bg-blue flex justify-end md:justify-center"></span>
              </span>
              <div className="flex flex-col md:w-full gap-y-1 text-right">
                <h1 className="text-blue">Branded</h1>
                <p className="md:text-tiny">Promote partner brands through branded photo</p>
              </div>
            </div>
            {/** mid layout*/}
            <div className="">
              <video
                className="max-w-sm md:h-2/5 h-4/5 rounded-xl shadow-effect"
                src="/magic-show.mp4"
                autoPlay
                loop
                muted
              />
            </div>
            {/** right layout*/}

            <div className="flex flex-col md:mt-20 md:justify-center md:flex-row h-full my-auto gap-y-20 ml-20 lg:ml-10 md:ml-auto">
              <div className="flex flex-col md:w-full gap-y-1 text-left md:text-left">
                <h1 className="text-blue">Amplify</h1>
                <p className="md:text-tiny">Amplify your brand through social promotion</p>
              </div>
              <span className="flex w-full md:w-auto items-start justify-start ">
                <span className="w-7/12 h-[1px] md:h-3/5 md:w-[1px] md:bg-gray-light bg-blue flex justify-start md:justify-center"></span>
              </span>
              <div className="flex flex-col md:w-full gap-y-1 text-left md:text-right">
                <h1 className="text-blue">Analyse</h1>
                <p className="md:text-tiny">Collect data and analyse footfall</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
