import { useState } from 'react';
import { useRouter } from 'next/router';
import { format, parse } from 'date-fns';
import { useMutation } from '@apollo/client';

import Button from '@components/common/Button';
import HorizontalMenu from '@components/common/HorizontalMenu';
import Title from '@components/common/Title';

import OwnerInfoForm from '@components/other/OwnerInfoForm';
import PetInfoForm from '@components/other/PetInfoForm';

import MainLayout from '@layouts/MainLayout';
import withCheckAuthLayout from '@layouts/withCheckAuthLayout';

import { CREATE_PET } from '@shared/api/mutations/createPet';
import { ICreatePetRequest, ICreatePetResponse } from '@shared/models/api/createPet.model';

const NewPetPage = (): JSX.Element => {
	const router = useRouter();

	const [selectedTab, setSelectedTab] = useState(0);
	const [formValues, setFormValues] = useState<ICreatePetRequest | {}>({});

	const [mutate] = useMutation<ICreatePetResponse, ICreatePetRequest>(CREATE_PET, {
		onCompleted: (result) => router.push(`/pets/${result.createPet.id}`),
	});
	
	return (
		<MainLayout>
			<Title
				backUrl='/'
				label='Создание цифрового паспорта питомца' />
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
						<OwnerInfoForm onValuesChanged={(values) => {
							setFormValues((prev) => ({
								...prev,
								...values,
							}));
						}} />
					)
					: (
						<PetInfoForm onValuesChanged={(values) => {
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

export default withCheckAuthLayout(NewPetPage);
