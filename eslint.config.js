import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import importPlugin from 'eslint-plugin-import'
import unusedImports from 'eslint-plugin-unused-imports'
import prettier from 'eslint-plugin-prettier'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        project: './tsconfig.eslint.json',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      'unused-imports': unusedImports,
      prettier
    },
    settings: {
      react: {
        version: 'detect'
      },
      'import/extensions': [
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
        '.d.ts',
        '.json'
      ]
    },
    rules: {
      /* ********************************** ES6+ ********************************** */
      'no-console': 'off',
      'no-var-requires': 'off',
      'no-restricted-syntax': 'off',
      'no-continue': 'off',
      'no-await-in-loop': 'off',
      'no-return-await': 'off',
      'no-multi-assign': 'off',
      'no-param-reassign': ['error', { props: false }],
      'max-classes-per-file': 'off',
      'class-methods-use-this': 'off',
      'guard-for-in': 'off',
      'no-underscore-dangle': 'off',
      'no-plusplus': 'off',
      'no-lonely-if': 'off',
      'no-bitwise': ['error', { allow: ['~'] }],

      /* ********************************** Module Import ********************************** */
      'import/prefer-default-export': 'off',
      'import/no-cycle': 'off',
      'import/no-dynamic-require': 'off',
      'import/no-absolute-path': 'off',
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': [
        'warn',
        {
          devDependencies: [
            'scripts/**/*.{ts,js}',
            '**/*.test.{ts,js,tsx}',
            '**/*.spec.{ts,js,tsx}',
            '**.{ts,js}'
          ]
        }
      ],
      'import/order': [
        'warn',
        {
          pathGroups: [
            {
              pattern: '@/**',
              group: 'external',
              position: 'after'
            }
          ],
          'newlines-between': 'always-and-inside-groups',
          warnOnUnassignedImports: true
        }
      ],

      /* ********************************** Unused Imports ********************************** */
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'none',
          ignoreRestSiblings: true
        }
      ],

      /* ********************************** Typescript ********************************** */
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/explicit-member-accessibility':
        'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion':
        'off',
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/no-for-in-array': 'off',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type':
        'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-module-boundary-types':
        'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/restrict-template-expressions':
        'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',

      /* ********************************** React and Hooks ********************************** */
      'react/jsx-uses-react': 'warn',
      'react/jsx-uses-vars': 'warn',
      'react/jsx-no-useless-fragment': 'off',
      'react/display-name': 'off',
      'react/button-has-type': 'off',
      'react/prop-types': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/destructuring-assignment': 'off',
      'react/static-property-placement': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'react/jsx-filename-extension': [
        'warn',
        { extensions: ['.jsx', '.tsx'] }
      ],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function'
        }
      ],
      'react-hooks/exhaustive-deps': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],

      /* ********************************** jsx-a11y ********************************** */
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          required: {
            some: ['nesting', 'id']
          }
        }
      ],

      /* ********************************** Prettier ********************************** */
      'prettier/prettier': 'error'
    }
  }
])
