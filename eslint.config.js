import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import importPlugin from 'eslint-plugin-import'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module'
      }
    },
    settings: { react: { version: 'detect' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
      import: importPlugin
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'warn', // WARNING: need to add rel="noopener noreferrer" for <a> with target="_blank"
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      'prettier/prettier': ['warn', { endOfLine: 'auto' }],
      ...prettierConfig.rules,

      'no-console': 'warn',

      'import/order': [
        'warn',
        {
          groups: [
            'builtin', // Node.js built-ins (fs, path, etc.)
            'external', // External packages (React, lodash, etc.)
            'internal', // Absolute imports (from src/, @/)
            ['parent', 'sibling', 'index'], // Relative imports
            'object' // Imports of modules as objects
          ],
          'newlines-between': 'always', // Enforce a blank line between groups
          alphabetize: {
            order: 'ignore', // Do not sort inside groups
            caseInsensitive: true
          }
        }
      ]
    }
  }
]
