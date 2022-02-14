const config = {
  verbose: true,
  rootDir: "/usr/app",
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\\/]+$"],
  coveragePathIgnorePatterns: ["srcs/index.tsx"],
  transform: {
    '\\.tsx$': ['babel-jest', { configFile: '/usr/app/configuration/.babelrc' }]
  }
};

module.exports = config;
