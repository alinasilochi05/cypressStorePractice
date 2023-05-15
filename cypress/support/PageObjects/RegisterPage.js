class RegisterPage {

    elements = {
        firstNameInput: () => cy.get("#AccountFrm_firstname"),
        lastNameInput: () => cy.get("#AccountFrm_lastname"),
        emailInput: ()=> cy.get("#AccountFrm_email"),
        address1Input: () => cy.get("#AccountFrm_address_1"),
        cityInput: () => cy.get("#AccountFrm_city"),
        zipCodeInput: ()=> cy.get("#AccountFrm_postcode"),
        loginNameInput: ()=> cy.get("#AccountFrm_loginname"),
        passwordInput: ()=> cy.get("#AccountFrm_password"),
        passwordConfirmInput: ()=> cy.get("#AccountFrm_confirm"),
        regionInput: ()=> cy.get("#AccountFrm_zone_id"),
        countryInput: ()=> cy.get("#AccountFrm_country_id"),
        checkbox: ()=> cy.get("#AccountFrm_agree"),
        continueButton: ()=> cy.get("button[title='Continue']")
    }

    setRegionInput(region){
       this.elements.regionInput().select(region)
    }

    setCountryInput(country){
        this.elements.countryInput().select(country)
    }
    setFirstName(name){
        this.elements.firstNameInput().type(name)
    }
    setLastName(lastName){
        this.elements.lastNameInput().type(lastName)
    }
    setEmailInput(email){
        this.elements.emailInput().type(email)
    }
    setAddressInput(address){
        this.elements.address1Input().type(address)
    }
    setCityInput(city){
        this.elements.cityInput().type(city)
    }
    setZipInput(zip){
        this.elements.zipCodeInput().type(zip)
    }
    setLoginName(loginName){
       this.elements.loginNameInput().type(loginName)
    }
    setPassword(password){
        this.elements.passwordInput().type(password)
    }
    setPasswordConfirmation(passConfirm){
        this.elements.passwordConfirmInput().type(passConfirm)
    }
    setPrivacyCheckbox(){
        this.elements.checkbox().check();
    }
    clickContinueButton(){
       this.elements.continueButton().click();
    }

}
export default RegisterPage;