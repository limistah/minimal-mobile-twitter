import React from "react";
import FeatherSVG from "./svg/Feather";

function TweetIcon() {
  return (
    <div className="fixed bottom-24 right-5 text-white bg-blue-400 rounded-full h-12 w-12 flex items-center justify-center">
      <FeatherSVG />
    </div>
  );
}

export default TweetIcon;
