import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { useMemo } from 'react';
import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import withCheckAuthLayout from '@layouts/withCheckAuthLayout';
import LoginLayout from '@layouts/LoginLayout';
import Button from '@components/common/Button';
import Input from '@components/common/Input';

import { signUp } from '@shared/api/auth';
import { ISignInRequest } from '@shared/models/api/auth.model';

import LoaderIcon from '@assets/loader.svg';

const LoginPage = (): JSX.Element => {
	const router = useRouter();

	const { mutate, isLoading, error } = useMutation(signUp, {
		onSuccess: () => router.push('/login'),
	});

	const formik = useFormik<ISignInRequest>({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			password: Yup.string().test('len', 'Минимальная длина пароля 8 символов',
				(str) => (str || '').length >= 8),
		}),
		onSubmit: (values) => mutate(values),
	});

	const errorMessage = useMemo(() => {
		if(formik.errors.password && formik.submitCount)
			return formik.errors.password;
		else if(error) {
			switch((error as AxiosError).response?.status) {
				case 422:
				case 400:
					return 'Аккаунт с таким email уже есть';
				default:
					return 'Что-то пошло не так. Попробуйте ещё раз позже';
			}
		}
		else
			return '';
	}, [error, formik.errors, formik.submitCount]);

	return (
		<LoginLayout imageSrc='/assets/dogs/2.webp' contentClassName='self-center'>
			<h1 className='heading-1 text-primary'>
				Зарегистрироваться
				<br />
				как владелец
			</h1>
			<form onSubmit={formik.handleSubmit} className='max-w-[345px] w-full grid gap-5 mt-5'>
				<Input
					id='email'
					type='email'
					required
					value={formik.values.email}
					onChange={formik.handleChange}
					name='email'
					className='w-full'
					placeholder='Email'
					label='Email' />
				<Input
					id='password'
					type='password'
					required
					value={formik.values.password}
					onChange={formik.handleChange}
					name='password'
					className='w-full'
					placeholder='Придумайте пароль'
					label='Придумайте пароль' />
				<div role='status'>
					{isLoading ? (
						<LoaderIcon
							className='mx-auto w-[57px] h-[57px]'
							aria-label='Форма успешно отправлена. Подождите немного.' />
					) : (
						<Button className='w-full'>
							Зарегистрироваться
						</Button>
					)}
				</div>
				<p role='alert' className='BodyText-14 text-center text-red mb-3'>
					{errorMessage}
				</p>
			</form>
			<p className='max-w-[345px] w-full mt-5 text-darkGrey BodyText-14 text-center'>
				Есть аккаунт?
				{' '}
				<Link href='/login' className='text-primary' aria-label='Войти'>
					Войдите
				</Link>
			</p>
		</LoginLayout>
	);
};

export default withCheckAuthLayout(LoginPage, {
	checkLoggined: false,
});
