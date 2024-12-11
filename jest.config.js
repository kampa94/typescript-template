module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleFileExtensions: ["ts", "js"],
    transform: {
      "^.+\\.ts$": "ts-jest"
    },
    testMatch: ["**/*.spec.ts"],
    coveragePathIgnorePatterns: ["/node_modules/", "/dist/"],
    globals: {
      "ts-jest": {
        tsconfig: "tsconfig.json"
      }
    }
  };
  