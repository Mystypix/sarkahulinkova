/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      title: ["sh"],
    },
    extend: {
      colors: {
        intro: "#E9E3D8",
        main: "#A48800",
        minimalism: "#BD9E90",
        therapy: "#9DD3CA",
        yoga: "#578ABC",
      },
    },
  },
  plugins: [],
  safelist: [
    "border-l-intro",
    "border-r-intro",
    "border-l-main",
    "border-r-main",
    "border-l-minimalism",
    "border-r-minimalism",
    "border-l-therapy",
    "border-r-therapy",
    "border-l-yoga",
    "border-r-yoga",
  ],
};
