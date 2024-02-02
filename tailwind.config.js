/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            primary: "#8FB2F5",
            _dark: "#13131A",
            _lowDark: "#16161F",
            _lightGreenColor: "#23CE9D",
         },
         fontFamily: {
            Nunito: ["var(--Nunito)"],
         },
      },
   },
   plugins: [],
};
