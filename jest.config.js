module.exports = {
  roots: ["<rootDir>/components", "<rootDir>/pages"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
  moduleNameMapper: {
    "^components/(.*)": "<rootDir>/components/$1",
    "^pages/(.*)": "<rootDir>/components/$1"
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  reporters: ["default"],
  verbose: true
};
