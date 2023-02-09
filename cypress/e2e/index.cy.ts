/// <reference types="cypress" />
/// <reference types="cypress-localstorage-commands" />

describe('Dashboard page', () => {
	beforeEach(() => {
		cy.setLocalStorage('accessToken', 'cypressAcessToken');
	});

	it('dashboard-1: Click to create new pet', () => {
		cy.visit('http://localhost:3000');

		cy.get('button').click();

		cy.url().should('contain', 'http://localhost:3000/pets/new');
	});

	it('dashboard-2: Open page without accessToken', () => {
		cy.removeLocalStorage('accessToken');

		cy.visit('http://localhost:3000/');

		cy.url().should('contain', 'http://localhost:3000/login');
	});
});
