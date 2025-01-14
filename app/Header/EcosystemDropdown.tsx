// components/Header/EcosystemDropdown.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EcosystemDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ecosystemLinks = [
    {
      name: "CoinGecko",
      href: "https://www.coingecko.com/en/coins/mew",
      image:
        "https://www.datocms-assets.com/133929/1720705341-coin-gecko-black.png",
    },
    {
      name: "CoinMarketCap",
      href: "https://coinmarketcap.com/currencies/mew/",
      image:
        "https://www.datocms-assets.com/133929/1720705387-coin-market-cap-black.png",
    },
    // ... 其他生态系统链接
  ];

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="btn inline-flex items-center px-25 h-75"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Ecosystem</span>
        <motion.svg
          viewBox="0 0 26 18"
          className="h-18 w-auto ml-15"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path d="M10.5109 17.1221L15.1689..." className="fill-current" />
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 w-250 bg-white rounded-lg shadow-xl overflow-hidden"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {ecosystemLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                variants={itemVariants}
                whileHover={{ backgroundColor: "#f3f4f6" }}
                className="flex items-center justify-between p-15 border-b border-gray-200"
              >
                <span>{link.name}</span>
                <motion.img
                  src={link.image}
                  alt={link.name}
                  className="h-25 w-auto"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EcosystemDropdown;
