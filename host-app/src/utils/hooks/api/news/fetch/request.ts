import axios from '@/utils/axios/axios';
import { ENDPOINT } from '@/utils/constants/endpoints/endpoints';
import type { ArticleI } from '@/utils/types/news';

import type { ReqI } from './types';

export async function fetchNews(params: ReqI): Promise<ArticleI[]> {
	const url = ENDPOINT.news.read.path;

	const res = await axios({
		method: ENDPOINT.news.read.method,
		url,
		params: {
			country: 'us',
			pageSize: 10,
			...params,
		},
	});

	const resData = res?.data?.articles;

	// Handle errors
	// if (resData?.response?.error) {
	// }

	const data = resData;

	return data;
}
