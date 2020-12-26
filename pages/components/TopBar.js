import React from "react";
import StarSVG from "./svg/Star";

function TopBar() {
  return (
    <div className="flex px-2 py-3 items-center border-b border-gray-500">
      <div className="w-2/12">
        <img
          src="https://pbs.twimg.com/profile_images/1236239360019902465/YGX5GnMP_bigger.jpg"
          className="rounded-full h-8 w-8"
        />
      </div>
      <div className="flex justify-between flex-1 items-center">
        <h1 className="font-extrabold text-xl text-white">Home</h1>
        <span className="text-blue-400 ">
          <StarSVG />
        </span>
      </div>
    </div>
  );
}

export default TopBar;
