import { useEffect } from 'react';
import LandingHeader from '@layouts/LandingHeader';
import { useRouter } from 'next/router';

import Landing1 from '@assets/landing/file1.svg';
import Landing2 from '@assets/landing/file2.svg';

const HelloPage = (): JSX.Element => {
	const router = useRouter();

	useEffect(() => {
		document.querySelector('rect.file1_svg__open-button')?.addEventListener('click', () => router.push('/login'));
	}, [router]);

	return (
		<div>
			<LandingHeader />
			<Landing1 className='mx-auto px-10' />
			<Landing2 className='mx-auto w-screen' />
		</div>
	);
};

export default HelloPage;
