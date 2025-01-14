// components/Header/Header.jsx
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import EcosystemDropdown from "./EcosystemDropdown";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <motion.header
      className="sh relative w-full z-4"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="relative overflow-hidden">
        <motion.div
          className="sh__bg absolute inset-0 bg-red"
          variants={bgVariants}
          style={{ originY: 0 }}
        />

        <div className="site-max relative flex items-center h-75 s:h-110 z-2">
          <Logo />
          <nav className="flex items-center gap-x-20 pointer-events-auto">
            <motion.div
              className="relative hidden s:flex gap-x-30"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <SocialLinks />
              <EcosystemDropdown />
            </motion.div>

            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mtoggle btn inline-flex rounded-full relative h-spray-t"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* 汉堡菜单内容 */}
              <div className="btn__content relative size-50 s:size-75  rounded-full overflow-hidden text-black z-2">
                <AnimatePresence mode="wait">
                  {!isMenuOpen ? (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: -180 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 180 }}
                      className="absolute inset-0 flex flex-col items-center justify-center gap-y-3 s:gap-y-4"
                    >
                      {[1, 2, 3].map((_, i) => (
                        <motion.div
                          key={i}
                          className="mtoggle__line --closed h-[.4rem] s:h-[.7rem] w-16 s:w-24 bg-black"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: i * 0.1 }}
                        />
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="relative h-[.4rem] s:h-[.7rem] w-16 s:w-24">
                        <motion.div
                          className="absolute inset-0 bg-black"
                          animate={{ rotate: 45 }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-black"
                          animate={{ rotate: -45 }}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.button>
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu onClose={() => setIsMenuOpen(!isMenuOpen)} />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
