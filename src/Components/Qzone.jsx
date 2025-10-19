import React from 'react';
import swimmingImage from "../assets/swimming.png";
import classImage from "../assets/class.png";
import playImage from "../assets/playground.png";
const Qzone = () => {
  return (
    <div className="mt-5 p-3 bg-base-200">
      <h2 className="font-bold mb-5">Q-Zone</h2>
      <div className="space-y-5">
        <img src={swimmingImage} alt="It is an little girl swimming image" />
        <img src={classImage} alt="It is can class room image" />
        <img src={playImage} alt="It is childrens playing image" />
      </div>
    </div>
  );
};

export default Qzone;