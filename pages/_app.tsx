import { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';
import '@/styles/fonts.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<Head>
				<title>
					PetPass
				</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default App;
