import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="mt-10 mb-5 font-semibold">Find Us On</h2>

      <div className="join join-vertical w-full">
        <button className="btn findus-button rounded-t-lg">
          <span className="p-2 bg-base-300 text-[#1877F2] rounded-full">
          <FaFacebookF/>
          </span>

          Facebook
        </button>

        <button className="btn findus-button">
          <span className="p-2 bg-base-300 text-[#1DA1F2] rounded-full">
          <FaTwitter />
          </span>

          Twitter
        </button>

        <button className="btn findus-button rounded-b-lg">
          <span className="p-2 bg-base-300 text-[#E1306C] rounded-full">
          <FaInstagram />
          </span>

          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
