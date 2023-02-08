/// <reference types="cypress" />
/// <reference types="cypress-localstorage-commands" />

describe('Signup index page', () => {
	beforeEach(() => {
		cy.removeLocalStorage('accessToken');
	});

	it('signup-index-1: Click to owner card', () => {
		cy.visit('http://localhost:3000/signup');

		cy.get('button[aria-label="Продолжить Для владельцев"]').click();

		cy.url().should('contain', 'http://localhost:3000/signup/owner');
	});

	it('signup-index-2: Click to vet card', () => {
		cy.visit('http://localhost:3000/signup');

		cy.get('button[aria-label="Продолжить Для ветклиники/ветеринаров"]').click();

		cy.url().should('contain', 'http://localhost:3000/signup/vet');
	});

	it('signup-index-3: Click to breeder card', () => {
		cy.visit('http://localhost:3000/signup');

		cy.get('button[aria-label="Продолжить Для заводчиков"]').click();

		cy.url().should('contain', 'http://localhost:3000/signup/breeder');
	});

	it('signup-index-4: Open page with accessToken', () => {
		cy.setLocalStorage('accessToken', 'cypressAcessToken');

		cy.visit('http://localhost:3000/signup');

		cy.url().should('contain', 'http://localhost:3000');
	});
});
