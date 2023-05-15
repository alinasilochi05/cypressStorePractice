import LoginPage from "../PageObjects/LoginPage";
let loginPage = new LoginPage();

class LoginHandler {
    
    login(username, password){
        cy.visit("https://automationteststore.com/index.php?rt=account/login")
        loginPage.typeUsername(username)
        loginPage.typePassword(password)
        loginPage.clickLoginButton()
    }
}

export default LoginHandler;