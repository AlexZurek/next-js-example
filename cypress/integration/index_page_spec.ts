describe("Index page", () => {
  it("Visits the index page", () => {
    cy.visit("/");
    cy.contains("Home");
  });
});
