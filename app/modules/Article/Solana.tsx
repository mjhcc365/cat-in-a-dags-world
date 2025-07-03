import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Solana = () => {
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
    <>
      <span
        ref={marqueeRef}
        className="overflow-hidden flex items-center relative bg-black z-2"
      >
        <div className="flex marquee-wrapper pr-30 s:pr-70 js-marquee">
          <div className="flex items-center whitespace-nowrap title-xxl text-white uppercase">
            Powered by Solana
            <figure
              className="media relative h-45 w-50 s:h-140 s:w-160 media-contain ml-30 s:ml-60"
              data-v-4a377300
            >
              <Image
                src="https://mew.xyz/solana.svg"
                loading="lazy"
                decoding="async"
                draggable="false"
                className="media__image"
                data-v-4a377300
                width={100}
                height={100}
              />
            </figure>
          </div>
        </div>
        <div className="flex marquee-wrapper pr-30 s:pr-70 js-marquee">
          <div className="flex items-center whitespace-nowrap title-xxl text-white uppercase">
            Powered by Solana
            <figure
              className="media relative h-45 w-50 s:h-140 s:w-160 media-contain ml-30 s:ml-60"
              data-v-4a377300
            >
              <Image
                src="https://mew.xyz/solana.svg"
                loading="lazy"
                decoding="async"
                draggable="false"
                className="media__image"
                data-v-4a377300
                width={100}
                height={100}
              />
            </figure>
          </div>
        </div>
        <div className="flex marquee-wrapper pr-30 s:pr-70 js-marquee">
          <div className="flex items-center whitespace-nowrap title-xxl text-white uppercase">
            Powered by Solana
            <figure
              className="media relative h-45 w-50 s:h-140 s:w-160 media-contain ml-30 s:ml-60"
              data-v-4a377300
            >
              <Image
                src="https://mew.xyz/solana.svg"
                loading="lazy"
                decoding="async"
                draggable="false"
                className="media__image"
                data-v-4a377300
                width={100}
                height={100}
              />
            </figure>
          </div>
        </div>
      </span>
    </>
  );
};

export default Solana;
