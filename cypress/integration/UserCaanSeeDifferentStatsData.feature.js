describe('user can see different stats information', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  describe('succesfully', () => {
    it('is expected to show  different stats data', () => {
      cy.get('[data-cy=icon]').should('be.visible');
      cy.get('[data-cy=label]').should('contain', 'Points');
      cy.get('[data-cy=number]').should('contain', '3,000');
    });
  });
});
