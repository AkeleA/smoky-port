/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-fira)"],
      },
      width: {
        1366: "1366px",
        210: "64rem",
        443: "27.688rem",
        200: "33.563rem",
      },
      height: {
        3192: "3192px",
        423: "26.438rem",
      },
      gap: {
        100: "34.688rem",
      },
    },
  },
  plugins: [],
};
