import { useRef, useCallback } from "react";

const useThrottle = <T, U extends any[]>(
  callback: (...args: U) => T,
  delay: number
) => {
  const ref = useRef(false);

  return useCallback((...args: any) => {
    if (ref.current) return;

    callback(...args);
    ref.current = true;
    setTimeout(() => (ref.current = false), delay);
  }, []);
};

export default useThrottle;
