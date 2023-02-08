import withCheckAuthLayout from '@layouts/withCheckAuthLayout';
import SingupCard from '@components/other/SignupCard';

import MainLogo from '@assets/logos/mainLogo.svg';

const SIGNUP_VARIANTS = [
	{
		imageSrc: '/assets/dogs/2.webp',
		label: 'Для владельцев',
		link: '/signup/owner',
	},
	{
		imageSrc: '/assets/dogs/3.webp',
		label: 'Для ветклиники/ветеринаров',
		link: '/signup/vet',
	},
	{
		imageSrc: '/assets/dogs/4.webp',
		label: 'Для заводчиков',
		link: '/signup/breeder',
	},
];

const SignupPage = (): JSX.Element => {
	return (
		<div className='px-7 pt-14'>
			<MainLogo className='block mx-auto mb-11' />
			<h1 className='hidden'>
				Регистрация в petpass
			</h1>
			<main className='grid grid-cols-3 gap-9 h-[602px]'>
				{SIGNUP_VARIANTS.map((i, num) => <SingupCard key={num} {...i} />)}
			</main>
		</div>
	);
};

export default withCheckAuthLayout(SignupPage, {
	checkLoggined: false,
});
