/// <reference types="Cypress" />
import TopMenuComponent from "../support/Components/TopMenuComponent"

let topMenuComponent = new TopMenuComponent();

describe("Verify the top menu bar functionality", ()=> {
    beforeEach(()=> {
        cy.visit('https://automationteststore.com/')
    })

    it("Open subcategories hover over category", ()=> {
        topMenuComponent.hoverElement("Men")
        cy.title().should('eq', 'Men')

    })
})