import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import EcosystemDropdown from "./EcosystemDropdown";
import Image from "next/image";
import HSprayS from "../../source/h-spray-s.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef(null);

  const [isInView, setIsInView] = useState(true);

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const bgVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };
  // 定义动画变量
  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    },
  };

  const handleScroll = () => {
    if (ref?.current && (ref.current as HTMLElement).getBoundingClientRect) {
      const rect = (ref.current as HTMLElement).getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      setIsInView(isVisible);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // 组件卸载时移除事件监听
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <span>
        {/* header */}
        <header ref={ref} className="sh relative w-full z-4 js-sh text-black">
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
          {/* <a
          href="https://jup.ag/swap/So11111111111111111111111111111111111111112-MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5?inAmount="
          target="_blank"
          rel="noreferrer"
        >
          <span
            class="overflow-hidden flex items-center h-45 s:h-65 has-hover:transition-colors has-hover:duration-500 has-hover:ease-out has-hover:hover:text-white bg-red border-y-[.5rem] s:border-y-[.7rem] text-black border-black is-active"
            style="--time: 23.335069444444443s;"
          >
            <div class="flex marquee js-marquee">
              <div class="flex items-center whitespace-nowrap">
                <div class="relative">cat in a dogs world</div>{" "}
                <span class="mx-15">•</span>
              </div>
              <div class="flex items-center whitespace-nowrap">
                <div class="relative">the dog days are over</div>{" "}
                <span class="mx-15">•</span>
              </div>
              <div class="flex items-center whitespace-nowrap">
                <div class="relative">the battle has just begun</div>{" "}
                <span class="mx-15">•</span>
              </div>
              <div class="flex items-center whitespace-nowrap">
                <div class="relative">cat in a dogs world</div>{" "}
                <span class="mx-15">•</span>
              </div>
              <div class="flex items-center whitespace-nowrap">
                <div class="relative">the dog days are over</div>{" "}
                <span class="mx-15">•</span>
              </div>
              <div class="flex items-center whitespace-nowrap">
                <div class="relative">the battle has just begun</div>{" "}
                <span class="mx-15">•</span>
              </div>
            </div>
            <div class="flex marquee js-marquee">
              <div class="flex items-center whitespace-nowrap">
                <div class="relative">cat in a dogs world</div>{" "}
                <span class="mx-15">•</span>
              </div>
              <div class="flex items-center whitespace-nowrap">
                <div class="relative">the dog days are over</div>{" "}
                <span class="mx-15">•</span>
              </div>
              <div class="flex items-center whitespace-nowrap">
                <div class="relative">the battle has just begun</div>{" "}
                <span class="mx-15">•</span>
              </div>
              <div class="flex items-center whitespace-nowrap">
                <div class="relative">cat in a dogs world</div>{" "}
                <span class="mx-15">•</span>
              </div>
              <div class="flex items-center whitespace-nowrap">
                <div class="relative">the dog days are over</div>{" "}
                <span class="mx-15">•</span>
              </div>
              <div class="flex items-center whitespace-nowrap">
                <div class="relative">the battle has just begun</div>{" "}
                <span class="mx-15">•</span>
              </div>
            </div>
            <div class="flex marquee js-marquee">
              <div class="flex items-center whitespace-nowrap">
                <div class="relative">cat in a dogs world</div>{" "}
                <span class="mx-15">•</span>
              </div>
              <div class="flex items-center whitespace-nowrap">
                <div class="relative">the dog days are over</div>{" "}
                <span class="mx-15">•</span>
              </div>
              <div class="flex items-center whitespace-nowrap">
                <div class="relative">the battle has just begun</div>{" "}
                <span class="mx-15">•</span>
              </div>
              <div class="flex items-center whitespace-nowrap">
                <div class="relative">cat in a dogs world</div>{" "}
                <span class="mx-15">•</span>
              </div>
              <div class="flex items-center whitespace-nowrap">
                <div class="relative">the dog days are over</div>{" "}
                <span class="mx-15">•</span>
              </div>
              <div class="flex items-center whitespace-nowrap">
                <div class="relative">the battle has just begun</div>{" "}
                <span class="mx-15">•</span>
              </div>
            </div>
          </span>
        </a> */}
        </header>
        {/* logo dropdown green-btn */}
        <motion.div
          className="fixed top-0 left-0 w-full pointer-events-none z-7"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <motion.div
            className="sh__bg absolute inset-0 "
            variants={bgVariants}
            style={{ originY: 0 }}
          />
          <div className="site-max relative flex items-center justify-between h-75 s:h-110 z-2">
            <Logo />
            <nav className="flex items-center gap-x-20 pointer-events-auto">
              <motion.div
                className="relative hidden s:flex gap-x-30"
                initial={{ opacity: 1, x: 20 }}
                animate={{ opacity: isInView ? 1 : 0, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <SocialLinks />
                <EcosystemDropdown />
              </motion.div>

              {/* 绿色按钮 */}
              <motion.button
                type="button"
                className="mtoggle btn inline-flex rounded-full relative h-spray-t"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                      <Image src={HSprayS} alt="" width={69} height={61} />
                    </div>
                  )}
                </div>
              </motion.button>
            </nav>
          </div>

          {/* <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu onClose={() => setIsMenuOpen(!isMenuOpen)} />
        )}
      </AnimatePresence> */}
        </motion.div>
      </span>
    </div>
  );
};

export default Header;
