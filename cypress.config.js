const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    specPattern:'cypress/E2Etests/VerifyLoginFunctionality.cy.js'
     },
});
