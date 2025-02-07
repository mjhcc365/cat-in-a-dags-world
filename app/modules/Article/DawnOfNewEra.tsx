import { useEffect, useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/** 新时代的开端 */
const DawnOfNewEra = () => {
  return (
    <section className="s:pt-120 pb-40 bg-white overflow-hidden">
      <div className="site-max">
        <h2 className="title-xxl text-center">
          it's the dawn of a
          <span className="relative">
            N
            <canvas className="absolute -top-15 s:-top-20 -left-15 s:-left-20 w-[calc(100%+3rem)] h-[calc(100%+3rem)] s:w-[calc(100%+4rem)] s:h-[calc(100%+4rem)] pointer-events-none has-hover:pointer-events-auto"></canvas>
          </span>
          EW era
        </h2>
      </div>
      <div className="site-max --xs">
        <div className="relative flex flex-col s:flex-row items-center justify-center gap-y-15 s:gap-y-0 s:gap-x-40 pt-45 pb-30 s:pb-70">
          <a
            href="https://x.com/mew"
            rel="noopener noreferrer"
            target="_blank"
            className="btn inline-flex rounded-[1.15rem] s:rounded-[1.5rem] relative h-spray-t z-2"
          >
            <div className="btn__content flex items-center justify-center relative text-center overflow-hidden h-60 s:h-75 text-black z-2 before:absolute before:inset-0 before:border-[.5rem] s:before:border-[.7rem] before:border-current before:z-2 after:absolute after:inset-4 after:bg-pink-light after:rounded-inherit after:z-1">
              <div className="px-17 s:px-25 uppercase flex items-center gap-x-18 relative z-3">
                Follow me
                <svg
                  viewBox="0 0 31 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-28 w-auto"
                >
                  <path
                    d="M0.356211 0.15918L11.9403 15.9382L0.283203 28.7673H2.90695L13.113 17.535L21.3588 28.7673H30.2869L18.0508 12.1009L28.9013 0.15918H26.2775L16.8786 10.5036L9.28432 0.15918H0.356211ZM4.21455 2.12784H8.31608L26.4281 26.7987H22.3265L4.21455 2.12784Z"
                    className="fill-current"
                  ></path>
                </svg>
              </div>
              <span className="relative z-3"></span>
              <div className="h-spray absolute inset-x-[7.5%] inset-y-0 media-fit z-3">
                <img src="/h-spray-l.png" alt="" />
              </div>
            </div>
          </a>
          <a
            href="https://t.me/mewsworld"
            rel="noopener noreferrer"
            target="_blank"
            className="btn inline-flex rounded-[1.15rem] s:rounded-[1.5rem] relative h-spray-t z-2"
          >
            <div className="btn__content flex items-center justify-center relative text-center overflow-hidden h-60 s:h-75 text-black z-2 before:absolute before:inset-0 before:border-[.5rem] s:before:border-[.7rem] before:border-current before:z-2 after:absolute after:inset-4 after:bg-pink-light after:rounded-inherit after:z-1">
              <div className="px-17 s:px-25 uppercase flex items-center gap-x-18 relative z-3">
                Follow me
                <svg
                  viewBox="0 0 38 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-30 w-auto"
                >
                  <path
                    d="M1.38121 14.5743C5.12359 12.4785 9.32147 10.7073 13.2221 8.93614C19.9584 6.04952 26.6947 3.19122 33.5379 0.548597C34.8744 0.0867375 37.2525 -0.351157 37.4941 1.66403C37.3615 4.49619 36.8526 7.32835 36.4783 10.1322C35.5695 16.3411 34.5002 22.524 33.4566 28.7046C33.108 30.7742 30.5696 31.8374 28.9401 30.5019C25.0373 27.8332 21.1346 25.1644 17.2853 22.4412C16.03 21.134 17.204 19.2561 18.3288 18.328C21.5366 15.1146 24.9304 12.363 27.9799 8.98625C28.8096 6.97106 26.376 8.65946 25.5741 9.17578C21.1902 12.2541 16.9132 15.522 12.2619 18.2452C9.90956 19.5785 7.1295 18.4348 4.77715 17.7006C2.66431 16.8291 -0.436521 15.9316 1.38121 14.57V14.5743Z"
                    className="fill-current"
                  ></path>
                </svg>
              </div>
              <span className="relative z-3"></span>
              <div className="h-spray absolute inset-x-[7.5%] inset-y-0 media-fit z-3">
                <img src="/h-spray-l.png" alt="" />
              </div>
            </div>
          </a>
          <img
            src="/paw.png"
            alt="Paw"
            className="relative s:absolute s:bottom-0 s:left-0 w-36 s:w-75 mt-5 s:mt-0 h-auto"
          />
          <img
            src="/paw.png"
            alt="Paw"
            className="hidden s:block absolute bottom-0 right-0 w-75 h-auto"
          />
        </div>
      </div>
      <div className="relative border-t-[.5rem] s:border-t-[.7rem] border-black py-30 s:py-60">
        <h3 className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-15 s:px-30 pb-[.2em] whitespace-nowrap text-center bg-white z-2">
          Total supply
        </h3>
        <div className="site-max">
          <div className="whitespace-nowrap title-xxl max-s:!text-45 text-center">
            88,888,888,888
          </div>
        </div>
      </div>
      <div className="relative flex flex-col s:flex-row">
        <div className="relative s:flex-1 s:shrink-0 relative border-t-[.5rem] s:border-t-[.7rem] s:border-r-[.35rem] border-black pt-30 s:pt-60">
          <h3 className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-15 s:px-30 pb-[.2em] bg-white z-2 whitespace-nowrap text-center">
            Burned LP
          </h3>
          <div className="site-max">
            <div className="whitespace-nowrap title-xxl text-center">90%</div>
          </div>
        </div>
        <div className="relative s:flex-1 s:shrink-0 relative border-t-[.5rem] s:border-t-[.7rem] s:border-l-[.35rem] border-black mt-40 s:mt-0 pt-30 s:pt-60">
          <h3 className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 s:px-30 pb-[.2em] bg-white z-2 s:whitespace-nowrap text-center max-s:min-w-[65%]">
            Airdrop to the Solana community
          </h3>
          <div className="site-max">
            <div className="whitespace-nowrap title-xxl text-center">10%</div>
          </div>
        </div>
      </div>
      <div className="site-max --s flex flex-col items-center text-center mt-20 s:-mt-50 relative z-2">
        <div className="w-[.5rem] bg-black h-40 s:hidden"></div>
        <div className="relative w-150 s:w-300 -mt-10 s:mt-0">
          <figure className="relative overflow-hiden will-change-transform">
            <div className="pt-[100%]"></div>
            <img
              src="/coin/image-1.png"
              alt=""
              className="absolute top-0 left-0 w-full h-full"
            />
            <canvas className="absolute top-0 left-0 w-full h-full z-2"></canvas>
          </figure>
        </div>
        <div className="title-m mb-10 mt-30 s:mb-20">Welcome to the</div>
        <div
          aria-label="Creative mewniverse"
          className="title-xxl flex flex-col items-center"
        >
          <div aria-hidden="true" className="inline-flex">
            Creative
          </div>
          <div aria-hidden="true" className="inline-flex relative pl-[.9em]">
            <span className="relative">
              uni
              <canvas className="absolute -top-5 s:-top-20 -left-10 s:-left-20 w-[calc(100%+2rem)] s:w-[calc(100%+4rem)] h-[calc(100%+2rem] s:h-[calc(100%+4rem)] pointer-events-none has-hover:pointer-events-auto translate-x-[-.9em]"></canvas>
            </span>
            verse
          </div>
        </div>
        <div className="title-m s:px-100 mt-20">
          one day i'll wake up from this dog world dream.
        </div>
        <a
          href="/creative"
          className="btn inline-flex rounded-[1.15rem] s:rounded-[1.5rem] relative h-spray-t z-2 mt-35 s:mt-40"
        >
          <div className="btn__content flex items-center justify-center relative text-center overflow-hidden h-60 s:h-75 text-black z-2 before:absolute before:inset-0 before:border-[.5rem] s:before:border-[.7rem] before:border-current before:z-2 after:absolute after:inset-4 after:bg-pink-light after:rounded-inherit after:z-1">
            <div className="px-17 s:px-25 uppercase flex items-center gap-x-18 relative z-3">
              Visit the Creative Universe
            </div>
            <span className="relative z-3"></span>
            <div className="h-spray absolute inset-x-[7.5%] inset-y-0 media-fit z-3">
              <img src="/h-spray-l.png" alt="" />
            </div>
          </div>
        </a>
      </div>
      <div className="relative -mx-140 mt-35 s:mt-90 rotate-[2deg] overflow-hidden">
        <div className="parallax relative flex justify-center gap-x-5 s:gap-x-25 py-8 s:py-25 bg-black">
          <div className="min-w-[25rem] s:min-w-[65rem] max-w-[25rem] s:max-w-[65rem] relative overflow-hidden radius-fix rounded-[1.15rem] s:rounded-[2rem]">
            <figure className="media relative media-fill" data-v-4a377300>
              <div className="pt-[70%]" data-v-4a377300></div>
              <img
                src="https://www.datocms-assets.com/133929/1723131960-moto-bike.jpg?auto=format%2Ccompress&fit=max&h=900&w=900"
                alt=""
                loading="lazy"
                decoding="async"
                draggable="false"
                className="media__image"
                data-v-4a377300
              />
            </figure>
          </div>
          <div className="min-w-[25rem] s:min-w-[65rem] max-w-[25rem] s:max-w-[65rem] relative overflow-hidden radius-fix rounded-[1.15rem] s:rounded-[2rem]">
            <figure className="media relative media-fill" data-v-4a377300>
              <div className="pt-[70%]" data-v-4a377300></div>
              <img
                src="https://www.datocms-assets.com/133929/1723137712-6-faces.jpg?auto=format%2Ccompress&fit=max&h=900&w=900"
                alt=""
                loading="lazy"
                decoding="async"
                draggable="false"
                className="media__image"
                data-v-4a377300
              />
            </figure>
          </div>
          <div className="min-w-[25rem] s:min-w-[65rem] max-w-[25rem] s:max-w-[65rem] relative overflow-hidden radius-fix rounded-[1.15rem] s:rounded-[2rem]">
            <figure className="media relative media-fill" data-v-4a377300>
              <div className="pt-[70%]" data-v-4a377300></div>
              <img
                src="https://www.datocms-assets.com/133929/1723138907-mew-wheel-2.jpg?auto=format%2Ccompress&fit=max&h=900&w=900"
                alt=""
                loading="lazy"
                decoding="async"
                draggable="false"
                className="media__image"
                data-v-4a377300
              />
            </figure>
          </div>
          <div className="min-w-[25rem] s:min-w-[65rem] max-w-[25rem] s:max-w-[65rem] relative overflow-hidden radius-fix rounded-[1.15rem] s:rounded-[2rem]">
            <figure className="media relative media-fill" data-v-4a377300>
              <div className="pt-[70%]" data-v-4a377300></div>
              <img
                src="https://www.datocms-assets.com/133929/1723137965-many-faces.jpg?auto=format%2Ccompress&fit=max&h=900&w=900"
                alt=""
                loading="lazy"
                decoding="async"
                draggable="false"
                className="media__image"
                data-v-4a377300
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DawnOfNewEra;
