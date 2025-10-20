import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { setUser, createUser, updateUser } = use(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    //* Client-side validation (IMPORTANT)
    {
      if (!name) {
        toast.error("Name is required");
        return;
      }

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
    }

    //todo 1) Adding user email and password in firbase user info
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        toast.success("Account created successfully!");
        //todo 2) After getting the user data send it to user state in authprovider to use it in other places
        updateUser({ displayName: name, photoURL: photo }).then(() => {
          setUser({...user, displayName: name, photoURL: photo});
          navigate("/")
        }).catch((error) => {
          console.log(error);
        })

        //* Clearsform inputs value after successful registration
        form.reset();
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email already in use");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email address");
        } else if (error.code === "auth/weak-password") {
          toast.error("Password should be at least 6 characters");
        } else {
          toast.error(error.message);
        }
      });
  };

  return (
    <div className="flex justify-center">
      <title>Dragon News | Register</title>

      <form onSubmit={handleRegister}>
        <fieldset className="fieldset bg-base-100 border-none rounded-box w-xs border p-10 md:w-[500px]">
          <h2 className="font-bold text-3xl text-primary">
            Register with your account
          </h2>

          <hr className="my-10 text-base-300" />

          {/*//* Name */}
          <div className="flex flex-col">
            <label className="label">Name</label>
            <input
              type="name"
              name="name"
              className="input w-full"
              placeholder="Enter your name"
            />
          </div>

          {/*//* Photo URL */}
          <div className="flex flex-col my-4">
            <label className="label">Photo URL</label>
            <input
              type="name"
              name="photo"
              className="input w-full"
              placeholder="Enter your photo URL"
            />
          </div>

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
          <div className="flex flex-col my-4">
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="Enter your password"
            />
          </div>

          {/*//* Term and Conditions */}
          <label className="label">
            <input type="checkbox" className="checkbox" required />
            Accept Term and Conditions
          </label>

          {/*//* Submit Button */}
          <button type="submit" className="btn btn-neutral mt-4">
            Register
          </button>

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
