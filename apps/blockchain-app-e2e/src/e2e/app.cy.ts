import { getGreeting } from '../support/app.po';

describe('blockchain-app-e2e', (): void => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', (): void => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(/Welcome/);
  });
});
