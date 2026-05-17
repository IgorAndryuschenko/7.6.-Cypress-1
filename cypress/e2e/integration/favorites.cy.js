import { generateBook } from "../../support/generateBook";

it("The book is added to the favorites when you select the add to favorite checkbox", () => {
  const book = generateBook();

  cy.visit("/");
  cy.login("test@test.com", "test");
  cy.addNewBookAndAddToFavorite(book.title, book.author);
  cy.visit("/favorites");

  cy.contains(".card", book.title).should("be.visible");
});



it("The book is added to the favorites when you click the 'Add to favorite' button", () => {
  const book = generateBook();

  cy.visit("/");
  cy.login("test@test.com", "test");
  cy.addNewBook(book.title, book.author);
  cy.contains(".card", book.title).contains("Add to favorite").click();
  cy.visit("/favorites");

  cy.contains(".card", book.title).should("be.visible");
});



it("The book is removed from the favorites when you click the 'Delete from favorite' button", () => {
  const book = generateBook();

  cy.visit("/");
  cy.login("test@test.com", "test");
  cy.addNewBookAndAddToFavorite(book.title, book.author);
  cy.visit("/favorites");
  cy.contains(".card", book.title).contains("Delete from favorite").click();

  cy.contains(".card", book.title).should("not.exist");
});
