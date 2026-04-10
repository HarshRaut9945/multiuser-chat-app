import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col gap-4 p-4">

      {/* Message Left */}
      <div className="flex items-start gap-3">
        <div className="skeleton w-10 h-10 rounded-full"></div>

        <div className="flex flex-col gap-2">
          <div className="skeleton h-4 w-24"></div>
          <div className="skeleton h-4 w-40"></div>
        </div>
      </div>

      {/* Message Right */}
      <div className="flex items-start gap-3 justify-end">
        <div className="flex flex-col gap-2 items-end">
          <div className="skeleton h-4 w-24"></div>
          <div className="skeleton h-4 w-40"></div>
        </div>

        <div className="skeleton w-10 h-10 rounded-full"></div>
      </div>

      {/* Repeat */}
      <div className="flex items-start gap-3">
        <div className="skeleton w-10 h-10 rounded-full"></div>

        <div className="flex flex-col gap-2">
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-4 w-32"></div>
        </div>
      </div>

      <div className="flex items-start gap-3 justify-end">
        <div className="flex flex-col gap-2 items-end">
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-36"></div>
        </div>

        <div className="skeleton w-10 h-10 rounded-full"></div>
      </div>

    </div>
  );
};

export default Loading;