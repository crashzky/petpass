import Image from 'next/image';
import { useRouter } from 'next/router';
import Props from './SignupCard.props';

import Button from '@components/common/Button';

const SingupCard: React.FC<Props> = ({ className = '', imageSrc, label, link, ...props }) => {
	const router = useRouter();

	return (
		<article className={className + ' relative rounded-[34px]'} {...props}>
			<div
				className='absolute z-20 w-full h-full flex flex-col justify-end gap-2 rounded-[34px] p-9'
				style={{
					background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
				}}
			>
				<h2 className='heading-1 text-white'>
					{label}
				</h2>
				<Button
					variant='outlined'
					aria-label={`Продолжить ${label}`}
					className='w-[263px] mx-auto'
					onClick={() => router.push(link)}
				>
					Продолжить
				</Button>
			</div>
			<Image
				fill
				alt=''
				aria-hidden='true'
				className='absolute w-full h-full z-10 object-cover rounded-[34px]' 
				src={imageSrc} />
		</article>
	);
};

export default SingupCard;
