import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex gap-5 items-center p-3 bg-base-200">
      <p className="px-3 py-2 text-base-100 bg-secondary">Latest</p>
      
      <Marquee pauseOnHover={true} className="flex gap-5">
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem a rerum?
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem a rerum?
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptatem a rerum?
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
