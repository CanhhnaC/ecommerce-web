const plugin = require('tailwindcss/plugin');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  },
  theme: {
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      gray: {
        100: '#F9F9F9',
        200: '#F5F5F5',
        300: '#EBEBEB',
        400: '#D1D1D1',
        500: '#A9A9A9',
        600: '#575757',
        700: '#151515',
      },
      green: {
        100: '#F4F8EC',
        200: '#C8DEB3',
        300: '#92C064',
        400: '#46760A',
        500: '#6A983C',
      },
      yellow: {
        100: '#FFF9F0',
        200: '#FAEDD8',
        300: '#ECD2A6',
        400: '#B28A48',
        500: '#D0A866',
      },
      red: { 100: '#FFF1ED', 200: '#F7C6B7', 300: '#EB8D70', 400: '#C7522D', 500: '#E6704B' },
      blue: { 100: '#ECF6F7', 200: '#B9E6E8', 300: '#7CD0D3', 400: '#19B2B8', 500: '#37D0D6' },
    },
    extend: {
      width: {
        '100px': '100px',
      },
      fontFamily: {
        'open-sans': 'Open Sans',
        poppins: 'Poppins',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const flex = {
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      };
      addComponents(flex);
    }),
    require('@tailwindcss/line-clamp'),
  ],
};
