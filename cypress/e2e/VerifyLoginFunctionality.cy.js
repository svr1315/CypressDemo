import * as Properties from '../fixtures/properties'; 
describe('VerifyLoginFunctionality', () => {
    beforeEach(() => { 
        cy.log('Test case execution has started')      
        cy.visit(Properties.baseURL)
        cy.wait(2000)
        cy.get("input[name='username']").type(Properties.username)
        cy.get("input[name='password']").type(Properties.password)
        cy.get("button[type='submit']").click()
        cy.wait(3000)
        cy.get("div.oxd-topbar-header-title > span > h6").should('have.text','Dashboard')
      }) 
    
    it("VerifySuccessfulLogin",()=>{
        cy.get("div.oxd-topbar-header-title > span > h6").should('have.text','Dashboard')
    })
    it('VerifyLogoutFunctionality',() => {
        cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").should('be.visible')
        cy.get("#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-userarea > ul > li > span > i").click()
        cy.wait(5000)
        cy.get("#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-userarea > ul > li > ul > li:nth-child(4) > a").click()
        cy.wait(5000)
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > h5').should('have.text', 'Login')

    })    
    afterEach(() => { 
        cy.log('Test case execution has ended') 
        }) 
})