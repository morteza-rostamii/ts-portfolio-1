import { useEffect, useState } from "react";

export default function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
}