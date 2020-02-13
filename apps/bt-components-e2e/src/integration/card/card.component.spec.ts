describe('bt-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cardcomponent--primary'));

  it('should render the component', () => {
    cy.get('my-account-workspace-card').should('exist');
  });
});
