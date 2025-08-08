import React from "react";

export default function ProgressBar({ value }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <div
        className="bg-orange-500 h-4"
        style={{ width: `${value}%`, transition: "width 1s ease-in-out" }}
      ></div>
    </div>
  );
}
