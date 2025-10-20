import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImage from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigationLinks = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/career", name: "Career" },
  ];

  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout Sucessfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-between py-6">
      <div className="pr-14">
        {user ? user.email : ""}
      </div>

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
        <img
          src={userImage}
          alt="It is an user image"
          className="rounded-full border-secondary border-2"
        />
        {user ? (
          <Link onClick={handleLogOut} className="btn btn-primary !py-5 !px-8">
            LogOut
          </Link>
        ) : (
          <Link to={"/auth/login"} className="btn btn-primary !py-5 !px-8">
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
