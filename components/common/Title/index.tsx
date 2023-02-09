import { useRouter } from 'next/router';
import Props from './Title.props';

import IcArrowLeft from '@assets/IcArrowLeft.svg';

const Title: React.FC<Props> = ({ className = '', label, backUrl, ...props }) => {
	const router = useRouter();

	return (
		<div className={`grid grid-cols-[50px_1fr] gap-4 items-center ${className}`} {...props}>
			<button
				className='border-lightGrey border-[1px] rounded-[10px] p-[13px] h-[50px]'
				onClick={() => backUrl ? router.push(backUrl) : () => undefined}
			>
				<IcArrowLeft aria-label='Вернуться назад' />
			</button>
			<h1 className='heading-2'>
				{label}
			</h1>
		</div>
	);
};

export default Title;
