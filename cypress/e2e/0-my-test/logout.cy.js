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
    cy.get("button.btn.btn-outline-warning").click({ delay: speed });
  });
});
