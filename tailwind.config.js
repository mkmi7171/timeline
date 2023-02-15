/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      footerText: "#58585A",
      warning100: "#E3B74F",
      whiteText: "#FFF",
      whiteBg: "#FFFFFF",
      "lang-switch": "rgba(88, 88, 90, 0.36)",
      switch: "#58585a66",
      menu: "rgba(255, 255, 255, 0.79)",
      dash: "rgba(88, 88, 90, 1)",
      "border-icon": "rgba(217, 217, 217, 1)",
    },
    fontFamily: {
      iranSans: ["iranSans"],
      iranSansBold: ["iranSansBold"],
      iranSansEn: ["iranSansEn"],
      iranSansEnB: ["iranSansEnB"]
    },
    boxShadow: {
      mainShadow: "0px 2px 12px rgba(88, 88, 90, 0.4)",
      containerShadow: "2px 2px 12px rgba(88, 88, 90, 0.4)",
    },
    extend: {
      width: {
        imageWidth: 319,
      },
      backgroundImage: {
        mainHead: "url('../public/assets/home page/background.webp')",
        ENmainHead: "url('../public/assets/home page/ENBack.webp')",
        mainHeadMob: "url('../public/assets/home page/back-mob.webp')",
        ENmainHeadMob: "url('../public/assets/home page/ENback-mob.webp')",
        IR: "url('../public/assets/home page/ir.svg')",
        GB: "url('../public/assets/home page/gb.svg')",
      },
      dropShadow: {
        "3xl": "0 10px 10px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 15px 15px rgba(0, 0, 0, 0.25)",
          "0 15px 15px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
  },
  plugins: [],
};
