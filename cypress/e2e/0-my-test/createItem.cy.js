const speed = 500;

describe("Create post", () => {
  it("can valid user create a post", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.get("#registerForm > .modal-footer > .btn-outline-success").click({
      force: true,
    });
    cy.get('[data-bs-target="#loginModal"]').last().click({ delay: speed });
    cy.get("input#loginEmail").type("jowander_@noroff.no", {
      force: true,
      delay: speed,
    });
    cy.get("input#loginPassword").type("12345678", { force: true });
    cy.get("#loginForm > .modal-footer > .btn-success").click({
      force: true,
      delay: speed,
    });
    cy.get("#footerActions > .btn-outline-success").click({
      force: true,
      delay: speed,
    });
    cy.wait(speed);
    cy.get('[data-cy="postTitleInput"]').type("Jan Haug", {
      force: true,
      delay: speed,
    });
    cy.get("input#postMedia").type(
      "https://docplayer.me/docs-images/46/17426375/images/page_17.jpg"
    );
    cy.get("textarea#postBody").type(
      "He is the Boss of Bosses at Rosenberg shipyard"
    );
    cy.get('[data-action="submit"]').click({ force: true });
  });
});
