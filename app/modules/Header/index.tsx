import React, { useState } from "react";
import Logo from "./Logo";
import Image from "next/image";
import HSprayS from "../../source/h-spray-s.png";

/** Cat in a dogs world */
const HeaderBackText = () => {
  return (
    <header className="sh relative w-full z-4 js-sh text-black">
      <div className="relative overflow-hidden">
        <div className="sh__bg absolute inset-0 bg-red"></div>{" "}
        <div className="site-max relative flex items-center h-75 s:h-110 z-2">
          <button
            type="button"
            className="flex items-center s:h-90 pl-70 s:pl-110"
          >
            <div className="sh__logo title-m uppercase overflow-hidden flex gap-x-10 text-left">
              <div className="js-i-split-reverse font-main">
                Cat in a dogs world
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

/* logo dropdown green-btn */
const HeaderButtons = () => {
  const [isMenuOpen, _setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full pointer-events-none z-7">
      <div className="sh__bg absolute inset-0 " />
      <div className="site-max relative flex items-center justify-between h-75 s:h-110 z-2">
        <Logo />
        <nav className="flex items-center gap-x-20 pointer-events-auto">
          <div className="relative hidden s:flex gap-x-30">
            {/* <SocialLinks /> */}
            {/* <EcosystemDropdown /> */}
          </div>
          {/* 绿色按钮 */}
          <button
            type="button"
            className="mtoggle btn inline-flex rounded-full relative h-spray-t"
            // onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="btn__content relative size-50 s:size-75 rounded-full overflow-hidden text-black z-2 before:absolute before:inset-0 before:border-[.4rem] s:before:border-[.7rem] before:rounded-full before:border-current before:z-2 after:absolute after:inset-3 after:bg-green after:rounded-full after:z-1">
              {!isMenuOpen && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-3 s:gap-y-4 overflow-hidden rounded-full z-3">
                  <div className="mtoggle__line --closed h-[.4rem] s:h-[.7rem] w-16 s:w-24 bg-black"></div>
                  <div className="mtoggle__line --closed h-[.4rem] s:h-[.7rem] w-16 s:w-24 bg-black"></div>
                  <div className="mtoggle__line --closed h-[.4rem] s:h-[.7rem] w-16 s:w-24 bg-black"></div>
                </div>
              )}
              {isMenuOpen && (
                <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-full z-3">
                  <div className="h-[.4rem] s:h-[.7rem] w-16 s:w-24 relative">
                    <div className="absolute inset-0 rotate-45">
                      <div className="mtoggle__line --open absolute inset-0 bg-black"></div>
                    </div>
                    <div className="absolute inset-0 -rotate-45">
                      <div className="mtoggle__line --open absolute inset-0 bg-black"></div>
                    </div>
                  </div>
                </div>
              )}
              {!isMenuOpen && (
                <div className="h-spray absolute -inset-x-5 inset-y-0 media-contain z-3">
                  <Image src={HSprayS} width={69} height={61} />
                </div>
              )}
            </div>
          </button>
        </nav>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="relative">
      <span>
        {/* Cat in a dogs world  */}
        <HeaderBackText />
        {/* logo dropdown green-btn */}
        <HeaderButtons />
      </span>
    </div>
  );
};

export default Header;
