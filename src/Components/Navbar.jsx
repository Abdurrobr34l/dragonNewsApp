import React from "react";
import { Link, NavLink } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
  const navigationLinks = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/career", name: "Career" },
  ];

  return (
    <div className="flex items-center justify-between">
      <div className="px-14"></div>

      <nav>
        <ul className="flex gap-5 navbar-ul">
          {navigationLinks.map(({ id, path, name }) => (
            <li key={id}>
              <NavLink to={path} className={"text-accent"}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex gap-3">
        <img src={user} alt="It is an user image" className="rounded-full border-secondary border-2"/>
        <Link to={"/auth/login"} className="btn btn-primary !py-5 !px-8">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
