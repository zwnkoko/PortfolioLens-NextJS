import type { Config } from "tailwindcss";

export default {
  darkMode: 'selector',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {

        // Button Colors 
        primary: {
          DEFAULT: "var(--color-primary-default)",
          hover: "var(--color-primary-hover)",
          active: "var(--color-primary-active)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary-default)",
          hover: "var(--color-secondary-hover)",
          active: "var(--color-secondary-active)",
        },
        tertiary: {
          DEFAULT: "var(--color-tertiary-default)",
          hover: "var(--color-tertiary-hover)",
          active: "var(--color-tertiary-active)",
        },
        
        "theme-color": "var(--background-color)",
      },
      keyframes:{
        scroll:{
          '0%': { 
            transform: 'translateX(0)', 
            '-webkit-transform': 'translateX(0)',
          },
          '100%': { 
            transform: 'translateX(-50%)',
            '-webkit-transform': 'translateX(-50%)',
          },
        }
      },
      animation:{
        scroll: 'scroll 20s linear infinite 1s',
      }
    },
  },
  plugins: [],
} satisfies Config;
