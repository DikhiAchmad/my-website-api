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

describe('testing API posts', () => {
  beforeEach(() => {
    cy.login('dani@ilustiva.com', 'mypassword');
  });

  it('get all Request posts', () => {
    const token = Cypress.env('token');
    const authorization = `bearer ${token}`;
    const options = {
      method: 'GET',
      url: `posts/`,
      headers: {
        authorization,
      }
    };

    cy.request(options)
      .its('status')
      .should('eq', 200);
  })

  it('store request posts', () => {
    const token = Cypress.env('token');
    const authorization = `bearer ${token}`;
    const options = {
      method: 'POST',
      url: `posts/`,
      headers: {
        authorization,
      },
      body: {
        title: "hello",
        content: "mamang"
      }
    };
    cy.request(options)
    .as('storeResponse')
      .then((response) => {
        Cypress.env('storePost', response.body.data.id);
        return response;
      })
  })
 
  it('update request posts', () => {
    const token = Cypress.env('token');
    const store_posts = Cypress.env('storePost');
    const authorization = `bearer ${token}`;
    const options = {
      method: 'PUT',
      url: `posts/${store_posts}`,
      headers: {
        authorization,
      },
      body: {
        title: "babang tampav",
        content: "mamang"
      }
    };
    cy.request(options)
  })
  
  it('show detail request posts', () => {
    const token = Cypress.env('token');
    const store_posts = Cypress.env('storePost');
    const authorization = `bearer ${token}`;
    const options = {
      method: 'GET',
      url: `posts/${store_posts}`,
      headers: {
        authorization,
      }
    };
    cy.request(options)
  })
  
  it('delete posts', () => {
    const token = Cypress.env('token');
    const store_posts = Cypress.env('storePost');
    const authorization = `bearer ${token}`;
    const options = {
      method: 'DELETE',
      url: `posts/${store_posts}`,
      headers: {
        authorization,
      }
    };
    cy.request(options)
  })
});