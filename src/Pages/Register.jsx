import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center">
      <title>Dragon News | Register</title>

      <form>
        <fieldset className="fieldset bg-base-100 border-none rounded-box w-xs border p-10 md:w-[500px]">
          <h2 className="font-bold text-3xl text-primary">
            Register with your account
          </h2>

          <hr className="my-10 text-base-300" />

          {/*//* Name */}
          <div className="flex flex-col">
            <label className="label">Name</label>
            <input
              type="email"
              className="input w-full"
              placeholder="Enter your name"
            />
          </div>

          {/*//* Photo URL */}
          <div className="flex flex-col my-4">
            <label className="label">Photo URL</label>
            <input
              type="name"
              className="input w-full"
              placeholder="Enter your photo URL"
            />
          </div>

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
          <div className="flex flex-col my-4">
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Enter your password"
            />
          </div>

          <label className="label">
    <input type="checkbox" defaultChecked className="checkbox" />
    Accept Term and Conditions
  </label>

          {/*//* Submit Button */}
          <button className="btn btn-neutral mt-4">Register</button>

          <p className="mt-5 text-center">
            Already have an account?{" "}
            <Link to={"/auth/login"} className="text-error">
              Login
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
