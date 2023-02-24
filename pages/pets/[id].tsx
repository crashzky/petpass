import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { format, parse } from 'date-fns';
import { useMutation, useQuery } from '@apollo/client';

import HorizontalMenu from '@components/common/HorizontalMenu';
import Title from '@components/common/Title';
import OwnerInfoForm from '@components/other/OwnerInfoForm';
import PetInfoForm from '@components/other/PetInfoForm';

import MainLayout from '@layouts/MainLayout';
import withCheckAuthLayout from '@layouts/withCheckAuthLayout';
import Button from '@components/common/Button';

import { ICreatePetRequest } from '@shared/models/api/createPet.model';
import { UPDATE_PET } from '@shared/api/mutations/updatePet';
import { IUpdatePetRequest } from '@shared/models/api/updatePet.model';
import { GET_USER_PETS } from '@shared/api/queries/pets';
import IUser from '@shared/models/user.model';
import IPet from '@shared/models/pet.model';

const PetPage = (): JSX.Element => {
	const router = useRouter();

	const [selectedTab, setSelectedTab] = useState(0);
	const [formValues, setFormValues] = useState<IUpdatePetRequest | {}>({});
	const [defaultValues, setDefaultValues] = useState<IUpdatePetRequest | {}>({});

	const { refetch } = useQuery<{ user: IUser }>(GET_USER_PETS, {
		onCompleted: (result) => {
			const { birthday, breed, clothingSize, gender, medicalInterventions, name, weight, stampId,
				pedigreeId, chipId } = result.user.pets.list.find((i) => i.id === +(router.query.id as string)) as IPet;

			const { code, seriesNumber, issued, issuedAt, residence } = result.user.passport;

			setFormValues({
				...result.user,
				birthday: format(parse(result.user.birthday, 'yyyy-MM-dd', new Date()), 'dd.MM.yyyy'),

				passportCode: code,
				passportSeriesNumber: seriesNumber,
				passportIssued: issued,
				passportIssuedAt: format(parse(issuedAt, 'yyyy-MM-dd', new Date()), 'dd.MM.yyyy'),
				passportResidence: residence,

				petBirthday: format(parse(birthday, 'yyyy-MM-dd', new Date()), 'dd.MM.yyyy'),
				petBreed: breed,
				petClotingSize: clothingSize,
				petGender: gender,
				petMedicalInterventions: medicalInterventions,
				petName: name,
				petWeight: weight,
				petStampId: stampId,
				petPedigreeId: pedigreeId,
				petChipId: chipId,
			});

			setDefaultValues({
				...result.user,
				birthday: format(parse(result.user.birthday, 'yyyy-MM-dd', new Date()), 'dd.MM.yyyy'),

				passportCode: code,
				passportSeriesNumber: seriesNumber,
				passportIssued: issued,
				passportIssuedAt: format(parse(issuedAt, 'yyyy-MM-dd', new Date()), 'dd.MM.yyyy'),
				passportResidence: residence,

				petBirthday: format(parse(birthday, 'yyyy-MM-dd', new Date()), 'dd.MM.yyyy'),
				petBreed: breed,
				petClotingSize: clothingSize,
				petGender: gender,
				petMedicalInterventions: medicalInterventions,
				petName: name,
				petWeight: weight,
				petStampId: stampId,
				petPedigreeId: pedigreeId,
				petChipId: chipId,
			});
		},
	});

	const [mutate] = useMutation<null, IUpdatePetRequest>(UPDATE_PET, {
		onCompleted: () => router.reload(),
	});

	useEffect(() => {
		refetch();
	}, [router.query]);

	return (
		<MainLayout>
			<Title
				backUrl='/'
				label='Мухтарчик' />
			<HorizontalMenu
				className='mt-5'
				defaultSelectedTab={selectedTab}
				ariaTabPrefix='tab'
				ariaControls='tabpanel'
				tabs={['Данные о владельце', 'Данные о питомце']}
				onClickTab={setSelectedTab} />
			<main id='tabpanel' role='tabpanel' aria-labelledby={`tab-${selectedTab}`} className='mt-7'>
				{selectedTab === 0
					? (
						<OwnerInfoForm
							defaultValues={defaultValues as any}
							onValuesChanged={(values) => {
								setFormValues((prev) => ({
									...prev,
									...values,
								}));
							}} />
					)
					: (
						<PetInfoForm
							defaultValues={defaultValues as any}	
							onValuesChanged={(values) => {
								setFormValues((prev) => ({
									...prev,
									...values,
								}));
							}} />
					)}
				<Button
					className='w-[345px] my-7'
					onClick={() => mutate({
						variables: {
							petId: +(router.query.id as string),

							...formValues as ICreatePetRequest,
							birthday: format(parse((formValues as ICreatePetRequest).birthday, 'dd.MM.yyyy',
								new Date()), 'yyyy-MM-dd'),
							petBirthday: format(parse((formValues as ICreatePetRequest).petBirthday, 'dd.MM.yyyy',
								new Date()), 'yyyy-MM-dd'),
							passportIssuedAt: format(parse((formValues as ICreatePetRequest).passportIssuedAt, 'dd.MM.yyyy',
								new Date()), 'yyyy-MM-dd'),
							petWeight: +(formValues as ICreatePetRequest).petWeight,
						}, 
					})}
				>
					Сохранить
				</Button>
			</main>
		</MainLayout>
	);
};

export default withCheckAuthLayout(PetPage);
