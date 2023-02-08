import Image from 'next/image';
import { useRouter } from 'next/router';
import Props from './PetCard.props';

const PetCard: React.FC<Props> = ({ className = '', imageSrc, label, description, link, ...props }) => {
	const router = useRouter();

	return (
		<article
			onClick={() => router.push(link)}
			role='button'
			aria-label={`Открыть ${label} ${description}`}
			tabIndex={0}
			className={className + ' rounded-2xl w-[369px] h-[190px] relative cursor-pointer'}
			{...props}
		>
			<div
				className='absolute z-20 flex flex-col justify-end gap-1 w-full h-full p-5 rounded-2xl'
				style={{
					background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 81.29%)',
				}}
			>
				<h3 className='BoldBodyText-18 text-white'>
					{label}
				</h3>
				<p className='BoldBodyText-14 text-white'>
					{description}
				</p>
			</div>
			<Image
				className='absolute z-10 w-full h-fill object-cover rounded-2xl'
				src={imageSrc}
				fill
				aria-hidden
				alt='' />
		</article>
	);
};

export default PetCard;
