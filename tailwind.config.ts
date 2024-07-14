import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [
    function({ addUtilities} : {addUtilities:any}) {
      addUtilities({
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none',  /* Internet Explorer 10+ */
          'scrollbar-width': 'none',  /* Firefox */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none',  /* Safari and Chrome */
        },
      })
    }
  ],
};
export default config;
