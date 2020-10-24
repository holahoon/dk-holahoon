import { useState, useEffect, useCallback } from "react";
import _ from "lodash";

function useWindowsHeight() {
  const [windowInnerHeight, setWindowInnerHeight] = useState(800);

  // on component mount
  useEffect(() => {
    setWindowInnerHeight(window.innerHeight);
  }, []);
  // on window resize event
  useEffect(() => {
    window.addEventListener("resize", innerHeightHandler);
    return () => window.removeEventListener("resize", innerHeightHandler);
  });

  const innerHeightHandler = useCallback(
    _.debounce(() => {
      setWindowInnerHeight(window.innerHeight);
    }, 200),
    []
  );
  return windowInnerHeight;
}

export default useWindowsHeight;
