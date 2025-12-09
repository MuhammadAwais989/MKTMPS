import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])

// Hero Section
// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         'gradient': 'gradient 8s ease infinite',
//         'float-shape': 'floatShape 20s ease-in-out infinite',
//         'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
//         'slide-up': 'slideUp 0.5s ease-out',
//         'typewriter': 'typewriter 3.5s steps(40, end)',
//       },
//       keyframes: {
//         gradient: {
//           '0%, 100%': { 
//             backgroundPosition: '0% 50%',
//           },
//           '50%': { 
//             backgroundPosition: '100% 50%',
//           },
//         },
//         floatShape: {
//           '0%, 100%': { 
//             transform: 'translateY(0px) rotate(0deg)',
//           },
//           '50%': { 
//             transform: 'translateY(-20px) rotate(10deg)',
//           },
//         },
//         pulseGlow: {
//           '0%, 100%': { 
//             boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
//           },
//           '50%': { 
//             boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)',
//           },
//         },
//         slideUp: {
//           '0%': { 
//             transform: 'translateY(20px)',
//             opacity: '0',
//           },
//           '100%': { 
//             transform: 'translateY(0)',
//             opacity: '1',
//           },
//         },
//       },
//     },
//   },
// }
