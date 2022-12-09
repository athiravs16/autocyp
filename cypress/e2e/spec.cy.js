/// <reference types="cypress"/>
  describe('My First Test Suite', () => {
  it('My First Test Case', () => {
    cy.visit('https://phptravels.com/pricing')
    cy.title('be.equal','PHPTRAVELS PLANS & PRICING')
    cy.get('#PHPTRAVELS').should('have.text','PHPTRAVELS')
    cy.get('#TRAVEL_TECHNOLOGY_PARTNER').should('have.text','TRAVEL TECHNOLOGY PARTNER')
    //cy.get('.jfHeader-menuListLink').eq(0).click()
    cy.get('.jfHeader-menuListLink').should('have.length',10)
    cy.get('.jfHeader-menuListLink:visible').should('have.length',7)

    cy.get('.logo').then(function(lg)
    {cy.log(lg.text())
     }) 
     const gl=cy.get('.logo')
    cy.get('.jfHeader-logoWrapper').should('exist')
    cy.get('.jfHeader-menuWrapper').contains('Pricing').should('exist')
    cy.get('.jfHeader-menuListLink:visible').should('exist')
    cy.wait(2000)
    cy.get('.js-missingAccountInfo.desktop-hidden').should('not.be.visible')


     cy.get(':nth-child(4) > .desktop-hidden > .jfHeader-menuListLink').should('have.attr','href','https://phptravels.com/demo')
     cy.get(':nth-child(4) > .desktop-hidden > .jfHeader-menuListLink').click({force:true})
     cy.go('back')
     
     cy.get('.jfHeader-menuListItem:visible').should('have.length',7)
     cy.get('.jfHeader-content').should('be.visible')
     cy.get(':nth-child(3) > .jfHeader-menuListLink').should('have.text','Features')
     cy.get('.jfHeader-menuListLink:visible').eq(2).contains('Features').click()
     cy.get(':nth-child(4) > .jfHeader-menuListLink').should('have.text','Integrations')
     cy.get('.jfHeader-menuListLink:visible').eq(3).contains('Integrations').click()
     cy.get('.jfHeader-support-menu > .jfHeader-menuListLink').should('have.text','Company')
     cy.get('.jfHeader-menuListLink:visible').eq(4).contains('Company').click({force:true})
     cy.get('.jfHeader-menuListLink').eq(2).should('be.visible')
     cy.get('.jfHeader-menuListLink').eq(3).should('be.visible')
     cy.get('.jfHeader-menuListLink').eq(4).should('be.visible')
     
    cy.get('.signup-btn-wrapper > .jfHeader-menuListLink').should('have.attr','href','https://phptravels.org/register.php')
    cy.get('.signup-btn-wrapper > .jfHeader-menuListLink').invoke('removeAttr','target').click()
    cy.go('back')
    cy.get('.login-btn-wrapper > .jfHeader-menuListLink').should('have.attr','href','https://phptravels.org/login')
    cy.get('.login-btn-wrapper > .jfHeader-menuListLink').invoke('removeAttr','target').click()
    cy.go('back')
    cy.get('.logo').should('be.visible')
  
    cy.get('.mb-0').should('have.text','Plans and Prices')
    cy.get('.mt0').should('be.visible')
    cy.get('.princing-section').should('be.visible')

    cy.get(':nth-child(1) > .pricing-package > :nth-child(1) > small').should('be.visible')
    cy.get(':nth-child(2) > .pricing-package > :nth-child(1) > small').should('be.visible')
    cy.get(':nth-child(3) > .pricing-package > :nth-child(1) > small').should('be.visible')
    cy.get(':nth-child(4) > .pricing-package > :nth-child(1) > small').should('be.visible')
    cy.get('.strong').should('have.length',8)
    cy.get('.pricing-package-name').should('have.length',4) 
    cy.get('.container:visible').should('have.length',6)  
    cy.get('#content').should('be.visible')


    cy.get(':nth-child(1) > .pricing-package > .pricing-package-price').should('be.visible')
    cy.get(':nth-child(2) > .pricing-package > .pricing-package-price').should('be.visible')
    cy.get(':nth-child(3) > .pricing-package > .pricing-package-price').should('be.visible')
    cy.get(':nth-child(4) > .pricing-package > .pricing-package-price').should('be.visible')
    
  
    cy.get('.jfHeader-menuList').find('.jfHeader-menuListItem:visible').should('have.length',7)
    cy.wait(4000)
    cy.get(':nth-child(1) > .pricing-package > .pricing-package-name > strong').should('have.text','Startup')
    cy.get(':nth-child(2) > .pricing-package > .pricing-package-name > strong').should('have.text','Agency')
    cy.get(':nth-child(3) > .pricing-package > .pricing-package-name > strong').should('have.text','Business')
    cy.get(':nth-child(4) > .pricing-package > .pricing-package-name > strong').should('have.text','Enterprise')
    cy.get('.pricing-package').should('be.visible')
    cy.get('.col-md-3').should('exist')

    cy.get('.df:visible').should('exist')


    cy.get('.df:visible').eq(1).should('exist')
    cy.get('.df:visible').eq(2).should('exist')
    
    cy.get('[data-wow-delay="1.4s"] > .feature-svg').should('be.visible')
    cy.get('.logos').should('be.visible')
    cy.get('.row').should('be.visible')

    cy.get(':nth-child(1) > .pricing-package > .pricing-package-price').should('have.text','$50 / Monthly')
   

    })

    it('My second Test Case', () => {
      cy.visit('https://phptravels.com/pricing')
      cy.get(':nth-child(1) > .pricing-package > .sticky > .btn').should('have.attr','href','https://link.phptravels.com/startup')
      cy.get(':nth-child(1) > .pricing-package > .sticky > .btn').invoke('removeAttr','target').click({force:true})
      cy.go('back')
      cy.get(':nth-child(2) > .pricing-package > .sticky > .btn').should('have.attr','href','https://link.phptravels.com/agency')
      cy.get(':nth-child(2) > .pricing-package > .sticky > .btn').invoke('removeAttr','target').click()
      cy.go('back')
      cy.get(':nth-child(3) > .pricing-package > .sticky > .btn').should('have.attr','href','https://link.phptravels.com/business')
      cy.get(':nth-child(3) > .pricing-package > .sticky > .btn').invoke('removeAttr','target').click()
      cy.go('back')
      cy.get(':nth-child(4) > .pricing-package > .sticky > .btn').should('have.attr','href','https://link.phptravels.com/enterprise')
      cy.get(':nth-child(4) > .pricing-package > .sticky > .btn').invoke('removeAttr','target').click()
      cy.go('back')
      cy.get('.btn').should('exist')
    
  
  })
})