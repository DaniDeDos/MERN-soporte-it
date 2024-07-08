/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#1fb6ff",
      white: "#FFFFFF",
      black: "#242424",
      grey: "#F3F3F3",
      "dark-grey": "#6B6B6B",
      red: "#FF4E4E",
      transparent: "transparent",
      twitter: "#1DA1F2",
      purple: "#8B46FF",
      // Paleta blue
      blue: {
        100: "#ebf8ff", // Lightest shade
        200: "#bee3f8", // Lighter shade
        300: "#90cdf4", // Light shade
        400: "#63b3ed", // Default shade
        500: "#4299e1", // Medium shade
        600: "#3182ce", // Darker shade
        700: "#2b6cb0", // Darker shade
        800: "#2c5282", // Darkest shade
        900: "#2d3748", // Darkest shade
      },
    },

    fontSize: {
      sm: "12px",
      base: "14px",
      xl: "16px",
      "2xl": "20px",
      "3xl": "28px",
      "4xl": "38px",
      "5xl": "50px",
    },

    extend: {
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        gelasio: ["'Gelasio'", "serif"],
      },
    },
  },
  plugins: [],
};
