import Props from './MainLayout.props';

import MainLogo from '@assets/logos/mainLogo.svg';
import Link from 'next/link';

const MainLayout: React.FC<Props> = ({ className = '', contentClassName = '', children, ...props }) => {
	return (
		<div className={`${className} px-[100px] pt-14`}{...props}>
			<Link href='/'>
				<MainLogo className='mb-11' />
			</Link>
			<div className={contentClassName}>
				{children}
			</div>
		</div>
	);
};

export default MainLayout;
