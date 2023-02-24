import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import Props from './PetInfoForm.props';

import AddImage from '@components/common/AddImage';
import Input from '@components/common/Input';
import Select from '@components/common/Select';

import { ISelectOption } from '@components/common/Select/Select.props';

const PetInfoForm: React.FC<Props> = ({ onValuesChanged, defaultValues, ...props }) => {
	const [petImage, setPetImage] = useState<File | undefined>();
	
	const GENDER_OPTIONS = [
		{
			label: 'Самец',
			value: 'male',
		},
		{
			label: 'Самка',
			value: 'female',
		},
	];

	const formik = useFormik({
		initialValues: {
			petBirthday: '',
			petBreed: '',
			petClotingSize: '',
			petGender: '',
			petMedicalInterventions: '',
			petName: '',
			petWeight: 0,
			petStampId: '',
			petPedigreeId: '',
			petChipId: '',
		},
		onSubmit: () => undefined,
	});

	useEffect(() => onValuesChanged(formik.values), [formik.values]);

	useEffect(() => {
		if(defaultValues)
			formik.setValues(defaultValues as any);
	}, [defaultValues]);

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
							placeholder='Бобик'
							name='petName'
							value={formik.values.petName}
							onChange={formik.handleChange} />
						<Input
							label='Порода'
							placeholder='Название породы'
							name='petBreed'
							value={formik.values.petBreed}
							onChange={formik.handleChange} />
						<Input
							label='Дата рождения'
							placeholder='ДД.ММ.ГГГГ'
							name='petBirthday'
							value={formik.values.petBirthday}
							onChange={formik.handleChange} />
						<Select
							label='Пол'
							isSearchable={false}
							placeholder='Самец/Самка'
							options={GENDER_OPTIONS}
							value={GENDER_OPTIONS.find((i) => i.value == formik.values.petGender)}
							onChange={(value) => formik.setFieldValue('petGender', (value as ISelectOption).value)} />
						<Input
							label='Данные о хирургических вмешательствах'
							placeholder='Описание'
							className='col-start-1 col-end-3'
							name='petMedicalInterventions'
							value={formik.values.petMedicalInterventions}
							onChange={formik.handleChange} />
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
					placeholder='ХХХХХ-ХХХХ-ХХХХХ'
					name='petChipId'
					value={formik.values.petChipId}
					onChange={formik.handleChange} />
				<Input
					label='Номер клейма'
					placeholder='ХХХХХ'
					name='petStampId'
					value={formik.values.petStampId}
					onChange={formik.handleChange} />
				<Input
					label='Номер родословной'
					placeholder='ХХХХ'
					name='petPedigreeId'
					value={formik.values.petPedigreeId}
					onChange={formik.handleChange} />
			</div>
			<h3 className='BoldBodyText-18 mt-7'>
				Доп данные
			</h3>
			<div className='grid grid-cols-2 max-w-[500px] gap-3 mt-5'>
				<Input
					label='Вес питомца'
					placeholder='XX кг'
					name='petWeight'
					value={formik.values.petWeight}
					onChange={formik.handleChange} />
				<Input
					label='Размер одежды'
					placeholder='XL' 
					name='petClotingSize'
					value={formik.values.petClotingSize}
					onChange={formik.handleChange} />
			</div>
		</div>
	);
};

export default PetInfoForm;
