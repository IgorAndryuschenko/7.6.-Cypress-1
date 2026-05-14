it("The book is added to the favorites when you select the add to favorite checkbox", () => {
  cy.visit("/");
  cy.login("test@test.com", "test");
  cy.addNewBookAndAddToFavorite("Test book", "Test author");
  cy.visit("/favorites");
    cy.contains("Test book").should("be.visible");
});



it("The book is added to the favorites when you click the 'Add to favorite' button", () => {
  cy.visit("/");
  cy.login("test@test.com", "test");
  cy.addNewBook("Test book 2", "Test author 2");
    cy.contains(".card", "Test book 2").parent().contains("Add to favorite").click();
    cy.visit("/favorites");
    cy.contains("Test book 2").should("be.visible");
});



it("The book is removed from the favorites when you click the 'Delete from favorite' button", () => {
  cy.visit("/");
  cy.login("test@test.com", "test");
    cy.addNewBookAndAddToFavorite("Test book 3", "Test author 3");
    cy.visit("/favorites");
    cy.contains(".card", "Test book 3").parent().contains("Delete from favorite").click();
    cy.contains(".card", "Test book 3").should("not.exist");
});