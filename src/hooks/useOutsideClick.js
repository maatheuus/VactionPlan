import { useEffect, useRef } from "react";

export function useOutsideClick(close) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        close();
      }
    }

    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, [close]);

  useEffect(() => {
    function noScroll() {
      if (ref.current) {
        document.body.style.overflow = "hidden";
      }
    }
    noScroll();

    return () => (document.body.style.overflow = "visible");
  }, [ref]);

  return ref;
}
