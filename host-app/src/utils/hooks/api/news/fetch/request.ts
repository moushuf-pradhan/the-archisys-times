import axios from '@/utils/axios/axios';
import { ENDPOINT } from '@/utils/constants/endpoints/endpoints';

import type { ArticleI } from '@/utils/types/news';

export async function fetchNews(): Promise<ArticleI[]> {
	const url = ENDPOINT.news.read.path;

	const res = await axios({
		method: ENDPOINT.news.read.method,
		url,
		params: {
			country: 'us',
		},
	});

	const resData = res?.data?.articles;

	// Handle errors
	// if (resData?.response?.error) {
	// }

	const data = resData;

	return data;
}
