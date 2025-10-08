import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div
        className="
          h-8 w-8
          rounded-full
          border-4 border-solid border-gray-200 border-t-blue-500
          animate-spin
        "
      ></div>
    </div>
  );
}
