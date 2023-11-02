const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1400,
  e2e: {
    baseUrl: "http://localhost:8080",
    specPattern: "cypress/e2e/*.cy.js",
    excludeSpecPattern: '**/examples/*',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
