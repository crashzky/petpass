import Image from 'next/image';
import { useEffect, useState } from 'react';

import Props from './AddImage.props';
import getIcon from './AddImage.style';

import IcCross from '@assets/IcCross.svg';

const AddImage: React.FC<Props> = ({ className = '', iconVariant, label, onImageChanged, ...props }) => {
	const [file, setFile] = useState<File>();

	useEffect(() => onImageChanged(file), [file, onImageChanged]);

	const Icon = getIcon(iconVariant);

	if(file) {
		return (
			<div
				className={`${className} flex flex-col gap-1 items-center justify-center relative
					border-lightGrey border-[1px] rounded-[10px]`}
				{...props}
			>
				<button
					className='w-5 h-5 absolute z-10 top-2.5 right-2.5 cursor-pointer'
					onClick={() => setFile(undefined)}
					aria-label='Удалить загруженный файл'
				>
					<IcCross />
				</button>
				<Image
					src={URL.createObjectURL(file)}
					className='w-full h-full object-cover rounded-[10px]'
					fill
					alt={label} />
			</div>
		);
	}
	return (
		<div
			className={`${className} flex flex-col gap-1 items-center justify-center relative
				border-lightGrey border-[1px] rounded-[10px]`}
			{...props}
		>
			<input
				type='file'
				accept='image/*'
				className='absolute w-full h-full cursor-pointer opacity-0'
				aria-label={`Загрузить ${label}`}
				onChange={(e) => setFile((e.target.files as FileList)[0])} />
			<Icon />
			<p className='text-primary text-center BodyText-12'>
				{label}
			</p>
		</div>
	);
};

export default AddImage;
