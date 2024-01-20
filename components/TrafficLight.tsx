"use client";

import React, { useEffect, useState } from "react";

type Light = "red" | "yellow " | "green";

function TrafficLight() {
  const [light, setLight] = useState<Light>("red");

  useEffect(() => {
    const timer = setTimeout(() => {}, 2000);
  }, [light]);

  return (
    <div className="flex flex-col gap-5 border p-10">
      <div
        className={`w-40 h-40 ${light === "red" && "bg-red-500"} rounded-full`}
      ></div>
      <div
        className={`w-40 h-40 
        ${light === "yellow" && "bg-yellow-500"} rounded-full`}
      ></div>
      <div
        className={`w-40 h-40 ${
          light === "green" && "bg-green-500"
        }  rounded-full`}
      ></div>
    </div>
  );
}

export default TrafficLight;
