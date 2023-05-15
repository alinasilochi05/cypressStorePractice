/// <reference types="Cypress" />
import RegisterPage from "../support/PageObjects/RegisterPage";

let registerPage = new RegisterPage();

describe("Register functionality", ()=> {
    beforeEach(()=> {
        cy.visit('https://automationteststore.com/index.php?rt=account/create')
    })

    it("Register with valid data", ()=> {
        registerPage.setFirstName("Test")
        registerPage.setLastName("Test12")
        registerPage.setEmailInput("test109@gmail.com")
        registerPage.setAddressInput("AdressTest")
        registerPage.setCityInput("City12")
        registerPage.setCountryInput("Romania")
        registerPage.setRegionInput("Bacau")
        registerPage.setZipInput("000000")
        registerPage.setLoginName("test.test12")
        registerPage.setPassword("pass123")
        registerPage.setPasswordConfirmation("pass123")
        registerPage.setPrivacyCheckbox()
        registerPage.clickContinueButton()
        
    })
})