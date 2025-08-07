import { HTTP_METHOD } from '@/utils/enums/global';
import { ENV_API_BASE_URL } from '@constants/environment';

export default {
	// create: {
	// 	path: `${API_BASE_URL}/users/create`,
	// 	method: HTTP_METHOD.POST,
	// },
	read: {
		key: 'fetch_news',
		path: `${ENV_API_BASE_URL}/v2/top-headlines`,
		method: HTTP_METHOD.GET,
	},
	// readById: {
	// 	path: `${API_BASE_URL}/users/:userId`,
	// 	method: HTTP_METHOD.GET,
	// },
	// update: {
	// 	path: `${API_BASE_URL}/users/:userId`,
	// 	method: HTTP_METHOD.PATCH,
	// },
	// delete: {
	// 	path: `${API_BASE_URL}/users/:userId`,
	// 	method: HTTP_METHOD.DELETE,
	// },
};
