module.exports = {
  preset: 'ts-jest',
  testMatch: ['<rootDir>/tests/*.ts(x)?'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
}
