/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      lineClamp: {
        4: '4',
        // Add more values if needed
      },
    },
  },
  plugins: [
     require('@tailwindcss/line-clamp'),
    ],
}

