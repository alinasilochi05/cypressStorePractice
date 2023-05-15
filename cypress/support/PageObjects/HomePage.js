class Homepage {

    elements = {
        product: ()=> cy.get(".fixed"),
        cartIcon: ()=> cy.get(".productcart"),
       
    }

    clickProduct(productName){
        this.elements.product().contains(productName).click()
    }

    clickAddToCartBtn(productName){
       cy.get(".fixed").each(($element, index)=> {
          if($element.text().includes(productName)){
           cy.get(".productcart").eq(index).click()
          }
       })
    }

    viewproduct(productName){
       cy.get(".fixed").each(($element, index, $list) => {
        if($element.text().includes(productName)){
          cy.get(".details").eq(index).click({force: true})
        } 

       })
    }

    writeRewiew(productName){
        cy.get(".fixed").each(($element, index) => {
            if($element.text().includes(productName)){
              cy.get(".compare").eq(index).click({force: true})
            } 
    
           })
    }  


}

export default Homepage;