class FooterComponent {

elements = {
    emailInput: () => cy.get('#appendedInputButton'),
    subscribeButton: () => cy.get("button[type='submit']"),
    socialIcons: ()=> cy.get(".social_icons")
}

setEmailInput(email){
    this.elements.emailInput().type(email)
}
clicKSubscribeBtn(){
    this.elements.subscribeButton().click()
}

selectSocialPlatform(socialPlatform){
    this.elements.socialIcons().contains(socialPlatform).click()
}


}

export default FooterComponent;