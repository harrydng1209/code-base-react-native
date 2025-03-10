import plugin from 'tailwindcss/plugin';

module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],

  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.absolute-center': {
          '@apply nw-absolute nw-top-1/2 nw-left-1/2 nw-translate-x-[-50%] nw-translate-y-[-50%]':
            {},
        },
        '.flex-between': {
          '@apply nw-flex nw-justify-between nw-items-center': {},
        },
        '.flex-center': {
          '@apply nw-flex nw-justify-center nw-items-center': {},
        },
      };
      addUtilities(newUtilities);
    }),
  ],

  prefix: 'nw-',
  presets: [require('nativewind/preset')],

  theme: {
    extend: {},
  },
};
