/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@verbals/static-ui/dist/**/*.{ts,tsx,js,mjs,cjs,jsx}'
  ],
  plugins: [require('@tailwindcss/typography')],
};
