import { motion } from "framer-motion";

const MarqueeText = () => {
  // 定义动画变量
  const marqueeVariants = {
    animate: {
      x: [0, -1035], // 根据实际内容长度调整
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  const MarqueeItem = () => (
    <>
      <div className="flex items-center whitespace-nowrap">
        <div className="relative">the dog days are over</div>{" "}
        <span className="mx-15">•</span>
      </div>
      <div className="flex items-center whitespace-nowrap">
        <div className="relative">cat in a dogs world</div>{" "}
        <span className="mx-15">•</span>
      </div>
      <div className="flex items-center whitespace-nowrap">
        <div className="relative">the battle has just begun</div>{" "}
        <span className="mx-15">•</span>
      </div>
    </>
  );

  return (
    <span className="overflow-hidden flex items-center h-45 s:h-65 has-hover:transition-colors has-hover:duration-500 has-hover:ease-out has-hover:hover:text-white bg-red border-y-[.5rem] s:border-y-[.7rem] text-black border-black is-active font-main">
      <motion.div
        className="flex pr-30 s:pr-70"
        variants={marqueeVariants}
        animate="animate"
      >
        <MarqueeItem />
        <MarqueeItem />
        <MarqueeItem />
      </motion.div>
    </span>
  );
};

export default MarqueeText;
