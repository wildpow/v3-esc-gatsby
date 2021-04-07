import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
} from "react";

const WindowSizeCtx = createContext();

export const useWindowSize = () => useContext(WindowSizeCtx);

const WindowSizeProvider = ({ children }) => {
  const resizeInProgress = useRef(false);

  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : null,
    height: typeof window !== "undefined" ? window.innerHeight : null,
  });

  useEffect(() => {
    function throttledUpdateWindowSize() {
      setTimeout(() => {
        setDimensions({
          width: typeof window !== "undefined" ? window.innerWidth : null,
          height: typeof window !== "undefined" ? window.innerHeight : null,
        });
        resizeInProgress.current = false;
      }, 500);
    }
    function handleResize() {
      if (resizeInProgress.current === true) {
        return;
      }
      resizeInProgress.current = true;
      throttledUpdateWindowSize();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowSizeCtx.Provider value={dimensions}>
      {children}
    </WindowSizeCtx.Provider>
  );
};

export default WindowSizeProvider;
