describe("Index page", () => {
  it("Visits the index page", () => {
    cy.visit("/");
    cy.contains("Home");
  });

  it("Mocks the api route", () => {
    cy.server();
    cy.route("/api", { name: "Jane Doe" });

    cy.visit("/");
    cy.contains("Home");
    cy.contains("Jane Doe");
  });
});
