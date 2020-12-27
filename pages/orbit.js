import React from "react";

function Tweet() {
  return (
    <div className="container mx-auto bg-indigo-200 h-full w-full flex justify-center items-center">
      <div className="h-44 w-80 bg-indigo-600 rounded-xl bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 shadow-lg">
        <div className="relative h-full w-full">
          <span className="w-24 h-24 animate-orbit rounded-full block absolute top-12 bg-gradient-to-br from-pink-400 to-pink-900"></span>

          <span className="w-24 h-24 rounded-full -animate-orbit block absolute right-0 top-12 bg-gradient-to-br from-yellow-400 to-yellow-900"></span>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
