import Props from './MainLayout.props';

import MainLogo from '@assets/logos/mainLogo.svg';

const MainLayout: React.FC<Props> = ({ className = '', contentClassName = '', children, ...props }) => {
	return (
		<div className={'px-[100px] pt-14 ' + className}{...props}>
			<MainLogo className='mb-11' />
			<main className={contentClassName}>
				{children}
			</main>
		</div>
	);
};

export default MainLayout;
