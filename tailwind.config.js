/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floatClouds: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        typing: {
          '0%': { width: '0ch' },
          '100%': { width: '40ch' }, // Adjust to match your heading length
        },
        blink: {
          '0%, 50%, 100%': { borderColor: 'transparent' },
          '25%, 75%': { borderColor: 'black' },
        },
      },
      animation: {
        floatClouds: 'floatClouds 10s ease-in-out infinite',
        bounceSlow: 'bounceSlow 6s ease-in-out infinite',
        typing: 'typing 4s steps(40) 1s forwards, blink 0.75s step-end infinite',
      },
    },
  },
  plugins: [],
}
