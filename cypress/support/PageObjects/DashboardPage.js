class DashboardPage {

   elements = {

   }

   openMenuFromIcons(sectionName){
    cy.get("ul[class='nav-dash']>li>a").each(($element, index, $list)=>{
    if($element.text().includes(sectionName)){
       cy.wrap($element).click()
    }
    })
   }
  
}

export default DashboardPage;