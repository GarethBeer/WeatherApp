module.exports = {
  collectCoverageFrom: ['../src/**/*.js{,x}'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  clearMocks: true,
  testMatch: ['**/__test__/**/*.spec.js{,x}'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testURL: 'http://localhost',
};
