/// <reference types="Cypress" />

import FooterComponent from "../support/Components/FooterComponent";

let footerComponent = new FooterComponent()

describe("Verify the futer functionality", () => {

    beforeEach(()=> {
        cy.visit('https://automationteststore.com/')
    })

    it("Verify the subscribe functionality with valid data", ()=> {
         footerComponent.setEmailInput("test123@gmail.com")
         footerComponent.clicKSubscribeBtn()
         cy.title().should('eq', 'Become a newsletter subscriber')
    })

    it("Verify that Facebook platform is open", ()=> {
        cy.scrollTo('bottom')
        footerComponent.selectSocialPlatform("Facebook")
        cy.title().should('eq', 'Facebook - conectează-te sau înscrie-te')
    })
} )