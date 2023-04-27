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
        title: "PATH ALIAS IN JAVASCRIPT AND TYPESCRIPT",
        content: "One of the things I hate is having to import a file using a relative path. I mean, it’s not a problem when you only have ../path/to/file.js, but it starts to become a headache when you have a deeply nested file the import statements are just full of ../../../path/to/file.js nonsense. Not to mention the pain when you move the file and having to update the import path. Fortunately, we can avoid this by using a path alias!",
        status: "publish",
        category: "3acd588d-22fa-4e54-9001-366f2d4245f4"
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
        title: "PATH ALIAS",
        content: "One of the things I hate is having to import a file using a relative path. I mean, it’s not a problem when you only have ../path/to/file.js, but it starts to become a headache when you have a deeply nested file the import statements are just full of ../../../path/to/file.js nonsense. Not to mention the pain when you move the file and having to update the import path. Fortunately, we can avoid this by using a path alias!",
        status: "publish",
        category: "17b86894-cf70-471c-809e-f6c17667709f"
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