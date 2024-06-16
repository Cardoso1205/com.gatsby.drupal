/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      dropShadow: {
        'level-1': '0 4px 37px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
