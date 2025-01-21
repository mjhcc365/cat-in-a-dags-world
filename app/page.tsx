"use client";
import Header from "./modules/Header";
import { useScroll } from "framer-motion";

// import Article from "./modules/Article";
import Motion from "./modules/Motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  console.log("===>", scrollYProgress);

  return (
    <div className="relative  w-full">
      {/* 学习motion的例子 */}
      <Motion />
      {/* <Header />
      <Article />

      <div className="bg-red" style={{ height: "100vh" }}>
        height
      </div> */}
    </div>
  );
}
