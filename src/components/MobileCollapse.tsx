//@ts-ignore
import React, { useState } from "react";
import { Link } from "react-router";

interface propsType {
  open: boolean;
  close: any;
}
const MobileCollapse = ({ open, close }: propsType) => {
  return (
    <div
      className={`${
        open ? "hidden" : "fixed inset-0 z-10 w-screen overflow-y-auto"
      }`}
    >
      <div className="flex min-h-full ">
        <div className="w-1/3"></div>
        <div className={"w-2/3 bg-white h-screen relative z-10  "}>
          <div className="px-4 pt-8">
            <button className="flex float-right" onClick={close}>
              <img
                src="/images/icon-close-menu.svg"
                alt="menu-close-icon"
                className="text-medium-gray w-5 h-5"
              />
            </button>
          </div>
          <div className="flex flex-col space-y-4 pt-16 px-4 ">
            <div className="flex space-x-3 items-center">
              <Link to="/features" className="text-medium-gray">
                Features
              </Link>
              <img
                src="/images/icon-arrow-down.svg"
                alt="menu-arrow-down-icon"
                className="text-medium-gray"
              />
            </div>
            <div className="flex space-x-3 items-center">
              <Link to="/company" className="text-medium-gray">
                Company
              </Link>
              <img
                src="/images/icon-arrow-down.svg"
                alt="menu-arrow-down-icon"
                className="text-medium-gray"
              />
            </div>
            <Link to="/careers" className="text-medium-gray">
              Careers
            </Link>
            <Link to="/about" className="text-medium-gray">
              About
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              {" "}
              <Link to="/login" className="text-medium-gray ">
                Login
              </Link>
            </div>
            <Link to="/register">
              <button className="text-medium-gray border border-almost-black rounded-2xl h-10 mt-4 px-18 py-2.5 text-center">
                {" "}
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCollapse;
