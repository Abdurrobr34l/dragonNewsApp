import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
  const navigationLinks = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/career", name: "Career" },
  ];

  return (
    <div className="flex items-center justify-between mt-5">
      <div className="px-14"></div>

      <nav>
        <ul className="flex gap-5">
          {navigationLinks.map(({ id, path, name }) => (
            <li>
              <NavLink key={id} to={path}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex gap-3">
        <img src={user} alt="It is an user image" />
        <button className="btn btn-primary !py-5 !px-8">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
