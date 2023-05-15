class LoginPage {

    elements = {
        loginInput: ()=> cy.get("#loginFrm_loginname"),
        passwordInput: ()=> cy.get("#loginFrm_password"),
        loginButton: ()=> cy.get("[title='Login']")
    }

    typeUsername(username){
       this.elements.loginInput().type(username)
    }

    typePassword(password){
        this.elements.passwordInput().type(password)
    }

    clickLoginButton(){
        this.elements.loginButton().click()
    }

}

export default LoginPage;