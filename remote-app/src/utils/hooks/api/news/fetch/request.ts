import axios from '@/utils/axios/axios';
import { ENDPOINT } from '@/utils/constants/endpoints/endpoints';
import type { ArticleI } from '@/utils/types/news';

import type { NewsParamsI } from '@/utils/contexts/News/types';

export async function fetchNews(params: NewsParamsI): Promise<ArticleI[]> {
	// return [
	// 	{
	// 		source: {
	// 			id: 'abc-news',
	// 			name: 'ABC News',
	// 		},
	// 		author: 'ABC News',
	// 		title: 'Active shooter incident with casualties reported at Fort Stewart in Georgia: Officials - ABC News',
	// 		description: '',
	// 		url: 'https://abcnews.go.com/US/active-shooter-incident-casualties-reported-fort-stewart-georgia/story?id\\\\u003d124415075',
	// 		urlToImage:
	// 			'https://images.pexels.com/photos/32262507/pexels-photo-32262507.jpeg',
	// 		publishedAt: '2025-08-06T15:58:32Z',
	// 		content: '',
	// 	},
	// ];
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
