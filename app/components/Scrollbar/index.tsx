import { useScroll } from "@/app/hooks/useScroll";
import gsap from "gsap";

const ScrollBar = () => {
  useScroll(({ scroll, limit }: any) => {
    const progress = scroll / limit;
    gsap.to(".scrollbar-inner", {
      scaleX: progress,
    });
  });

  return (
    <div
      style={{
        width: "100%",
      }}
      className="scrollbar h-4 top-0 left-0 z-10 fixed"
    >
      <div
        style={{
          width: "100%",
          transform: "scaleX(0)", // scaleX(0) 表示将元素在水平方向上缩放到 0,百分比，小数
          transformOrigin: "0 50%", // 表示在元素的左边缘（0%）和垂直中心（50%）处进行缩放
        }}
        className="scrollbar-inner relative  h-2 bg-pink-light"
      ></div>
    </div>
  );
};

export default ScrollBar;
