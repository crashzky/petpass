/// <reference types="cypress" />
/// <reference types="cypress-localstorage-commands" />

describe('Login page', () => {
	beforeEach(() => {
		cy.removeLocalStorage('accessToken');

		cy.intercept('https://api.petpass.space/v1/signin', (req) => {
			switch(req.body.email) {
				case 'correct@mail.ru':
					req.reply(200, {
						type: 'Bearer',
						token: 'cypressAcessToken',
					});
					break;
				case 'server@mail.ru':
					req.reply(500);
					break;
				default:
					req.reply(404);
					break;
			}
		});
	});

	it('login-1: Write wrong data to form', () => {
		cy.visit('http://localhost:3000/login');

		cy.get('input[type=email]').type('wrong@mail.ru');
		cy.get('input[type=password]').type('password');
		cy.get('button').click();

		cy.get('p[role=alert]').should('contain.text', 'Неверный логин или пароль');
	});

	it('login-2: Server error', () => {
		cy.visit('http://localhost:3000/login');

		cy.get('input[type=email]').type('server@mail.ru');
		cy.get('input[type=password]').type('password');
		cy.get('button').click();

		cy.get('p[role=alert]').should('contain.text', 'Что-то пошло не так. Попробуйте ещё раз позже');
	});

	it('login-3: Write correct data to form', () => {
		cy.visit('http://localhost:3000/login');

		cy.get('input[type=email]').type('correct@mail.ru');
		cy.get('input[type=password]').type('password');
		cy.get('button').click();

		cy.getLocalStorage('accessToken').should('eq', 'cypressAcessToken');
		cy.url().should('contain', 'http://localhost:3000');
	});

	it('login-4: Open page with accessToken', () => {
		cy.setLocalStorage('accessToken', 'cypressAcessToken');

		cy.visit('http://localhost:3000/login');

		cy.url().should('contain', 'http://localhost:3000');
	});
});
