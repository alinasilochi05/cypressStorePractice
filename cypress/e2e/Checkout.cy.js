import CheckoutPage from "../support/CheckoutPage"
import LoginHandler from "../support/Handlers/loginHandler"
let checkoutPage = new CheckoutPage()
let loginHandler = new LoginHandler()

describe("Verify the CheckoutPage functionalities", ()=> {
    beforeEach(()=> {
        loginHandler.login("gloria", "pass")
        cy.visit("https://automationteststore.com/index.php?rt=checkout/confirm")
    })
    it('Open Edit Shipping Page', ()=> {
        checkoutPage.clickEditShipping();
        cy.title().should('eq', 'Delivery Information')
    })
    it('Open Edit Cupon Page', ()=> {
        checkoutPage.clickEditCupon();
        cy.title().should('eq', 'Payment Information')
    })
    it('Open Edit Cart Page', ()=> {
        checkoutPage.clickEditCart();
        cy.title().should('eq', 'Shopping Cart')
    })
    it('Go to previous page', ()=> {
        checkoutPage.clickBackButton();
        cy.title().should('eq', 'Payment Information')
    })
})