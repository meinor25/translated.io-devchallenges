/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#212936cc',
        secondary: '#121826cc',
        textLight: '#F9FAFB',
        blue: '#3662E3',
        sky: '#7CA9F3',
        textDark: '#394150',
        gray: '#4D5562',
      },
    },
  },
  plugins: [],
};
