const { compilerOptions } = require("./tsconfig.json");

Object.assign(compilerOptions, {
  inlineSourceMap: true
});

module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  roots: ["./04-evolution-lit/src"],
  transform: {
    "^.+\\.[jt]sx?$": "ts-jest"
  },
  transformIgnorePatterns: [
    "node_modules/(?!(lit-element|lit-html)/)"
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  collectCoverageFrom: [
    "<rootDir>/04-evolution-lit/src/**/*.ts",
    "!<rootDir>/04-evolution-lit/src/**/*.spec.ts",
    "!<rootDir>/04-evolution-lit/dist/**/*.*"
  ],
  coverageDirectory: "./coverage",
  coverageReporters: ["json", "lcov", "text", "clover"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  // testEnvironment: "jest-environment-happy-dom",
  globals: {
    "ts-jest": {
      tsConfig: compilerOptions
    }
  }
};
