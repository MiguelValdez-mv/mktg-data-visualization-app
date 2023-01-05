import { useState, useEffect } from "react";

const getDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

export const useDimensions = ({ breakpoint } = { breakpoint: 1024 }) => {
  const [dimensions, setDimensions] = useState(getDimensions());

  useEffect(() => {
    const handleResize = () => setDimensions(getDimensions());

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    ...dimensions,
    isLargeScreen: dimensions.width >= breakpoint,
  };
};
