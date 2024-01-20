"use client";

import React, { useState } from "react";

type Light = "red" | "yellow " | "green";

function TrafficLight() {
  const [light, setLight] = useState<Light>("red");

  return (
    <div className="flex flex-col gap-5 border p-10">
      <div className={`w-40 h-40 bg-red-500 rounded-full`}></div>
      <div className={`w-40 h-40 bg-yellow-500 rounded-full`}></div>
      <div className={`w-40 h-40 bg-green-500 rounded-full`}></div>
    </div>
  );
}

export default TrafficLight;
