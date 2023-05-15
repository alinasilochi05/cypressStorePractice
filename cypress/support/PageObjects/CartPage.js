class CartPage {

    elements = {
        checkoutButton: ()=> cy.get('#cart_checkout1'),
        updateButton: ()=> cy.get('#cart_checkout1'),
        removeButton: ()=> cy.get('.btn-sm'),
        quantityButton: ()=> cy.get('#cart_quantity65'),
        cuponInput: ()=> cy.get('#coupon_coupon'),
        applyCuponButton: ()=> cy.get('#apply_coupon_btn'),
        countryInput: ()=> cy.get('#estimate_country'),
        zoneInput: ()=> cy.get('#estimate_country_zones'),
        zipInput: ()=> cy.get('#estimate_postcode'),
        estimateButton: ()=> cy.get('[value="estimate"]'),
        cuponMessage: ()=> cy.get(".alert.alert-danger.alert-error")

    }

    estimateShipping(country, zone, zip){
        this.elements.countryInput().select(country),
        this.elements.zoneInput().select(zone),
        this.elements.zipInput().type(zip),
        this.elements.estimateButton().click()
    }

    setQuantity(quantity){
        this.elements.quantityButton().clear().type(quantity)
    }

    removeProduct(){
        this.elements.removeButton().click();
    }

    applyCupon(cuponValue){
        this.elements.cuponInput().type(cuponValue)
        this.elements.applyCuponButton().click()
    }

    clickCheckoutButton(){
        this.elements.checkoutButton().click()
    }

    clickUpdateButton(){
        this.elements.updateButton().click()
    }

}
export default CartPage;