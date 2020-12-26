import React from "react";
import ShareSVG from "./svg/Share";
import LikeSVG from "./svg/Like";
import RetweetSVG from "./svg/Retweet";
import ReplySVG from "./svg/Reply";
import TweetOptionsSVG from "./svg/TweetOptions";

function Tweet() {
  return (
    <div className="w-full p-2 flex border-b border-gray-500">
      <div className="w-2/12">
        <img
          src="https://pbs.twimg.com/profile_images/1236239360019902465/YGX5GnMP_bigger.jpg"
          className="rounded-full h-12 w-12"
        />
      </div>
      <div className="w-10/12">
        <div className="w-full flex justify-between">
          <div className="">
            <span className="font-semibold mr-1 text-gray-100">
              Aleem Isiaka
            </span>
            <span className="text-gray-400">@limistah</span>
            <span className="mx-2 font-bold text-gray-400">·</span>
            <span className="text-gray-400">20h</span>
          </div>

          <div className="text-gray-400 hover:cursor-pointer">
            <TweetOptionsSVG />
          </div>
        </div>
        <div className="py-2 text-white">
          <span>What can someone give you now and put smiles on your face</span>
        </div>
        <div className="flex justify-between text-gray-400">
          <div className="flex">
            <ReplySVG />
            <span className="ml-1">229</span>
          </div>
          <div className="flex">
            <RetweetSVG />
            <span className="ml-1">287</span>
          </div>
          <div className="flex">
            <LikeSVG />
            <span className="ml-1">796</span>
          </div>
          <div className="flex">
            <ShareSVG />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
