module.exports = {
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  name: 'crawler',
  preset: '../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  coverageDirectory: '../../coverage/libs/crawler'
}
