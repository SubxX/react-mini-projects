import { useEffect, useRef } from "react";

const useDebounce = (callBack: () => void, duration: number, deps: any[]) => {
  const ref = useRef<any>();

  useEffect(() => {
    ref.current = setTimeout(() => {
      callBack();
    }, duration);
    return () => {
      clearTimeout(ref.current);
    };
  }, deps);
};

export default useDebounce;
