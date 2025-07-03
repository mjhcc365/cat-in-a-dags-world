import Image from "next/image";
const Mew = () => {
  return (
    <>
      <h1 aria-label="Mew" className="relative site-max py-15">
        <div className="mew-mask bg-black relative overflow-hidden js-i-mew-ref">
          <div className="pt-[31%]"></div>
          <figure
            className="media hidden s:block absolute bottom-40 left-135 w-300 media-fit js-shibatoni"
            data-v-4a377300
          >
            <div className="pt-[90%]" data-v-4a377300></div>
            <Image
              src="https://mew.xyz/shibatoni.png"
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
      </h1>
      <h2
        aria-label="For too long dogs have ruled the world"
        className="site-max flex flex-col s:flex-row max-s:items-center s:justify-between"
      >
        <div
          aria-hidden="true"
          className="title text-center s:text-left s:max-w-[45rem] max-s:whitespace-nowrap js-i-split"
        >
          For too long dogs
        </div>
        <div
          aria-hidden="true"
          className="title text-center s:text-right s:max-w-[45rem] max-s:whitespace-nowrap js-i-split"
        >
          have ruled the world
        </div>
      </h2>
      <div className="site-max hidden s:flex items-center justify-between pt-20 pb-25">
        <button
          type="button"
          className="flex items-center gap-x-10 text-left h-spray-t"
        >
          <figure className="relative js-i-up">
            <Image
              src="https://mew.xyz/arrow-dark.png"
              className="h-40 w-auto"
              width={100}
              height={100}
            />
            <div className="h-spray absolute -inset-x-10 inset-y-0 media-contain z-2">
              <Image src="/h-spray-s-light.png" width={100} height={100} />
            </div>
          </figure>
          <span className="text-16 uppercase leading-none js-i-split">
            the revolution
            <br />
            has begun
          </span>
        </button>
        <div className="flex gap-x-60">
          <a
            href="https://www.instagram.com/catinadogsworld/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex relative h-spray-t js-i-up"
          >
            <svg
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-30 w-auto"
            >
              <path
                d="M8.80445 30.0084C7.20841 29.9331 6.11848 29.6784 5.16566 29.304C4.17953 28.9197 3.34371 28.4039 2.51209 27.5693C1.68047 26.7347 1.16836 25.8983 0.786746 24.9107C0.417436 23.9558 0.16723 22.865 0.0967279 21.268C0.0262261 19.6711 0.0106257 19.1578 0.0184259 15.0843C0.0262261 11.0109 0.0442266 10.5003 0.121629 8.90004C0.197831 7.30432 0.451637 6.2147 0.826047 5.26159C1.21096 4.27547 1.72607 3.43996 2.56099 2.60804C3.39591 1.77613 4.23173 1.26522 5.22176 0.883015C6.17578 0.514309 7.26691 0.262905 8.86355 0.193005C10.4602 0.123104 10.9741 0.106903 15.0464 0.114704C19.1187 0.122503 19.6314 0.140505 21.2314 0.216406C22.8313 0.292307 23.9152 0.547911 24.8687 0.920517C25.8548 1.30632 26.6909 1.82053 27.5222 2.65574C28.3536 3.49096 28.8654 4.32797 29.2467 5.31618C29.6163 6.2702 29.8674 7.36132 29.9367 8.95674C30.0066 10.5579 30.0231 11.0691 30.0153 15.1419C30.0075 19.2148 29.9892 19.7254 29.9133 21.325C29.8374 22.9247 29.5833 24.011 29.2092 24.9647C28.8237 25.9508 28.3092 26.7857 27.4745 27.6182C26.6399 28.4507 25.8023 28.9623 24.8144 29.3427C23.8597 29.712 22.7692 29.9637 21.1726 30.0327C19.5759 30.1017 19.062 30.1194 14.9882 30.1116C10.9144 30.1038 10.4044 30.0864 8.80445 30.0084ZM8.97966 2.89155C7.51712 2.95515 6.723 3.19815 6.19378 3.40156C5.49297 3.67156 4.99375 3.99796 4.46634 4.52027C3.93893 5.04258 3.61492 5.54359 3.34131 6.2429C3.13581 6.77211 2.8883 7.56532 2.8199 9.02784C2.7455 10.6086 2.7299 11.0832 2.7212 15.0879C2.7125 19.0927 2.7278 19.5667 2.7971 21.148C2.8595 22.6094 3.10401 23.4044 3.30711 23.9333C3.57712 24.635 3.90233 25.1333 4.42584 25.6604C4.94935 26.1875 5.44886 26.5121 6.14878 26.7857C6.6774 26.9921 7.47062 27.2375 8.93256 27.3071C10.5145 27.3821 10.9885 27.3971 14.9927 27.4058C18.9969 27.4145 19.4721 27.3995 21.0547 27.3299C22.516 27.2663 23.3113 27.0242 23.8396 26.8199C24.5408 26.5499 25.0397 26.2256 25.5668 25.7012C26.0939 25.1768 26.4188 24.6791 26.6924 23.9777C26.8991 23.4506 27.1445 22.6577 27.2135 21.1948C27.2888 19.6129 27.3059 19.1386 27.3131 15.1347C27.3203 11.1309 27.3062 10.6554 27.2369 9.07464C27.173 7.61212 26.9306 6.81771 26.7269 6.2879C26.4569 5.58739 26.1314 5.08788 25.6076 4.56108C25.0838 4.03427 24.5849 3.70966 23.8846 3.43606C23.3566 3.22995 22.5625 2.98395 21.1018 2.91435C19.5198 2.83995 19.0458 2.82435 15.0401 2.81565C11.0344 2.80695 10.5619 2.82315 8.97996 2.89155M21.2083 23.1302C21.2101 22.1359 22.0171 21.3313 23.0113 21.3331C24.0055 21.3349 24.8102 22.1419 24.8084 23.1362C24.8066 24.1304 23.9995 24.935 23.0053 24.9332C23.0053 24.9332 23.005 24.9332 23.0047 24.9332C22.0108 24.9311 21.2065 24.1241 21.2083 23.1302ZM7.31491 15.0981C7.32331 10.8441 10.7782 7.40332 15.0314 7.41142C19.2846 7.41952 22.7278 10.8741 22.7197 15.1281C22.7116 19.3822 19.2558 22.8239 15.002 22.8155C10.7482 22.8071 7.30681 19.3516 7.31491 15.0981ZM10.0168 15.1035C10.0114 17.8651 12.2455 20.1082 15.0071 20.1136C17.7687 20.119 20.0118 17.8849 20.0172 15.1233C20.0226 12.3618 17.7885 10.1187 15.0269 10.1133C12.2656 10.1076 10.0225 12.3411 10.0168 15.1023V15.1035Z"
                className="fill-current"
              ></path>
            </svg>
            <div className="h-spray absolute -inset-x-10 inset-y-0 media-contain z-2">
              <Image src="/h-spray-s-light.png" width={100} height={100} />
            </div>
          </a>
          <a
            href="https://x.com/mew"
            target="_blank"
            rel="noreferrer"
            className="inline-flex relative h-spray-t js-i-up"
          >
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
            <div className="h-spray absolute -inset-x-10 inset-y-0 media-contain z-2">
              <Image src="/h-spray-s-light.png" width={100} height={100} />
            </div>
          </a>
          <a
            href="https://t.me/mewsworld"
            target="_blank"
            rel="noreferrer"
            className="inline-flex relative h-spray-t js-i-up"
          >
            <svg
              viewBox="0 0 38 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-28 w-auto"
            >
              <path
                d="M1.38121 14.5743C5.12359 12.4785 9.32147 10.7073 13.2221 8.93614C19.9584 6.04952 26.6947 3.19122 33.5379 0.548597C34.8744 0.0867375 37.2525 -0.351157 37.4941 1.66403C37.3615 4.49619 36.8526 7.32835 36.4783 10.1322C35.5695 16.3411 34.5002 22.524 33.4566 28.7046C33.108 30.7742 30.5696 31.8374 28.9401 30.5019C25.0373 27.8332 21.1346 25.1644 17.2853 22.4412C16.03 21.134 17.204 19.2561 18.3288 18.328C21.5366 15.1146 24.9304 12.363 27.9799 8.98625C28.8096 6.97106 26.376 8.65946 25.5741 9.17578C21.1902 12.2541 16.9132 15.522 12.2619 18.2452C9.90956 19.5785 7.1295 18.4348 4.77715 17.7006C2.66431 16.8291 -0.436521 15.9316 1.38121 14.57V14.5743Z"
                className="fill-current"
              ></path>
            </svg>
            <div className="h-spray absolute -inset-x-10 inset-y-0 media-contain z-2">
              <Image src="/h-spray-s-light.png" width={100} height={100} />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Mew;
