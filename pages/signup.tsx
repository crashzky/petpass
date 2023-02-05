import Link from 'next/link';

import withCheckAuthLayout from '@layouts/withCheckAuthLayout';
import LoginLayout from '@layouts/LoginLayout';
import Button from '@components/common/Button';
import Input from '@components/common/Input';

const LoginPage = (): JSX.Element => {
	return (
		<LoginLayout imageSrc='/assets/dogs/2.webp' contentClassName='self-center'>
			<h1 className='heading-1 text-primary'>
				Зарегистрироваться
			</h1>
			<form className='max-w-[345px] w-full grid gap-5 mt-5'>
				<Input
					id='email'
					type='email'
					className='w-full'
					placeholder='Email'
					label='Email' />
				<Input
					id='password'
					type='password'
					className='w-full'
					placeholder='Придумайте пароль'
					label='Придумайте пароль' />
				<Button>
					Зарегистрироваться
				</Button>
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
