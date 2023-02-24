import { gql } from '@apollo/client';

export const GET_USER_PETS = gql`
	query getUserPets {
		user {
			birthday
			fio
			gender
			inn
			telephone
			passport {
				code
				issued
				issuedAt
				residence
				seriesNumber
			}
			pets {
				list {
					addDate
					birthday
					breed
					chipId
					clothingSize
					gender
					id
					name
					medicalInterventions
					pedigreeId
					stampId
					weight
				}
			}
		}
	}
`;
