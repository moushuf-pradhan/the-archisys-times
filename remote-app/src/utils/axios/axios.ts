import axiosDefault from 'axios';

import { ENV_API_BASE_URL, ENV_API_KEY_NEWS } from '@constants/environment';

const axios = axiosDefault.create({
	baseURL: ENV_API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		Authorization: ENV_API_KEY_NEWS,
	},
});

export default axios;
