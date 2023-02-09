import { useState } from 'react';
import Props from './OwnerInfoForm.props';

import AddImage from '@components/common/AddImage';
import Input from '@components/common/Input';

const OwnerInfoForm: React.FC<Props> = ({ ...props }) => {
	const [ownerImage, setOwnerImage] = useState<File | undefined>();
	const [scanPassport, setScanPassport] = useState<File | undefined>();

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
							placeholder='Иван Иванов Иванович' />
						<Input
							label='Дата рождения'
							placeholder='ДД.ММ.ГГГГ' />
						<Input
							label='Пол'
							placeholder='Мужской/Женский' />
					</div>
					<h3 className='BoldBodyText-18 mt-7'>
						Паспортные данные
					</h3>
					<div className='grid grid-cols-[2fr_2fr_4fr] gap-x-3 gap-y-5 mt-5'>
						<Input
							label='Серия и номер паспорта'
							placeholder='ХХХХ - ХХХХХХ' />
						<Input
							label='Кем выдан'
							placeholder='Кем выдан'
							className='col-start-2 col-end-4' />
						<Input
							label='Код подразделения'
							placeholder='ХХХ-ХХХ' />
						<Input
							label='Дата выдачи'
							placeholder='ДД.ММ.ГГГГ' />
						<Input
							label='Место жительства'
							placeholder='Как в паспорте' />
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
					placeholder='example@mail.ru' />
				<Input
					label='Номер телефона'
					placeholder='+7 (ХХХ)-ХХХ-ХХ-ХХ' />
				<Input
					label='Ссылка на соцсеть'
					placeholder='VK/Telegram/WhatsApp' />
			</div>
		</div>
	);
};

export default OwnerInfoForm;
