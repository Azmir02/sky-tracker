"use client";

import React, { useState, useEffect } from "react";

const LocationDate = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <span>{currentTime}</span> <span>{new Date().toDateString()}</span>
    </div>
  );
};

export default LocationDate;
