/// <reference types="Cypress" />

import HeaderComponent from "../support/Components/HeaderComponent";

let headerComponent = new HeaderComponent();

describe("Header components", ()=> {
    beforeEach(()=> {
        cy.visit('https://automationteststore.com/')
    })

    it("open Login/Register Page", ()=> {
    headerComponent.openLoginandRegiserPage()
    cy.title().should('eq', "Account Login")
    })

    it("verify the logo functionality", ()=> {
        headerComponent.clickLogo()
        cy.title().should('eq', "A place to practice your automation skills!")
    })
    it("Change the currency in Euro", ()=> {
        headerComponent.selectCurrency('€ Euro')
    })
    it("Open Minicart", ()=> {
        headerComponent.previewMiniCart()
    })
    it("Search a category product", ()=> {
        headerComponent.searchKeyword('calvin')
        cy.title().should('includes', "calvin")

    })
    it("Open Cart Page", ()=> {
        headerComponent.clickCartButton()
        cy.title().should('includes', "Cart")
    })
    it.only("Open Checkout Page", ()=> {
        headerComponent.clickCheckoutButton()
        cy.title().should('includes', "Checkout")
    })


    })