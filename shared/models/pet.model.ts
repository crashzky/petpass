interface IPet extends IPetInput {
	addDate: string;
	id: number;
	ownerId: number;
}

export interface IPetInput {
	name: string;
	breed: string;
	birthday: string;
	chipId: string;
	gender: string;
	medicalInterventions: string;
	clothingSize: string;
	pedigreeId: string;
	stampId: string;
	weight: number;
}

export default IPet;
