/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        'custom-black':'rgb(28 36 52)' , 
        'text-menu':'rgb(138 153 175)',
        'icon-white':'white',
        'graydark':'rgb(51 58 72 )',
        'primary':'rgb(60 80 224)',
        'boxcolor':'rgb(36 48 63 )',
        'fill': '#64748B',
       'midnightBlue':'rgb(17 39 66)',
       
      },
      
    },
  },
  
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
      };

      addUtilities(newUtilities);
    },
  ],
}

