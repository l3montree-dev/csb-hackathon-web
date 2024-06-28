const { rules } = require('eslint-config-prettier')
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended')
// eslint.config.js
module.exports = [
  eslintPluginPrettierRecommended,
  {
    ignores: ['postcss.config.js', 'tailwind.config.js', 'next.config.js'],
  },
]
