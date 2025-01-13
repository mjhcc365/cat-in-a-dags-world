import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      s: "650px", // 自定义断点
    },
    colors: {
      black: "#070612",
      white: "#FFFFFF",
      // red: "#FE0000",
      red: "#fff",
      "pink-light": "#F5B8D4", // 推测值
      current: "currentColor",
    }, // 自定义字体
    fontFamily: {
      main: ["main", "sans-serif"],
      "main-sans": ["main-sans", "sans-serif"],
      spray: ["spray", "sans-serif"],
    }, // 扩展尺寸主题
    extend: {
      spacing: {
        "15": "1.5rem",
        "25": "2.5rem",
        "40": "4rem",
        "45": "4.5rem",
        "50": "5rem",
        "60": "6rem",
        "70": "7rem",
        "75": "7.5rem",
        "80": "8rem",
        "90": "9rem",
        "100": "10rem",
        "110": "11rem",
        "120": "12rem",
        "125": "12.5rem",
        "140": "14rem",
        "150": "15rem",
        "160": "16rem",
        "165": "16.5rem",
        "180": "18rem",
        "200": "20rem",
        "240": "24rem",
        "280": "28rem",
        "300": "30rem",
      },
      fontSize: {
        "16": "1.6rem",
        "18": "1.8rem",
        "27": "2.7rem",
        "50": "5rem",
        "140": "14rem",
        "200": "20rem",
      },
      borderWidth: {
        "0.5": "0.5rem",
        "0.7": "0.7rem",
      },
      borderRadius: {
        "1.15": "1.15rem",
        "1.5": "1.5rem",
        "2": "2rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
