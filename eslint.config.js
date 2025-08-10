import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['**/dist/**', '**/node_modules/**'],
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,

      parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@typescript-eslint': ts,
    },
    rules: {
      'no-console': 'warn',
      'eqeqeq': ['error', 'always'],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'warn',

      'react-refresh/only-export-components': 'off'
    },
  },
];
