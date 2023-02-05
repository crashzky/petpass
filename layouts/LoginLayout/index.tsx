import Image from 'next/image';
import useWindowDimensions from '@hooks/useWindowDimensions';
import Props from './LoginLayout.props';

import WhiteBlueLogo from '@assets/logos/whiteBlueLogo.svg';

const LoginLayout: React.FC<Props> = ({ children, imageSrc, className = '', contentClassName = '', ...props }) => {
	const { width, height } = useWindowDimensions();

	return (
		<div className={className + ' relative grid grid-cols-2 gap-[38px] p-[58px]'} {...props}>
			<WhiteBlueLogo className='absolute left-[calc(50%_-_85px)] top-[100px]' />

			<Image
				className='object-cover rounded-[34px]'
				style={{
					width: width / 2 - 58 - 19,
					height: height - 116,
				}}
				src={imageSrc}
				width={width / 2 - 58 - 19}
				height={height - 116}
				aria-hidden='true'
				alt='' />
			<main className={contentClassName}>
				{children}
			</main>
		</div>
	);
};

export default LoginLayout;
