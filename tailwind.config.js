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
      C1: {
        A: '#151515',
        B: '#575757',
        C: '#A9A9A9',
        D: '#D1D1D1',
        E: '#EBEBEB',
        F: '#F5F5F5',
        H: '#F9F9F9',
        J: '#FFFFFF',
        I: '#FDFDFD',
      },
      C2: {
        E: '#F4F8EC',
        D: '#C8DEB3',
        C: '#92C064',
        B: '#46760A',
        A: '#6A983C',
      },
      C3: {
        E: '#FFF9F0',
        D: '#FAEDD8',
        C: '#ECD2A6',
        B: '#B28A48',
        A: '#D0A866',
      },
      C4: {
        A: '#E6704B',
        B: '#C7522D',
        C: '#EB8D70',
        D: '#F7C6B7',
        E: '#FFF1ED',
      },
      C5: {
        A: '#37D0D6',
        B: '#19B2B8',
        C: '#7CD0D3',
        D: '#B9E6E8',
        E: '#ECF6F7',
      },
    },
    boxShadow: {
      1: '0 2px 4px 0 rgba(0, 0, 0, 0.15)',
      2: '0 1px 2px 0 rgba(0, 0, 0, 0.25)',
      modal: '0 2px 32px 0 rgba(0, 0, 0, 0.15)',
      none: 'none',
    },
    extend: {
      width: {
        '100px': '100px',
      },
      fontFamily: {
        'open-sans': 'Open Sans',
        poppins: 'Poppins',
      },
      fontSize: {
        '32px': '32px',
        '15px': '15px',
      },
      borderRadius: {
        '12px': '12px',
      },
      spacing: {
        '48px': '48px',
        '33/2px': '16.5px',
        '16px': '16px',
        '25/2px': '12.5px',
        '12px': '12px',
        '13/2px': '6.5px',
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
