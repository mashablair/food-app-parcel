/// <reference types="cypress" />

import cards from "../../src/data/recipes";

context("My_Ingredients", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234/");
  });

  it("it has correct correction heading for ingredients", () => {
    cy.contains("h2", "My Ingredients");
  });

  it("it shows all recipes when All Recipes btn is clicked", () => {
    cy.get("#showAll").click();

    // in cards container, the amount of div.card equals to cards.length
    cy.get("#cards .card").should("have.length", cards.length);
    console.log(cards.length);
  });
});
