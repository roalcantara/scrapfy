module.exports = {
  testMatch: ['<rootDir>/src/**/*.spec.ts'],  
  name: 'http',
  preset: '../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  coverageDirectory: '../../coverage/libs/http'
}
