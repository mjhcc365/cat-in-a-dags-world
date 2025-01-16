"use client";
import Header from "./modules/Header";
import { useScroll } from "framer-motion";

import Article from "./modules/Article";

export default function Home() {
  const { scrollYProgress } = useScroll();

  console.log("===>", scrollYProgress);

  return (
    <div className="relative  w-full">
      <Header />
      <Article />

      <div className="bg-red" style={{ height: "100vh" }}>
        height
      </div>
    </div>
  );
}
