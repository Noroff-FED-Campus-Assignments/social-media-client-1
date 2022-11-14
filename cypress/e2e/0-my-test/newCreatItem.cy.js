const speed = 500;

describe("new create item", () => {
  it("can a valid user create a post", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.wait(speed);
    cy.get('[data-bs-target="#loginModal"]')
      .last({ delay: speed })
      .click({ delay: speed });
    cy.wait(speed);
    cy.get("input#loginEmail").type("jowander_@noroff.no", {
      force: true,
      delay: speed,
    });
    cy.get("input#loginPassword").type("12345678{enter}", {
      force: true,
      delay: speed,
    });
    cy.get("#footerActions > .btn-outline-success").click({ delay: speed });
    cy.get("#postTitle").type("Jan Haug");
    cy.get("input#postMedia").type(
      "https://docplayer.me/docs-images/46/17426375/images/page_17.jpg",
      { delay: speed }
    );
    cy.get("textarea#postBody").type(
      "He is the Boss of Bosses at Rosenberg shipyard",
      { delay: speed }
    );
    cy.get("#footerActions > .btn-outline-success").click({ delay: speed });
  });
});
