import pkg from 'eslint';
const { FlatConfig } = pkg;

const config = new FlatConfig({
  files: ['{src,apps,libs,test}/**/*.ts'],
  languageOptions: {
    parser: '@typescript-eslint/parser',  // Set the parser here
    parserOptions: {
      project: 'tsconfig.json',
      tsconfigRootDir: __dirname,
      sourceType: 'module',
    },
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',  // Disable the problematic rule
  },
});

export default config;
