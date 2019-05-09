import { useState, useEffect } from "react";

export const useWindowSize = () => {
  // Obtains inner height/width
  const getSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // defines the original object in state with the useState hook
  const [windowSize, setWindowSize] = useState(getSize());

  // Updates window size and sets/unsets event listener on the resize event
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };
    window.addEventListener("resize", handleResize);

    // Returns as function that cleans up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Returns windowSize object from state with height/width
  return windowSize;
};
