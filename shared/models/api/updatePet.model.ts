import { ICreatePetRequest } from './createPet.model';

export interface IUpdatePetRequest extends ICreatePetRequest {
	petId: number;
}
