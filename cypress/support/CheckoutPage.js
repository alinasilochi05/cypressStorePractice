class CheckoutPage {

    elements={
       editShipping: ()=> cy.get(".confirm_shippment_options.table .btn.btn-default.btn-xs"),
       editPayment: ()=> cy.get(".confirm_payment_options.table .align_right > a:nth-of-type(1)]"),
       editCupon: ()=> cy.get(".align_right > a:nth-of-type(2)"),
       editCart: ()=> cy.get(".btn.btn-default.btn-xs.mr10.pull-right"),
       backButton: ()=> cy.get("[title='Back']")
       
    }

    clickEditShipping(){
        this.elements.editShipping().click()
    }
    clickEditPayment(){
        this.elements.editPayment().click()
    }
    clickEditCupon(){
        this.elements.editCupon().click()
    }
    clickEditCart(){
        this.elements.editCupon().click()
    }
    clickBackButton(){
        this.elements.backButton().click()
    }


}
export default CheckoutPage;