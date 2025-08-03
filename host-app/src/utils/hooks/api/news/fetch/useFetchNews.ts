import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { ENDPOINT } from '@constants/endpoints/endpoints';
import type { ArticleI } from '@utils/types/news';

import { fetchNews } from './request';
import type { ReqI } from './types';

export function useFetchNews(params: ReqI) {
	return useQuery<ArticleI[], Error>({
		queryKey: [ENDPOINT.news.read.key, params],
		queryFn: () => fetchNews(params),
		placeholderData: keepPreviousData,
	});
}
