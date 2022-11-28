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
    cy.get('#loginSignup').click()

    cy.get('.logo').should('be.visible')
  
    cy.get('.mb-0').should('have.text','Plans and Prices')
    cy.get('.mt0').should('be.visible')
    
    cy.get('.container:visible').should('have.length',6)
    
    cy.get('.jfHeader-menuListItem')
    cy.get('.jfHeader-menuListItem:visible').should('have.length',7)
    
    cy.get('.jfHeader-content').should('be.visible')

    cy.get('.jfHeader-logoWrapper').should('exist')
    cy.get('.jfHeader-menuWrapper').contains('Pricing').should('exist')
    cy.get('.jfHeader-menuListLink:visible').should('exist')
    cy.wait(2000)
    cy.get('.js-missingAccountInfo.desktop-hidden').should('not.be.visible')
    
    cy.get('#jfHeader-userProfile').click({force:true})
    cy.get('.jfHeader-menuList:visible').click({multiple:true})
    
    cy.get('.jfHeader-menuList').find('.jfHeader-menuListItem:visible').should('have.length',7)

    cy.get('.sticky').should('be.visible')
    
    cy.wait(4000)
    cy.get('.pricing-package-name').eq(0).should('have.text','Startup')
    cy.get('.pricing-package-name').eq(1).should('have.text','Agency')
    cy.get('.pricing-package-name').eq(2).should('have.text','Business')
    cy.get('.pricing-package-name').eq(3).should('have.text','Enterprise')
    cy.get('.pricing-package').should('be.visible')
    cy.get('.col-md-3').should('exist')

    cy.get('.df:visible').should('exist')

    cy.get('.df:visible').eq(1).should('exist')
    cy.get('.df:visible').eq(2).should('exist')
   

    cy.get('.btn.subscribe').eq(0).contains('Subscribe').click()
    cy.get('.btn.subscribe').eq(1).contains('Subscribe').click()
    cy.get('.btn.subscribe').eq(2).contains('Subscribe').click({force:true})
    cy.contains('Buy Now').click()
    cy.get('.btn').should('exist')
    
  
  })
})