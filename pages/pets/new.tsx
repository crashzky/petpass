import { useState } from 'react';

import Button from '@components/common/Button';
import HorizontalMenu from '@components/common/HorizontalMenu';
import Title from '@components/common/Title';

import OwnerInfoForm from '@components/other/OwnerInfoForm';
import PetInfoForm from '@components/other/PetInfoForm';

import MainLayout from '@layouts/MainLayout';
import withCheckAuthLayout from '@layouts/withCheckAuthLayout';

const NewPetPage = (): JSX.Element => {
	const [selectedTab, setSelectedTab] = useState(0);

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
				{selectedTab === 0 ? <OwnerInfoForm /> : <PetInfoForm />}
				<Button className='w-[345px] my-7'>
					Сохранить
				</Button>
			</main>
		</MainLayout>
	);
};

export default withCheckAuthLayout(NewPetPage);
