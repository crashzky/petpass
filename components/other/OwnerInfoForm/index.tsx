import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import Props from './OwnerInfoForm.props';

import AddImage from '@components/common/AddImage';
import Input from '@components/common/Input';
import Select from '@components/common/Select';

import { ISelectOption } from '@components/common/Select/Select.props';

const OwnerInfoForm: React.FC<Props> = ({ onValuesChanged, defaultValues, ...props }) => {
	const [ownerImage, setOwnerImage] = useState<File | undefined>();
	const [scanPassport, setScanPassport] = useState<File | undefined>();

	const GENDER_OPTIONS = [
		{
			label: 'Мужской',
			value: 'male',
		},
		{
			label: 'Женский',
			value: 'female',
		},
	];

	const formik = useFormik({
		initialValues: {
			fio: '',
			birthday: '',
			gender: '',
			social: '',
			telephone: '',

			passportCode: '',
			passportIssued: '',
			passportIssuedAt: '',
			passportResidence: '',
			passportSeriesNumber: '',
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
				Данные о владельце
			</h2>
			<div className='grid grid-cols-[1fr_166px] gap-6'>
				<div>
					<h3 className='BoldBodyText-18'>
						Основные данные
					</h3>
					<div className='grid grid-cols-[3fr_2fr_2fr] gap-3 mt-5'>
						<Input
							label='ФИО владельца'
							placeholder='Иван Иванов Иванович' 
							name='fio'
							value={formik.values.fio}
							onChange={formik.handleChange} />
						<Input
							label='Дата рождения'
							placeholder='ДД.ММ.ГГГГ'
							name='birthday'
							value={formik.values.birthday}
							onChange={formik.handleChange} />
						<Select
							label='Пол'
							isSearchable={false}
							placeholder='Мужской/Женский'
							options={GENDER_OPTIONS}
							value={GENDER_OPTIONS.find((i) => i.value == formik.values.gender)}
							onChange={(newValue) => formik.setFieldValue('gender', (newValue as ISelectOption).value)} />
					</div>
					<h3 className='BoldBodyText-18 mt-7'>
						Паспортные данные
					</h3>
					<div className='grid grid-cols-[2fr_2fr_4fr] gap-x-3 gap-y-5 mt-5'>
						<Input
							label='Серия и номер паспорта'
							placeholder='ХХХХ - ХХХХХХ'
							name='passportSeriesNumber'
							value={formik.values.passportSeriesNumber}
							onChange={formik.handleChange} />
						<Input
							label='Кем выдан'
							placeholder='Кем выдан'
							className='col-start-2 col-end-4'
							name='passportIssued'
							value={formik.values.passportIssued}
							onChange={formik.handleChange} />
						<Input
							label='Код подразделения'
							placeholder='ХХХ-ХХХ'
							name='passportCode'
							value={formik.values.passportCode}
							onChange={formik.handleChange} />
						<Input
							label='Дата выдачи'
							placeholder='ДД.ММ.ГГГГ'
							name='passportIssuedAt'
							value={formik.values.passportIssuedAt}
							onChange={formik.handleChange} />
						<Input
							label='Место жительства'
							placeholder='Как в паспорте'
							name='passportResidence'
							value={formik.values.passportResidence}
							onChange={formik.handleChange} />
					</div>
				</div>
				<div>
					<AddImage
						className='w-[166px] h-[166px]'
						iconVariant='photo'
						label='Фото владельца'
						onImageChanged={setOwnerImage} />
					<AddImage
						className='w-[166px] h-[114px] mt-2'
						iconVariant='scan'
						label='Скан паспорта'
						onImageChanged={setScanPassport} />
				</div>
			</div>
			<h3 className='BoldBodyText-18 mt-7'>
				Контакты
			</h3>
			<div className='grid grid-cols-3 gap-3 mt-5'>
				<Input
					label='Электронная почта'
					placeholder='example@mail.ru'
					name='email'
					onChange={formik.handleChange} />
				<Input
					label='Номер телефона'
					placeholder='+7 (ХХХ)-ХХХ-ХХ-ХХ'
					name='telephone'
					value={formik.values.telephone}
					onChange={formik.handleChange} />
				<Input
					label='Ссылка на соцсеть'
					placeholder='VK/Telegram/WhatsApp'
					name='social'
					value={formik.values.social}
					onChange={formik.handleChange} />
			</div>
		</div>
	);
};

export default OwnerInfoForm;
