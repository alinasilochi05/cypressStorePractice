

class HeaderComponent{
    elements = {
       logo: ()=> cy.get("[class='logo']"),
       searchBar: ()=> cy.get("#filter_keyword"),
       currency: ()=> cy.get(".language"),
       miniCart: ()=> cy.get(".topcart"),
       facebookIcon: ()=> cy.get("[title='Facebook']"),
       twitterIcon: ()=> cy.get("[title='Twitter']"),
       LinkedinIcon: ()=> cy.get("[title='Linkedin']"),
       loginRegister: ()=> cy.get("#customer_menu_top"),
       cartButton: ()=> cy.get('ul#main_menu_top  .nobackground.top > .menu_text'),
       checkoutButton: ()=> cy.get('ul#main_menu_top  .menu_checkout.top > .menu_text'),
       userMenuTop: ()=> cy.get('div#topnav > .form-control')
    }

    clickLogo(){
        this.elements.logo().click()
    }
    searchKeyword(keyword){
        this.elements.searchBar().click()
        this.elements.searchBar().type(keyword)
        this.elements.searchBar().type('{enter}')
    }
    
    selectCurrency(currencyName){
        this.elements.currency().trigger('mouseover')
        this.elements.currency().contains(currencyName).click()
        
    }

    previewMiniCart(){
        this.elements.miniCart().trigger('mouseover')
    }

    openLoginandRegiserPage(){
        this.elements.loginRegister().click()
    }
    clickCartButton(){
        this.elements.userMenuTop().select('Cart')
        
    }
    clickCheckoutButton(){
        this.elements.userMenuTop().select('Checkout')
    }

}
export default HeaderComponent;