"use client";
import { useEffect } from "react";
import AOS from "aos";

const AOSWrapper = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return null; 
};

export default AOSWrapper;
// npm i --save-dev @types/aos
