import React from "react";

function TrafficLight() {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-40 h-40 bg-red-500"></div>
      <div className="w-40 h-40 bg-yellow-500"></div>
      <div className="w-40 h-40 bg-green-500"></div>
    </div>
  );
}

export default TrafficLight;
