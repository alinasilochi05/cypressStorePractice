import LoginHandler from "../support/Handlers/loginHandler";
import DashboardPage from "../support/PageObjects/DashboardPage";

let dashoardPage = new DashboardPage();
let loginHanler = new LoginHandler;

describe("Verify the functionalities of DashoardPage", ()=> {
    beforeEach(()=> {
        loginHanler.login('gloria', "pass")
    })

    it("Open Edit Account details from icons", ()=> {
    dashoardPage.openMenuFromIcons('Edit account details')
    cy.title().should('eq', 'Edit Account details')
    })
})