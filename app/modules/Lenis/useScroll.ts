import { useStore } from "./useStore";
import { useEffect } from "react";

export function useScroll(callback: any, deps = []) {
  const lenis = useStore(({ lenis }: any) => lenis);

  console.log("===>useScroll useStore lenis", lenis);

  useEffect(() => {
    if (!lenis) return;
    lenis.on("scroll", callback);
    lenis.emit();

    return () => {
      lenis.off("scroll", callback);
    };
  }, [lenis, callback, [...deps]]);
}
