import React from "react";
import { Link } from "react-router-dom";
import useSingup from "../hooks/useSingup";
import useGlobalContext from "../hooks/useGlobalContext";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
let localStrog = () => {
  return localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "light";
};
function Navbar() {
  let { cretae } = useGlobalContext();
  let { dispetch, user } = cretae;
  let { handleSingOut } = useSingup();
  let handleLogout = () => {
    dispetch({ type: "LOG_OUT", user: null });
    toast(`Bye Bye ${user.displayName} `, {
      icon: "👏",
    });
  };
  let [theme, setTheme] = useState(localStrog());
  const darkMode = (e) => {
    if (e.target.checked) {
      setTheme("halloween");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  return (
    <div className=" navbar mb-[-15px] bg-base-100 shadow-xl">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="link " to="/about">
                About
              </Link>
            </li>

            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/create">
                Create
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Kitchen
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-10 text-base font-semibold">
          <li>
            <Link className="link  " to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/create">
              Create
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          onClick={() => {
            handleLogout();
            handleSingOut();
          }}
          className="btn btn-primary"
        >
          LogOut
        </a>
      </div>
    </div>
  );
}

export default Navbar;
