module.exports = {
  moduleNameMapper: {
    "^src(.*)$": "<rootDir>/src$1",
    "^test(.*)$": "<rootDir>/test$1"
  },
  testMatch: ["<rootDir>/test/**/*.spec.js"]
}