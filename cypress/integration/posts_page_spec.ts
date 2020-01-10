describe("Posts page", () => {
  it("Sees all of the posts", () => {
    cy.visit("/posts");
    cy.contains("My first post");
    cy.contains("My second post");
    cy.contains("My third post");
    cy.contains("My fourth post");
    cy.contains("My fifth post");
    cy.contains("My sixth post");
  });

  it("Visits the first post", () => {
    cy.visit("/posts");
    cy.contains("My first post").click();

    cy.url().should("include", "post/1");

    cy.get("h1").contains("My first post");
  });

  it("Visits the last post", () => {
    cy.visit("/posts");
    cy.scrollTo("bottom");
    cy.contains("My sixth post").click();

    cy.url().should("include", "post/6");

    cy.get("h1").contains("My sixth post");
  });
});
