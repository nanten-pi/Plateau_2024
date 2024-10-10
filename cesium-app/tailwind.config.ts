/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // App Routerのパス
    './pages/**/*.{js,ts,jsx,tsx}', // 既存のページのパス
    './components/**/*.{js,ts,jsx,tsx}', // コンポーネントのパス
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
