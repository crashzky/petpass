import { useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';

import withCheckAuthLayout from '@layouts/withCheckAuthLayout';
import LoginLayout from '@layouts/LoginLayout';
import Button from '@components/common/Button';
import Input from '@components/common/Input';

import { ISignInRequest } from '@shared/models/api/auth.model';
import { signIn } from '@shared/api/auth';

import LoaderIcon from '@assets/loader.svg';

const LoginPage = (): JSX.Element => {
	const router = useRouter();

	const { mutate, isLoading, error } = useMutation(signIn, {
		onSuccess: (res) => {
			localStorage.setItem('accessToken', res.token);
			router.reload();
		},
	});

	const formik = useFormik<ISignInRequest>({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: (values) => mutate(values),
	});

	const errorMessage = useMemo(() => {
		if(error) {
			switch((error as AxiosError).response?.status) {
				case 422:
				case 404:
					return 'Неверный логин или пароль';
				default:
					return 'Что-то пошло не так. Попробуйте ещё раз позже';
			}
		}
		else
			return '';
	}, [error]);

	return (
		<LoginLayout imageSrc='/assets/dogs/1.webp' contentClassName='self-center'>
			<h1 className='heading-1 text-primary'>
				Войти
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
					placeholder='Пароль'
					label='Пароль' />
				<div role='status'>
					{isLoading ? (
						<LoaderIcon
							className='mx-auto w-[57px] h-[57px]'
							aria-label='Форма успешно отправлена. Подождите немного.' />
					) : (
						<Button className='w-full'>
							Войти
						</Button>
					)}
				</div>
				<p role='alert' className='BodyText-14 text-center text-red mb-3'>
					{errorMessage}
				</p>
			</form>
			<p className='max-w-[345px] w-full text-darkGrey BodyText-14 text-center'>
				Нет аккаунта?
				{' '}
				<Link href='/signup' className='text-primary' aria-label='Зарегистрироваться'>
					Зарегистрируйся
				</Link>
			</p>
		</LoginLayout>
	);
};

export default withCheckAuthLayout(LoginPage, {
	checkLoggined: false,
});
