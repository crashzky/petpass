import Props from './LandingHeader.props';
import Link from 'next/link';
import Button from '@components/common/Button';
import HEADER_ITEMS from './LandgingHeader.config';

import MainLogo from '@assets/logos/mainLogo.svg';

const LandingHeader: React.FC<Props> = ({ className = '', ...props }) => {
	return (
		<header className={`${className} flex justify-between items-center px-36 py-4`} {...props}>
			<MainLogo />
			<nav className='flex gap-10 items-center'>
				{HEADER_ITEMS.map((i, num) => (
					<Link href={i.link} className='font-semibold' key={num}>
						{i.label}
					</Link>
				))}
			</nav>
			<div className='grid grid-cols-2 items-ceter'>
				<Button variant='outlined' className='text-black'>
					Войти
				</Button>
				<Button variant='primary' className='h-[50px] py-0 px-5 bg-black rounded-xl'>
					Создать аккаунт
				</Button>
			</div>
		</header>
	);
};

export default LandingHeader;
