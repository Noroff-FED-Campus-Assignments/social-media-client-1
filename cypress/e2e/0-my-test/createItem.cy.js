const speed = 2000;

describe("Login", () => {
  it("can login as valid user", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.get("button.btn.btn-outline-success").last().click({ delay: speed });
    cy.get("input#loginEmail").type(
      "jowander_@noroff.no",
      { force: true },
      { delay: speed }
    );
    cy.wait(speed);
    cy.get("input#loginPassword").type(
      "12345678{enter}",
      { force: true },
      { delay: speed }
    );
    cy.wait(speed);
    cy.get("a.btn.btn-outline-success").click({ multiple: true });
    cy.wait(speed);
    cy.get("input#postTitle").type(
      "Jan Haug",
      { force: true },
      { delay: speed }
    );
    cy.wait(speed);
    cy.get("input#postMedia").type(
      "https://docplayer.me/docs-images/46/17426375/images/page_17.jpg"
    );
    cy.wait(speed);
    cy.get("textarea#postBody").type(
      "He is the Boss of Bosses at Rosenberg shipyard"
    );
    cy.wait(speed);
    cy.get(".btn-success").contains("Publish").click({ force: true });
  });
});
