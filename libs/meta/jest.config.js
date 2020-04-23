module.exports = {
  testMatch: ['<rootDir>/src/**/*.spec.ts'],  
  name: 'meta',
  preset: '../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  coverageDirectory: '../../coverage/libs/meta'
}
