import { ReactLenis, useLenis } from "lenis/react";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useStore } from "./useStore";

import { useScroll } from "./useScroll";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({ markers: true });

// 目标是实现滚动进度条
function App() {
  const lenis = useLenis();

  useScroll(({ scroll, limit }: any) => {
    const progress = scroll / limit;
    console.log("===>scroll", scroll, limit, progress);
    gsap.to(".scrollbar-inner", {
      scaleX: progress,
    });
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
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 100,
            width: "100%",
          }}
          className="scrollbar h-4"
        >
          <div
            style={{
              width: "100%",
              position: "relative",
              transform: "scaleX(0)", // scaleX(0) 表示将元素在水平方向上缩放到 0,百分比，小数
              transformOrigin: "0 50%", // 表示在元素的左边缘（0%）和垂直中心（50%）处进行缩放
            }}
            className="scrollbar-inner h-2 bg-pink-light"
          ></div>
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;
