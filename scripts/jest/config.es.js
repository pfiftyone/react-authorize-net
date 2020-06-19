const srcConfig = require('./config.src')

module.exports = Object.assign({}, srcConfig, {
  collectCoverage: false,
  moduleNameMapper: {
    '^../src$': `<rootDir>/es/react-authorize-net.cjs`,
    '\\.(css|woff2)$': '<rootDir>/__mocks__/styleMock.ts',
  }
})

