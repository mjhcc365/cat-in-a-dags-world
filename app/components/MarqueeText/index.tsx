import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const MarqueeText = () => {
  const marqueeRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1 }); // 无限循环
      tl.fromTo(
        ".marquee-wrapper",
        { x: "0%" }, // 从右侧开始
        { x: "-100%", duration: 15, ease: "linear" }
      );
    },
    {
      scope: marqueeRef,
    }
  );

  return (
    <span
      ref={marqueeRef}
      className="overflow-hidden flex items-center h-45 s:h-65 has-hover:transition-colors has-hover:duration-500 has-hover:ease-out has-hover:hover:text-white bg-red border-y-[.5rem] s:border-y-[.7rem] text-black border-black is-active font-main"
    >
      <div className="marquee-wrapper flex pr-30 s:pr-70">
        <div className="flex items-center whitespace-nowrap">
          <div className="relative">the dog days are over</div>{" "}
          <span className="mx-15">•</span>
        </div>
        <div className="flex items-center whitespace-nowrap">
          <div className="relative">cat in a dogs world</div>{" "}
          <span className="mx-15">•</span>
        </div>
        <div className="flex items-center whitespace-nowrap">
          <div className="relative">the battle has just begun</div>{" "}
          <span className="mx-15">•</span>
        </div>
      </div>
      <div className="marquee-wrapper flex pr-30 s:pr-70">
        <div className="flex items-center whitespace-nowrap">
          <div className="relative">the dog days are over</div>{" "}
          <span className="mx-15">•</span>
        </div>
        <div className="flex items-center whitespace-nowrap">
          <div className="relative">cat in a dogs world</div>{" "}
          <span className="mx-15">•</span>
        </div>
        <div className="flex items-center whitespace-nowrap">
          <div className="relative">the battle has just begun</div>{" "}
          <span className="mx-15">•</span>
        </div>
      </div>
      <div className="marquee-wrapper flex pr-30 s:pr-70">
        <div className="flex items-center whitespace-nowrap">
          <div className="relative">the dog days are over</div>{" "}
          <span className="mx-15">•</span>
        </div>
        <div className="flex items-center whitespace-nowrap">
          <div className="relative">cat in a dogs world</div>{" "}
          <span className="mx-15">•</span>
        </div>
        <div className="flex items-center whitespace-nowrap">
          <div className="relative">the battle has just begun</div>{" "}
          <span className="mx-15">•</span>
        </div>
      </div>
    </span>
  );
};

export default MarqueeText;
