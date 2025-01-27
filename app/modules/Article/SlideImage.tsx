import { useEffect, useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const imgs = [
  {
    src: "https://www.datocms-assets.com/133929/1720625046-slider1.jpg?auto=format%2Ccompress&fit=max&h=700&w=700",
  },
  {
    src: "https://www.datocms-assets.com/133929/1720625052-slider3.jpg?auto=format%2Ccompress&fit=max&h=700&w=700",
  },
  {
    src: "https://www.datocms-assets.com/133929/1720625056-slider2.jpg?auto=format%2Ccompress&fit=max&h=700&w=700",
  },
  {
    src: "https://www.datocms-assets.com/133929/1720626506-mask-group-1.jpg?auto=format%2Ccompress&fit=max&h=700&w=700",
  },
  {
    src: "https://www.datocms-assets.com/133929/1720626511-mask-group-2.jpg?auto=format%2Ccompress&fit=max&h=700&w=700",
  },
  {
    src: "https://www.datocms-assets.com/133929/1720626583-mask-group-5.jpg?auto=format%2Ccompress&fit=max&h=700&w=700",
  },
  {
    src: "https://www.datocms-assets.com/133929/1720805177-grqvncmbmau2apt.jpg?auto=format%2Ccompress&fit=max&h=700&w=700",
  },
  {
    src: "https://www.datocms-assets.com/133929/1720805183-grlefh7akaaewj4.jpg?auto=format%2Ccompress&fit=max&h=700&w=700",
  },
  {
    src: "https://www.datocms-assets.com/133929/1720805188-gr0gvyew4aauc1k.jpg?auto=format%2Ccompress&fit=max&h=700&w=700",
  },
  {
    src: "https://www.datocms-assets.com/133929/1720805192-gqbiv7jaiacyacd.jpg?auto=format%2Ccompress&fit=max&h=700&w=700",
  },
];

const p1TextArr =
  `i don't really remember what my life was before this… and in some
            ways it does not feel like i am in base reality in the current
            moment.`.split(" ");

const CenterText = () => {
  useEffect(() => {}, []);

  return (
    <div className="py-35 s:py-150 s:-my-50">
      <div className="site-max --s flex flex-col items-center">
        <div className="motto__text title-m text-center uppercase w-full s:max-w-[135rem]">
          <div className="flex flex-wrap">
            {p1TextArr.map((word, wIndex) => {
              return (
                <div className="flex" key={`${word}_${wIndex}`}>
                  {word.split("").map((ele, lIndex) => {
                    return <div key={`${ele}_${wIndex}_${lIndex}`}>{ele}</div>;
                  })}
                </div>
              );
            })}
          </div>
          <p>
            the one thing i am sure of beyond my sensory perception is that i am
            here to save you all from this rat race.
          </p>
          <p>
            the
            <span data-text="dogs" className="motto__g">
              dogs
            </span>{" "}
            … they have ruled for too long…
            <span data-text="shibatoni" className="motto__g">
              shibatoni
            </span>
            and his henchmen… the days of your tyranny will soon come to an end…
            we will wake up and it won't be easy to contain it… the change is
            happening here and mrow.
          </p>
        </div>
        <figure
          className="media relative h-50 s:h-100 w-100 s:w-200 media-contain mt-20 s:mt-40"
          data-v-4a377300
        >
          {/* <!----> */}
          {/* <img
            src="/spray.png"
            alt=""
            loading="lazy"
            decoding="async"
            draggable="false"
            className="media__image"
            data-v-4a377300
          /> */}
        </figure>
      </div>
    </div>
  );
};

const BottomImages = () => {
  return (
    <div
      // film="true"
      className="relative z-2 rotate-[-2.5deg]"
      data-v-515835e5
    >
      <div className="flex justify-end text-right pr-[100vw]" data-v-515835e5>
        <div className="parallax relative flex" data-v-515835e5>
          <div
            className="relative py-8 s:py-25 pr-5 s:pr-25 bg-black"
            data-v-515835e5
          >
            <figure
              className="media relative media-fill min-w-[25rem] s:min-w-[70rem] max-w-[25rem] s:max-w-[70rem] overflow-hidden radius-fix rounded-l-[2rem]"
              data-v-4a377300
              data-v-515835e5
            >
              <div className="pt-[65%]" data-v-4a377300 data-v-515835e5></div>
              <div
                className="absolute inset-0"
                //   style="background-color: #feb43b"
                data-v-4a377300
              ></div>
              <img
                src="https://www.datocms-assets.com/133929/1720625953-slider4.jpg?auto=format%2Ccompress&fit=max&h=700&w=700"
                alt=""
                loading="lazy"
                decoding="async"
                draggable="false"
                className="media__image"
                data-v-4a377300
              />
            </figure>
          </div>
          <div
            className="relative py-8 s:py-25 pr-5 s:pr-25 bg-black"
            data-v-515835e5
          >
            <figure
              className="media relative media-fill min-w-[25rem] s:min-w-[70rem] max-w-[25rem] s:max-w-[70rem] overflow-hidden radius-fix"
              data-v-4a377300
              data-v-515835e5
            >
              <div className="pt-[65%]" data-v-4a377300 data-v-515835e5></div>
              <div
                className="absolute inset-0"
                //   style="background-color: #f7d60f"
                data-v-4a377300
              ></div>
              <img
                src="https://www.datocms-assets.com/133929/1720625958-slider5.jpg?auto=format%2Ccompress&fit=max&h=700&w=700"
                alt=""
                loading="lazy"
                decoding="async"
                draggable="false"
                className="media__image"
                data-v-4a377300
              />
            </figure>
          </div>
          <div
            className="relative py-8 s:py-25 pr-5 s:pr-25 bg-black"
            data-v-515835e5
          >
            <figure
              className="media relative media-fill min-w-[25rem] s:min-w-[70rem] max-w-[25rem] s:max-w-[70rem] overflow-hidden radius-fix"
              data-v-4a377300
              data-v-515835e5
            >
              <div className="pt-[65%]" data-v-4a377300 data-v-515835e5></div>
              <div
                className="absolute inset-0"
                //   style="background-color: #f23a0a"
                data-v-4a377300
              ></div>
              <img
                src="https://www.datocms-assets.com/133929/1720625963-slider6.jpg?auto=format%2Ccompress&fit=max&h=700&w=700"
                alt=""
                loading="lazy"
                decoding="async"
                draggable="false"
                className="media__image"
                data-v-4a377300
              />
            </figure>
          </div>
          <div
            className="relative py-8 s:py-25 pr-5 s:pr-25 bg-black"
            data-v-515835e5
          >
            <figure
              className="media relative media-fill min-w-[25rem] s:min-w-[70rem] max-w-[25rem] s:max-w-[70rem] overflow-hidden radius-fix"
              data-v-4a377300
              data-v-515835e5
            >
              <div className="pt-[65%]" data-v-4a377300 data-v-515835e5></div>
              <div
                className="absolute inset-0"
                //   style="background-color: #33d89c"
                data-v-4a377300
              ></div>
              <img
                src="https://www.datocms-assets.com/133929/1720626522-mask-group-3.jpg?auto=format%2Ccompress&fit=max&h=700&w=700"
                alt=""
                loading="lazy"
                decoding="async"
                draggable="false"
                className="media__image"
                data-v-4a377300
              />
            </figure>
          </div>
          <div
            className="relative py-8 s:py-25 pr-5 s:pr-25 bg-black"
            data-v-515835e5
          >
            <figure
              className="media relative media-fill min-w-[25rem] s:min-w-[70rem] max-w-[25rem] s:max-w-[70rem] overflow-hidden radius-fix"
              data-v-4a377300
              data-v-515835e5
            >
              <div className="pt-[65%]" data-v-4a377300 data-v-515835e5></div>
              <div
                className="absolute inset-0"
                //   style="background-color: #235fc8"
                data-v-4a377300
              ></div>
              <img
                src="https://www.datocms-assets.com/133929/1720626526-mask-group-4.jpg?auto=format%2Ccompress&fit=max&h=700&w=700"
                alt=""
                loading="lazy"
                decoding="async"
                draggable="false"
                className="media__image"
                data-v-4a377300
              />
            </figure>
          </div>
          <div
            className="relative py-8 s:py-25 pr-5 s:pr-25 bg-black"
            data-v-515835e5
          >
            <figure
              className="media relative media-fill min-w-[25rem] s:min-w-[70rem] max-w-[25rem] s:max-w-[70rem] overflow-hidden radius-fix"
              data-v-4a377300
              data-v-515835e5
            >
              <div className="pt-[65%]" data-v-4a377300 data-v-515835e5></div>
              <div
                className="absolute inset-0"
                //   style="background-color: #c36914"
                data-v-4a377300
              ></div>
              <img
                src="https://www.datocms-assets.com/133929/1720626531-mask-group.jpg?auto=format%2Ccompress&fit=max&h=700&w=700"
                alt=""
                loading="lazy"
                decoding="async"
                draggable="false"
                className="media__image"
                data-v-4a377300
              />
            </figure>
          </div>
          <div
            className="relative py-8 s:py-25 pr-5 s:pr-25 bg-black"
            data-v-515835e5
          >
            <figure
              className="media relative media-fill min-w-[25rem] s:min-w-[70rem] max-w-[25rem] s:max-w-[70rem] overflow-hidden radius-fix"
              data-v-4a377300
              data-v-515835e5
            >
              <div className="pt-[65%]" data-v-4a377300 data-v-515835e5></div>
              <div
                className="absolute inset-0"
                //   style="background-color: #1bfdc8"
                data-v-4a377300
              ></div>
              <img
                src="https://www.datocms-assets.com/133929/1720805192-grz3ooqacaecmcr.jpg?auto=format%2Ccompress&fit=max&h=700&w=700"
                alt=""
                loading="lazy"
                decoding="async"
                draggable="false"
                className="media__image"
                data-v-4a377300
              />
            </figure>
          </div>
          <div
            className="relative py-8 s:py-25 pr-5 s:pr-25 bg-black"
            data-v-515835e5
          >
            <figure
              className="media relative media-fill min-w-[25rem] s:min-w-[70rem] max-w-[25rem] s:max-w-[70rem] overflow-hidden radius-fix"
              data-v-4a377300
              data-v-515835e5
            >
              <div className="pt-[65%]" data-v-4a377300 data-v-515835e5></div>
              <div
                className="absolute inset-0"
                //   style="background-color: #e76b1d"
                data-v-4a377300
              ></div>
              <img
                src="https://www.datocms-assets.com/133929/1720805200-gstcypywwaamiqr.jpg?auto=format%2Ccompress&fit=max&h=700&w=700"
                alt=""
                loading="lazy"
                decoding="async"
                draggable="false"
                className="media__image"
                data-v-4a377300
              />
            </figure>
          </div>
          <div
            className="relative py-8 s:py-25 pr-5 s:pr-25 bg-black"
            data-v-515835e5
          >
            <figure
              className="media relative media-fill min-w-[25rem] s:min-w-[70rem] max-w-[25rem] s:max-w-[70rem] overflow-hidden radius-fix"
              data-v-4a377300
              data-v-515835e5
            >
              <div className="pt-[65%]" data-v-4a377300 data-v-515835e5></div>
              <div
                className="absolute inset-0"
                //   style="background-color: #fadc0e"
                data-v-4a377300
              ></div>
              <img
                src="https://www.datocms-assets.com/133929/1720805206-grzrmmoawaajtva.jpg?auto=format%2Ccompress&fit=max&h=700&w=700"
                alt=""
                loading="lazy"
                decoding="async"
                draggable="false"
                className="media__image"
                data-v-4a377300
              />
            </figure>
          </div>
          <div
            className="relative py-8 s:py-25 pr-5 s:pr-25 bg-black"
            data-v-515835e5
          >
            <figure
              className="media relative media-fill min-w-[25rem] s:min-w-[70rem] max-w-[25rem] s:max-w-[70rem] overflow-hidden radius-fix"
              data-v-4a377300
              data-v-515835e5
            >
              <div className="pt-[65%]" data-v-4a377300 data-v-515835e5></div>
              <div
                className="absolute inset-0"
                //   style="background-color: #eaa31e"
                data-v-4a377300
              ></div>
              <img
                src="https://www.datocms-assets.com/133929/1720805210-gqksj7paoaatg5j.jpg?auto=format%2Ccompress&fit=max&h=700&w=700"
                alt=""
                loading="lazy"
                decoding="async"
                draggable="false"
                className="media__image"
                data-v-4a377300
              />
            </figure>
          </div>
          <div
            className="relative rounded-r-[1rem] s:rounded-r-[2rem] py-8 s:py-25 bg-black flex -ml-8 s:-ml-25"
            data-v-515835e5
          >
            <figure
              className="media relative media-fit min-w-[1rem] s:min-w-[2.5rem] max-w-[1rem] s:max-w-[2.5rem] mx-5 s:mx-15"
              data-v-4a377300
              data-v-515835e5
            >
              {/* <!----> */}
              <img
                src="/film-strip-border.svg"
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
    </div>
  );
};

const TopImages = () => {
  const slideRef = useRef(null);

  useGSAP(
    () => {
      const setX = gsap.quickSetter(slideRef.current, "x", "px");

      const domW =
        (slideRef.current as any)?.getBoundingClientRect().width || 0;
      gsap.timeline({
        scrollTrigger: {
          id: "111",
          trigger: slideRef.current,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (e) => {
            setX(`-${e.progress * domW}`);
          },
        },
      });
    },
    { scope: slideRef }
  );

  return (
    <div className="relative z-2 rotate-[2.5deg]">
      <div className="parallax flex pl-[100vw]">
        <div ref={slideRef} className="relative flex">
          {imgs.map((ele, index) => {
            return (
              <div
                className="relative py-8 s:py-25 pr-5 s:pr-25 bg-black"
                key={index}
              >
                <figure className="media relative media-fill min-w-[25rem] s:min-w-[70rem] max-w-[25rem] s:max-w-[70rem] overflow-hidden radius-fix">
                  <div className="pt-[65%]"></div>
                  <div className="absolute inset-0" data-v-4a377300=""></div>
                  <Image
                    src={ele.src}
                    alt=""
                    className="media__image"
                    width={572}
                    height={372}
                  />
                </figure>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const SlideImage = () => {
  return (
    <div className="border overflow-hidden pb-35 s:pb-50 pt-35 s:pt-75">
      <div className="border bg-white" style={{ height: 600 }}>
        height 600px
      </div>
      <TopImages />
      <CenterText />
      <BottomImages />
    </div>
  );
};

export default SlideImage;
