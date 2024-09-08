// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const { addIconSelectors } = require('@iconify/tailwind');
const inclinedBackgroundSVGBase64 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTcyOCIgaGVpZ2h0PSIxMjg1IiB2aWV3Qm94PSIwIDAgMTcyOCAxMjg1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDBIMTcyOEwtaTE2IDEyODQuNUwwIDBaIiBmaWxsPSIjRjJGRkVGIi8+PC9zdmc+";

export const content = [
  './public/index.html',
  './src/**/*.{vue,js,ts,jsx,tsx}',
];
export const theme = {
  extend: {
    backgroundImage: {
      'index-cover': "url('/src/assets/images/coverImage.png')",
      'inclined-background': "url('/src/assets/images/bgInclined.png')",      
    },
    height: {
      'hl-10': '10rem',
      'hr-5': '5rem',
    }
  },

  screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  }
};
export const plugins = [
  addIconSelectors(['mdi', 'mdi-light']),
];
