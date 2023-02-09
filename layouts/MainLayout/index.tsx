import Props from './MainLayout.props';

import MainLogo from '@assets/logos/mainLogo.svg';

const MainLayout: React.FC<Props> = ({ className = '', contentClassName = '', children, ...props }) => {
	return (
		<div className={`${className} px-[100px] pt-14`}{...props}>
			<MainLogo className='mb-11' />
			<div className={contentClassName}>
				{children}
			</div>
		</div>
	);
};

export default MainLayout;
