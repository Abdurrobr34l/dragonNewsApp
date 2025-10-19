import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center">
      <title>Dragon News | Login</title>

      <form>
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
              className="input w-full"
              placeholder="Enter your email address"
            />
          </div>

          {/*//* Password */}
          <div className="my-2 flex flex-col">
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Enter your password"
            />
          </div>

          {/*//* Submit Button */}
          <button className="btn btn-neutral mt-4">Login</button>

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
