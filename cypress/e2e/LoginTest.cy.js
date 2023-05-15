/// <reference types="Cypress" />
import LoginPage from '../support/pageObjects/LoginPage'
let loginPage = new LoginPage();


describe('Verify the login functionality', ()=> {
    beforeEach(()=> {
        cy.visit('https://automationteststore.com/index.php?rt=account/login')
    })

    it('Login with valid credentials', ()=>{
    loginPage.typeUsername("gloria")
    loginPage.typePassword("pass")
    loginPage.clickLoginButton()
    cy.title().should('eq', 'My Account')
    })
})