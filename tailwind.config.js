module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  },
  theme: {
    colors: {},
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
