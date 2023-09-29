/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    'eol-last': 0,
    'vue/multi-word-component-names': 'off',
    'vue/attribute-hyphenation': 'off',
    'prettier/prettier': ['error', { printWidth: 120 }]
  },
  // vue的全局api，添加之后就不在校验
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
