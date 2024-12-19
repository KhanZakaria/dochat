/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "640px",
          // => @media (min-width: 640px) { ... }

          md: "768px",
          // => @media (min-width: 768px) { ... }

          lg: "1280px",
          // => @media (min-width: 1024px) { ... }
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "chat-bg": "url('./chatbg1.png')",
        "chat-bg2": "url('./bg.jpg')",
        winter: "url('./bgwinter.jpg')",
        dark: "url('./dark.png')",
      },
    },
  },
  plugins: [],
};
