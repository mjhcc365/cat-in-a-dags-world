import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <button type="button" className="flex pointer-events-auto">
      <div className="relative flex items-center justify-center size-60 s:size-90 before:absolute before:inset-3 before:rounded-full before:bg-red">
        <Image
          src="https://mew.xyz/logo-head.svg"
          alt={"logo"}
          width={100}
          height={100}
          className="w-full h-auto object-contain relative z-2"
        />
      </div>
    </button>
  );
};

export default Logo;
