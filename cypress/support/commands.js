Cypress.Commands.add("login", (login, password) => {
  cy.contains("Log in").click();
  cy.get("#mail").type(login);
  cy.get("#pass").type(password);
  cy.contains("Submit").click();
});

Cypress.Commands.add("addNewBook", (title, author) => {
  cy.contains("Add new").click();
  cy.get("#title").type(title);
  cy.get("#authors").type(author);
  cy.contains("Submit").click();
});

Cypress.Commands.add("addNewBookAndAddToFavorite", (title, author) => {
  cy.contains("Add new").click();
  cy.get("#title").type(title);
  cy.get("#authors").type(author);
  cy.get("#favorite").check();
  cy.contains("Submit").click();
});