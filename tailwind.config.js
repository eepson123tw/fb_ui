// tailwind.config.js
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  mode: 'jit',
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        'main-span': '72px'
      },
      colors: {
        'fb-bg': '#18191a',
        'fb-header': '#242526',
        'fb-input': '#3a3b3c',
        'fb-popove': '#3e4042',
        'fb-active': '#323436',
        'fb-card': '#242526',
        'fb': '#2e89ff'
      }
    },
  },
  variants: {},
  plugins: [],
}