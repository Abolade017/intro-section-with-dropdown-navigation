//@ts-ignore
import React, { useState } from "react";
import { Link } from "react-router";
import MobileCollapse from "./MobileCollapse";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  let [openFeature, setOpenFeature] = useState(false);
  let [openCompany, setOpenCompany] = useState(false);

  const mobileNav = () => {
    setOpen((open = true));
  };
  const showFeatureDropdown = () => {
    setOpenFeature(!openFeature);
    console.log(openFeature);
  };
  const showCompanyDropdown = () => {
    setOpenCompany(!openCompany);
  };
  return (
    <div className="relative">
      <div className="flex  justify-between items-center px-4 md:px-10 py-8">
        <div>
          <div className="flex  space-x-0  md:space-x-12 items-center">
            <div>
              <Link to="/">
                {" "}
                <img src="/images/logo.svg" alt="Logo" />
              </Link>
            </div>
            <div className="relative">
              <ul className="hidden md:flex space-x-10 items-center ">
                <button
                  className="outline-none text-medium-gray hover:text-almost-black"
                  onClick={showFeatureDropdown}
                >
                  {" "}
                  <div className="flex space-x-2 items-center">
                    <li className="">Features</li>
                    <img
                      src="/images/icon-arrow-down.svg"
                      alt="dropdown-menu"
                      className={openFeature ? "hidden" : " -pl-2"}
                    />
                    <img
                      src="/images/icon-arrow-up.svg"
                      alt="close-dropdown-menu"
                      className={openFeature ? " -pl-2" : "hidden"}
                    />{" "}
                  </div>
                </button>
                <div
                  className={
                    openFeature
                      ? "absolute bg-white top-10 -left-16 rounded-md shadow-2xl"
                      : "hidden"
                  }
                >
                  <div
                    className={
                      openFeature
                        ? "flex flex-col space-y-4 py-4 px-8"
                        : "hidden"
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
                </div>
                <button className="outline-none " onClick={showCompanyDropdown}>
                  {" "}
                  <div className="flex space-x-2 items-center">
                    <li className="text-medium-gray hover:text-almost-black">
                      Company
                    </li>
                    <img
                      src="/images/icon-arrow-down.svg"
                      alt="dropdown-menu"
                      className={
                        openCompany
                          ? "hidden"
                          : "text-medium-gray -pl-2 hover:text-almost-black"
                      }
                    />
                    <img
                      src="/images/icon-arrow-up.svg"
                      alt="close-dropdown-menu"
                      className={
                        openCompany
                          ? "text-medium-gray -pl-2 hover:text-almost-black"
                          : "hidden"
                      }
                    />{" "}
                  </div>
                </button>
                <div
                  className={
                    openCompany
                      ? "absolute bg-white top-10 right-[104px] rounded-md shadow-2xl"
                      : "hidden"
                  }
                >
                  <div className="flex flex-col space-y-3 py-4 px-6">
                    <div className="text-medium-gray">History</div>
                    <div className="text-medium-gray">Our Team</div>
                    <div className="text-medium-gray">Blog</div>
                  </div>
                </div>
                <Link to="/careers">
                  <li className="text-medium-gray hover:text-almost-black">
                    Careers
                  </li>
                </Link>
                <Link to="/about">
                  {" "}
                  <li className="text-medium-gray hover:text-almost-black">
                    About
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <ul className="hidden md:flex space-x-4 items-center">
            <Link to="/login">
              <li className=" text-medium-gray  hover:text-almost-black ">
                Login
              </li>
            </Link>
            <Link to="/register">
              {" "}
              <li className="ring ring-medium-gray hover:ring-almost-black hover:ring-2 text-medium-gray  hover:text-almost-black  rounded-xl px-6 py-3">
                Register
              </li>
            </Link>
          </ul>
        </div>
        <button className="md:hidden block outline-none" onClick={mobileNav}>
          <img src="/images/icon-menu.svg" alt="mobile menu icon" />
        </button>
      </div>
      {/* mobile navbar */}
      <div className={open ? "" : "md:hidden relative z-10 "}>
        <div
          className={
            open
              ? "fixed inset-0  bg-almost-black transparent opacity-65 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
              : "hidden"
          }
        ></div>
        <MobileCollapse
          close={() => setOpen((open = false))}
          open={!open}
          openCompanyDropdown={showCompanyDropdown}
          openFeatureDropdown={showFeatureDropdown}
          openCompany={openCompany}
          openFeature={openFeature}
        />
      </div>
    </div>
  );
};

export default Navbar;
