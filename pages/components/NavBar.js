import React from "react";
import MessageSVG from "./svg/Message";
import HomeSVG from "./svg/Home";
import SearchSVG from "./svg/Search";
import NotificationSVG from "./svg/Notification";

function NavBar() {
  return (
    <div className="grid grid-cols-4 items-center h-full border-t border-blue-500 text-gray-400">
      <div className="flex  justify-center">
        <HomeSVG />
      </div>
      <div className="flex  justify-center">
        <SearchSVG />
      </div>
      <div className="flex  justify-center">
        <NotificationSVG />
      </div>
      <div className="flex  justify-center">
        <MessageSVG />
      </div>
    </div>
  );
}

export default NavBar;
