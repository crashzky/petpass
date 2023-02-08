export interface ISignInRequest {
	password: string;
	email: string;
}

export interface ISignInResponse {
	type: 'Bearer';
	token: string;
}

export interface ISignUpResponse {
	email: string;
	id: number
}
