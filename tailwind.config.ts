import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor:{
        'vev-primary-light':'#fff',
        'vev-primary-dark':'#000',
        'vev-secondary-light':'#FAFAFA',
        'vev-secondary-dark':'#16181c'
      },
      colors:{
          'vev-primary-light':'#000',
          'vev-primary-dark':'#fff'
      },
      borderColor:{
        'vev-primary-light':'#eeecec',
        'vev-primary-dark':'#ffffff20'
      },
      maxWidth: {
        '10xl': '1728px',
      },
      screens: {
        'ns': {'max': '359px'},
        // => @media (max-width: 349px) { ... }

        'ss': {'min':'360px','max': '640px'},
        // => @media (min-width: 360px) and (max-width: 640px) { ... }


        'shs': {'min':'360px','max': '499px'},
        'shm':{'min': '500px','max': '639px'},

        'sm': {'min': '640px', 'max': '767px'},
        // => @media (min-width: 640px) and (max-width: 767px) { ... }

        'md': {'min': '768px', 'max': '1119px'},
        // => @media (min-width: 768px) and (max-width: 1023px) { ... }

        'lg': {'min': '1120px', 'max': '1279px'},
        // => @media (min-width: 1024px) and (max-width: 1279px) { ... }

        'xl': {'min': '1280px', 'max': '1399px'},
        // => @media (min-width: 1280px) and (max-width: 1399px) { ... }

        '2xl': {'min': '1400px', 'max': '1859px'},
        // => @media (min-width: 1400px) and (max-width: 1859px) { ... }

        '3xl': {'min': '1860px'},
        // => @media (min-width: 1860px) { ... }

        /////////////////////////////////OUTER @MEDIA///////////////////////////////
        'nsTsm': {'min':'279px', 'max': '767px'},
        // => @media (min-width: 359px) and (max-width: 767px) { ... }

        'mdTxl': {'min':'768px', 'max': '1399px'},
        // => @media (min-width: 768px) and (max-width: 1399px) { ... }
        
        'ssUp': {'min':'360px'},
        // => @media (min-width: 360px)  { ... }

        'smUp': {'min': '640px'},
        // => @media (min-width: 640px)  { ... }

        'mdUp': {'min': '768px'},
        // => @media (min-width: 768px) { ... }

        'lgUp': {'min': '1120px'},
        // => @media (min-width: 1024px) { ... }

        'xlUp': {'min': '1280px'},
        // => @media (min-width: 1280px){ ... }

        '2xlUp': {'min': '1400px'},
        
        // => @media (min-width: 1400px) { ... }

      },
    },
  },
  plugins: [],
}
export default config
