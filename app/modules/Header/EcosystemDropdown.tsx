import React, { useState } from "react";
import Image from "next/image";

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

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn inline-flex items-center px-25 h-75"
      >
        <span>Ecosystem</span>
        <svg viewBox="0 0 26 18" className="h-18 w-auto ml-15">
          <path d="M10.5109 17.1221L15.1689..." className="fill-current" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-250 bg-white rounded-lg shadow-xl overflow-hidden">
          {ecosystemLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex items-center justify-between p-15 border-b border-gray-200"
            >
              <span>{link.name}</span>
              <Image src={link.image} alt={link.name} className="h-25 w-auto" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default EcosystemDropdown;
