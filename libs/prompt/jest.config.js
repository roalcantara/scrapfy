module.exports = {
  testMatch: ['<rootDir>/src/**/*.spec.ts'],  
  name: 'prompt',
  preset: '../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  coverageDirectory: '../../coverage/libs/prompt'
}
