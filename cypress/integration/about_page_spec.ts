describe("About page", () => {
  it("Visits the about page", () => {
    cy.visit("/about");
    cy.contains("About");
  });
});
