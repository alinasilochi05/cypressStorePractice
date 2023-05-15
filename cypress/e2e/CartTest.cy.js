import HeaderComponent from "../support/Components/HeaderComponent";
import LoginHandler from "../support/Handlers/loginHandler";
import CartPage from "../support/PageObjects/CartPage";
import Homepage from "../support/PageObjects/HomePage";


let loginHandler = new LoginHandler();
let cartPage = new CartPage();
let homepage = new Homepage();
let header = new HeaderComponent()


describe("Test cart functionalities", ()=> {
    beforeEach(()=> {
        loginHandler.login("gloria", "pass")
        header.clickLogo()
        homepage.clickAddToCartBtn()
      
        cy.visit("https://automationteststore.com/index.php?rt=checkout/cart")
    
    })

    it("Change quantity of product", ()=> {
      cartPage.setQuantity("3")
      cartPage.elements.quantityButton().should('have.value', '3')
    })

    it("Estimate shippingand taxes", ()=> {
      cartPage.estimateShipping("Romania", "Timis", "123456")
      
    })

    it("Apply cupon code with invalid data", ()=> {
    cartPage.applyCupon("12345")
    cartPage.elements.cuponMessage().should('eq', "Error: Coupon is either invalid, expired or reached it's usage limit!")
    })

    it("Open checkout page", ()=> {
        cartPage.clickCheckoutButton()
        cy.title().should('eq', "Checkout Confirmation")
    })

})