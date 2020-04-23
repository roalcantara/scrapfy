module.exports = {
  testMatch: ['<rootDir>/src/**/*.spec.ts'],  
  name: 'util',
  preset: '../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  coverageDirectory: '../../coverage/libs/util'
}
