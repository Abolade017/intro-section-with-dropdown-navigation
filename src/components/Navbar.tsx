//@ts-ignore
import React, { useState } from "react";
import { Link } from "react-router";
import MobileCollapse from "./MobileCollapse";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  const mobileNav = () => {
    setOpen((open = true));
    console.log(open);
  };
  return (
    <div className="relative">
      <div className="flex justify-between items-center px-4 md:px-10 py-8">
        <div>
          <div className="flex  space-x-0  md:space-x-12 items-center">
            <div>
              <Link to="/">
                {" "}
                <img src="/images/logo.svg" alt="Logo" />
              </Link>
            </div>
            <ul className="hidden md:flex space-x-4 items-center">
              <Link to="/features">
                <li className="text-medium-gray">Features</li>
              </Link>
              <Link to="/company">
                <li className="text-medium-gray">Company</li>
              </Link>
              <Link to="/careers">
                <li className="text-medium-gray">Careers</li>
              </Link>
              <Link to="/about">
                {" "}
                <li className="text-medium-gray">About</li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          <ul className="hidden md:flex space-x-4 items-center">
            <Link to="/login">
              <li className="text-medium-gray">Login</li>
            </Link>
            <Link to="/register">
              {" "}
              <li className="ring ring-medium-gray text-medium-gray rounded-xl px-6 py-3">
                Register
              </li>
            </Link>
          </ul>
        </div>
        <button className="md:hidden block outline-none" onClick={mobileNav}>
          <img src="/images/icon-menu.svg" alt="mobile menu icon" />
        </button>
      </div>
      <div className={open ? "" : "md:hidden relative z-10 "}>
        <div
          className={
            open
              ? "fixed inset-0  bg-almost-black transparent opacity-65 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
              : ""
          }
        ></div>
        <MobileCollapse close={() => setOpen((open = false))} open={!open} />
      </div>
    </div>
  );
};

export default Navbar;
