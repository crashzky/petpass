import { useState } from 'react';

import HorizontalMenu from '@components/common/HorizontalMenu';
import Title from '@components/common/Title';

import MainLayout from '@layouts/MainLayout';
import withCheckAuthLayout from '@layouts/withCheckAuthLayout';

const PetPage = (): JSX.Element => {
	const [selectedTab, setSelectedTab] = useState(0);

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
				tabs={['Данные о питомце', 'Данные о владельце', 'Данные о заводчике']}
				onClickTab={setSelectedTab} />
			<main id='tabpanel' role='tabpanel' aria-labelledby={`tab-${selectedTab}`} className='mt-7'>
				
			</main>
		</MainLayout>
	);
};

export default withCheckAuthLayout(PetPage);
