/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueSc: {
          300: "#3d657e",
          400: "#376a81",
          500: "#051640",
        },
        myText: "#DCE4EF",
        myBg: "#070E17",
        myPrimary: "#85ACE6",
        mySecondary: "#0F428E",
        myAccent: "#1471f9",
        cyanHimtika: "#06b7e9",
      },
      backgroundImage: {
        heroImage: "url('/assets/img/sc_dokumentasi.jpg')",
      },
    },
  },
  plugins: [],
};
