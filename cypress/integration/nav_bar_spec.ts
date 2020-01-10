describe("Nav Bar", () => {
  it("Navigates to the Posts page when 'posts' is clicked", () => {
    cy.visit("/");
    cy.contains("/");

    cy.contains("Posts").click();
    cy.url().should("include", "posts");
  });

  it("Navigates to the About page when 'about me' is clicked", () => {
    cy.visit("/");
    cy.contains("Home");

    cy.contains("About Me").click();
    cy.url().should("include", "about");
  });

  it("Navigates to the Contact page when 'contact' is clicked", () => {
    cy.visit("/");
    cy.contains("Home");

    cy.contains("Contact Us").click();
    cy.url().should("include", "contact");
  });

  it("Navigates to the Home page when the title is clicked", () => {
    cy.visit("/posts");
    cy.url().should("include", "posts");

    cy.get(".logo")
      .find("img")
      .click();
    cy.contains("Home");
  });
});
