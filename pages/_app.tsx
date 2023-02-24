import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import '@/styles/globals.css';
import '@/styles/fonts.css';
import '@/styles/fontStyles.css';

const queryClient = new QueryClient();

const httpLink = createHttpLink({
	uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
});  

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('accessToken');

	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});  

const graphqlClient = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});  

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<ApolloProvider client={graphqlClient}>
			<QueryClientProvider client={queryClient}>
				<Head>
					<title>
						PetPass
					</title>
				</Head>
				<Component {...pageProps} />
			</QueryClientProvider>
		</ApolloProvider>
	);
};

export default App;
