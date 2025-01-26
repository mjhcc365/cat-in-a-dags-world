import { ReactLenis, useLenis } from "lenis/react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useStore } from "./useStore";
import Lenis from "lenis";

import { useScroll } from "./useScroll";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({ markers: true });

// 目标是实现滚动进度条
function App() {
  const lenis = useLenis();

  useScroll(({ scroll }: any) => {
    console.log("===>scroll", scroll);
  });
  const [setLenis] = useStore((state: any) => [state.setLenis]);
  useEffect(() => {
    if (lenis) {
      ScrollTrigger.refresh();
      lenis?.start();
    }
  }, [lenis]);

  useEffect(() => {
    setLenis(lenis);
    return () => {
      lenis?.destroy();
      setLenis(null);
    };
  }, [lenis]);

  return (
    <ReactLenis root>
      <div style={{ height: 1200 }}>
        <div style={{ height: 600 }} className="bg-red ">
          height:600px
        </div>
        <div className="box border w-100 h-100">box</div>
      </div>
    </ReactLenis>
  );
}

export default App;
