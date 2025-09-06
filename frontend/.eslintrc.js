module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react'],
  rules: {
    // React specific rules
    'react/prop-types': 'off', // Disable prop-types for now
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-pascal-case': 'warn',
    'react/no-unescaped-entities': 'off', // Allow unescaped entities like apostrophes
    'react/no-unknown-property': 'off', // Allow unknown properties for custom components
    
    // General rules - relaxed for development
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'prefer-const': 'warn',
    'no-var': 'warn',
  },
  overrides: [
    {
      files: ['**/__tests__/**/*', '**/*.test.*'],
      env: {
        jest: true,
      },
    },
  ],
};
