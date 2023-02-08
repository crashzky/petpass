import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

instance.interceptors.request.use((req) => {
	const withAuthorization: any = localStorage && localStorage.getItem('accessToken')
		? {
			Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
		}
		: {};

	req.headers = {
		...req.headers,
		...withAuthorization,
	};

	return req;
});

instance.interceptors.response.use((data) => data, (error) => {
	if(error.response.status === 403 && error.config.headers.Authorization) {
		localStorage.removeItem('accessToken');
		document.location.reload();
	}

	return Promise.reject(error);
});

export default instance;
