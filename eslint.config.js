import pkg from 'eslint';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const { FlatConfig } = pkg;

// This will give you the directory name of the current file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = new FlatConfig({
  files: ['{src,apps,libs,test}/**/*.ts'],
  languageOptions: {
    parser: '@typescript-eslint/parser',  // Set the parser here
    parserOptions: {
      project: 'tsconfig.json',
      tsconfigRootDir: __dirname,  // Use __dirname as the root directory
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

export default config;  // Ensure 'config' is defined correctly
