import React from "react";

import Image from "next/image";

const Step5 = () => {
  return (
    <div className="absolute rounded-lg top-16 h-[435px] left-3 mt-5  w-11/12 md:static flex md:-mt-8 md:w-full justify-center items-center bg-white">
      {/*  */}
      <div className="flex flex-col md:justify-center w-full md:w-2/3 mt-5 mr-5 ml-5 text-marine_blue">
        {/*  */}
        <div className="w-full flex justify-center items-center mt-12 mb-5">
          <Image
            src="/images/icon-thank-you.svg"
            width={60}
            height={60}
            alt="Clock"
          />
        </div>
        <h1 className="text-2xl font-bold w-full flex mb-4 justify-center items-center">
          Thank you!
        </h1>
        <p className="flex w-full justify-center items-center text-xs md:text-base text-cool_gray ">
          Thanks for confirming your subscription!
        </p>
        <p className="flex flex-wrap break-wordsjustify-center items-center text-xs md:text-base text-center text-cool_gray mb-6">
          We hope you have fun using our platform. if you ever need suppoert,
          please feel free to email us at support@lorengaming.com.
        </p>
      </div>
    </div>
  );
};

export default Step5;
