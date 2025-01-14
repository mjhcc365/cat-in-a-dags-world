// components/Header/SocialLinks.tsx
import { motion } from "framer-motion";
import Image from "next/image";

const socialLinks = [
  {
    href: "https://www.instagram.com/catinadogsworld/",
    icon: "instagram",
    svg: (
      <svg
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-30 w-auto"
      >
        <path d="M8.80445 30.0084C7.20841..." className="fill-current" />
      </svg>
    ),
  },
  // ... 其他社交链接
];

const SocialLinks = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <motion.nav
      className="flex gap-x-20"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          variants={item}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          rel="noopener noreferrer"
          target="_blank"
          className="btn inline-flex rounded-[1.15rem] s:rounded-[1.5rem] relative h-spray-t z-2"
        >
          <motion.div
            className="btn__content flex items-center justify-center relative text-center overflow-hidden h-60 s:h-75 text-black z-2"
            whileHover={{
              backgroundColor: "#000",
              color: "#fff",
            }}
          >
            <span className="relative z-3">{link.svg}</span>
            <motion.div
              className="h-spray absolute -inset-x-10 inset-y-0 media-contain z-3"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <Image
                src="/h-spray-s.png"
                alt=""
                width={100}
                height={50}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        </motion.a>
      ))}
    </motion.nav>
  );
};

export default SocialLinks;
