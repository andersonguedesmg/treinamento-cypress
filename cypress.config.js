const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 3000,
    viewportHeight: 720,
    viewportWidth: 1280,
    baseUrl: "http://177.153.230.45:90/P360ESTOQUE",
  },
});
