Cypress.Commands.add('login', (email, password) => {
  cy.request('POST', `auth/login`, {
    email: email,
    password: password,
  })
    .as('loginResponse')
    .then((response) => {
      Cypress.env('token', response.body.data.accessToken);
      return response;
    })
    .its('status')
    .should('eq', 200);
})

it('must be able to log in', () => {
  cy.login('dani@ilustiva.com', 'mypassword')
})
