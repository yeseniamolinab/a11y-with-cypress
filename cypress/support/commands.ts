/// <reference types="cypress" />
import 'cypress-axe';
import { a11yConfigOptions, terminalLog } from './helpers';
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// cypress/support/commands.ts

// Overwrite the cy.visit command
// cypress/support/commands.ts

// Import VisitOptions from Cypress types

// Overwrite the cy.visit command with proper types
Cypress.Commands.overwrite(
    'visit',
    (originalFn: Cypress.CommandOriginalFn<'visit'>, url: string | Partial<Cypress.VisitOptions>, options?: Partial<Cypress.VisitOptions>) => {
        const baseUrl = Cypress.config("baseUrl")?.replace(/\/$/, "") || process.env.CYPRESS_BASE_URL;
        console.log('baseUrl', Cypress.config("baseUrl"));
        originalFn({
          url: `${baseUrl}${url}`,
            ...options,
        });

        // Inject Axe after the page loads
    cy.then(() => {
        cy.injectAxe();
      });
        
    }
  );

Cypress.Commands.overwrite('checkA11y', (originalFn, context, options) => {
    cy.checkA11y
    originalFn(context, {
        runOnly: {
          type: "tag",
          values: [
            "wcag2a",
            "wcag2aa",
            "wcag21a",
            "wcag21aa",
            "cat.keyboard",
            "cat.structure",
          ],
        },
        includedImpacts: ["critical", "serious", "moderate"],
      }, terminalLog);
  });


