import Router, { useRouter } from 'next/router';

import BannerCard from '@components/dashboard/BannerCard';
import PetCard from '@components/dashboard/PetCard';
import AddButton from '@components/common/AddButton';

import MainLayout from '@layouts/MainLayout';
import withCheckAuthLayout from '@layouts/withCheckAuthLayout';

const MainPage = (): JSX.Element => {
	const router = useRouter();

	return (
		<MainLayout>
			<h1 className='hidden'>
				PetPass
			</h1>
			<BannerCard
				imageSrc='/assets/dogs/5.webp'
				label='Обезопасьте своего питомца'
				description='Чипирование по минимальной цене' />
			<h2 className='heading-2 mt-[18px]'>
				Мои питомцы
			</h2>
			<section className='mt-5 flex gap-5 flex-wrap'>
				<PetCard
					imageSrc='/assets/dogs/6.webp'
					label='Мухтарчик'
					description='Гарафийская овчарка'
					link='/pets/1' />
				<AddButton
					onClick={() => router.push('/pets/new')}
					variant='addPet'
					label='Добавить питомца' />
			</section>
		</MainLayout>
	);
};

export default withCheckAuthLayout(MainPage, {
	checkLoggined: true,
	onAccessDenited: () => Router.push('/login'),
});
