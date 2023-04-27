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

describe('testing API categories', () => {
  beforeEach(() => {
    cy.login('dani@ilustiva.com', 'mypassword');
  });

  it('get all Request categories', () => {
    const token = Cypress.env('token');
    const authorization = `bearer ${token}`;
    const options = {
      method: 'GET',
      url: `categories/`,
      headers: {
        authorization,
      }
    };

    cy.request(options)
      .its('status')
      .should('eq', 200);
  })

  it('store request categories', () => {
    const token = Cypress.env('token');
    const authorization = `bearer ${token}`;
    const options = {
      method: 'POST',
      url: `categories/`,
      headers: {
        authorization,
      },
      body: {
        nameCategories: "nft"
      }
    };
    cy.request(options)
      .as('storeResponse')
      .then((response) => {
        Cypress.env('storeCategory', response.body.data.id);
        return response;
      })
  })

  it('update request categories', () => {
    const token = Cypress.env('token');
    const store_categories = Cypress.env('storeCategory');
    const authorization = `bearer ${token}`;
    const options = {
      method: 'PUT',
      url: `categories/${store_categories}`,
      headers: {
        authorization,
      },
      body: {
        nameCategories: "nft"
      }
    };
    cy.request(options)
  })

  it('delete categories', () => {
    const token = Cypress.env('token');
    const store_posts = Cypress.env('storeCategory');
    const authorization = `bearer ${token}`;
    const options = {
      method: 'DELETE',
      url: `categories/${store_posts}`,
      headers: {
        authorization,
      }
    };
    cy.request(options)
  })
});