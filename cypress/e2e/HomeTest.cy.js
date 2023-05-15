import Homepage from "../support/PageObjects/HomePage";

let homePage = new Homepage();

describe(" Verify the products functionality", ()=> {
    beforeEach(()=> {
        cy.visit('https://automationteststore.com/')
    })

    it("Verify that a new product page is open on click", ()=> {
       homePage.clickProduct("Skinsheen Bronzer Stick")
       cy.title().should('eq', 'Skinsheen Bronzer Stick')
    })
   
    it("Verify that product is added to cart", ()=> {
        homePage.clickAddToCartBtn("Benefit Bella Bamba")
     })
    it("Verify the view product functionality", ()=> {
        homePage.viewproduct("Skinsheen Bronzer Stick")
        cy.title().should('eq', 'Skinsheen Bronzer Stick')
    })
    it("Open Write Rewiew Section", ()=> {
        homePage.writeRewiew("Skinsheen Bronzer Stick")
        cy.url().should('include', '#review')
    })




})