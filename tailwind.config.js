/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      fontSize: {
        "1x": "1rem",
        "1.5x": "1.5rem",
        "2x": "2rem",
        "2.5x": "2rem",
        "3x": "3rem",
        "3.5x": "3rem",
        "4x": "4rem",
      },
      colors:{
        white: "#fff",
        black: "#000",
        primary: {
          50: "#e2f7ed",
          100: "#c3eedb",
          200: "#a4e5ca",
          300: "#83dcb9",
          400: "#5cd3a8",
          500: "#20c997",
          600: "#00a778",
          700: "#00875a",
          800: "#00673e",
          900: "#004923",
          950: "#002e08"
        },
        secondary: {
          50: "#e8e9eb",
          100: "#d1d4d7",
          200: "#bbbfc3",
          300: "#a5abb0",
          400: "#90979d",
          500: "#7B838A",
          600: "#646c73",
          700: "#4f565d",
          800: "#3a4147",
          900: "#262d33",
          950: "#141a20"
        },
        success: {
          50: "#e7f6e4",
          100: "#ceecca",
          200: "#b5e2b0",
          300: "#9cd897",
          400: "#81ce7d",
          500: "#64C464",
          600: "#41a346",
          700: "#188328",
          800: "#006406",
          900: "#004700",
          950: "#002c00"
        },
        info: {
          50: "#e7f4f9",
          100: "#ceeaf4",
          200: "#b5dfee",
          300: "#9ad4e8",
          400: "#7ccae3",
          500: "#5ABFDD",
          600: "#309ebb",
          700: "#007e9b",
          800: "#00607b",
          900: "#00435d",
          950: "#002840"
        },
        warning: {
          50: "#ffedd9",
          100: "#ffdbb4",
          200: "#ffc98f",
          300: "#ffb76a",
          400: "#ffa542",
          500: "#F99406",
          600: "#d47500",
          700: "#af5800",
          800: "#8c3b00",
          900: "#6c1f00",
          950: "#500000"
        },
        error: {
          50: "#ffe6e2",
          100: "#ffccc6",
          200: "#ffb3ab",
          300: "#fb9990",
          400: "#f57e76",
          500: "#EE625D",
          600: "#cf4745",
          700: "#b0292f",
          800: "#92001a",
          900: "#740002",
          950: "#590000"
        },
        gray: {
          100: "#f8f9fa",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#999",
          600: "#7a8288",
          700: "#52575c",
          800: "#3a3f44",
          900: "#272b30"
        },
        border: "#7a8288",
      },
      gridTemplateColumns: (theme) => {
        const spacing = theme("spacing")
        return Object.keys(spacing).reduce((accumulator, spacingKey) => {
          return {
            ...accumulator,
            [`fill-${spacingKey}`]: `repeat(auto-fill, minmax(${spacing[spacingKey]}, 1fr))`,
            [`fit-${spacingKey}`]: `repeat(auto-fit, minmax(${spacing[spacingKey]}, 1fr))`,
          }
        }, {})

      },
    },
  },
  plugins: [],
}