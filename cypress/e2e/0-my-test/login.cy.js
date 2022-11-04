describe("Login", () => {
  it("can login as valid user", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.get("#register-form").click("button.btn.btn-outline-success");
    cy.get("input#loginEmail").type("jowander_@noroff.no", { delay: 200 });
    cy.get("input#password").type("12345678{enter}", { delay: 200 });
    cy.url().should("include", "/index");
  });
});
