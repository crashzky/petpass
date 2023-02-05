import withCheckAuthLayout from '@/layouts/withCheckAuthLayout';
import Router from 'next/router';

const MainPage = (): JSX.Element => {
	return (
		<div className='text-red-500 font-bold'>
			Main page
		</div>
	);
};

export default withCheckAuthLayout(MainPage, {
	checkLoggined: true,
	onAccessDenited: () => Router.push('/login'),
});
