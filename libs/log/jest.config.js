module.exports = {
  testMatch: ['<rootDir>/src/**/*.spec.ts'],    
  name: 'log',
  preset: '../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  coverageDirectory: '../../coverage/libs/log'
}
