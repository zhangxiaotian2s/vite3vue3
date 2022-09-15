module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    // 1. 接入 prettier 的规则
    'prettier',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  // 2. 加入 prettier 的 eslint 插件
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  // 3. 注意要加上这一句，开启 prettier 自动修复的功能
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    indent: ['warn', 2],
    'linebreak-style': ['warn', 'unix'],
    quotes: ['warn', 'single'],
    semi: 0
  }
}
