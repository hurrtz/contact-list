/* eslint-disable quote-props, quotes */

module.exports = {
  coverageDirectory: 'coverageNative',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  // resolver: 'jest-pnp-resolver',
  preset: 'react-native',
  rootDir: '../',
  setupFiles: ['<rootDir>/config/initTest.js'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}',
  ],
  browser: false,
  // testEnvironment: 'ios',
  transform: {
    // '^.+\\.(js|jsx)$': 'babel-jest',
    // '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    // '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
  },
  transformIgnorePatterns: ['node_modules/art/core/color.js'],
  moduleFileExtensions: [
    'ios.js',
    'android.js',
    'js',
    'json',
    'ios.jsx',
    'android.jsx',
    'jsx',
    'node',
  ],
};
