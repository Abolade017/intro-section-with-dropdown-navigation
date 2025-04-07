//@ts-ignore
import React, { useState } from "react";
const Home = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <div className="flex md:flex-row flex-col-reverse items-center space-x-0  md:space-x-20 pt-0 md:pt-20 ">
        {/* left column */}
        <div className="w-full md:w-1/2 pt-10 md:pt-48 ">
          <h1 className=" text-almost-black text-[34px] md:text-[5.6rem] text-center md:text-start font-bold leading-normal  md:leading-20  ">
            Make remote work
          </h1>
          <p className="py-4 md:py-14 md:px-0 px-5 text-medium-gray md:text-start text-center text-[15px] md:text-lg">
            <span className=" md:block  ">
              Get your team in sync. No matter your location
            </span>{" "}
            <span className=" md:block">
              streamline processes. create team rituals, and
            </span>{" "}
            <span>watch productivity soar.</span>
          </p>
          <div className="flex justify-center md:block md:mt-0 mt-6">
            <button className="bg-almost-black md:py-4 py-3 px-8 rounded-xl text-almost-white text-sm font-medium">
              Learn more
            </button>
          </div>
          <div className="flex justify-center space-x-6 md:space-x-8 items-center pt-10 md:pt-40 px-4 md:px-0 ">
            <img
              src="/images/client-databiz.svg"
              alt="databiz-logo"
              className="md:w-auto w-14"
            />
            <img
              src="/images/client-audiophile.svg"
              alt="audiophile-logo"
              className="md:w-auto w-[38px]"
            />
            <img
              src="/images/client-meet.svg"
              alt="meet-logo"
              className="md:w-auto w-14"
            />
            <img
              src="/images/client-maker.svg"
              alt="maker-logo"
              className="md:w-auto w-14"
            />
          </div>
        </div>
        {/* right column */}
        <div className="w-full md:w-1/4">
          <img
            src="/images/image-hero-desktop.png "
            alt="desktop-homepage-image"
            className="md:block  hidden  object-cover"
          />
          <img
            src="/images/image-hero-mobile.png"
            alt="mobile-homepage-image"
            className="md:hidden block object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
