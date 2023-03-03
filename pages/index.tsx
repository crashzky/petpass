import Router, { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import BannerCard from '@components/dashboard/BannerCard';
import PetCard from '@components/dashboard/PetCard';
import AddButton from '@components/common/AddButton';

import MainLayout from '@layouts/MainLayout';
import withCheckAuthLayout from '@layouts/withCheckAuthLayout';

import { GET_USER_PETS } from '@shared/api/queries/pets';
import IUser from '@shared/models/user.model';

const MainPage = (): JSX.Element => {
	const router = useRouter();

	const { data } = useQuery<{ user: IUser }>(GET_USER_PETS);

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
				{data?.user.pets.list.map((i, num) => (
					<PetCard
						key={num}
						imageSrc='/assets/dogs/6.webp'
						label={i.name}
						description={i.breed}
						link={`/pets/${i.id}`} />
				))}
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
	onAccessDenited: () => Router.push('/hello'),
});
