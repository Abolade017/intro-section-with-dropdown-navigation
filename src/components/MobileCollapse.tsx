//@ts-ignore
import React, { useState } from "react";
import { Link } from "react-router";
interface propsType {
  open: boolean;
  close: any;
  openCompanyDropdown: any;
  openFeatureDropdown: any;
  openCompany: any;
  openFeature: any;
}
const MobileCollapse = ({
  open,
  close,
  openCompanyDropdown,
  openFeatureDropdown,
  openCompany,
  openFeature,
}: propsType) => {
  return (
    <div
      className={`${
        open
          ? "hidden"
          : "fixed inset-0 z-10 w-screen overflow-y-auto md:hidden"
      }`}
    >
      <div className="flex min-h-full ">
        <div className="w-[36%]"></div>
        <div className={"w-[64%] bg-white h-screen relative z-10  "}>
          <div className="px-4 pt-8">
            <button className="flex float-right" onClick={close}>
              <img
                src="/images/icon-close-menu.svg"
                alt="menu-close-icon"
                className="text-medium-gray w-5 h-5"
              />
            </button>
          </div>
          <ul className="flex flex-col space-y-4 pt-16 px-4 ">
            <div className="flex space-x-3 items-center">
              <li className="text-medium-gray hover:text-almost-black">
                Features
              </li>
              <button className="outline-none" onClick={openFeatureDropdown}>
                <img
                  src="/images/icon-arrow-down.svg"
                  alt="menu-arrow-down-icon"
                  className={
                    openFeature
                      ? "hidden"
                      : "text-medium-gray hover:text-almost-black"
                  }
                />
                <img
                  src="/images/icon-arrow-up.svg"
                  alt="menu-arrow-down-icon"
                  className={
                    openFeature
                      ? "text-medium-gray hover:text-almost-black"
                      : "hidden"
                  }
                />
              </button>
            </div>
            <div
              className={
                openFeature ? "flex flex-col space-y-3 pl-6" : "hidden"
              }
            >
              <div className="flex space-x-2 items-center">
                <div className="">
                  <img
                    src="/images/icon-todo.svg"
                    alt="todo-icon"
                    className="w-3"
                  />
                </div>
                <div className="text-medium-gray">Todo List</div>
              </div>
              <div className="flex space-x-2 items-center">
                <div>
                  <img
                    src="/images/icon-calendar.svg"
                    alt="calendar-icon"
                    className="w-3"
                  />
                </div>
                <div className="text-medium-gray">Calendar</div>
              </div>
              <div className="flex space-x-2 items-center">
                <div>
                  <img
                    src="/images/icon-reminders.svg"
                    alt="reminder-icon"
                    className="w-3"
                  />
                </div>
                <div className="text-medium-gray">Reminder</div>
              </div>
              <div className="flex space-x-2 items-center">
                <div>
                  <img
                    src="/images/icon-planning.svg"
                    alt="planning-icon"
                    className="w-3"
                  />
                </div>
                <div className="text-medium-gray">Planning</div>
              </div>
            </div>
            <div className="flex space-x-3 items-center">
              <li className="text-medium-gray hover:text-almost-black">
                Company
              </li>

              <button className="outline-none" onClick={openCompanyDropdown}>
                <img
                  src="/images/icon-arrow-down.svg"
                  alt="menu-arrow-down-icon"
                  className={
                    openCompany
                      ? "hidden"
                      : "text-medium-gray -pl-2 hover:text-almost-black"
                  }
                />
                <img
                  src="/images/icon-arrow-up.svg"
                  alt="menu-arrow-up-icon"
                  className={
                    openCompany
                      ? "text-medium-gray -pl-2 hover:text-almost-black"
                      : "hidden"
                  }
                />
              </button>
            </div>
            <div
              className={
                openCompany ? "flex flex-col space-y-3 pl-6" : "hidden"
              }
            >
              <div className="text-medium-gray">History</div>
              <div className="text-medium-gray">Our Team</div>
              <div className="text-medium-gray">Blog</div>
            </div>
            <Link to="/careers">
              <li className="text-medium-gray hover:text-almost-black">
                {" "}
                Careers
              </li>
            </Link>
            <Link to="/about">
              <li className="text-medium-gray hover:text-almost-black">
                {" "}
                About
              </li>
            </Link>
          </ul>
          <div className="flex flex-col justify-center items-center">
            <div>
              {" "}
              <Link
                to="/login"
                className="text-medium-gray hover:text-almost-black "
              >
                Login
              </Link>
            </div>
            <Link to="/register">
              <button className="text-medium-gray border border-almost-black rounded-2xl h-10 mt-4 px-18 py-2.5 text-center hover:text-almost-black">
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
