/// <reference types="cypress" />
/// <reference types="cypress-localstorage-commands" />

describe('New pet page', () => {
	beforeEach(() => {
		cy.setLocalStorage('accessToken', 'cypressAcessToken');
	});

	it('new-pet-1: Open page without accessToken', () => {
		cy.removeLocalStorage('accessToken');

		cy.visit('http://localhost:3000/');

		cy.url().should('contain', 'http://localhost:3000/login');
	});
});
