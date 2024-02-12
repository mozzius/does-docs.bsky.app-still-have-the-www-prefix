"use client";

import { useEffect, useState } from "react";

import ReactConfetti from "react-confetti";

export const Confetti = () => {
  const [{ width, height }, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return <ReactConfetti width={width} height={height} />;
};
