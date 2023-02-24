import { gql } from '@apollo/client';

export const UPDATE_PET = gql`
	mutation Update($birthday: Date!, $fio: String!, $gender: String!, $telephone: String!,
		$passportCode: String!, $passportIssued: String!, $passportIssuedAt: Date!, $passportResidence: String!,
		$passportSeriesNumber: String!, $petBirthday: Date!, $petBreed: String!, $petClotingSize: String!,
		$petGender: String!, $petMedicalInterventions: String!, $petName: String!, $petWeight: Int!, $petStampId:
		String!, $petPedigreeId: String!, $petChipId: String!, $petId: Int!) {
		updateUser(
			ref: {passport: {code: $passportCode, issued: $passportIssued, issuedAt: $passportIssuedAt,
				residence: $passportResidence, seriesNumber: $passportSeriesNumber}, fio: $fio, gender: $gender,
				birthday: $birthday, telephone: $telephone}
		)
		updatePet(
			id_: $petId,
			ref: {birthday: $petBirthday, breed: $petBreed, clothingSize: $petClotingSize, gender: $petGender,
				medicalInterventions: $petMedicalInterventions, name: $petName, weight: $petWeight, stampId: $petStampId,
				pedigreeId: $petPedigreeId, chipId: $petChipId}
		)
	}
`;
