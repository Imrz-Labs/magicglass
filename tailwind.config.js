/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    require("daisyui"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
  preflight: {
    fontFamily: {
      fontFamily: "congenial, sans-serif",
      sans: ["var(--font-montserrat)"],
    },
    fontWeight: "500",
    src: 'url(https://use.typekit.net/wvk6guc.css) format("otf")',
  },

  safelist: [
    "w-64",
    "w-1/2",
    "rounded-l-lg",
    "rounded-r-lg",
    "bg-white",
    "bg-gray-200",
    "bg-slate-50",
    "grid-cols-4",
    "grid-cols-7",
    "h-6",
    "leading-6",
    "h-9",
    "leading-9",
    "shadow-lg",
  ],

  theme: {
    colors: {
      white: { DEFAULT: "#ffffff", 500: "#F7FAFC" },
      black: { DEFAULT: "#1D1D1D", 500: "#2B2F4B" },
      pink: { DEFAULT: "#E6007E", 500: "#EF0381" },
      blue: { DEFAULT: "#1996FC", 500: "#F3FAFF" },
      gray: { light: "#CACED9", dark: "#7E7D8D" },
    },
    fontFamily: {
      heading: ["congenial, sans-serif"],
      body: ["congenial, sans-serif"],
    },
    fontSize: {
      tiny: ["12px"],
      xs: ["15px"],
      sm: ["18px"],
      base: ["20px"],
      md: ["24px"],
    },
    extend: {
      columns: {
        "4xs": "35px",
        "4md": "300px",
        "3xs": "35px",
        "3md": "150px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      dropShadow: {
        base: "0 10px 40px rgb(30, 35, 70, 0.05)",
      },
      boxShadow: {
        base: "0 10px 40px rgb(30, 35, 70, 0.05)",
        effect: "0px 3px 1px 1px rgba(0, 0, 0, 0.01)",
      },
    },

    screens: {
      "4xl": { max: "3840px" },
      // => @media (max-width: 1535px) { ... }

      "3xl": { max: "1920px" },
      // => @media (max-width: 1535px) { ... }

      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },

    fontSize: {
      tiny: ["14px", "20px"],
      xs: ["20px", "28px"],
      sm: ["24px", "32px"],
      base: ["30px", "36px"],
      lg: ["40px", "48px"],
      xl: ["60px", "78px"],
    },
  },
};
