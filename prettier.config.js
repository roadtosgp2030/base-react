/** @type {import("prettier").Config} */
export default {
  arrowParens: 'avoid',
  semi: false,
  trailingComma: 'none',
  endOfLine: 'auto',
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  printWidth: 100,
  jsxSingleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'] // Automatically sorts Tailwind CSS classes in a consistent order
}
