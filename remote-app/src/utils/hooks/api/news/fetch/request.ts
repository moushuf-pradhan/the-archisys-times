import axios from '@/utils/axios/axios';
import { ENDPOINT } from '@/utils/constants/endpoints/endpoints';
import type { NewsParamsI } from '@/utils/contexts/News/types';
import type { ArticleI } from '@/utils/types/news';

// import { fakeRes } from './utils';

export async function fetchNews(params: NewsParamsI): Promise<ArticleI[]> {
	// return fakeRes
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

	const data = res?.data?.articles;

	return data;
}
