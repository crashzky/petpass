import { ISignInRequest, ISignInResponse, ISignUpResponse } from '../models/api/auth.model';
import instance from './axios';

export const signIn = (data: ISignInRequest): Promise<ISignInResponse> => {
	return instance.post('/v1/signin/', data).then((res) => res.data);
};

export const signUp = (data: ISignInRequest): Promise<ISignUpResponse> => {
	return instance.post('/v1/signup/', data).then((res) => res.data);
};

