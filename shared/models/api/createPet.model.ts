import { IUserInput } from '../user.model';

export interface ICreatePetRequest extends IUserInput {
	passportCode: string;
	passportIssued: string;
	passportIssuedAt: string;
	passportResidence: string;
	passportSeriesNumber: string;

	petBirthday: string;
	petBreed: string;
	petClotingSize: string;
	petGender: string;
	petMedicalInterventions: string;
	petName: string;
	petWeight: number;
	petStampId: string;
	petPedigreeId: string;
	petChipId: string;
}

export interface ICreatePetResponse {
	updateUser: null;
	createPet: {
		id: number;
	}
}
