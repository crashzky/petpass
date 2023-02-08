/// <reference types="cypress" />
/// <reference types="cypress-localstorage-commands" />

describe('Signup page', () => {
	beforeEach(() => {
		cy.removeLocalStorage('accessToken');

		cy.intercept('https://api.petpass.space/v1/signup', (req) => {
			switch(req.body.email) {
				case 'exist@mail.ru':
					req.reply(400);
					break;
				case 'server@mail.ru':
					req.reply(500);
					break;
				default:
					req.reply(200, {
						email: req.body.email,
						id: 1,
					});
					break;
			}
		});
	});

	it('signup-1: Write exist email to form', () => {
		cy.visit('http://localhost:3000/signup');

		cy.get('input[type=email]').type('exist@mail.ru');
		cy.get('input[type=password]').type('password');
		cy.get('button').click();

		cy.get('p[role=alert]').should('contain.text', 'Аккаунт с таким email уже есть');
	});

	it('signup-2: Server error', () => {
		cy.visit('http://localhost:3000/signup');

		cy.get('input[type=email]').type('server@mail.ru');
		cy.get('input[type=password]').type('password');
		cy.get('button').click();

		cy.get('p[role=alert]').should('contain.text', 'Что-то пошло не так. Попробуйте ещё раз позже');
	});

	it('signup-3: Write correct data to form', () => {
		cy.visit('http://localhost:3000/signup');

		cy.get('input[type=email]').type('correct@mail.ru');
		cy.get('input[type=password]').type('password');
		cy.get('button').click();

		cy.url().should('contain', 'http://localhost:3000/login');
	});

	it('signup-4: Open page with accessToken', () => {
		cy.setLocalStorage('accessToken', 'cypressAcessToken');

		cy.visit('http://localhost:3000/signup');

		cy.url().should('contain', 'http://localhost:3000');
	});
});
