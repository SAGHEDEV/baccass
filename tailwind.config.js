export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Covers all JavaScript/TypeScript/React files in src
  ],
  theme: {
    extend: {
      colors: {
        green: "#54BD95",
        dark: "#191A15",
        dark2: "#161C28",
        dark3: "#222938",
        gray: "#A6A6A6",
      },
    },
  },
  plugins: [],
};
