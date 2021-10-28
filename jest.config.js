module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    // for alias
    '@components/(.*)': '<rootDir>/components/$1',
    '@elements': '<rootDir>/components/elements/index.tsx',
    '@config/(.*)': '<rootDir>/config/$1',
    '@hooks/(.*)': '<rootDir>/hooks/$1',
    '@redux/(.*)': '<rootDir>/redux/$1',
    '@pages/(.*)': '<rootDir>/pages/$1',
    '@utils/(.*)': '<rootDir>/utils/$1',
    '@tests/(.*)': '<rootDir>/tests/$1'
  }
}
