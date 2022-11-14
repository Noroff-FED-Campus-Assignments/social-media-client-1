const speed = 500;

describe("Login", () => {
  it("can login as valid user", () => {
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
  });
});
