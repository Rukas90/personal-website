import { Config } from 'tailwindcss';

/** @type {Config} */
const tailwindConfig = {
  darkMode: 'class',

  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {},
    screens: {
      'mn': '320px',
      'tn': '420px',
      'esm': '528px',
      'sm': '640px',
      'md': '768px', 
      'lg': '1024px', 
      'xl': '1280px',
      '2xl': '1312px',
      '3xl': '1536px',
    },
  },

  plugins: [require('@tailwindcss/line-clamp')],
};

export default tailwindConfig;
