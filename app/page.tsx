import Image from "next/image";
import spray from "./source/spray.png";

import "./header.css";

// 动态的来源 各种各样的动画

const Header = () => {
  return (
    <div className="bg-red w-full relative site-max border">
      {/* header */}
      {/* 1. fixed logo  */}
      <div className="h-75 s:h-110 font-main title-m pl-75 s:pl-110">
        cat in a dogs world
      </div>
      {/* 2. 菜单  */}
      <div className="fixed left-0 top-0  flex items-center  justify-between w-full site-max h-75 s:h-110">
        <Image
          width={100}
          height={100}
          className="size-90"
          src={"https://mew.xyz/logo-head.svg"}
          alt={"logo"}
        />
        <div className="flex items-center">
          <div className="btn inline-flex items-start rounded-[1.5rem] relative h-spray-t h-75 cursor-pointer z-2 origin-bottom">
            <div
              className="btn__content overflow-hidden relative text-black z-2 before:pointer-events-none before:absolute before:inset-0 before:border-[.7rem] before:z-3 before:border-current after:absolute after:inset-5 after:bg-pink-light after:z-1"
              style={{ height: "7.5rem" }}
            >
              {/* todo  */}
              <div
                style={{ height: "7.5rem" }}
                className="px-25 flex items-center font-main bg-pink-light"
              >
                Ecosystem
              </div>
            </div>
          </div>
          <div>btn</div>
        </div>
        {/* <nav className="flex items-center gap-x-20">
          <div>
            <div>Ecosystem</div>
          </div>
          <div></div>
        </nav> */}
      </div>
      {/* 3. -1层 dom todo   */}
      <div></div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="relative w-full">
      <Header />
      <article>
        <div className="font-main">
          <h1 aria-label="mew" className="bg-red relative site-max py-15 ">
            <div
              style={{}}
              className="mew-mask bg-black relative overflow-hidden js-i-mew-ref"
            >
              {/*  */}
              <div className="pt-[31%]"></div>
              {/* <div></div> */}
            </div>
          </h1>
          <h2 className="bg-red  flex flex-col s:flex-row max-s:items-center s:justify-between">
            <div className="title font-main text-center s:text-left s:max-w-[45rem] max-s:whitespace-nowrap js-i-split">
              <div>for too</div>
              <div>long dogs</div>
            </div>
            <div className="title text-center s:text-left s:max-w-[45rem] max-s:whitespace-nowrap js-i-split">
              <div>have ruled</div>
              <div>the world</div>
            </div>
          </h2>
          {/* mew && 猫猫狗狗打架canvas */}
          <div className="bg-red site-max s:flex items-center justify-between pt-20 pb-25">
            <div className="">
              <div>the revolution</div>
              <div>has begun</div>
            </div>
            <div className="flex gap-x-60">
              <div>ins</div>
              <div>x</div>
              <div>t</div>
            </div>
            {/* 猫猫狗狗打架 */}
            <div>
              <canvas />
            </div>
          </div>
          {/* 小猫看视频 */}
          <div className="bg-red">
            <canvas />
            <div className="font-main title-xxl text-center">
              <span>I have identified the strong holds</span>
            </div>
          </div>
          {/* 斜着的胶卷照片 */}
          <section className="bg-red ">
            <div
              style={{ lineHeight: ".975" }}
              className="motto__text site-max title-m text-center s:max-w-[135rem]"
            >
              <p>
                i don’t really remember what my life was before this… and in
                some ways it does not feel like i am in base reality in the
                current moment.
              </p>
              <p>
                the one thing i am sure of beyond my sensory perception is that
                i am here to save you all from this rat race.
              </p>
              <p>
                {`the `}
                <span className="motto-g" data-text="dogs">
                  dogs
                </span>
                … they have ruled for too long…
                <span className="motto-g" data-text="shibatoni">
                  {` shibatoni `}
                </span>
                and his henchmen… the days of your tyranny will soon come to an
                end… we will wake up and it won’t be easy to contain it… the
                change is happening here and mrow.
              </p>
              <div>
                {/* // https://mew.xyz/spray.png
                 */}
                <figure className="flex justify-center">
                  <Image src={spray} width={100} height={100} alt="image" />
                </figure>
              </div>
            </div>
          </section>

          <section className="site-max">
            {/* text */}
            <div className="site-max">
              <h2 className="title-xxl text-center">
                it’s the dawn of a<span>{/* todo */}N</span>
                EW era
              </h2>
            </div>
            {/*  猫爪子 */}
            <div className="site-max --xs border">
              <div className="flex justify-center gap-y-15 s:gap-y-0 gap-x-40 pt-45 pb-30 s:pb-70">
                <button className="border">follow me x</button>
                <button className="border">follow me t</button>
              </div>
            </div>
            {/* 88888888 */}
            <div className="relative border-t-[.5rem] s:border-t-[.7rem] border-black py-30 s:py-60">
              <h3 className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-15 s:px-30 pb-[.2em] whitespace-nowrap text-center bg-white z-2">
                Total supply
              </h3>
              <div className="site-max">
                <div
                  style={{
                    lineHeight: ".95",
                  }}
                  className="whitespace-nowrap title-xxl max-s:!text-45 text-center"
                >
                  88,888,888,888
                </div>
              </div>
            </div>
            {/* 90% 10% */}
            <div className="relative flex flex-col s:flex-row">
              {/* 90% */}
              <div className="relative s:flex-1 s:shrink-0 border-t-[.5rem] s:border-t-[.7rem] s:border-r-[.35rem] border-black pt-30 s:pt-60">
                <h3 className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-15 s:px-30 pb-[.2em] bg-white z-2 whitespace-nowrap text-center">
                  Burned LP
                </h3>
                <div className="site-max">
                  <div
                    style={{
                      lineHeight: ".95",
                    }}
                    className="whitespace-nowrap title-xxl text-center"
                  >
                    90%
                  </div>
                </div>
              </div>
              {/* 10% */}
              <div className="relative s:flex-1 s:shrink-0 border-t-[.5rem] s:border-t-[.7rem]  border-black pt-30 s:pt-60">
                <h3 className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-15 s:px-30 pb-[.2em] bg-white z-2 whitespace-nowrap text-center">
                  Burned LP
                </h3>
                <div className="site-max">
                  <div
                    style={{
                      lineHeight: ".95",
                    }}
                    className="whitespace-nowrap title-xxl text-center"
                  >
                    90%
                  </div>
                </div>
              </div>
              {/* 红色圆形转圈圈 */}
            </div>
            {/* 猫猫头 logo  */}
            <div className="site-max --s flex flex-col items-center text-center mt-20 s:-mt-50 relative z-2">
              <div className="title-m mb-10 mt-30 s:mb-20">Welcome to the</div>
              <div
                aria-label="Creative mewniverse"
                className="title-xxl flex flex-col items-center"
              >
                <div aria-hidden="true" className="inline-flex">
                  Creative
                </div>{" "}
                <div
                  aria-hidden="true"
                  className="inline-flex relative pl-[.9em]"
                >
                  <span className="relative">
                    uni
                    {/* <canvas
                      className="absolute -top-5 s:-top-20 -left-10 s:-left-20 w-[calc(100%+2rem)] s:w-[calc(100%+4rem)] h-[calc(100%+2rem] s:h-[calc(100%+4rem)] pointer-events-none has-hover:pointer-events-auto translate-x-[-.9em]"
                      width="334"
                      height="178"
                    ></canvas> */}
                  </span>
                  verse
                </div>
              </div>
              <div className="title-m s:px-100 mt-20">
                one day i’ll wake up from this dog world dream.
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
                    {/* <img src="/h-spray-l.png" alt=""> */}
                  </div>
                </div>
              </a>
            </div>
            {/* 横着不动的胶片 */}
            <div className="relative -mx-140 mt-35 s:mt-90 rotate-[2deg] overflow-hidden">
              <div className="parallax relative flex justify-center gap-x-5 s:gap-x-25 py-8 s:py-25 bg-black">
                <div className="bg-pink-light booder min-w-[25rem] s:min-w-[65rem] max-w-[25rem] s:max-w-[65rem] relative overflow-hidden radius-fix rounded-[1.15rem] s:rounded-[2rem]">
                  <figure
                    data-v-4a377300=""
                    className="media relative media-fill"
                  >
                    <div data-v-4a377300="" className="pt-[70%]"></div>
                    {/* <img data-v-4a377300="" src="" alt="" loading="lazy" decoding="async" draggable="false" className="media__image is-loaded"> */}
                  </figure>
                </div>
                <div className="bg-pink-light booder min-w-[25rem] s:min-w-[65rem] max-w-[25rem] s:max-w-[65rem] relative overflow-hidden radius-fix rounded-[1.15rem] s:rounded-[2rem]">
                  <figure
                    data-v-4a377300=""
                    className="media relative media-fill"
                  >
                    <div data-v-4a377300="" className="pt-[70%]"></div>
                    {/* <img data-v-4a377300="" src="" alt="" loading="lazy" decoding="async" draggable="false" className="media__image is-loaded"> */}
                  </figure>
                </div>
                <div className="bg-pink-light booder min-w-[25rem] s:min-w-[65rem] max-w-[25rem] s:max-w-[65rem] relative overflow-hidden radius-fix rounded-[1.15rem] s:rounded-[2rem]">
                  <figure
                    data-v-4a377300=""
                    className="media relative media-fill"
                  >
                    <div data-v-4a377300="" className="pt-[70%]"></div>
                    {/* <img data-v-4a377300="" src="" alt="" loading="lazy" decoding="async" draggable="false" className="media__image is-loaded"> */}
                  </figure>
                </div>
                <div className="bg-pink-light booder min-w-[25rem] s:min-w-[65rem] max-w-[25rem] s:max-w-[65rem] relative overflow-hidden radius-fix rounded-[1.15rem] s:rounded-[2rem]">
                  <figure
                    data-v-4a377300=""
                    className="media relative media-fill"
                  >
                    <div data-v-4a377300="" className="pt-[70%]"></div>
                    {/* <img data-v-4a377300="" src="" alt="" loading="lazy" decoding="async" draggable="false" className="media__image is-loaded"> */}
                  </figure>
                </div>
              </div>
            </div>
          </section>

          {/* 横着不动胶片加一 */}
          <section className="relative overflow-hidden pt-40 s:pt-150 pb-40 s:pb-50 z-3">
            <div className="site-max --s text-center flex flex-col items-center">
              <h2 className="title-xxl relative whitespace-nowrap">
                <div>Mew Tales</div>
                {/* <div className="title-spray absolute -top-5 s:-top-20 right-35 s:right-190 text-right rotate-[-3deg] z-2">
                  Tails
                </div> */}
              </h2>
              <h3 className="title-m s:px-100 mt-20">
                Nothings perfect... the worlds not perfect... but it's there for
                us trying the best it can... that's what makes it so
                beautiful...
              </h3>
              <a
                href="/tails"
                className="btn inline-flex rounded-[1.15rem] s:rounded-[1.5rem] relative h-spray-t z-2 mt-35 s:mt-40"
              >
                <div className="btn__content flex items-center justify-center relative text-center overflow-hidden h-60 s:h-75 text-black z-2 before:absolute before:inset-0 before:border-[.5rem] s:before:border-[.7rem] before:border-current before:z-2 after:absolute after:inset-4 after:bg-pink-light after:rounded-inherit after:z-1">
                  <div className="px-17 s:px-25 uppercase flex items-center gap-x-18 relative z-3">
                    Check out more Mew Tails
                  </div>
                  <span className="relative z-3"></span>
                  <div className="h-spray absolute inset-x-[7.5%] inset-y-0 media-fit z-3">
                    {/* <img src="/h-spray-l.png" alt=""> */}
                  </div>
                </div>
              </a>
            </div>
            <div className="relative overflow-hidden rotate-[-2.5deg] -mx-50 mt-70 s:mt-90">
              <div className="parallax relative flex justify-center gap-x-5 s:gap-x-25 py-8 s:py-25 bg-black">
                <div className="bg-pink-light relative min-w-[20rem] s:min-w-[45rem] max-w-[20rem] s:max-w-[45rem] relative overflow-hidden radius-fix rounded-[1.15rem] s:rounded-[2rem]">
                  <figure
                    data-v-4a377300=""
                    className="media relative media-fill"
                  >
                    <div data-v-4a377300="" className="pt-[100%]"></div>
                    {/* <img data-v-4a377300="" src="https://www.datocms-assets.com/133929/1721246811-fighting1notext.jpg?auto=format%2Ccompress&amp;fit=max&amp;h=900&amp;w=900" alt="" loading="lazy" decoding="async" draggable="false" className="media__image is-loaded"> */}
                  </figure>
                </div>
                <div className="bg-pink-light relative min-w-[20rem] s:min-w-[45rem] max-w-[20rem] s:max-w-[45rem] relative overflow-hidden radius-fix rounded-[1.15rem] s:rounded-[2rem]">
                  <figure
                    data-v-4a377300=""
                    className="media relative media-fill"
                  >
                    <div data-v-4a377300="" className="pt-[100%]"></div>
                    {/* <img data-v-4a377300="" src="https://www.datocms-assets.com/133929/1721246817-fresh-perspective1-notext.jpg?auto=format%2Ccompress&amp;fit=max&amp;h=900&amp;w=900" alt="" loading="lazy" decoding="async" draggable="false" className="media__image is-loaded"> */}
                  </figure>
                </div>
                <div className="bg-pink-light relative min-w-[20rem] s:min-w-[45rem] max-w-[20rem] s:max-w-[45rem] relative overflow-hidden radius-fix rounded-[1.15rem] s:rounded-[2rem]">
                  <figure
                    data-v-4a377300=""
                    className="media relative media-fill"
                  >
                    <div data-v-4a377300="" className="pt-[100%]"></div>
                    {/* <img data-v-4a377300="" src="https://www.datocms-assets.com/133929/1721246822-fresh-perspective3-notext.jpg?auto=format%2Ccompress&amp;fit=max&amp;h=900&amp;w=900" alt="" loading="lazy" decoding="async" draggable="false" className="media__image is-loaded"> */}
                  </figure>
                </div>
                <div className="bg-pink-light relative min-w-[20rem] s:min-w-[45rem] max-w-[20rem] s:max-w-[45rem] relative overflow-hidden radius-fix rounded-[1.15rem] s:rounded-[2rem]">
                  <figure
                    data-v-4a377300=""
                    className="media relative media-fill"
                  >
                    <div data-v-4a377300="" className="pt-[100%]"></div>
                  </figure>
                </div>
              </div>
            </div>
          </section>

          {/*  */}
          <section className="relative bg-black text-white pt-70 s:pt-200 -mt-50 s:-mt-100">
            <div className="site-max --s text-center">
              <h2 className="title-xxl">MEW APP</h2>
              <h2 className="title-m mt-15 s:mt-0">
                if we work together we can finally escape their world.
              </h2>
            </div>
            <div className="site-max --s flex flex-col s:flex-row s:mt-95 s:gap-x-140">
              <div className="flex-1 relative z-2 s:-mt-300 s:order-2">
                <div className="pt-[125%]"></div>
                <canvas className="absolute top-0 left-0 w-full h-full"></canvas>
              </div>
              <div className="w-full s:max-w-[63rem] s:order-1 mt-25 s:mt-85">
                <div className="txt">
                  <p>
                    Watch, play, learn--and earn! The MEW app will be your one
                    stop shop for all things Cat in a Dogs World.
                  </p>
                </div>
                <button
                  type="button"
                  className="btn inline-flex rounded-[1.15rem] s:rounded-[1.5rem] relative h-spray-t z-2 mt-20 ml-[-.7rem]"
                >
                  <div className="btn__content flex items-center justify-center relative text-center overflow-hidden h-60 s:h-75 text-black z-2 before:absolute before:inset-0 before:border-[.5rem] s:before:border-[.7rem] before:border-current before:z-2 after:absolute after:inset-4 after:bg-pink-light after:rounded-inherit after:z-1">
                    <div className="px-17 s:px-25 uppercase flex items-center gap-x-18 relative z-3">
                      Coming soon
                    </div>
                    <span className="relative z-3"></span>
                    <div className="h-spray absolute inset-x-[7.5%] inset-y-0 media-fit z-3">
                      {/* <img src="/h-spray-l.png" alt="" /> */}
                    </div>
                  </div>
                </button>
                <figure className="relative mt-25">
                  {/* <img
                      src="/powered-by-sol.svg"
                      alt="Powered by Solana"
                      class="h-45 w-auto"
                    /> */}
                </figure>
              </div>
            </div>
          </section>
          <section className="relative bg-black text-white pt-60 s:pt-100">
            <div className="relative overflow-hidden">
              <hr className="border-t-[.7rem] border-red" />
              <div className="flex justify-center gap-x-50 s:gap-x-90 py-20">
                <div className="whitespace-nowrap title-xxl text-white uppercase">
                  <span>Media</span>
                </div>
                <div className="whitespace-nowrap title-xxl text-white uppercase">
                  <span>
                    M
                    <span className="relative">
                      ed
                      <canvas className="absolute -top-15 s:-top-20 -left-15 s:-left-20 w-[calc(100%+3rem)] h-[calc(100%+3rem)] s:w-[calc(100%+4rem)] s:h-[calc(100%+4rem)] pointer-events-none has-hover:pointer-events-auto scale-[.85]"></canvas>
                    </span>
                    ia
                  </span>
                </div>
                <div className="whitespace-nowrap title-xxl text-white uppercase">
                  <span>Media</span>
                </div>
              </div>
              <hr className="border-t-[.7rem] border-red" />
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
