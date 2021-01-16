import { useState, useEffect } from "react";

function useStickyHook(ref) {
  const [willStick, setWillStick] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (ref.current) {
        setWillStick(ref.current.getBoundingClientRect().top <= 0);
      }
    };

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [ref]);

  return willStick;
}

export default useStickyHook;
