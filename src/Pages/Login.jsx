import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    //* Client-side validation (IMPORTANT)
    if (!email) {
      toast.error("Email is required");
      return;
    }

    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Enter a valid email address");
      return;
    }

    if (!password) {
      toast.error("Password is required");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        user ? toast.success("Logged In Sucessfully") : "";
        navigate(`${location.state} ? location.state : "/"`);
        form.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMsg = error.message;
        toast.success(errorCode, errorMsg);
      });
  };

  return (
    <div className="flex justify-center">
      <title>Dragon News | Login</title>

      <form onSubmit={handleLogin}>
        <fieldset className="fieldset bg-base-100 border-none rounded-box w-xs border p-14 md:w-[500px]">
          <h2 className="font-bold text-3xl text-primary">
            Login with your account
          </h2>

          <hr className="my-10 text-base-300" />

          {/*//* Email */}
          <div className="flex flex-col">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Enter your email address"
            />
          </div>

          {/*//* Password */}
          <div className="my-2 flex flex-col">
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="Enter your password"
            />
          </div>

          {/*//* Submit Button */}
          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>

          <p className="mt-5 text-center">
            Dont't have an account?{" "}
            <Link to={"/auth/register"} className="text-error">
              Register
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
