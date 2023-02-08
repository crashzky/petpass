import Image from 'next/image';
import Props from './BannerCard.props';

const BannerCard: React.FC<Props> = ({ className = '', imageSrc, description, label, ...props }) => {
	return (
		<article className={className + ' rounded-2xl w-full max-w-[700px] h-48 relative'} {...props}>
			<div className='absolute z-20 flex flex-col justify-end gap-1 w-full h-full p-5'>
				<h2 className='BoldBodyText-18 text-white'>
					{label}
				</h2>
				<p className='BoldBodyText-14 text-white'>
					{description}
				</p>
			</div>
			<Image
				className='absolute z-10 w-full h-fill object-cover rounded-2xl'
				src={imageSrc}
				aria-hidden='true'
				alt=''
				fill />
		</article>
	);
};

export default BannerCard;
