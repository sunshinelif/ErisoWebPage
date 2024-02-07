/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      //size settings for pc, phone etc.

      container:{
        screens:{
          xs:'375px',
          sm:'640px',
          md:'768px',
          lg:'1000px',
        
          

      },
      },
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
        'mono': ['ui-monospace', 'SFMono-Regular']
     
      },
      colors: {
        gray: {
          '100': '#f7fafc',
          '200': '#edf2f7',
          '300': '#e2e8f0',
          '400': '#cbd5e0',
          '500': '#a0aec0',
          '600': '#718096',
          '700': '#4a5568',
          '800': '#2d3748',
          '900': '#1a202c',
        },
        // Adding custom colors
        primary: {
          '50': '#f0f5ff',
          '100': '#dbe4ff',
          "150": '#00204a',
          '200': '#b3cfff',
          '300': '#809fff',
          '400': '#5173cc',
          '500': '#2e4da3',
          '600': '#1c3480',
          '700': '#102161',
          '800': '#091843',
          '900': '#040d28',
        },
        secondary: {
          '50': '#fff5f0',
          '100': '#ffdbcc',
          '150':'#8B0000',
          '200': '#ffaa80',
          '300': '#ff784d',
          '400': '#ff562b',
          '500': '#e63a0d',
          '600': '#b72f0b',
          '700': '#8f2309',
          '800': '#671805',
          '900': '#3f0d03',
        },
       
      },
    },
  },
  plugins: [],
};

