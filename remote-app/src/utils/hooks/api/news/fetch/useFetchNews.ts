import { useInfiniteQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { ENDPOINT } from '@constants/endpoints/endpoints';
import type { ArticleI } from '@utils/types/news';
import type { NewsParamsI } from '@/utils/contexts/News/types';

import { fetchNews } from './request';

export function useFetchNews(params: NewsParamsI) {
	// Hooks
	const navigate = useNavigate();

	const res = useInfiniteQuery<ArticleI[], Error>({
		queryKey: [ENDPOINT.news.read.key, params],
		queryFn: ({ pageParam }) =>
			fetchNews({ ...params, page: pageParam as number }),
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.length ? allPages.length + 1 : undefined;
		},
		initialPageParam: 1,
		retry: false,
	});

	if (res?.error) navigate('/error');

	return res;
}
