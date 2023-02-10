import { useState } from 'react';
import Props from './PetInfoForm.props';

import AddImage from '@components/common/AddImage';
import Input from '@components/common/Input';
import Select from '@components/common/Select';

const PetInfoForm: React.FC<Props> = ({ ...props }) => {
	const [petImage, setPetImage] = useState<File | undefined>();

	return (
		<div {...props}>
			<h2 className='hidden'>
				Данные о питомце
			</h2>
			<div className='grid max-w-[1000px] grid-cols-[1fr_166px] gap-6'>
				<div>
					<h3 className='BoldBodyText-18'>
						Общие данные
					</h3>
					<div className='grid grid-cols-2 gap-x-3 gap-y-5 mt-5'>
						<Input
							label='Кличка'
							placeholder='Бобик' />
						<Input
							label='Порода'
							placeholder='Название породы' />
						<Input
							label='Дата рождения'
							placeholder='ДД.ММ.ГГГГ' />
						<Select
							label='Пол'
							isSearchable={false}
							placeholder='Самец/Самка'
							options={[
								{
									label: 'Самец',
									value: 'male',
								},
								{
									label: 'Самка',
									value: 'female',
								},
							]} />
						<Input
							label='Данные о хирургических вмешательствах'
							placeholder='Описание'
							className='col-start-1 col-end-3' />
					</div>
				</div>
				<div>
					<AddImage
						className='w-[166px] h-[166px]'
						iconVariant='photo'
						label='Фото питомца'
						onImageChanged={setPetImage} />
				</div>
			</div>
			<h3 className='BoldBodyText-18 mt-7'>
				Микрочип
			</h3>
			<div className='grid grid-cols-3 max-w-[1000px] gap-3 mt-5'>
				<Input
					label='Идентификационный номер'
					placeholder='ХХХХХ-ХХХХ-ХХХХХ' />
				<Input
					label='Номер клейма'
					placeholder='ХХХХХ' />
				<Input
					label='Номер родословной'
					placeholder='ХХХХ' />
			</div>
			<h3 className='BoldBodyText-18 mt-7'>
				Доп данные
			</h3>
			<div className='grid grid-cols-2 max-w-[500px] gap-3 mt-5'>
				<Input
					label='Вес питомца'
					placeholder='XX кг' />
				<Input
					label='Размер одежды'
					placeholder='XL' />
			</div>
		</div>
	);
};

export default PetInfoForm;
