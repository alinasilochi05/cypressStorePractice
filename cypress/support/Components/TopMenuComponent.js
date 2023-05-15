class TopMenuComponent {

hoverElement(categoryText){
    cy.get('ul[class="nav-pills categorymenu"]>li>a').each(($element, index, $list) => {
    if($element.text().includes(categoryText)){
        cy.wrap($element).trigger('mouseover')
    }
})
}

}


export default TopMenuComponent;
