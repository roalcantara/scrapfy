module.exports = {
  testMatch: ['<rootDir>/src/**/*.spec.ts'],  
  name: 'domain',
  preset: '../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  coverageDirectory: '../../coverage/libs/domain'
}
