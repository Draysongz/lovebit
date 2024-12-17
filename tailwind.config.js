/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'button-angular': 'conic-gradient(#4AAAFF, #1018BD, #469EEC, #953AFF, #1018BD, #4AAAFF)',
        'gradient-image':
          "linear-gradient(0deg,rgba(3, 6, 21, 0.964),rgba(3, 6, 21, 0.964)), url('/bg.png')",
      },
    },
  },
  plugins: [],
}