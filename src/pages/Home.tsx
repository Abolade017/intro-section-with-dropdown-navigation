//@ts-ignore
import React from "react";
// import "../App.css";
const Home = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <div className="flex md:flex-row flex-col-reverse items-center space-x-20 pt-20 ">
        {/* left column */}
        <div className="w-1/2 pt-40  ">
          <h1 className=" text-almost-black text-[5rem] font-bold leading-20 ">
            Make <br /> remote work
          </h1>
          <p className="py-14 text-medium-gray text-lg">
            Get your team in sync. No matter your location <br /> streamline
            processes. create team rituals, and <br /> watch productivity soar.
          </p>
          <button className="bg-almost-black py-4 px-10 rounded-lg text-almost-white text-lg font-medium">
            Learn more
          </button>
          <div className="flex space-x-8 items-center  pt-48">
            <img src="/images/client-databiz.svg" alt="databiz-logo" />
            <img src="/images/client-audiophile.svg" alt="audiophile-logo" />
            <img src="/images/client-meet.svg" alt="meet-logo" />
            <img src="/images/client-maker.svg" alt="maker-logo" />
          </div>
        </div>
        {/* right column */}
        <div className="w-1/2 ">
          <img
            src="/images/image-hero-desktop.png "
            alt="desktop-homepage-image"
            className="md:block  hidden  object-cover"
          />
          <img
            src="/images/image-hero-mobile.png"
            alt="mobile-homepage-image"
            className="md:hidden block"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
